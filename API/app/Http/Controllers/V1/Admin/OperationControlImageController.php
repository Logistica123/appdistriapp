<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\OperationControlImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class OperationControlImageController extends Controller
{
    public function getImage(OperationControlImage $operationControlImage)
    {
//        if (File::exists(storage_path() . '/app/operation_controls/' . $operationControlImage->img_path)) {
            return response()->json([
                'success' => true,
                'base64' => base64_encode(file_get_contents(storage_path() . '/app/files/images/operation_controls/' . $operationControlImage->img_path))
            ]);
//        }
    }
}
