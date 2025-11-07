<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Driver;

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
    private function syncWithPersonal($driver): void
    {
        $payload = $this->buildPersonalPayload($driver);

        if (empty($payload)) {
            Log::warning('Personal sync skipped: payload vacío', [
                'driver_id' => $driver->id ?? null,
            ]);
            return;
        }

        if ($this->syncWithPersonalDatabase($payload)) {
            return;
        }

        $this->syncWithPersonalApi($payload);
    }

    private function buildPersonalPayload($driver): array
    {
        return array_filter([
            'dni' => $driver->dni ?? $driver->cuil ?? null,
            'name' => $driver->name ?? null,
            'last_name' => $driver->last_name ?? null,
            'phone' => $driver->phone ?? $driver->phone_number ?? null,
            'license_plate' => $driver->license_plate ?? null,
            'email' => $driver->email ?? null,
        ], static function ($value) {
            return ! is_null($value);
        });
    }

    private function syncWithPersonalDatabase(array $payload): bool
    {
        $config = config('services.personal.sync');

        if (! $config || ! config('database.connections.personal')) {
            return false;
        }

        $table = $config['table'] ?? null;
        $columns = $config['columns'] ?? [];
        $uniqueColumn = $config['unique_column'] ?? ($columns['dni'] ?? null);

        if (! $table || empty($columns) || ! $uniqueColumn) {
            return false;
        }

        $uniquePayloadKey = array_search($uniqueColumn, $columns, true) ?: 'dni';
        $uniqueValue = $payload[$uniquePayloadKey] ?? null;

        if (! $uniqueValue) {
            Log::warning('Personal DB sync omitido: falta valor único', [
                'table' => $table,
                'column' => $uniqueColumn,
                'payload_keys' => array_keys($payload),
            ]);
            return false;
        }

        $data = [];

        foreach ($columns as $payloadKey => $columnName) {
            if (array_key_exists($payloadKey, $payload)) {
                $value = $payload[$payloadKey];

                if (! is_null($value)) {
                    $data[$columnName] = $value;
                }
            }
        }

        if (empty($data)) {
            return false;
        }

        $manageTimestamps = $config['manage_timestamps'] ?? true;
        $now = now();

        if ($manageTimestamps && ! array_key_exists('updated_at', $data)) {
            $data['updated_at'] = $now;
        }

        try {
            $connection = DB::connection('personal');
            $query = $connection->table($table)->where($uniqueColumn, $uniqueValue);

            if ($query->exists()) {
                $query->update($data);
            } else {
                if ($manageTimestamps && ! array_key_exists('created_at', $data)) {
                    $data['created_at'] = $now;
                }

                $connection->table($table)->insert($data);
            }

            Log::info('✅ Chofer sincronizado con éxito en la base de Personal', [
                'driver_id' => $payload['dni'] ?? null,
                'table' => $table,
            ]);

            return true;
        } catch (\Throwable $e) {
            Log::error('❌ Falló la sincronización con la base de Personal', [
                'error' => $e->getMessage(),
                'table' => $table,
            ]);
        }

        return false;
    }

    private function syncWithPersonalApi(array $payload): void
    {
        $url = config('services.personal.api.url');
        $apiKey = config('services.personal.api.key');

        if (! $url) {
            Log::warning('Personal API sync omitido: URL no configurada');
            return;
        }

        try {
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $apiKey,
                'Accept' => 'application/json',
            ])->post($url, [
                'nombre' => $payload['name'] ?? null,
                'dni' => $payload['dni'] ?? null,
                'telefono' => $payload['phone'] ?? null,
                'patente' => $payload['license_plate'] ?? null,
            ]);

            if ($response->successful()) {
                Log::info('✅ Chofer sincronizado vía API de Personal', [
                    'dni' => $payload['dni'] ?? null,
                ]);
            } else {
                Log::warning('⚠️ Error al sincronizar chofer vía API de Personal', [
                    'status' => $response->status(),
                    'body' => $response->body(),
                ]);
            }
        } catch (\Throwable $e) {
            Log::error('❌ Falló la sincronización con Personal vía API', [
                'error' => $e->getMessage(),
            ]);
        }
    }
}
