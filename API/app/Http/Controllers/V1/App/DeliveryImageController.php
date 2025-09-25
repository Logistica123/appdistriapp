<?php

namespace App\Http\Controllers\V1\App;

use App\DeliveryImage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DeliveryImageController extends Controller
{
    public function store(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = request()->file('file');
            $deliveryImage = new DeliveryImage();
            $deliveryImage->img_path = $file->store('', ['disk' => 'delivery_images']);
            $deliveryImage->order_id = $request->order_id;
            $deliveryImage->save();
        }

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored'
        ]);
    }
}
