<?php

namespace App\Http\Controllers\V2\App;

use App\Helpers\Constant;
use App\Http\Controllers\Controller;
use App\Http\Resources\TransactionResource;
use App\Services\V1\TransactionService;
use App\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index(Request $request)
    {
        $driver = $request->user();

        if ($driver->id !== 2 && $driver->id !== 4) {
            return response()->json([
                'custom_message' => 'Módulo no disponible'
            ], 400);
        }

        $transactions = TransactionService::getDriverTransactions($request->user());
        $amount = TransactionService::getDriverTransactionsAmount($request->user());

        return response()->json([
            'success' => true,
            'transactions' => TransactionResource::collection($transactions),
            'transactions_' => $transactions,
            'amount' => $amount
        ]);
    }

    public function storeWithdrawalRequest(Request $request)
    {
        $transaction = new Transaction();
        $transaction->amount = $request->amount;
        $transaction->date = Carbon::now()->format('Y-m-d');
        $transaction->type = $request->type === 'adelanto'
            ? Constant::OPERATION_CONTROL_TYPE['adelanto']
            : Constant::OPERATION_CONTROL_TYPE['retiro'];
        $transaction->status = 0;
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
