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
            $driver->car_make = $request->car_make;
            $driver->car_model = $request->car_model;
            $driver->car_year = $request->car_year;
            $driver->license_plate = $request->license_plate;
            $driver->password = bcrypt(123456);
            $driver->status = 'active';
            $driver->admin_id = $request->user()->id;
            $driver->save();

            return $driver;
        });

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
        $driver->name = $request->name;
        $driver->last_name = $request->last_name;
        $driver->phone_number = $request->phone_number;
        $driver->car_make = $request->car_make;
        $driver->car_model = $request->car_model;
        $driver->car_year = $request->car_year;
        $driver->license_plate = $request->license_plate;
        $driver->update();

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Conductor actualizado'
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
