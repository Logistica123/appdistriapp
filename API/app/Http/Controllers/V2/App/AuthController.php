<?php

namespace App\Http\Controllers\V2\App;

use App\Driver;
use App\Http\Controllers\Controller;
use App\Location;
use App\Services\V1\DriverService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $driver = DriverService::getDriverByEmail($request->email);

        if (!$driver) {
            return response()->json([
                'success' => false,
                'message' => 'driver not found',
                'custom_message' => 'Conductor no registrado',
            ])->setStatusCode(400);
        }

        if ($driver->status != 'active') {
            return response()->json([
                'success' => false,
                'message' => 'driver not found',
                'custom_message' => 'Cuenta suspendida',
            ])->setStatusCode(400);
        }

        if (Hash::check($request->password, $driver->password)) {
            $auth_token = $driver->createToken('DistriApp Token')->plainTextToken;

            $locations = Location::with(['orders' => function ($q) {
                $q->whereRaw('LENGTH(receiver) >= 2')
                    ->select('location_id', 'receiver', 'phone')->distinct();
            }])
                ->get();

            return response()->json([
                'success' => true,
                'auth_token' => $auth_token,
                'email' => $driver->email,
                'admin_email' => $driver->admin->email,
                'locations' => $locations,
                'driver' => $driver->load('paymentMethods')
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Wrong user/password',
            'custom_message' => 'Contraseña incorrecta'
        ])->setStatusCode(400);
    }
}
