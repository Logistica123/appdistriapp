<?php

namespace App\Http\Controllers\V1\App;

use App\DocumentType;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DocumentTypeController extends Controller
{
    public function index()
    {
        $document_types = DocumentType::with('documents')
            ->get();

        return response()->json([
            'success' => true,
            'document_types' => $document_types
        ]);
    }

    public function getDocumentsByDocumentType($documentType)
    {
        $documentType = DocumentType::findOrFail($documentType);
        $documentType->load('documents');

        return response()->json([
            'success' => true,
            'documents' => $documentType->documents
        ]);
    }
}
