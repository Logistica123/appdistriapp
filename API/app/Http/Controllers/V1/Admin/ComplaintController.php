<?php

namespace App\Http\Controllers\V1\Admin;

use App\Complaint;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class ComplaintController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->query('status');

        $complaints = Complaint::with(['driver:id,name,last_name,email,phone_number'])
            ->when($status, function ($query) use ($status) {
                $query->where('status', $status);
            })
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'complaints' => $complaints,
        ]);
    }

    public function updateStatus(Request $request, Complaint $complaint)
    {
        $data = $request->validate([
            'status' => 'required|in:open,in_progress,resolved',
            'admin_notes' => 'nullable|string',
        ]);

        $complaint->status = $data['status'];
        $complaint->admin_notes = $data['admin_notes'] ?? $complaint->admin_notes;
        $complaint->resolved_at = $complaint->status === 'resolved' ? Carbon::now() : null;
        $complaint->save();

        return response()->json([
            'success' => true,
            'updated' => true,
            'complaint' => $complaint->fresh(['driver:id,name,last_name,email,phone_number']),
        ]);
    }
}
