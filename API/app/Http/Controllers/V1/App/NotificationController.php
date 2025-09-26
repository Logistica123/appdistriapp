<?php

namespace App\Http\Controllers\V1\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index(Request $request)
    {
        $driver = $request->user();
        $driver->load(['notifications' => function ($q) {
            $q->latest()->take(25);
        }])->get();

        $notifications = $driver->notifications;

        return response()->json([
            'success' => true,
            'notifications' => $notifications
        ]);
    }
}
