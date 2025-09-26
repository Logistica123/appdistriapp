<?php

namespace App\Http\Controllers\V1\Admin;

use App\Exports\WithdrawalRequestExport;
use App\Http\Controllers\Controller;
use App\WithdrawalRequest;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class WithdrawalRequestController extends Controller
{
    public function index($month, $year)
    {
        $withdrawal_requests = WithdrawalRequest::with('driver')
            ->orderBy('date')
            ->whereMonth('withdrawal_requests.date', $month)
            ->whereYear('withdrawal_requests.date', $year)
            ->get();

        return response()->json([
            'success' => true,
            'withdrawal_requests' => $withdrawal_requests
        ]);
    }

    public function export($month, $year, $time)
    {
        return Excel::download(new WithdrawalRequestExport($month, $year), 'solicitudes_retiro.xlsx');
    }
}
