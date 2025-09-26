<?php


namespace App\Services\V1;


use App\MaterialUbi;

class MaterialUbiService
{
    public static function getAllMaterialUbis()
    {
        return MaterialUbi::all();
    }
    public static function getUbiMaterial($materialId, $ubiId)
    {
        return MaterialUbi::where('material_id', $materialId)
            ->where('ubi_id', $ubiId)
            ->first();
    }
}