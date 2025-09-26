<?php

namespace App\Http\Controllers\V1\App;

use App\Device;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DeviceController extends Controller
{
    public function store(Request $request)
    {
        $device = Device::driverDevice($request->user(), $request->uuid)
            ->first();
        if (!$device && $request->uuid) {
            $device = new Device();
            $device->uuid = $request->uuid;
            $device->model = $request->model;
            $device->platform = $request->platform;
            $device->version = $request->version;
            $device->driver_id = $request->user()->id;
            $device->save();
        }

        return response()->json([
            'success' => true,
            'stored' => true,
            'message' => 'resource stored',
            'device' => $device
        ]);
    }

    public function updateDeviceFCMToken(Request $request)
    {
        $device = Device::driverDevice($request->user(), $request->uuid)
            ->first();
        if ($device) {
            $device->fcm_token = $request->fcm_token;
            $device->update();
        }

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
        ]);
    }
}
