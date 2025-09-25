<?php

namespace App\Http\Controllers\V1\App;

use App\Http\Controllers\Controller;
use App\PaymentMethod;
use Illuminate\Http\Request;

class PaymentMethodController extends Controller
{
    public function index()
    {
        $payment_methods = PaymentMethod::all();

        return response()->json([
            'success' => true,
            'payment_methods' => $payment_methods
        ]);
    }

    public function getDriverPaymentMethods(Request $request)
    {
        $driver = $request->user();

        return response()->json([
            'success' => true,
            'payment_methods' => $driver->paymentMethods
        ]);
    }

    public function updatePaymentMethods(Request $request)
    {
        $driver = $request->user();
        $driver->paymentMethods()->attach($request->payment_methods);

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Métodos de pago actualizados'
        ]);
    }
}
