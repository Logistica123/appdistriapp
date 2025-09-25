<?php

namespace App\Http\Controllers\V1\App;

use App\Http\Controllers\Controller;
use App\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index(Request $request)
    {
        $transactions = Transaction::driverTransactions($request->user()->id)
            ->get();

        return response()->json([
            'success' => true,
            'transactions' => $transactions
        ]);
    }

    public function storeWithdrawalRequest(Request $request)
    {
        $transaction = new Transaction();
        $transaction->amount = $request->amount;
        $transaction->date = Carbon::now()->format('Y-m-d');
        $transaction->type = $request->type;
        $transaction->status = 'Pendiente';
        $transaction->driver_id = $request->user()->id;
        $transaction->save();

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Solicitud registrada'
        ]);

    }
}
