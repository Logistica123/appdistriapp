<?php

namespace App\Http\Controllers\V1\App;

use App\Driver;
use App\Http\Controllers\Controller;
use App\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function signIn(Request $request)
    {
        $driver = Driver::where('email', $request->email)
            ->where('status', 'active')
            ->first();

        if (!$driver) {
            return response()->json([
                'success' => false,
                'message' => 'driver not found',
                'custom_message' => 'Conductor no registrado',
            ])->setStatusCode(404);
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
//                'admin_email' => $driver->admin->email,
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
