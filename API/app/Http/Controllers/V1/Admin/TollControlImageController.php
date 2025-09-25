<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\TollControlImage;
use Illuminate\Http\Request;

class TollControlImageController extends Controller
{
    public function getImage(TollControlImage $tollControlImage)
    {
        return response()->json([
            'success' => true,
            'base64' => base64_encode(file_get_contents(storage_path() . '/app/files/images/toll_controls/' . $tollControlImage->img_path))
        ]);
    }
}
