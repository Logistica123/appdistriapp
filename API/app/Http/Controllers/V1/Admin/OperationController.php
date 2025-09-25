<?php

namespace App\Http\Controllers\V1\Admin;

use App\Exports\OperationExport;
use App\Http\Controllers\Controller;
use App\Operation;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class OperationController extends Controller
{
    public function index($month, $year)
    {
        $operations = Operation::with('driver')
            ->orderBy('date')
            ->whereMonth('operations.date', $month)
            ->whereYear('operations.date', $year)
            ->get();

        return response()->json([
            'success' => true,
            'operations' => $operations
        ]);
    }

    public function export($month, $year, $time)
    {
        return Excel::download(new OperationExport($month, $year), 'control_operativo_.xlsx');
    }
}
