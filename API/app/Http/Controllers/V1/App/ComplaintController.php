<?php

namespace App\Http\Controllers\V1\App;

use App\Complaint;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ComplaintController extends Controller
{
    public function index(Request $request)
    {
        $driver = $request->user();

        $complaints = $driver->complaints()
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'complaints' => $complaints,
        ]);
    }

    public function store(Request $request)
    {
        $types = ['payment', 'fuel_increase', 'tax_recognition', 'liquidation', 'other'];

        $data = $request->validate([
            'type' => ['required', 'string', 'max:120', Rule::in($types)],
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);

        $complaint = $request->user()->complaints()->create([
            'type' => $data['type'],
            'subject' => $data['subject'] ?? null,
            'message' => $data['message'],
        ]);

        return response()->json([
            'success' => true,
            'created' => true,
            'complaint' => $complaint,
            'custom_message' => 'Reclamo enviado correctamente',
        ], 201);
    }
}
