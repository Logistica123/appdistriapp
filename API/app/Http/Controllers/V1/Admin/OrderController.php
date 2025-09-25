<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Order;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    public function index(Request $request, $type)
    {
        $orders = Order::whereHas('driver', function ($q) use ($request) {
            $q->where('admin_id', $request->user()->id)
                ->whereNotIn('drivers.id', [1, 2, 3]);
        })
            ->with('driver', 'location', 'deliveryImages')
            ->whereType($type)
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'orders' => $orders
        ]);
    }

    public function getOrdersByDate(Request $request, $type, $month, $year)
    {
        $orders = Order::whereHas('driver', function ($q) use ($request) {
            $q->where('admin_id', $request->user()->id)
                ->whereNotIn('drivers.id', [1, 2, 3]);
        })
            ->with('driver', 'location', 'deliveryImages')
            ->whereType($type)
            ->whereMonth('date', $month)
            ->whereYear('date', $year)
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'orders' => $orders
        ]);
    }

    public function getOrdersByDateRange(Request $request, $type, $start_date, $end_date)
    {
        $date_start = Carbon::parse($start_date)->format('Y-m-d');
        $date_end = Carbon::parse($end_date)->format('Y-m-d');

        $orders = Order::whereHas('driver', function ($q) use ($request) {
            $q->where('admin_id', $request->user()->id)
                ->whereNotIn('drivers.id', [1, 2, 3]);
        })
            ->with('driver', 'location', 'deliveryImages')
            ->where('type', $type)
            ->whereBetween('created_at', [$date_start . " 00:00:00", $date_end . " 23:59:59"])
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'orders' => $orders
        ]);
    }
}
