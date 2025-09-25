<?php

namespace App\Http\Controllers\V1\App;

use App\Http\Controllers\Controller;
use App\TollControl;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class TollControlController extends Controller
{
    public function getTollControlsByMonthAndYear(Request $request, $month, $year)
    {
        $toll_controls = TollControl::whereDriverId($request->user()->id)
            ->whereMonth('date', '=', $month)
            ->whereYear('date', '=', $year)
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'toll_controls' => $toll_controls
        ]);
    }

    public function store(Request $request)
    {
        $tollControl = new TollControl();
        $tollControl->date = Carbon::parse($request->date)->format('Y-m-d');
        $tollControl->station = $request->station;
        $tollControl->total = round($request->total, 2);
        $tollControl->driver_id = $request->user()->id;
        $tollControl->save();

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Control de peaje registrado',
            'toll_control_id' => $tollControl->id
        ]);
    }

    public function update(Request $request, TollControl $tollControl)
    {
        $tollControl->date = Carbon::parse($request->date)->format('Y-m-d');
        $tollControl->station = $request->station;
        $tollControl->total = round($request->total, 2);
        $tollControl->update();

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Control de peaje actualizado',
            'toll_control_id' => $tollControl->id
        ]);
    }

    public function delete(TollControl $tollControl)
    {
        $file_paths_to_delete = DB::transaction(function () use ($tollControl) {
            $file_paths_to_delete = [];
            foreach ($tollControl->tollControlImages as $item) {
                array_push($file_paths_to_delete, $item->img_path);
            }
            $tollControl->tollControlImages()->delete();
            $tollControl->delete();

            return $file_paths_to_delete;
        });

        Storage::disk('toll_controls')->delete($file_paths_to_delete);

        return response()->json([
            'success' => true,
            'deleted' => true,
            'message' => 'resource deleted',
            'custom_message' => 'Control de peaje eliminado'
        ]);
    }
}
