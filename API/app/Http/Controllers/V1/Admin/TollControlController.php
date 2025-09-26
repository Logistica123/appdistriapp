<?php

namespace App\Http\Controllers\V1\Admin;

use App\Exports\FuelControlExport;
use App\Exports\TollControlExport;
use App\Http\Controllers\Controller;
use App\TollControl;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class TollControlController extends Controller
{
    public function index($month, $year)
    {
        $toll_controls = TollControl::with('driver')
            ->orderBy('date')
            ->whereMonth('toll_controls.date', $month)
            ->whereYear('toll_controls.date', $year)
            ->with('tollControlImages')
            ->get();

        return response()->json([
            'success' => true,
            'toll_controls' => $toll_controls
        ]);
    }

    public function export($month, $year, $time)
    {
        return Excel::download(new TollControlExport($month, $year), 'control_peaje.xlsx');
    }
}
