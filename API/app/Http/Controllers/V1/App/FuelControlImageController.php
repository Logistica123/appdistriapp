<?php

namespace App\Http\Controllers\V1\App;

use App\FuelControlImage;
use App\Http\Controllers\Controller;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FuelControlImageController extends Controller
{
    public function store(Request $request)
    {
        if ($request->hasFile('file')) {
//            $path = Storage::putFile('files/images/fuel_control', new File($request->file));
            $file = request()->file('file');
            $fuelControlImage = new FuelControlImage();
            $fuelControlImage->img_path = $file->store('', ['disk' => 'fuel_controls']);
            $fuelControlImage->fuel_control_id = $request->fuel_control_id;
            $fuelControlImage->save();
        }

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored'
        ]);
    }
}
