<?php

namespace App\Http\Controllers\V2\App;

use App\Driver;
use App\Http\Controllers\Controller;
use App\Http\Requests\App\RegisterRequest;
use App\Http\Resources\DriverResource;
use App\Services\V1\DriverService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class DriverController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $driver = DriverService::setAttributes(new Driver(), $request->all());
        $driver->admin_created = 0;
        $driver->save();

        return [
            'custom_message' => 'Registrado exitosamente'
        ];
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

        return [
            'drivers' => DriverResource::collection($drivers),
            'podium' => DriverResource::collection($podium),
            'list' => DriverResource::collection($list),
        ];
    }

    public function getDriverProfileImage(Driver $driver)
    {
        if ($driver->has_profile_img && File::exists(storage_path() . '/app/' . $driver->profile_img_path)) {
            return response()->file(storage_path() . '/app/' . $driver->profile_img_path);
        }
        return response()->file(storage_path() . '/app/' . 'default_profile_img.png');
    }
}
