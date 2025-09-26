<?php

namespace App\Http\Controllers\V1\App;

use App\DriverLocation;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DriverLocationController extends Controller
{
    public function store(Request $request)
    {
        $driver_location = new DriverLocation();
        $driver_location->lat = $request->lat;
        $driver_location->lng = $request->lng;
        $driver_location->driver_id = $request->user()->id;
        $driver_location->save();

        return response()->json([
            'success' => true,
//            'created' => true,
            'message' => 'resource stored',
//            'custom_message' => 'Ubicación guardada'
        ]);
    }
}
