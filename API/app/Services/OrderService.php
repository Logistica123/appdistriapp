<?php

namespace App\Services;

use App\Action;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class OrderService {
    public function setDeliveredOrder($request, $order)
    {
        DB::transaction(function () use ($request, $order) {
            $driver = $request->user();
            $order->status = 'delivered';
            $order->delivered_at = Carbon::now();
            if ($request->save_client) {
                $order->saved_client = 1;

                $action = Action::where('action', 'geolocalization')->first();
                $driver->score += $action->credits;
                $driver->update();

                $order->location->lat = $request->lat;
                $order->location->lng = $request->lng;
                $order->location->saved_client = 1;
                $order->location->update();
            }
            $order->update();

            $action = Action::whereAction('delivered')->first();
            $driver->score += $action->credits;
            $driver->update();
            $order->actions()->attach($action);
        });
    }
}
