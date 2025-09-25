<?php

namespace App\Http\Controllers\V1\Admin;

use App\Geofence;
use App\GeofenceCoord;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GeofenceController extends Controller
{
    public function index()
    {
        $geofences = Geofence::with('geofence_coords')
            ->get();

        return response()->json([
            'success' => true,
            'geofences' => $geofences
        ]);
    }

    public function store(Request $request)
    {
        DB::transaction(function () use ($request){
            $geofence = new Geofence();
            $geofence->name = $request->name;
            $geofence->hex_color = sprintf('#%06X', mt_rand(0, 0xFFFFFF));
            $geofence->save();

            foreach ($request->geofence_coords as $point) {
                logger($point);
                $geofence_coord = new GeofenceCoord();
                $geofence_coord->lat = $point['lat'];
                $geofence_coord->lng = $point['lng'];
                $geofence_coord->geofence_id = $geofence->id;
                $geofence_coord->save();
            }
        });

        return response()->json([
            'success' => true,
            'stored' => true,
            'message' => 'resource stored',
            'custom_message' => 'Sector creado'
        ]);
    }

    public function delete(Geofence $geofence)
    {
        DB::transaction(function () use ($geofence) {
           $geofence->locations()->detach();
           $geofence->geofence_coords()->delete();
           $geofence->delete();
        });

        return response()->json([
            'success' => true,
            'deleted' => true,
            'message' => 'resource deleted',
            'custom_message' => 'Sector eliminado'
        ]);
    }
}
