<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\UploadedDocument;
use Illuminate\Http\Request;

class UploadedDocumentController extends Controller
{
    public function index(Request $request)
    {
        $uploaded_documents = UploadedDocument::whereHas('driver', function ($q) use ($request) {
            $q->where('admin_id', $request->user()->id);
        })
            ->with('driver', 'document.documentType', 'documentFiles')
            ->get();

        return response()->json([
            'success' => true,
            'uploaded_documents' => $uploaded_documents
        ]);
    }

    public function getUploadedDocumentsCount(Request $request)
    {
        $uploaded_documents = UploadedDocument::whereHas('driver', function ($q) use ($request) {
            $q->where('admin_id', $request->user()->id);
        })->get();

        return response()->json([
            'success' => true,
            'uploaded_documents_count' => $uploaded_documents->count()
        ]);
    }
}
