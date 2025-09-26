<?php

namespace App\Http\Controllers\V1\Admin;

use App\Admin;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function signIn(Request $request)
    {
        $user = Admin::where('email', $request->email)
            ->first();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'user not found',
                'custom_message' => 'Usuario no registrado',
            ])->setStatusCode(400);
        }

        if (Hash::check($request->password, $user->password)) {
            $auth_token = $user->createToken('Laravel Personal Access Token')->plainTextToken;
            return response()->json([
                'success' => true,
                'auth_token' => $auth_token,
                'email' => $user->email,
                'name' => $user->name
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Wrong user/password',
            'custom_message' => 'Contraseña incorrecta'
        ])->setStatusCode(400);
    }
}
