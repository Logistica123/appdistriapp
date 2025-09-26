<?php

namespace App\Http\Controllers\V1\App;

use App\DocumentFile;
use App\Http\Controllers\Controller;
use App\OperationControlImage;
use App\UploadedDocument;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class DocumentFileController extends Controller
{
    public function download(DocumentFile $documentFile)
    {
        return response()->file(storage_path() . '/app/files/images/maintenance/' . $documentFile->file_path);
    }

    public function store(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = request()->file('file');
            $documentFile = new DocumentFile();
            $documentFile->filename = $file->getClientOriginalName();
            $documentFile->file_path = $file->store('', ['disk' => 'maintenance']);
            $documentFile->extension = $file->getClientOriginalExtension();
            $documentFile->mime = $file->getClientMimeType();
            $documentFile->uploaded_document_id = $request->uploaded_document_id;
            $documentFile->save();
        }

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored'
        ]);
    }
}
