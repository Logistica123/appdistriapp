<?php

namespace App\Http\Controllers\V1\App;

use App\DriverGeoposition;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DriverGeopositionController extends Controller
{
    public function store(Request $request)
    {
        $driverGeoposition = new DriverGeoposition();
        $driverGeoposition->lat = $request->lat;
        $driverGeoposition->lng = $request->lng;
        $driverGeoposition->accuracy = $request->accuracy;
        $driverGeoposition->altitude = $request->altitude;
        $driverGeoposition->altitude_accuracy = $request->altitude_accuracy;
        $driverGeoposition->heading = $request->heading;
        $driverGeoposition->speed = $request->speed;
        $driverGeoposition->driver_id = $request->user()->id;
        $driverGeoposition->save();

        $except = 10;
        $keep = DriverGeoposition::where('driver_id', $request->user()->id)
            ->latest()
            ->take($except)
            ->pluck('id')
            ->toArray();

        DriverGeoposition::where('driver_id', $request->user()->id)
            ->whereNotIn('id', $keep)
            ->delete();

        return response()->json([
            'success' => true,
            'stored' => true,
            'message' => 'resource stored'
        ]);
    }
}
