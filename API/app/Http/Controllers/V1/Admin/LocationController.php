<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Location;
use App\UpdateLocationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LocationController extends Controller
{
    public function index()
    {
        $locations = Location::with('updateRequests')
            ->latest()
            ->get();

        $locations->map(function ($location) {
            if (count($location->updateRequests) > 0) {
                $location->has_request = 'Sí';
            } else {
                $location->has_request = 'No';
            }
        });

        return response()->json([
            'success' => true,
            'locations' => $locations
        ]);
    }

    public function store(Request $request)
    {
        DB::transaction(function () use ($request) {
            $location = new Location();
            $location->address = $request->address;
            $location->locality = $request->locality;
            $location->administrative_area_level_1 = $request->administrative_area_level_1;
            $location->administrative_area_level_2 = $request->administrative_area_level_2;
            $location->lat = $request->lat;
            $location->lng = $request->lng;
            $location->save();
            $location->geofences()->sync($request->geofence_id);
        });

        return response()->json([
            'success' => true,
            'stored' => true,
            'message' => 'resource stored',
            'custom_message' => 'Ubicación guardada'
        ]);
    }

    public function update(Request $request,  $location_id)
    {
        $location = Location::findOrFail($location_id);
        $location->name = $request->name;
        $location->address = $request->address;
        $location->city = $request->city;
//        $location->notes = $request->notes;
//        $location->opening_hours = $request->opening_hours;
//        $location->phones = $request->phones;
//        $location->locality = $request->locality;
//        $location->administrative_area_level_1 = $request->administrative_area_level_1;
//        $location->administrative_area_level_2 = $request->administrative_area_level_2;
        $location->update();

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Ubicación actualizada'
        ]);
    }

    public function updateCoords(Request $request, $location)
    {
        $location = Location::findOrfail($location);
        $location->lat = $request->lat;
        $location->lng = $request->lng;
        $location->update();

        UpdateLocationRequest::where('location_id', $location->id)
            ->delete();

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'custom_message' => 'Coordenadas actualizadas'
        ]);
    }

    public function delete(Location $location)
    {
        try {
            $location->delete();

            return response()->json([
                'success' => true,
                'deleted' => true,
                'message' => 'resource deleted',
                'custom_message' => 'Ubicación eliminada'
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'custom_message' => 'Ubicación no pudo ser eliminada'
            ], 400);
        }
    }

    public function getLocationsCount()
    {
        $locations = Location::all();

        return response()->json([
            'success' => true,
            'locations_count' => $locations->count()
        ]);
    }
}
