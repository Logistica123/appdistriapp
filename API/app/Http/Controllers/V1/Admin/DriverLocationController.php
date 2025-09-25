<?php

namespace App\Http\Controllers\V1\Admin;

use App\Driver;
use App\DriverGeoposition;
use App\DriverLocation;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DriverLocationController extends Controller
{
    public function getDriverLocationsByDate($driver, $date)
    {
        $parsed_date = Carbon::parse($date)->format('Y-m-d');
        $driver_locations = DriverGeoposition::where('driver_id', $driver)
            ->whereBetween('created_at', [$date . " 00:00:00", $parsed_date . " 23:59:59"])
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'date' => $date,
            'parsed_date' => $parsed_date,
            'driver' => $driver,
            'driver_locations' => $driver_locations
        ]);
    }

    public function getDriversWithLastLocation()
    {
        $drivers = Driver::notTest()
            ->has('lastDriverGeoposition')
            ->with('lastDriverGeoposition')
            ->orderBy('name', 'asc')
            ->get();

        return response()->json([
            'success' => true,
            'drivers' => $drivers
        ]);
    }
}
