<?php

namespace App\Http\Controllers\V1\Admin;

use App\Driver;
use App\Http\Controllers\Controller;
use App\Services\V1\CompanyService;
use App\Services\V1\DriverService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DriverController extends Controller
{
    public function index(Request $request)
    {
//        $drivers = Driver::adminDrivers($request->user())
        $drivers = Driver::orderBy('name')
            ->with('lastDevice')
            ->get();

        return response()->json([
            'success' => true,
            'drivers' => $drivers,
            'firebase_uid' => $request->user()->firebase_uid
        ]);
    }

    public function store(Request $request)
    {
        $driver = DB::transaction(function () use ($request) {
            $driver = new Driver();
            $driver->name = $request->name;
            $driver->last_name = $request->last_name;
            $driver->email = $request->email;
            $driver->phone_number = $request->phone_number;
            $driver->bank_cbu = $request->bank_cbu ? preg_replace('/\D/', '', $request->bank_cbu) : null;
            $driver->bank_cvu = null;
            $driver->bank_alias = $driver->bank_cbu;
            $driver->bank_owner_is_driver = filter_var($request->bank_owner_is_driver, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
            if ($driver->bank_owner_is_driver === null) {
                $driver->bank_owner_is_driver = true;
            }
            $driver->bank_holder_name = $driver->bank_owner_is_driver ? null : ($request->bank_holder_name ?: null);
            $driver->bank_holder_document = $driver->bank_owner_is_driver ? null : ($request->bank_holder_document ?: null);
            $driver->bank_holder_phone = $driver->bank_owner_is_driver ? null : ($request->bank_holder_phone ?: null);
            $driver->bank_holder_email = $driver->bank_owner_is_driver ? null : ($request->bank_holder_email ?: null);
            $driver->bank_cbu_status = 'confirmed_owner';
            $driver->bank_cbu_previous = null;
            $driver->bank_cbu_requested_at = null;
            $driver->bank_cbu_blocked_until = null;
            $driver->car_make = $request->car_make;
            $driver->car_model = $request->car_model;
            $driver->car_year = $request->car_year;
            $driver->license_plate = $request->license_plate;
            $driver->password = bcrypt(123456);
            $driver->status = 'active';
            $driver->admin_id = $request->user()->id;

            if ($request->has('start_address')) {
                $driver->start_address = $request->start_address;
            }

            if ($request->has('start_lat')) {
                $driver->start_lat = $request->start_lat;
            }

            if ($request->has('start_lng')) {
                $driver->start_lng = $request->start_lng;
            }

            $driver->save();

            return $driver;
        });

        if ($driver->bank_cbu) {
            DriverService::syncBankDataWithPersonal($driver);
        }

        return response()->json([
            'success' => true,
            'stored' => true,
            'message' => 'resource stored',
            'custom_message' => 'Conductor registrado',
            'driver' => $driver
        ]);
    }

    public function update(Request $request, $driver)
    {
        $driver = Driver::findOrFail($driver);
        $originalBank = [
            'cbu' => $driver->bank_cbu,
            'owner_is_driver' => (bool) $driver->bank_owner_is_driver,
            'holder_name' => $driver->bank_holder_name,
            'holder_document' => $driver->bank_holder_document,
            'holder_phone' => $driver->bank_holder_phone,
            'holder_email' => $driver->bank_holder_email,
        ];
        if (! $driver->bank_cbu_status) {
            $driver->bank_cbu_status = 'confirmed_owner';
        }
        $driver->name = $request->name;
        $driver->last_name = $request->last_name;
        $driver->phone_number = $request->phone_number;
        $driver->car_make = $request->car_make;
        $driver->car_model = $request->car_model;
        $driver->car_year = $request->car_year;
        $driver->license_plate = $request->license_plate;
        $sanitizedCbu = $request->bank_cbu ? preg_replace('/\D/', '', $request->bank_cbu) : null;
        $driver->bank_cbu = $sanitizedCbu;
        $driver->bank_cvu = null;
        $driver->bank_alias = $sanitizedCbu;
        if (! is_null($request->bank_owner_is_driver)) {
            $driver->bank_owner_is_driver = filter_var($request->bank_owner_is_driver, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
            if ($driver->bank_owner_is_driver === null) {
                $driver->bank_owner_is_driver = true;
            }
        }
        $driver->bank_holder_name = $driver->bank_owner_is_driver ? null : ($request->bank_holder_name ?: null);
        $driver->bank_holder_document = $driver->bank_owner_is_driver ? null : ($request->bank_holder_document ?: null);
        $driver->bank_holder_phone = $driver->bank_owner_is_driver ? null : ($request->bank_holder_phone ?: null);
        $driver->bank_holder_email = $driver->bank_owner_is_driver ? null : ($request->bank_holder_email ?: null);

        if ($request->has('start_address')) {
            $driver->start_address = $request->start_address;
        }

        if ($request->has('start_lat')) {
            $driver->start_lat = $request->start_lat;
        }

        if ($request->has('start_lng')) {
            $driver->start_lng = $request->start_lng;
        }

        $bankChanged = (
            $driver->bank_cbu !== $originalBank['cbu']
            || $driver->bank_owner_is_driver !== $originalBank['owner_is_driver']
            || $driver->bank_holder_name !== $originalBank['holder_name']
            || $driver->bank_holder_document !== $originalBank['holder_document']
            || $driver->bank_holder_phone !== $originalBank['holder_phone']
            || $driver->bank_holder_email !== $originalBank['holder_email']
        );

        if ($bankChanged) {
            $change = DriverService::flagBankChangePending($driver, [
                'previous_cbu' => $originalBank['cbu'],
                'new_cbu' => $driver->bank_cbu,
                'previous_bank_owner_is_driver' => $originalBank['owner_is_driver'],
                'previous_bank_holder_name' => $originalBank['holder_name'],
                'previous_bank_holder_document' => $originalBank['holder_document'],
                'previous_bank_holder_phone' => $originalBank['holder_phone'],
                'previous_bank_holder_email' => $originalBank['holder_email'],
                'requested_by' => 'admin',
                'requested_by_id' => $request->user()->id ?? null,
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
            ]);

            if ($driver->bank_owner_is_driver || filter_var($request->get('confirm_bank_change'), FILTER_VALIDATE_BOOLEAN)) {
                DriverService::approveBankChange($driver, $change, [
                    'resolved_by' => 'admin',
                    'resolved_by_id' => $request->user()->id ?? null,
                ]);
            }
        } else {
            $driver->save();
        }

        if ($driver->bank_cbu && $driver->bank_cbu_status === 'confirmed_owner') {
            DriverService::syncBankDataWithPersonal($driver);
        } else {
            // if admin cleared the CBU we do not overwrite Personal
        }

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => $bankChanged && $driver->bank_cbu_status !== 'confirmed_owner'
                ? 'Conductor actualizado. CBU en revisión'
                : 'Conductor actualizado'
        ]);
    }

    public function updateStatus(Request $request, $driver)
    {
        $driver = Driver::findOrFail($driver);
        $driver->status = $request->status;
        $driver->update();

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Estatus actualizado'
        ]);
    }

    public function confirmBankData(Request $request, Driver $driver)
    {
        $pendingChange = $driver->bankChanges()
            ->where('status', 'pending_owner_confirm')
            ->latest()
            ->first();

        if (! $pendingChange) {
            return response()->json([
                'success' => false,
                'message' => 'No hay cambios de CBU pendientes para este conductor'
            ], 404);
        }

        DriverService::approveBankChange($driver, $pendingChange, [
            'resolved_by' => 'admin',
            'resolved_by_id' => $request->user()->id ?? null,
        ]);

        if ($driver->bank_cbu) {
            DriverService::syncBankDataWithPersonal($driver);
        }

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'CBU confirmado'
        ]);
    }

    public function rejectBankData(Request $request, Driver $driver)
    {
        $pendingChange = $driver->bankChanges()
            ->where('status', 'pending_owner_confirm')
            ->latest()
            ->first();

        if (! $pendingChange) {
            return response()->json([
                'success' => false,
                'message' => 'No hay cambios de CBU pendientes para este conductor'
            ], 404);
        }

        DriverService::rejectBankChange($driver, $pendingChange, 30, [
            'resolved_by' => 'admin',
            'resolved_by_id' => $request->user()->id ?? null,
        ]);

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'CBU rechazado y se revirtió al anterior'
        ]);
    }

    public function delete($driver)
    {
        $driver = Driver::findOrFail($driver);
        $driver->status = 'inactive';
        $driver->update();

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'El conductor ha pasado a estado inactivo'
        ]);
    }

    public function resetPassword($driver)
    {
        $driver = Driver::findOrFail($driver);
        $driver->password = bcrypt(123456);
        $driver->update();

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Contraseña actualizada'
        ]);
    }

    public function getDriversLastLocation(Request $request)
    {
        $drivers = Driver::adminDrivers($request->user())
            ->has('lastDriverGeoposition')
            ->whereNotIn('id', [1, 2, 3])
            ->with('lastDriverGeoposition')
            ->get();

        return response()->json([
            'success' => true,
            'drivers' => $drivers
        ]);
    }

    public function getDriversCount(Request $request)
    {
        $drivers_count = Driver::adminDrivers($request->user())
            ->active()
            ->count();

        return response()->json([
            'success' => true,
            'drivers_count' => $drivers_count
        ]);
    }

    public function getRanking()
    {
        $drivers = Driver::active()->scores()->get();

        return response()->json([
            'success' => true,
            'drivers' => $drivers
        ]);
    }

    public function updateFirebaseUID(Request $request, Driver $driver)
    {
        $driver = Driver::findOrFail($request->id);
        $driver->firebase_uid = $request->firebase_uid;
        $driver->update();

        return response()->json([
            'success' => true,
        ]);
    }

    public function assignCompanyToDriver(Request $request, Driver $driver)
    {
        $company = CompanyService::getCompanyById($request->company_id);
        DriverService::assignCompanyToDriver($driver, $company);

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Empresa asignada exitosamente'
        ]);
    }

    public function updateDriverValues(Request $request, Driver $driver)
    {
        $driver->cost_per_km = $request->cost_per_km;
        $driver->cost_per_hour = $request->cost_per_hour;
        $driver->update();

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Valores actualizados exitosamente'
        ]);
    }
}
