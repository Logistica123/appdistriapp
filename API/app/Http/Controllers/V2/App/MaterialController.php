<?php

namespace App\Http\Controllers\V2\App;

use App\Http\Controllers\Controller;
use App\Http\Resources\MaterialResource;
use App\Services\V1\MaterialService;
use Illuminate\Http\Request;

class MaterialController extends Controller
{
    public function getMaterials()
    {
        $materials = MaterialService::getAllMaterials();

        return [
            'materials' => MaterialResource::collection($materials)
        ];
    }
}
