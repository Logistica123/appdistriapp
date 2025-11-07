<?php

namespace App\Http\Controllers\V1\App;

use App\Http\Controllers\Controller;
use App\RouteClosure;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Response;

class RouteClosureController extends Controller
{
    private const POINTS_PER_CLOSURE = 100;

    public function store(Request $request)
    {
        $driver = $request->user();

        try {
            $data = $request->validate([
                'date' => ['required', 'date'],
                'deliveries' => ['required', 'integer', 'min:0'],
                'notes' => ['nullable', 'string', 'max:2000'],
                'evidence' => ['required', 'file', 'mimes:jpg,jpeg,png,pdf', 'max:5120'],
            ]);
        } catch (\Illuminate\Validation\ValidationException $exception) {
            Log::warning('Route closure validation failed', [
                'driver_id' => $driver->id,
                'payload' => $request->all(),
                'errors' => $exception->errors(),
            ]);
            throw $exception;
        }

        $date = Carbon::parse($data['date'])->toDateString();

        $exists = RouteClosure::where('driver_id', $driver->id)
            ->whereDate('date', $date)
            ->exists();

        if ($exists) {
            return response()->json([
                'message' => 'Ya registraste una hoja de ruta para este día.'
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $path = $request->file('evidence')->store("route-closures/{$driver->id}", 'public');

        $routeClosure = RouteClosure::create([
            'driver_id' => $driver->id,
            'date' => $date,
            'deliveries' => $data['deliveries'],
            'notes' => $data['notes'] ?? null,
            'evidence_path' => $path,
            'points_awarded' => self::POINTS_PER_CLOSURE,
            'status' => 'approved'
        ]);

        if (!isset($driver->reward_points)) {
            $driver->reward_points = 0;
        }

        $driver->reward_points += self::POINTS_PER_CLOSURE;
        $driver->save();

        return response()->json([
            'success' => true,
            'message' => 'Hoja de ruta recibida correctamente.',
            'points_awarded' => self::POINTS_PER_CLOSURE,
            'total_points' => $driver->reward_points,
            'route_closure_id' => $routeClosure->id
        ]);
    }
}
