<?php

namespace App\Http\Controllers\V1\App;

use App\Driver;
use App\Http\Controllers\Controller;
use App\Http\Requests\App\UpdateFCMTokenRequest;
use App\Http\Requests\App\UpdatePasswordRequest;
use App\OperationControl;
use App\Services\V1\DriverService;
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
        $validated = $request->validate([
            'car_make' => 'nullable|string|max:255',
            'car_model' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'company' => 'nullable|string|max:255',
            'license_plate' => 'nullable|string|max:255',
            'phone_number' => 'nullable|string|max:50',
            'tonnage' => 'nullable|string|max:100',
            'cost_per_hour' => 'nullable|numeric',
            'cost_per_km' => 'nullable|numeric',
            'start_address' => 'nullable|string|max:255',
            'start_lat' => 'nullable|numeric',
            'start_lng' => 'nullable|numeric',
            'bank_cbu' => 'nullable|digits:22',
            'bank_owner_is_driver' => 'nullable|boolean',
            'bank_holder_name' => 'nullable|string|max:255',
            'bank_holder_document' => 'nullable|string|max:50',
            'bank_holder_phone' => 'nullable|string|max:50',
            'bank_holder_email' => 'nullable|string|max:120',
        ]);

        $driver = $request->user();
        if (! $driver->bank_cbu_status) {
            $driver->bank_cbu_status = 'confirmed_owner';
        }
        $bankFieldsTouched = array_key_exists('bank_cbu', $validated)
            || array_key_exists('bank_owner_is_driver', $validated)
            || array_key_exists('bank_holder_name', $validated)
            || array_key_exists('bank_holder_document', $validated)
            || array_key_exists('bank_holder_phone', $validated)
            || array_key_exists('bank_holder_email', $validated);

        if ($bankFieldsTouched && $driver->bank_cbu_status === 'pending_owner_confirm') {
            return response()->json([
                'success' => false,
                'message' => 'Ya hay un cambio de CBU en revisión. Espera la confirmación del titular.'
            ], 422);
        }

        if ($bankFieldsTouched && $driver->bank_cbu_blocked_until && now()->lt($driver->bank_cbu_blocked_until)) {
            return response()->json([
                'success' => false,
                'message' => 'No puedes cambiar el CBU hasta que finalice el bloqueo temporal.'
            ], 422);
        }

        $originalBank = [
            'cbu' => $driver->bank_cbu,
            'owner_is_driver' => (bool) $driver->bank_owner_is_driver,
            'holder_name' => $driver->bank_holder_name,
            'holder_document' => $driver->bank_holder_document,
            'holder_phone' => $driver->bank_holder_phone,
            'holder_email' => $driver->bank_holder_email,
        ];
        $driver->car_make = $validated['car_make'] ?? $driver->car_make;
        $driver->car_model = $validated['car_model'] ?? $driver->car_model;
        $driver->city = $validated['city'] ?? $driver->city;
        $driver->company = $validated['company'] ?? $driver->company;
        $driver->license_plate = $validated['license_plate'] ?? $driver->license_plate;
        $driver->phone_number = $validated['phone_number'] ?? $driver->phone_number;
        $driver->tonnage = $validated['tonnage'] ?? $driver->tonnage;
        $driver->cost_per_hour = $validated['cost_per_hour'] ?? $driver->cost_per_hour;
        $driver->cost_per_km = $validated['cost_per_km'] ?? $driver->cost_per_km;

        if ($request->has('start_address')) {
            $driver->start_address = $request->start_address;
        }

        if ($request->has('start_lat')) {
            $driver->start_lat = $request->start_lat;
        }

        if ($request->has('start_lng')) {
            $driver->start_lng = $request->start_lng;
        }

        if (array_key_exists('bank_cbu', $validated)) {
            $sanitizedCbu = $validated['bank_cbu'] ? preg_replace('/\D/', '', $validated['bank_cbu']) : null;
            $driver->bank_cbu = $sanitizedCbu;
            $driver->bank_alias = $sanitizedCbu;
            $driver->bank_cvu = null;
        }

        if (array_key_exists('bank_owner_is_driver', $validated)) {
            $driver->bank_owner_is_driver = filter_var($validated['bank_owner_is_driver'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
            if ($driver->bank_owner_is_driver === null) {
                $driver->bank_owner_is_driver = true;
            }
        }

        if (array_key_exists('bank_holder_name', $validated)) {
            $driver->bank_holder_name = $validated['bank_holder_name'] ?: null;
        }
        if (array_key_exists('bank_holder_document', $validated)) {
            $driver->bank_holder_document = $validated['bank_holder_document'] ?: null;
        }
        if (array_key_exists('bank_holder_phone', $validated)) {
            $driver->bank_holder_phone = $validated['bank_holder_phone'] ?: null;
        }
        if (array_key_exists('bank_holder_email', $validated)) {
            $driver->bank_holder_email = $validated['bank_holder_email'] ?: null;
        }

        if ($driver->bank_owner_is_driver) {
            $driver->bank_holder_name = null;
            $driver->bank_holder_document = null;
            $driver->bank_holder_phone = null;
            $driver->bank_holder_email = null;
        }

        $bankChanged = $bankFieldsTouched && (
            $driver->bank_cbu !== $originalBank['cbu']
            || $driver->bank_owner_is_driver !== $originalBank['owner_is_driver']
            || $driver->bank_holder_name !== $originalBank['holder_name']
            || $driver->bank_holder_document !== $originalBank['holder_document']
            || $driver->bank_holder_phone !== $originalBank['holder_phone']
            || $driver->bank_holder_email !== $originalBank['holder_email']
        );

        if ($bankChanged) {
            DriverService::flagBankChangePending($driver, [
                'previous_cbu' => $originalBank['cbu'],
                'new_cbu' => $driver->bank_cbu,
                'previous_bank_owner_is_driver' => $originalBank['owner_is_driver'],
                'previous_bank_holder_name' => $originalBank['holder_name'],
                'previous_bank_holder_document' => $originalBank['holder_document'],
                'previous_bank_holder_phone' => $originalBank['holder_phone'],
                'previous_bank_holder_email' => $originalBank['holder_email'],
                'requested_by' => 'driver',
                'requested_by_id' => $driver->id,
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
            ]);
        } else {
            $driver->save();
        }

        if ($driver->bank_cbu && $driver->bank_cbu_status === 'confirmed_owner') {
            DriverService::syncBankDataWithPersonal($driver);
        }

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => $bankChanged
                ? 'Perfil actualizado. El CBU quedó en revisión por el titular.'
                : 'Perfil actualizado',
            'requires_owner_confirmation' => $bankChanged
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

    public function deleteProfileImage(Request $request)
    {
        $driver = $request->user();

        if ($driver->has_profile_img && $driver->profile_img_path) {
            $filePath = storage_path() . '/app/' . $driver->profile_img_path;
            if (is_file($filePath)) {
                try {
                    unlink($filePath);
                } catch (\Exception $e) {
                    // ignore unlink errors, we'll just clear the flags
                }
            }
        }

        $driver->profile_img_path = null;
        $driver->has_profile_img = 0;
        $driver->save();

        return response()->json([
            'success' => true,
            'deleted' => true,
            'message' => 'resource deleted',
            'custom_message' => 'Imagen de perfil eliminada'
        ]);
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
