<?php

namespace App\Http\Controllers\V1\App;

use App\Http\Controllers\Controller;
use App\UpdateLocationRequest;
use Illuminate\Http\Request;

class UpdateLocationRequestController extends Controller
{
    public function store(Request $request)
    {
        $update_location_request = new UpdateLocationRequest();
        $update_location_request->driver_id = $request->user()->id;
        $update_location_request->location_id = $request->location_id;
        $update_location_request->lat = $request->lat;
        $update_location_request->lng = $request->lng;
        $update_location_request->save();

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Solicitud registrada'
        ]);
    }
}
