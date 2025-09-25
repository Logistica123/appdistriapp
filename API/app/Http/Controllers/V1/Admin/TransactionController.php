<?php

namespace App\Http\Controllers\V1\Admin;

use App\Exports\TransactionExport;
use App\Http\Controllers\Controller;
use App\Transaction;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class TransactionController extends Controller
{
    public function index($month, $year)
    {
        $transactions = Transaction::with('driver')
            ->orderBy('date')
            ->whereMonth('transactions.date', $month)
            ->whereYear('transactions.date', $year)
            ->get();

        return response()->json([
            'success' => true,
            'transactions' => $transactions
        ]);
    }

    public function export($month, $year, $time)
    {
        return Excel::download(new TransactionExport($month, $year), 'transacciones.xlsx');
    }
}
