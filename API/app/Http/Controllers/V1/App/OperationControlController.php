<?php

namespace App\Http\Controllers\V1\App;

use App\Action;
use App\Http\Controllers\Controller;
use App\OperationControl;
use App\Traits\FCMTrait;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class OperationControlController extends Controller
{
    use FCMTrait;

    public function index(Request $request)
    {
        return response()->json([
            'success' => true,
            'operation_controls' => $request->user()->latestOperationControls
        ]);
    }

    public function getOperationControlsByMonthAndYear(Request $request, $month, $year)
    {
        $operation_controls = OperationControl::whereDriverId($request->user()->id)
            ->whereMonth('date', '=', $month)
            ->whereYear('date', '=', $year)
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'operation_controls' => $operation_controls
        ]);
    }

    public function store(Request $request)
    {
        $operationControl = DB::transaction(function () use ($request) {
//            $no_devolution_credits = $this->sumNoDevolutionCredits($request);
//            $km_credits = $this->sumKmCredits($request);
//            $this->sumDriverAccKm($request);

            $driver = $request->user();

            $operationControl = new OperationControl();
            $operationControl->date = Carbon::parse($request->date)->format('Y-m-d');
            $operationControl->city = $request->city;
            $operationControl->service = $request->service;
            $operationControl->transport_model = $request->transport_model;
            $operationControl->transport_make = $request->transport_make;
            $operationControl->tonnage = $request->tonnage;
            $operationControl->company = $request->company;
            $operationControl->hours = $request->hours;
            $operationControl->km = $request->km;
            $operationControl->assigned = $request->assigned;
            $operationControl->delivered = $request->delivered;
            $operationControl->description = $request->description;
            $operationControl->company = $request->company;
//            $operationControl->no_devolution_credits = $no_devolution_credits;
//            $operationControl->km_credits = $km_credits;
            $operationControl->approved = $driver->contractor === 'none';
            $operationControl->driver_id = $request->user()->id;
            $operationControl->save();

            return $operationControl;
        });

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Información guardada',
            'operation_control_id' => $operationControl->id
        ]);
    }

    public function update(Request $request, OperationControl $operationControl)
    {
        DB::transaction(function () use ($request, $operationControl) {
//            $this->decreaseDriverScore($request, $operationControl);
//            $this->decreaseDriverAccKm($request, $operationControl);
//
//            $no_devolution_credits = $this->sumNoDevolutionCredits($request);
//            $km_credits = $this->sumKmCredits($request);
//            $this->sumDriverAccKm($request);

            $driver = $request->user();
            if ($driver->contractor === 'logistic_company' && $operationControl->approved) {
                $operationControl->approved = 0;
                $action = Action::whereAction('km')->first();
                $operationControl->driver->score -= $action->credits * $operationControl->km;
                $operationControl->driver->update();
                $operationControl->actions()->detach($action);
            }

            $operationControl->date = Carbon::parse($request->date)->format('Y-m-d');
            $operationControl->city = $request->city;
            $operationControl->service = $request->service;
            $operationControl->transport_model = $request->transport_model;
            $operationControl->transport_make = $request->transport_make;
            $operationControl->tonnage = $request->tonnage;
            $operationControl->hours = $request->hours;
            $operationControl->km = $request->km;
            $operationControl->assigned = $request->assigned;
            $operationControl->delivered = $request->delivered;
            $operationControl->description = $request->description;
            $operationControl->company = $request->company;
//            $operationControl->no_devolution_credits = $no_devolution_credits;
//            $operationControl->km_credits = $km_credits;
            $operationControl->update();
        });

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Información actualizada',
            'operation_control_id' => $operationControl->id
        ]);
    }

    public function delete(Request $request, OperationControl $operationControl)
    {
        $file_paths_to_delete = DB::transaction(function () use ($operationControl, $request) {
            $file_paths_to_delete = [];
            foreach ($operationControl->operationControlImages as $item) {
                array_push($file_paths_to_delete, $item->img_path);
            }

            $driver = $request->user();
            if ($driver->contractor === 'logistic_company' && $operationControl->approved) {
                $action = Action::whereAction('km')->first();
                $operationControl->driver->score -= $action->credits * $operationControl->km;
                $operationControl->driver->update();
                $operationControl->actions()->detach($action);
            }
            $operationControl->operationControlImages()->delete();
            $operationControl->delete();

            return $file_paths_to_delete;
        });

        Storage::disk('operation_controls')->delete($file_paths_to_delete);

        return response()->json([
            'success' => true,
            'deleted' => true,
            'message' => 'resource deleted',
            'custom_message' => 'Registro eliminado'
        ]);
    }

    public function sendNotificationToDriver($driver)
    {
        $data = [
            'to' => $driver->fcm_token,
            'notification' => [
                'body' => 'Recordatorio para realizar servicio',
                'title' => 'LogApp',
                'icon' => 'notification_icon',
                'click_action' => 'FCM_PLUGIN_ACTIVITY'
            ],
            'data' => [
                'type' => 'reminder'
            ]
        ];

        try {
            $result = $this->sendNotification($data);
            $res = json_decode($result);
            if ($res->success === 1) {
//                $reminder->processed = 1;
//                $reminder->update();
            }
        } catch (\Exception $e) {
            //
        }
    }

    public function sumNoDevolutionCredits($request)
    {
        $no_devolution_credits = $request->assigned - $request->delivered === 0
            ? Action::whereAction('no-devolution')->first()->credits
            : 0;

        $driver = $request->user();
        $driver->score += $no_devolution_credits;
        $driver->update();

        return $no_devolution_credits;
    }

    public function sumKmCredits($request)
    {
        $km_credits = Action::whereAction('km')->first()->credits * $request->km;

        $driver = $request->user();
        $driver->score += $km_credits;
        $driver->update();

        return $km_credits;
    }

    public function decreaseDriverScore($request, $operationControl)
    {
        $driver = $request->user();
        $driver->score -= $operationControl->no_devolution_credits;
        $driver->score -= $operationControl->km_credits;
        $driver->update();
    }

    public function sumDriverAccKm($request)
    {
        $driver = $request->user();
        $driver->acc_km += $request->km;
        $driver->update();
    }

    public function decreaseDriverAccKm($request, $operationControl)
    {
        $driver = $request->user();
        $driver->acc_km - $operationControl->km < 0
            ? $driver->acc_km = 0
            : $driver->acc_km -= $operationControl->km;
        $driver->update();
    }
}
