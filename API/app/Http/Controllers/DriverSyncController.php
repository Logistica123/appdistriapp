<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Driver;

class DriverSyncController extends Controller
{
    /**
     * Crea un nuevo chofer y sincroniza con el sistema de Personal.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'dni' => 'required|string|max:50',
            'phone' => 'nullable|string|max:50',
            'license_plate' => 'nullable|string|max:50',
        ]);

        // Crear el chofer en esta app
        $driver = Driver::create($validated);

        // 🔁 Enviar datos al sistema de Personal
        $this->syncWithPersonal($driver);

        return response()->json([
            'ok' => true,
            'message' => 'Chofer creado y sincronizado correctamente.',
            'driver' => $driver,
        ]);
    }

    /**
     * Actualiza un chofer y vuelve a sincronizar.
     */
    public function update(Request $request, $id)
    {
        $driver = Driver::findOrFail($id);
        $driver->update($request->only(['name', 'dni', 'phone', 'license_plate']));

        // 🔁 Sincronizar cambios
        $this->syncWithPersonal($driver);

        return response()->json([
            'ok' => true,
            'message' => 'Chofer actualizado y sincronizado correctamente.',
            'driver' => $driver,
        ]);
    }

    /**
     * 🔗 Sincroniza el chofer con el sistema de Personal (Laravel backend de adminlogistica.site)
     */
    private function syncWithPersonal($driver)
    {
        try {
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . env('SYNC_API_KEY'),
                'Accept' => 'application/json',
            ])->post('https://api-logistica.cruznegradev.com/api/sync/chofer', [
                'nombre' => $driver->name,
                'dni' => $driver->dni,
                'telefono' => $driver->phone,
                'patente' => $driver->license_plate,
            ]);

            if ($response->successful()) {
                \Log::info('✅ Chofer sincronizado con éxito: ' . $driver->name);
            } else {
                \Log::warning('⚠️ Error al sincronizar chofer: ' . $response->body());
            }
        } catch (\Throwable $e) {
            \Log::error('❌ Falló la sincronización con Personal: ' . $e->getMessage());
        }
    }
}
