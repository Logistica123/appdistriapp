<?php

namespace App\Http\Controllers\V2\App;

use App\Http\Controllers\Controller;
use App\Http\Resources\UbiResource;
use App\Services\V1\UbiService;
use Illuminate\Http\Request;

class UbiController extends Controller
{
    public function getUbis()
    {
        $ubis = UbiService::getAllUbis();

        return [
            'ubis' => UbiResource::collection($ubis)
        ];
    }
}
