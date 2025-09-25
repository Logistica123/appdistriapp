<?php

namespace App\Http\Controllers\V1\Admin;

use App\Exports\FuelControlExport;
use App\FuelControl;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class FuelControlController extends Controller
{
    public function index($month, $year)
    {
        $fuels = FuelControl::with('driver')
            ->orderBy('date')
            ->whereMonth('fuel_controls.date', $month)
            ->whereYear('fuel_controls.date', $year)
            ->with('fuelControlImages')
            ->get();

        return response()->json([
            'success' => true,
            'fuels' => $fuels
        ]);
    }

    public function export($month, $year, $time)
    {
        return Excel::download(new FuelControlExport($month, $year), 'control_combustible_.xlsx');
    }
}
