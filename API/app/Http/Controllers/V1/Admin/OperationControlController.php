<?php

namespace App\Http\Controllers\V1\Admin;

use App\Action;
use App\Exports\OperationExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\MaterialResource;
use App\Http\Resources\UbiResource;
use App\OperationControl;
use App\Services\V1\MaterialService;
use App\Services\V1\MaterialUbiService;
use App\Services\V1\TransactionService;
use App\Services\V1\UbiService;
use App\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class OperationControlController extends Controller
{
    public function index($month, $year)
    {
        $operations = OperationControl::with('driver', 'branch',
            'materialUbi', 'operationControlImages', 'actions')
            ->orderBy('date')
            ->whereMonth('operation_controls.date', $month)
            ->whereYear('operation_controls.date', $year)
            ->get();

        $materials = MaterialService::getAllMaterials();
        $ubis = UbiService::getAllUbis();

        return response()->json([
            'success' => true,
            'operations' => $operations,
            'materials' => MaterialResource::collection($materials),
            'ubis' => UbiResource::collection($ubis)
        ]);
    }

    public function export(Request $request, $time)
    {
        return Excel::download(new OperationExport($request->month, $request->year, $request->driverId, $request->company), 'control_operativo_.xlsx');
    }

    public function getCompanies()
    {
        $companies = OperationControl::distinct()->select('company')->get();

        return response()->json([
            'success' => true,
            'companies' => $companies
        ]);
    }

    public function approveOperationControl(OperationControl $operationControl)
    {
        DB::transaction(function () use($operationControl) {
            $operationControl->approved = 1;
            $operationControl->update();

            $action = Action::whereAction('km')->first();

            $operationControl->driver->score += $action->credits * $operationControl->km;
            $operationControl->driver->update();

            $operationControl->actions()->attach($action);
        });

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Información registrada'
        ]);
    }

    public function sumNoDevCredits(OperationControl $operationControl)
    {
        DB::transaction(function () use($operationControl) {
            $action = Action::whereAction('no-devolution')->first();

            $operationControl->driver->score += $action->credits;
            $operationControl->driver->update();

            $operationControl->actions()->attach($action);
        });

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Información registrada'
        ]);
    }

    public function updateValues(Request $request, OperationControl $operationControl)
    {
        DB::transaction(function () use($request, $operationControl) {
            $operationControl->branch_km_rate = $request->branch_km_rate;
            $operationControl->branch_hour_rate = $request->branch_hour_rate;
            $operationControl->branch_package_rate = $request->branch_package_rate;
            $operationControl->branch_fixed_hours = $request->branch_fixed_hours;
            $operationControl->branch_plus_km = $request->branch_plus_km;
            $operationControl->amount = $request->amount;
            $operationControl->calculation_mode = $request->calculation_mode;

            $operationControl->approved = 1;
            $operationControl->update();

            TransactionService::createOrUpdateOperationControlTransaction($operationControl);

            $action = Action::whereAction('km')->first();

            $operationControl->driver->score += $action->credits * $operationControl->km;
            $operationControl->driver->update();

            $operationControl->actions()->attach($action);
        });

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Información actualizada'
        ]);
    }

    public function update(Request $request, OperationControl $operationControl)
    {
        $operationControl->hours = $request->hours;
        $operationControl->km = $request->km;
        $operationControl->assigned = $request->assigned;
        $operationControl->delivered = $request->delivered;
        $materialUbi = MaterialUbiService::getUbiMaterial($request->material_id, $request->ubi_id);
        $operationControl->material_ubi_id = $materialUbi->id;
        $operationControl->update();

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Información actualizada'
        ]);
    }
}
