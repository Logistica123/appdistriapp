<?php

namespace App\Http\Controllers\V1\Admin;

use App\DocumentFile;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DocumentFileController extends Controller
{
    public function index()
    {
        $document_files = DocumentFile::latest()
            ->get();

        return response()->json([
            'success' => true,
            'document_files' => $document_files
        ]);
    }

    public function download(DocumentFile $documentFile)
    {
        return response()->file(storage_path('app/files/images/maintenance/') . $documentFile->file_path);
    }
}
