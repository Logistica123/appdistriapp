<?php

namespace App\Http\Controllers\V1\App;

use App\Driver;
use App\Http\Controllers\Controller;
use App\Http\Requests\App\UpdateFCMTokenRequest;
use App\Http\Requests\App\UpdatePasswordRequest;
use App\OperationControl;
//use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class DriverController extends Controller
{
    public function getProfile(Request $request)
    {
        $driver = $request->user();

        $distance = OperationControl::whereDriverId($request->user()->id)
            ->sum('km');

        $duration = OperationControl::whereDriverId($request->user()->id)
            ->sum('hours');

        return response()->json([
            'success' => true,
            'driver' => $driver->load('admin'),
            'distance' => number_format($distance, 2, ',', '.'),
            'duration' => number_format($duration, 2, ',', '.')
        ]);
    }

    public function getProfileImage(Request $request)
    {
        $driver = $request->user();

        if ($driver->has_profile_img && File::exists(storage_path() . '/app/' . $driver->profile_img_path)) {
            return response()->file(storage_path() . '/app/' . $driver->profile_img_path);
        }

        return response()->file(storage_path() . '/app/' . 'default_profile_img.png');
    }

    public function getDriverProfileImage(Driver $driver)
    {
        if ($driver->has_profile_img && File::exists(storage_path() . '/app/' . $driver->profile_img_path)) {
            return response()->file(storage_path() . '/app/' . $driver->profile_img_path);
        }
        return response()->file(storage_path() . '/app/' . 'default_profile_img.png');
    }

    public function updateProfile(Request $request)
    {
        $driver = $request->user();
        $driver->car_make = $request->car_make;
        $driver->car_model = $request->car_model;
        $driver->city = $request->city;
        $driver->company = $request->company;
        $driver->license_plate = $request->license_plate;
        $driver->phone_number = $request->phone_number;
        $driver->tonnage = $request->tonnage;
        $driver->cost_per_hour = $request->cost_per_hour;
        $driver->cost_per_km = $request->cost_per_km;
        $driver->update();

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Perfil actualizado'
        ]);
    }

    public function updatePhoneNumber(Request $request)
    {
        $driver = $request->user();
        $driver->phone_number = $request->phone_number;
        $driver->update();

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Número telefónico actualizado'
        ]);
    }

    public function updatePassword(UpdatePasswordRequest $request)
    {
        $driver = $request->user();
        $driver->password = bcrypt($request->password);
        $driver->update();

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Contraseña actualizada'
        ]);
    }

    public function updateFCMToken(UpdateFCMTokenRequest $request)
    {
        $driver = $request->user();
        $driver->fcm_token = $request->fcm_token;
        $driver->update();

        return response()->json([
            'success' => true
        ]);
    }

    public function storeProfileImage(Request $request)
    {
        $driver = $request->user();

        if ($driver->has_profile_img && is_file(storage_path() . '/app/' . $driver->profile_img_path)) {
            try {
                unlink(storage_path() . '/app/' . $driver->profile_img_path);
            } catch (\Exception $e) {
                //
            }
        }

        if ($request->hasfile('file')) {
            $path = Storage::putFile('files/images/profile', $request->file);
            $driver->profile_img_path = $path;
            $driver->has_profile_img = 1;
            $driver->update();

            return response()->json([
                'success' => true,
                'created' => true,
                'message' => 'resource stored',
            ])->header('Content-Type', 'application/json');
        }

        return response()->json([
            'success' => true,
            'custom_message' => 'Por favor seleccione una imagen'
        ])->setStatusCode(400);
    }

    public function getRanking(Request $request)
    {
        $drivers = Driver::CompanyDrivers($request->user()->company_id)->active()->scores()->get();
        if (sizeof($drivers) > 3) {
            $podium = Driver::CompanyDrivers($request->user()->company_id)->active()->scores()->take(3)->get();
            $count = count($drivers);
            $skip = 3;
            $limit = $count - $skip; // the limit
            $list = Driver::CompanyDrivers($request->user()->company_id)->active()->scores()->skip($skip)->take($limit)->get();
        } else {
            $podium = $drivers;
            $list = [];
        }

        return response()->json([
            'success' => true,
            'drivers' => $drivers,
            'podium' => $podium,
            'list' => $list,
        ]);
    }

    public function updateContractor(Request $request)
    {
        $diver = $request->user();
        $request->has_contractor
            ? $diver->contractor = 'logistic_company'
            : $diver->contractor = 'none';
        $diver->update();

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Información registrada'
        ]);
    }

    public function updatePaymentMethods(Request $request)
    {
        $diver = $request->user();
        $diver->paymentMethods()->attach($request->payment_methods_ids);

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Métodos de pago actualizados'
        ]);
    }

    public function getPaymentMethods(Request $request)
    {
        return response()->json([
            'success' => true,
            'payment_methods' => $request->user()->paymentMethods
        ]);
    }
}
