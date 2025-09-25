<?php

namespace App\Http\Controllers\V1\Admin;

use App\DeliveryImage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DeliveryImageController extends Controller
{
    public function getImage(DeliveryImage $deliveryImage)
    {
        return response()->json([
            'success' => true,
            'base64' => base64_encode(file_get_contents(storage_path() . '/app/files/images/delivery_images/' . $deliveryImage->img_path))
        ]);
    }
}
