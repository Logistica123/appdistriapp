<?php

namespace App\Http\Controllers\V1\App;

use App\Document;
use App\DocumentFile;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DocumentController extends Controller
{

    public function index()
    {
        $documents = Document::all();

        return response()->json([
            'success' => true,
            'documents' => $documents
        ]);
    }


}
