<?php

namespace App\Http\Controllers\V1\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class RewardController extends Controller
{
    public function balance(Request $request)
    {
        $driver = $request->user();

        $lastClosure = optional($driver->routeClosures()->latest('date')->first());

        return response()->json([
            'success' => true,
            'total_points' => (int) ($driver->reward_points ?? 0),
            'last_closure' => $lastClosure ? [
                'date' => Carbon::parse($lastClosure->date)->toDateString(),
                'deliveries' => $lastClosure->deliveries,
                'points_awarded' => $lastClosure->points_awarded,
            ] : null,
            'total_closures' => $driver->routeClosures()->count(),
        ]);
    }
}
