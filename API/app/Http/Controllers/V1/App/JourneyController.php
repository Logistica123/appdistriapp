<?php

namespace App\Http\Controllers\V1\App;

use App\Exceptions\RouteSequenceUnavailableException;
use App\Exceptions\UnavailableHereAPIException;
use App\Http\Controllers\Controller;
use App\Journey;
use App\Location;
use App\Order;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class JourneyController extends Controller
{
    protected $api_key;
    protected $api_secret;

    public function __construct()
    {
        $this->api_key = env('HERE_CONSUMER_KEY');
        $this->api_secret = env('HERE_CONSUMER_SECRET');
    }

    public function index(Request $request)
    {
        $driver = $request->user();
        $journey = Journey::driverJourneys($driver)
            ->todayJourneys()
            ->isNotFinished()
            ->with('orders.location')
            ->first();

        return response()->json([
            'success' => true,
            'journey' => $journey
        ]);
    }

    public function store(Request $request)
    {
        $driver = $request->user();
        $journey = Journey::driverJourneys($driver)
            ->whereType($request->type)
            ->todayJourneys()
            ->isNotFinished()
            ->first();

        if (!$journey) {
            $journey = new Journey();
            $journey->type = $request->type;
            $journey->origin_lat = $request->lat;
            $journey->origin_lng = $request->lng;
            $journey->driver_id = $driver->id;
            $journey->save();
        }

        $journey->orders()->detach();
        foreach ($request->order_ids as $order_id) {
            $journey->orders()->attach($order_id);
        }

        return response()->json([
            'success' => true,
            'orders' =>  $journey->orders->load('location')
        ]);
    }

    public function finishJourney(Request $request)
    {
        $driver = $request->user();
        $journey = Journey::driverJourneys($driver)
            ->todayJourneys()
            ->isNotFinished()
            ->with('orders.location')
            ->first();

        if ($journey) {
            $journey->finished = 1;
            $destinations = '';
            $journey->orders->map(function ($order) use (&$destinations) {
                $destinations = $destinations . $order->location->lat . "," . $order->location->lng . "|";
            });

//                $response = \GoogleMaps::load('distancematrix')
//                    ->setParam([
//                        "origins" => "$journey->origin_lat,$journey->origin_lng",
//                        "destinations" => "$destinations",
//                        "mode" => "driving",
//                    ])
//                    ->get();
//
//                $result = json_decode($response);
//
//                if ($result->status === 'OK') {
//                    $distance = 0;
//                    $duration = 0;
//                    foreach ($result->rows[0]->elements as $element) {
//                        $distance += $element->distance->value;
//                        $duration += $element->duration->value;
//                    }
//
//                    $journey->distance = $distance;
//                    $journey->duration = $duration;
//                }
            $distance = 0;
            $duration = 0;

            $journey->distance = $distance;
            $journey->duration = $duration;
            $journey->update();
        }

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Viaje finalizado'
        ]);
    }

