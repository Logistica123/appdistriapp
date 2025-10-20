<?php

namespace App\Http\Controllers\V1\App;

use App\Http\Controllers\Controller;
use App\WithdrawalRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;

class WithdrawalRequestController extends Controller
{
    public function index(Request $request)
    {
        $withdrawal_requests = WithdrawalRequest::driverWithdrawalRequests($request->user()->id)
            ->get();

        return response()->json([
            'success' => true,
            'withdrawal_requests' => $withdrawal_requests
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'amount' => 'required|numeric|min:1|max:9999999999999.99',
            'type' => 'required|in:advance,loan'
        ]);

        $withdrawalRequest = new WithdrawalRequest();
        $withdrawalRequest->amount = $data['amount'];
        $withdrawalRequest->date = Carbon::now()->format('Y-m-d');
        $withdrawalRequest->type = $data['type'];
        $withdrawalRequest->driver_id = $request->user()->id;
        $withdrawalRequest->save();

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Solicitud enviada'
        ]);
    }
}
