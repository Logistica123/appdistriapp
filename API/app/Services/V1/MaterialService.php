<?php


namespace App\Services\V1;


use App\Material;

class MaterialService
{
    public static function getAllMaterials()
    {
        return Material::all();
    }
}