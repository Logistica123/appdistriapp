<?php

namespace App\Http\Controllers\V1\App;

use App\Http\Controllers\Controller;
use App\Location;
use App\Order;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use GeoHash;

class LocationController extends Controller
{
    public function index(Request $request)
    {
        $locations = Location::with(['orders' => function($q) {
           $q->whereRaw('LENGTH(receiver) >= 2')
               ->select('location_id', 'receiver', 'phone', 'saved_client')->distinct();
        }])
            ->get();

        return response()->json([
            'success' => true,
            'locations' => $locations
        ]);
    }

    public function getLocationsByKeyword($keyword)
    {
        $locations = Location::where(function ($q) use($keyword) {
            $q->where('address', 'like', '%' . $keyword . '%')
                ->orWhere('name', 'like', '%' . $keyword . '%')
                ->orWhere('city', 'like', '%' . $keyword . '%')
                ->orWhere('notes', 'like', '%' . $keyword . '%')
                ->orWhere('locality', 'like', '%' . $keyword . '%')
                ->orWhere('administrative_area_level_1', 'like', '%' . $keyword . '%')
                ->orWhere('administrative_area_level_2', 'like', '%' . $keyword . '%');
        })->get();

        return response()->json([
            'success' => true,
            'locations' => $locations
        ]);
    }

    public function store(Request $request)
    {
        $driver = $request->user();
        $maxDistance = (float) config('services.routes.max_location_distance_km', 100);

        if ($maxDistance > 0
            && $driver->start_lat
            && $driver->start_lng
            && $request->lat
            && $request->lng
        ) {
            $distance = $this->distanceInKm(
                (float) $driver->start_lat,
                (float) $driver->start_lng,
                (float) $request->lat,
                (float) $request->lng
            );

            if ($distance > $maxDistance) {
                return response()->json([
                    'success' => false,
                    'message' => 'Selected location is too far from driver start position',
                    'custom_message' => 'La dirección se encuentra fuera del radio permitido de ' . $maxDistance . ' km'
                ], 422);
            }
        }

        DB::transaction(function () use ($request) {
            $address = $request->address
                ? $request->address
                : $request->b . ' ' . $request->v . ' ' . $request->s . ' ' . $request->m . ' ' . $request->c;

            $location = new Location();
            $location->name = $address;
            $location->b = $request->b;
            $location->v = $request->v;
            $location->s = $request->s;
            $location->m = $request->m;
            $location->c = $request->c;
            $location->address = $address;
            $location->city = $request->city;
            $location->notes = $request->notes;
            $location->opening_hours = $request->opening_hours;
            $location->phones = $request->phones;
            $location->locality = $request->locality;
            $location->administrative_area_level_1 = $request->administrative_area_level_1;
            $location->administrative_area_level_2 = $request->administrative_area_level_2;
            $location->lat = $request->lat;
            $location->lng = $request->lng;
            $location->save();

            if ($request->date === 'today') {
                $date= Carbon::today();
            } else if ($request->day === 'tomorrow') {
                $date = Carbon::tomorrow();
            } else {
                $date = Carbon::parse($request->date)->format('Y-m-d');
            }

            $location->drivers()->attach($request->user()->id, [
                'status' => 'pending',
                'type' => $request->type,
                'receiver' => $request->full_name ? $request->full_name : $request->company_name,
                'description' => $request->details,
                'phone' => $request->phone,
                'flag_color' => $request->flag_color,
                'date' => $date
            ]);
        });

        $locations = Location::with(['orders' => function($q) {
            $q->whereRaw('LENGTH(receiver) >= 2')
                ->select('location_id', 'receiver', 'phone')->distinct();
        }])
            ->get();

        return response()->json([
            'success' => true,
            'stored' => true,
            'message' => 'resource stored',
            'custom_message' => 'Entrega registrada',
            'locations' => $locations
        ]);
    }

    protected function distanceInKm(float $lat1, float $lng1, float $lat2, float $lng2): float
    {
        $earthRadius = 6371; // km

        $latFrom = deg2rad($lat1);
        $latTo = deg2rad($lat2);
        $latDelta = deg2rad($lat2 - $lat1);
        $lngDelta = deg2rad($lng2 - $lng1);

        $a = sin($latDelta / 2) * sin($latDelta / 2) +
            cos($latFrom) * cos($latTo) *
            sin($lngDelta / 2) * sin($lngDelta / 2);
        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

        return $earthRadius * $c;
    }

    public function updateCoords(Request $request, $location_id)
    {
        $location = Location::findOrFail($location_id);
        $location->lat = $request->lat;
        $location->lng = $request->lng;
        $location->update();

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Coordenadas actualizadas',
            'lat' => $location->lat,
            'lng' => $location->lng,
        ]);
    }

    public function geohash(Location $location)
    {
        $geo = GeoHash::encode($location->lat, $location->lng);
        $neighbors = GeoHash::neighbors($geo);
        dd($neighbors);
    }

    public function geocodeAddress(Request $request)
    {
        $curl = curl_init();
        $url = 'http://www.mapquestapi.com/geocoding/v1/address'
            . '?key=' . config('services.mapquest.consumer_key')
            . '&location=' . urlencode($request->address)
            . '&maxResults=1';
        Log::channel('debuglog')->debug(($url));

        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(),
        ));

        $response = curl_exec($curl);

        $retry = 0;
        while (curl_errno($curl) == 28 && $retry < 3) {
            $response = curl_exec($curl);
            $retry++;
        }
        curl_close($curl);
        $decoded_res = json_decode($response);
        Log::channel('debuglog')->debug(json_encode($response));
        return response()->json([
            'success' => true,
            'lat' => $decoded_res->results[0]->locations[0]->latLng->lat,
            'lng' => $decoded_res->results[0]->locations[0]->latLng->lng
        ]);
    }
}
