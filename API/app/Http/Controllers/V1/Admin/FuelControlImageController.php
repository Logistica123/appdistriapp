<?php

namespace App\Http\Controllers\V1\Admin;

use App\FuelControlImage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FuelControlImageController extends Controller
{
    public function getImage(FuelControlImage $fuelControlImage)
    {
        return response()->json([
            'success' => true,
            'base64' => base64_encode(file_get_contents(storage_path() . '/app/files/images/fuel_controls/' . $fuelControlImage->img_path))
        ]);
    }
}
