<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\MaterialUbiResource;
use App\MaterialUbi;
use App\Services\V1\MaterialUbiService;
use Illuminate\Http\Request;

class MaterialUbiController extends Controller
{
    public function index()
    {
        $materialUbis = MaterialUbiService::getAllMaterialUbis();

        return [
            'material_ubis' => MaterialUbiResource::collection($materialUbis)
        ];
    }

    public function updateValue(Request $request, MaterialUbi $materialUbi)
    {
        $materialUbi->value = $request->value;
        $materialUbi->update();

        return [
            'custom_message' => 'Valor actualizado exitosamente'
        ];
    }
}
