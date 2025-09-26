<?php

namespace App\Http\Controllers\V1\App;

use App\Http\Controllers\Controller;
use App\UploadedDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class UploadedDocumentController extends Controller
{
    public function index(Request $request)
    {
        $uploaded_documents = UploadedDocument::driverUploadedDocuments($request->user())
            ->with('document.documentType', 'documentFiles')
            ->get();

        return response()->json([
            'success' => true,
            'uploaded_documents' => $uploaded_documents
        ]);
    }

    public function store(Request $request)
    {
        $uploaded_document = new UploadedDocument();
        $uploaded_document->driver_id = $request->user()->id;
        $uploaded_document->document_id = $request->document_id;
        $uploaded_document->save();

        return response()->json([
            'success' => true,
            'uploaded_document' => $uploaded_document
        ]);
    }

    public function delete(UploadedDocument $uploadedDocument)
    {
        $file_paths_to_delete = DB::transaction(function () use ($uploadedDocument) {
            $file_paths_to_delete = [];
            foreach ($uploadedDocument->documentFiles as $item) {
                array_push($file_paths_to_delete, $item->file_path);
            }
            $uploadedDocument->documentFiles()->delete();
            $uploadedDocument->delete();

            return $file_paths_to_delete;
        });

        Storage::disk('maintenance')->delete($file_paths_to_delete);

        return response()->json([
            'success' => true,
            'deleted' => true,
            'message' => 'resource deleted',
            'custom_message' => 'Registro eliminado'
        ]);
    }
}
