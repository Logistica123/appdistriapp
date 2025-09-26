<?php

namespace App\Http\Controllers\V1\App;

use App\Action;
use App\Driver;
use App\Exceptions\RouteSequenceUnavailableException;
use App\Exceptions\UnavailableHereAPIException;
use App\Http\Controllers\Controller;
use App\Location;
use App\Order;
use App\Services\OrderService;
use App\Traits\HereMapsAPITrait;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    use HereMapsAPITrait;

    public function update(Request $request, Order $order)
    {
        $order->receiver = $request->receiver;
        $order->description = $request->description;
        $order->phone = $request->phone;
        $order->update();

        $order->location->city = $request->city;
        $order->location->address = $request->address;
        $order->location->b = $request->b;
        $order->location->v = $request->v;
        $order->location->s = $request->s;
        $order->location->m = $request->m;
        $order->location->c = $request->c;
        $order->location->update();

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Información actualizada'
        ]);
    }

    public function delete(Order $order)
    {
        if ($order->status === 'pending') {
            $order->delete();
        } else {
            if ($order->status === 'delivered') {
                return response()->json([
                    'success' => true,
                    'status' => $order,
                    'custom_message' => 'No puedes eliminar esta orden porque ya fue entregada'
                ], 400);
            }
            return response()->json([
                'success' => true,
                'status' => $order,
                'custom_message' => 'No puedes eliminar esta orden'
            ], 400);
        }

        return response()->json([
            'success' => true,
            'deleted' => true,
            'message' => 'resource deleted',
            'custom_message' => 'Registro eliminado'
        ]);
    }

    public function optimizeWithGoogle($orders, $request)
    {
        $origin = $request->lat . ',' . $request->lng;
        $destination = $request->lat . ',' . $request->lng;
        $waypoints = 'optimize:true';

        foreach ($orders as $order) {
            $waypoints = $waypoints . '|' . $order->location->lat . ',' . $order->location->lng;
        }

        $params = 'origin=' . $origin
            . '&destination=' . $destination
            . '&waypoints=' . $waypoints
            . '&key=' . config('googlemaps.key');

        Log::channel('debuglog')->debug(json_encode($params));

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://maps.googleapis.com/maps/api/directions/json?" . $params,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
        ));

        $response = curl_exec($curl);
        Log::channel('debuglog')->debug(json_encode($response));
        $retry = 0;
        while (curl_errno($curl) == 28 && $retry < 3) {
            $response = curl_exec($curl);
            $retry++;
        }

        curl_close($curl);
        $decoded_res = json_decode($response);

        $orders_ids = $orders->pluck('id')->toArray();

        for ($i = 0; $i < sizeof($decoded_res->routes[0]->waypoint_order); $i++) {
            $order = Order::findOrFail($orders_ids[$i]);
            $order->optimization_order = $i + 1;
            $order->update();
        }

        $orders = $this->getOrdersToDeliver($request);

        return $orders;
    }

    public function optimizeWithHereMapsApi($orders, $request)
    {
        $destination = '';
        $i = 1;
        foreach ($orders as $order) {
            $destination = $destination . '&' . 'destination' . $i . '=' . $order->location->lat . ',' . $order->location->lng;
            $i++;
        }

        $destination = ltrim($destination, $destination[0]);
        $params = $destination
            . '&start=' . $request->lat . ',' . $request->lng
//            . '&end=' . $request->lat . ',' . $request->lng
            . '&improveFor=time'
            . '&mode=fastest;car'
            . '&apiKey=KKr3g3d5rNj7Rr7yo6pbqjkewsSQk_Y3umaoZPQicbI';

        $oauth_grant_type = 'client_credentials';
        $oauth_consumer_key = env("HERE_CONSUMER_KEY");
        $oauth_nonce = substr(md5(uniqid(mt_rand(), true)), 0, 11);
        $oauth_signature_method = 'HMAC-SHA256';
        $oauth_timestamp = time();
        $oauth_version = '1.0';

        $kv1 = 'grant_type=' . rawurlencode($oauth_grant_type);
        $kv2 = 'oauth_consumer_key=' . rawurlencode($oauth_consumer_key);
        $kv3 = 'oauth_nonce=' . rawurlencode($oauth_nonce);
        $kv4 = 'oauth_signature_method=' . rawurlencode($oauth_signature_method);
        $kv5 = 'oauth_timestamp=' . rawurlencode($oauth_timestamp);
        $kv6 = 'oauth_version=' . rawurlencode($oauth_version);

        $encoded_parameters = rawurlencode($kv1 . '&' . $kv2 . '&' . $kv3 . '&' . $kv4 . '&' . $kv5 . '&' . $kv6);
        $base_string = 'POST' . '&' . rawurlencode('https://account.api.here.com/oauth2/token') . '&' . $encoded_parameters;
        $signature = rawurlencode(base64_encode(hash_hmac('sha256', $base_string, (env("HERE_CONSUMER_SECRET") . '&'), true)));

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://account.api.here.com/oauth2/token",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => "grant_type=client_credentials",
            CURLOPT_HTTPHEADER => array(
                "Content-Type: application/x-www-form-urlencoded",
                "Authorization: OAuth oauth_consumer_key=\"$oauth_consumer_key\",oauth_nonce=\"$oauth_nonce\",oauth_signature=\"$signature\",oauth_signature_method=\"$oauth_signature_method\",oauth_timestamp=\"$oauth_timestamp\",oauth_version=\"$oauth_version\""
            ),
        ));

        $response = curl_exec($curl);
        Log::channel('debuglog')->debug(json_encode($response));
        $retry = 0;
        while (curl_errno($curl) == 28 && $retry < 3) {
            $response = curl_exec($curl);
            $retry++;
        }

        curl_close($curl);
        $decoded_res = json_decode($response);

        $access_token = $decoded_res->access_token;

        if ($access_token && $access_token != '') {
            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => "https://wse.ls.hereapi.com/2/findsequence.json?" . $params,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET",
                CURLOPT_HTTPHEADER => array(
                    "Content-Type: application/x-www-form-urlencoded",
                    "Authorization: Bearer $access_token"
                ),
            ));

            $response = curl_exec($curl);
            $retry = 0;
            while (curl_errno($curl) == 28 && $retry < 3) {
                $response = curl_exec($curl);
                $retry++;
            }

            curl_close($curl);
            $decoded_response = json_decode($response);
            Log::channel('hereapilog')->debug(json_encode($decoded_response));

            if ($decoded_response) {
                if ($decoded_response->responseCode == 200) {
                    $sequence_ids = [];
                    $arranged_ids = [];
                    $orders_ids = $orders->pluck('id')->toArray();
                    foreach ($decoded_response->results[0]->waypoints as $waypoint) {
                        if (($pos = strrpos($waypoint->id, "destination")) !== FALSE) {
                            $str = $waypoint->id;
                            $del = "destination";
                            $pos = strpos($str, $del);
                            $important = substr($str, $pos + strlen($del), strlen($str) - 1);
                            array_push($sequence_ids, (int)$important);
                        }
                    }

                    foreach ($sequence_ids as $s) {
                        array_push($arranged_ids, $orders_ids[$s - 1]);
                    }

                    $i = 1;
                    foreach ($arranged_ids as $id) {
                        $order = Order::findOrFail($id);
                        $order->optimization_order = $i;
                        $order->update();
                        $i++;
                    }
                    $orders = $this->getOrdersToDeliver($request);
                    return $orders;
                } else {
                    throw new RouteSequenceUnavailableException();
                }
            } else {
                throw new UnavailableHereAPIException();
            }
        } else {
            throw new UnavailableHereAPIException();
        }
    }

    public function getOrdersByDate(Request $request, $type, $day, $month, $year)
    {
        $driver = $request->user();
        $orders = \App\Services\V1\OrderService::getOrdersByDate($request->user(), $type, $day, $month, $year);

        return response()->json([
            'success' => true,
            'orders' => $orders,
            'driver' => $driver
        ]);
    }

    public function store(Request $request)
    {
        Log::channel('debuglog')->info(json_encode($request->all()));
        $order = new Order();
        $order->driver_id = $request->user()->id;
        $order->type = $request->type;
        $order->status = 'pending';
        $order->location_id = $request->location_id;
        $order->receiver = $request->full_name ? $request->full_name : $request->company_name;
        $order->description = $request->details;
        $order->phone = $request->phone;
        $order->flag_color = $request->flag_color;
        if ($request->date === 'today') {
            $order->date = Carbon::today();
        } else if ($request->day === 'tomorrow') {
            $order->date = Carbon::tomorrow();
        } else {
            $order->date = Carbon::parse($request->date)->format('Y-m-d');
        }
        $order->save();

        $location = Location::findOrFail($request->location_id);
        if (isset($request->notes)) {
            $location->notes = $request->notes;
        };
        if (isset($request->opening_hours)) {
            $location->opening_hours = $request->opening_hours;
        }

        if (isset($request->phones)) {
            $location->phones = $request->phones;
        }

        $location->b = $request->b;
        $location->v = $request->v;
        $location->s = $request->s;
        $location->m = $request->m;
        $location->c = $request->c;
        $location->update();

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Entrega agregada',
            'order' => $order
        ]);
    }

    public function setDeliveredOrder(Request $request, Order $order)
    {
        $orderService = new OrderService();
        $orderService->setDeliveredOrder($request, $order);

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Información registrada'
        ]);
    }

    public function setDeliveredOrderOffline(Request $request, Order $order)
    {
        $orderService = new OrderService();
        $orderService->setDeliveredOrder($request, $order);

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
//            'custom_message' => 'Información registrada'
        ]);
    }

    public function setNotDeliveredOrder(Request $request, Order $order)
    {
        DB::transaction(function () use ($request, $order) {
            $order->status = 'not-delivered';
            $order->not_delivered_at = Carbon::now();
            $order->not_delivered_reason = $request->not_delivered_motive;
            $order->not_delivered_description = $request->not_delivered_description;

            if ($order->not_delivered_reason === 'nueva dirección') {
                $order->location->name = $request->location_name;
                $order->location->address = $request->location_address;
                $order->location->b = $request->b;
                $order->location->v = $request->v;
                $order->location->s = $request->s;
                $order->location->m = $request->m;
                $order->location->c = $request->c;
                $order->location->update();
            }

            if ($request->save_client) {
                $driver = $request->user();
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
        });

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Información registrada'
        ]);
    }

    public function setOrderStatus(Request $request, Order $order)
    {
        $order->status = $request->status;

        if ($request->status === 'skipped') {
            $order->skipped_at = Carbon::now();
        } else if ($request->status === 'delivered') {
            $order->delivered_at = Carbon::now();
            $order->skipped_at = null;
        }

        $order->update();
//
//        $driver = $request->user();
//
//        $orders = Order::driverOrders($driver)
//            ->todayOrders()
//            ->with('location')
//            ->orderBy('delivery_order')
//            ->get();
//
//        $skipped_orders_count = Order::driverOrders($driver)
//            ->todayOrders()
//            ->where('status', 'skipped')
//            ->count();
//
//        $pending_orders_count = Order::driverOrders($driver)
//            ->todayOrders()
//            ->where('status', 'pending')
//            ->count();
//
//        $completed_orders_count = Order::driverOrders($driver)
//            ->todayOrders()
//            ->where('status', 'delivered')
//            ->count();
//
//
//        $indicator = $orders->count() - ($pending_orders_count + $skipped_orders_count) . '/' . $orders->count();
//
//        $percentage_delivered = $orders->count() == 0
//            ? 0
//            : round($completed_orders_count / $orders->count() * 100);
//
//        $this->calculateETA($request);

        return response()->json([
            'success' => true,
            'updated' => true,
//            'skipped_orders_count' => $skipped_orders_count,
//            'percentage_delivered' => $percentage_delivered,
//            'indicator' => $indicator,
            'message' => 'resource updated',
//            'custom_message' => 'Orden actualizada'
        ]);
    }

    public function calculateETA(Request $request)
    {
        try {
            Log::channel('eta')->debug('next order id:');
            Log::channel('eta')->debug(json_encode($request->nextOrderId));
            if ($request->nextOrderId != null) {
                $next_order = Order::find($request->nextOrderId);
                Log::channel('eta')->debug(json_encode($next_order));

                $driver = $request->user();

                $orders = Order::TodayOrders()
                    ->driverOrders($driver)
                    ->whereType($request->type)
                    ->whereStatus('delivered')
                    ->with('location', 'journeys')
                    ->orderBy('optimization_order')
                    ->get();
                Log::channel('eta')->debug(json_encode('************'));

                foreach ($orders as $order) {
                    Log::channel('eta')->debug($order->id . ' - ' . $order->delivered_at);
                }

                $orders = Order::TodayOrders()
                    ->driverOrders($driver)
                    ->whereType($request->type)
                    ->whereStatus('delivered')
                    ->with('location', 'journeys')
                    ->orderBy('delivered_at')
                    ->pluck('delivered_at')
                    ->toArray();

                if (sizeof($orders) > 2 && $next_order->phone != null) {
                    $total_minutes = 0;
                    for ($i = 0; $i < sizeof($orders); $i++) {
                        if ($i + 1 < sizeof($orders)) {
                            $diff_in_minutes = \Illuminate\Support\Carbon::createFromFormat('Y-m-d H:i:s', $orders[$i])
                                ->diffInMinutes(Carbon::createFromFormat('Y-m-d H:i:s', $orders[$i + 1]));
                            Log::channel('eta')->debug($diff_in_minutes);
                            $total_minutes += $diff_in_minutes;
                        }
                    }
                    Log::channel('eta')->debug('Total minutes: ' . $total_minutes);
                    Log::channel('eta')->debug('#Ordenes: ' . sizeof($orders));
                    Log::channel('eta')->debug('#Tel: ' . $next_order->phone);
                    $approximate_minutes = round($total_minutes / sizeof($orders)) + 0;
                    Log::channel('eta')->debug($approximate_minutes);
                    $message = 'Su paquete será entregado en aproximadamente ' . $approximate_minutes . ' minutos';
                    $ch = curl_init();

                    curl_setopt($ch, CURLOPT_URL, "https://api.chat-api.com/instance166770/sendMessage?token=tmcb4e6rrh056c6i");
                    curl_setopt($ch, CURLOPT_POST, 1);
                    curl_setopt($ch, CURLOPT_POSTFIELDS,
                        array('phone' => '5493795073930', 'body' => $message));
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                    $server_output = curl_exec($ch);
                    Log::channel('eta')->debug($server_output);
                    curl_close($ch);
                }
            }
        } catch (\Exception $e) {

        }
    }

    public function optimizeOrders(Request $request)
    {
        $orders = Order::whereIn('id', $request->orders_ids)->with('location')->get();
        $destination = '';
        $i = 1;
        foreach ($orders as $order) {
            $destination = $destination . '&' . 'destination' . $i . '=' . $order->location->lat . ',' . $order->location->lng;
            $i++;
        }

        $destination = ltrim($destination, $destination[0]);
        $params = $destination
            . '&start=' . $request->lat . ',' . $request->lng
//            . '&end=' . $request->lat . ',' . $request->lng
            . '&improveFor=time'
            . '&mode=fastest;car'
            . '&apiKey=KKr3g3d5rNj7Rr7yo6pbqjkewsSQk_Y3umaoZPQicbI';

        try {
            if (count($orders) <= 23) {
                //GOOGLE MAPS API
                $orders_sequence = $this->optimizeWaypoints($orders, $params);
            } else {
                //HERE MAPS API
                $orders_sequence = $this->optimizeWaypoints($orders, $params);
            }
        } catch (\Exception $exception) {
            try {
                $orders_sequence = $this->optimizeWaypoints($orders, $params);
            } catch (\Exception $exception) {
                return response()->json([
                    'success' => true,
                    'orders' => $orders,
                ]);
            }
        }

        $placeholders = implode(',', array_fill(0, count($orders_sequence), '?')); // string for the query

        $orders = Order::whereIn('id', $orders_sequence)
            ->orderByRaw("field(id,{$placeholders})", $orders_sequence)
            ->with('location')
            ->get();

        return response()->json([
            'success' => true,
            'orders' => $orders,
            '$orders_sequence' => $orders_sequence
        ]);
    }

    public function setDeliveryOrderToOrders(Request $request)
    {
        $ordersIds = $request->ordersIds;
        \App\Services\V1\OrderService::setDeliveryOrderToOrders($ordersIds);

        return response()->json([
            'success' => true,
        ]);
    }

}
