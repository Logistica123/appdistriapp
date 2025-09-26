<?php

namespace App\Http\Controllers\V1\Admin;

use App\Events\ServiceCreated;
use App\Http\Controllers\Controller;
use App\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ServiceController extends Controller
{
    public function store(Request $request)
    {
        $service = new Service();
        $service->description = $request->description;
        $service->save();

        event(new ServiceCreated(
            $request->user()->pusher_id,
            $service
        ));
    }
}
