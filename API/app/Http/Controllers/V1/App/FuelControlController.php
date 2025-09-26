<?php

namespace App\Http\Controllers\V1\App;

use App\FuelControl;
use App\FuelControlImage;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class FuelControlController extends Controller
{
    public function index(Request $request)
    {
        return response()->json([
            'success' => true,
            'fuel_controls' => $request->user()->latestFuelControls
        ]);
    }

    public function getFuelControlsByMonthAndYear(Request $request, $month, $year)
    {
        $fuel_controls = FuelControl::whereDriverId($request->user()->id)
            ->whereMonth('date', '=', $month)
            ->whereYear('date', '=', $year)
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'fuel_controls' => $fuel_controls
        ]);
    }

    public function store(Request $request)
    {
        $fuelControl = new FuelControl();
        $fuelControl->date = Carbon::parse($request->date)->format('Y-m-d');
        $fuelControl->station = $request->station;
        $fuelControl->fuel_type = $request->fuel_type;
        $fuelControl->liters = $request->liters;
        $fuelControl->price = $request->price;
        $fuelControl->total = round($request->liters * $request->price, 2);
        $fuelControl->driver_id = $request->user()->id;
        $fuelControl->save();

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Información guardada',
            'fuel_control_id' => $fuelControl->id
        ]);
    }

    public function update(Request $request, FuelControl $fuelControl)
    {
        $fuelControl->date = Carbon::parse($request->date)->format('Y-m-d');
        $fuelControl->station = $request->station;
        $fuelControl->fuel_type = $request->fuel_type;
        $fuelControl->liters = $request->liters;
        $fuelControl->price = $request->price;
        $fuelControl->total = round($request->liters * $request->price, 2);
        $fuelControl->update();

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Información actualizada',
            'fuel_control_id' => $fuelControl->id
        ]);
    }

    public function delete(FuelControl $fuelControl)
    {
        $file_paths_to_delete = DB::transaction(function () use ($fuelControl) {
            $file_paths_to_delete = [];
            foreach ($fuelControl->fuelControlImages as $item) {
                array_push($file_paths_to_delete, $item->img_path);
            }
            $fuelControl->fuelControlImages()->delete();
            $fuelControl->delete();

            return $file_paths_to_delete;
        });

        Storage::disk('fuel_controls')->delete($file_paths_to_delete);

        return response()->json([
            'success' => true,
            'deleted' => true,
            'message' => 'resource deleted',
            'custom_message' => 'Registro eliminado'
        ]);
    }
}
