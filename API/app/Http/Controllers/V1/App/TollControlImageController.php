<?php

namespace App\Http\Controllers\V1\App;

use App\Http\Controllers\Controller;
use App\TollControlImage;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TollControlImageController extends Controller
{
    public function store(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = request()->file('file');
            $tollControlImage = new TollControlImage();
            $tollControlImage->img_path = $file->store('', ['disk' => 'toll_controls']);
            $tollControlImage->toll_control_id = $request->toll_control_id;
            $tollControlImage->save();
        }

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored'
        ]);
    }
}
