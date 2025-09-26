<?php

namespace App\Http\Controllers\V1\App;

use App\FuelControlImage;
use App\Http\Controllers\Controller;
use App\OperationControlImage;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class OperationControlImageController extends Controller
{
    public function store(Request $request)
    {
        if ($request->hasFile('file')) {
//            $path = Storage::putFile('files/images/operation_control', new File($request->file));
            $file = request()->file('file');
            $operationControlImage = new OperationControlImage();
            $operationControlImage->img_path = $file->store('', ['disk' => 'operation_controls']);
            $operationControlImage->operation_control_id = $request->operation_control_id;
            $operationControlImage->save();
        }

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored'
        ]);
    }
}