//    public function store(Request $request)
//    {
//        $response = DB::transaction(function () use ($request) {
//            Log::channel('debuglog')->debug(json_encode($request->all()));
//            Log::channel('debuglog')->debug(json_encode($request->lat));
//            Log::channel('debuglog')->debug(json_encode($request->lng));
//
//            $driver = $request->user();
//
//            $journey = Journey::driverJourneys($driver)
//                ->whereType($request->type)
//                ->todayJourneys()
//                ->isNotFinished()
//                ->first();
//
//            if (!$journey) {
//                $journey = new Journey();
//                $journey->type = $request->type;
//                $journey->origin_lat = $request->lat;
//                $journey->origin_lng = $request->lng;
//                $journey->driver_id = $driver->id;
//                $journey->save();
//            }
//
//            $random_location = Location::inRandomOrder()->first();
//
////            $request->lat = -27.491048;
////            $request->lng = -58.834579;
//
//            if (!isset($request->optimize)) {
//                $request->optimize = true;
//            }
//
//            if (!$request->optimize) {
//                $journey->orders()->detach();
//                foreach ($request->order_ids as $id) {
//                    $journey->orders()->attach($id);
//                }
//            } else {
//                $orders = Order::driverOrders($driver)
//                    ->whereType($request->type)
//                    ->todayOrders()
//                    ->notDeliveredStatus()
//                    ->with('location')
//                    ->get();
//
//                $destination = '';
//                $i = 1;
//                foreach ($orders as $order) {
//                    $destination = $destination . '&' . 'destination' . $i . '=' . $order->location->lat . ',' . $order->location->lng;
//                    $i++;
//                }
//
//                $destination = ltrim($destination, $destination[0]);
//                $params = $destination
//                    . '&start=' . $request->lat . ',' . $request->lng
//                    . '&end=' . $request->lat . ',' . $request->lng
//                    . '&improveFor=time'
//                    . '&mode=fastest;car'
//                    . '&apiKey=KKr3g3d5rNj7Rr7yo6pbqjkewsSQk_Y3umaoZPQicbI';
//
//                $access_token = $this->generateToken();
//
//                if ($access_token && $access_token != '') {
//                    $curl = curl_init();
//                    curl_setopt_array($curl, array(
//                        CURLOPT_URL => "https://wse.ls.hereapi.com/2/findsequence.json?" . $params,
//                        CURLOPT_RETURNTRANSFER => true,
//                        CURLOPT_ENCODING => "",
//                        CURLOPT_MAXREDIRS => 10,
//                        CURLOPT_TIMEOUT => 0,
//                        CURLOPT_FOLLOWLOCATION => true,
//                        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//                        CURLOPT_CUSTOMREQUEST => "GET",
//                        CURLOPT_HTTPHEADER => array(
//                            "Content-Type: application/x-www-form-urlencoded",
//                            "Authorization: Bearer $access_token"
//                        ),
//                    ));
//
//                    $response = curl_exec($curl);
//                    $retry = 0;
//                    while(curl_errno($curl) == 28 && $retry < 3){
//                        $response = curl_exec($curl);
//                        $retry++;
//                    }
//
//                    curl_close($curl);
//                    $decoded_response = json_decode($response);
//                    Log::channel('hereapilog')->debug(json_encode($decoded_response));
//
//                    if ($decoded_response) {
//                        if ($decoded_response->responseCode == 200) {
//                            $sequence_ids = [];
//                            $arranged_ids = [];
//                            $orders_ids = $orders->pluck('id')->toArray();
//                            foreach ($decoded_response->results[0]->waypoints as $waypoint) {
//                                if (($pos = strrpos($waypoint->id, "destination")) !== FALSE) {
//                                    $str = $waypoint->id;
//                                    $del = "destination";
//                                    $pos = strpos($str, $del);
//                                    $important = substr($str, $pos + strlen($del), strlen($str) - 1);
//                                    array_push($sequence_ids, (int)$important);
//                                }
//                            }
//
//                            foreach ($sequence_ids as $s) {
//                                array_push($arranged_ids, $orders_ids[$s - 1]);
//                            }
//                            $journey->orders()->detach();
//                            foreach ($arranged_ids as $id) {
//                                $journey->orders()->attach($id);
//                            }
//                            return $decoded_response->results[0]->waypoints;
//                        } else {
//                            throw new RouteSequenceUnavailableException();
//                        }
//                    } else {
//                        throw new UnavailableHereAPIException();
//                    }
//                } else {
//                    throw new UnavailableHereAPIException();
//                }
//            }
//        });
//
//        return response()->json([
//            'success' => true,
//            'response' => $response
//        ]);
//    }

    protected function generateToken()
    {
        $oauth_grant_type = 'client_credentials';
        $oauth_consumer_key = $this->api_key;
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
        $signature = rawurlencode(base64_encode(hash_hmac('sha256', $base_string, ('nzc25kC-aUSeIyqq01wmSppggptz3-m904Pd-mxGWElRUCaUTkeShOGs6X5m1fS2D-Z4zFkSSBgH-4ZlVk8gJQ&'), true)));

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
        return $decoded_res->access_token;
    }
}
