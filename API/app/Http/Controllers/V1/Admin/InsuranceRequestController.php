<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\InsuranceRequest;
use Illuminate\Http\Request;

class InsuranceRequestController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->query('status');

        $insuranceRequests = InsuranceRequest::with([
            'driver:id,name,last_name,email,phone_number,company_id',
            'driver.driverCompany:id,name'
        ])
            ->when($status, function ($query) use ($status) {
                $query->where('status', $status);
            })
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'insurance_requests' => $insuranceRequests,
        ]);
    }
}
