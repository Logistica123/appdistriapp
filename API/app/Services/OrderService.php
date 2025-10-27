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

                $geoAction = Action::where('action', 'geolocalization')->first();
                if ($geoAction) {
                    $driver->score = ($driver->score ?? 0) + $geoAction->credits;
                    $driver->update();
                    $order->actions()->attach($geoAction);
                }

                $order->location->lat = $request->lat;
                $order->location->lng = $request->lng;
                $order->location->saved_client = 1;
                $order->location->update();
            }
            $order->update();

            $deliveredAction = Action::whereAction('delivered')->first();
            if ($deliveredAction) {
                $driver->score = ($driver->score ?? 0) + $deliveredAction->credits;
                $driver->update();
                $order->actions()->attach($deliveredAction);
            }
        });
    }
}
