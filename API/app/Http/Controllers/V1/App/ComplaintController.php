<?php

namespace App\Http\Controllers\V1\App;

use App\Complaint;
use App\Http\Controllers\Controller;
use App\Personal\Reclamo as PersonalReclamo;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;

class ComplaintController extends Controller
{
    public function index(Request $request)
    {
        $driver = $request->user();

        $internalComplaints = $this->mapInternalComplaints(
            $driver->complaints()->latest()->get()
        );
        $externalComplaints = $this->fetchPersonalComplaints($driver->cuil ?? $driver->dni ?? null);

        $complaints = $internalComplaints
            ->merge($externalComplaints)
            ->sortByDesc(fn (array $item) => $item['created_at'] ?? $item['updated_at'] ?? null)
            ->values();

        return response()->json([
            'success' => true,
            'complaints' => $complaints,
        ]);
    }

    public function store(Request $request)
    {
        $types = ['payment', 'fuel_increase', 'tax_recognition', 'liquidation', 'other'];

        $data = $request->validate([
            'type' => ['required', 'string', 'max:120', Rule::in($types)],
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);

        $complaint = $request->user()->complaints()->create([
            'type' => $data['type'],
            'subject' => $data['subject'] ?? null,
            'message' => $data['message'],
        ]);

        return response()->json([
            'success' => true,
            'created' => true,
            'complaint' => $complaint,
            'custom_message' => 'Reclamo enviado correctamente',
        ], 201);
    }

    /**
     * @param  EloquentCollection<int, Complaint>  $complaints
     */
    private function mapInternalComplaints(EloquentCollection $complaints): Collection
    {
        return $complaints->map(function (Complaint $complaint): array {
            return [
                'id' => $complaint->id,
                'external_id' => null,
                'source' => 'distriapp',
                'type' => $complaint->type ?? 'other',
                'subject' => $complaint->subject,
                'message' => $complaint->message,
                'status' => $complaint->status ?? 'open',
                'status_label' => $this->mapInternalStatusLabel($complaint->status ?? 'open'),
                'original_status' => $complaint->status ?? 'open',
                'resolved_at' => optional($complaint->resolved_at)->toIso8601String(),
                'admin_notes' => $complaint->admin_notes,
                'created_at' => optional($complaint->created_at)->toIso8601String(),
                'updated_at' => optional($complaint->updated_at)->toIso8601String(),
                'codigo' => null,
                'meta' => [
                    'driver_id' => $complaint->driver_id,
                ],
            ];
        });
    }

    private function mapInternalStatusLabel(string $status): string
    {
        return match ($status) {
            'resolved' => 'Resuelto',
            'in_progress' => 'En progreso',
            default => 'Abierto',
        };
    }

    private function fetchPersonalComplaints(?string $rawIdentifier): Collection
    {
        $identifier = $this->normalizeIdentifier($rawIdentifier);

        if (! $identifier) {
            return collect();
        }

        try {
            $reclamos = PersonalReclamo::query()
                ->with([
                    'tipo:id,nombre',
                    'persona:id,cuil,nombres,apellidos',
                ])
                ->whereHas('persona', function ($query) use ($identifier) {
                    $query->whereRaw(
                        "REPLACE(REPLACE(REPLACE(IFNULL(cuil, ''), '-', ''), '.', ''), ' ', '') = ?",
                        [$identifier]
                    );
                })
                ->orderByDesc('fecha_alta')
                ->orderByDesc('created_at')
                ->limit(100)
                ->get();
        } catch (\Throwable $exception) {
            Log::error('No se pudieron obtener los reclamos desde Personal', [
                'identifier' => $identifier,
                'error' => $exception->getMessage(),
            ]);

            return collect();
        }

        return $reclamos->map(fn (PersonalReclamo $reclamo) => $this->transformPersonalReclamo($reclamo));
    }

    private function transformPersonalReclamo(PersonalReclamo $reclamo): array
    {
        $statusData = $this->mapPersonalStatus($reclamo->status);

        $createdAt = $reclamo->fecha_alta ?? $reclamo->created_at;
        $updatedAt = $reclamo->updated_at ?? $createdAt;

        return [
            'id' => (int) $reclamo->id,
            'external_id' => (int) $reclamo->id,
            'source' => 'personal',
            'type' => 'other',
            'subject' => $reclamo->tipo?->nombre,
            'message' => $reclamo->detalle ?? 'Sin descripción',
            'status' => $statusData['value'],
            'status_label' => $statusData['label'],
            'original_status' => $reclamo->status,
            'resolved_at' => $statusData['resolved'] ? optional($updatedAt)->toIso8601String() : null,
            'admin_notes' => null,
            'created_at' => optional($createdAt)->toIso8601String(),
            'updated_at' => optional($updatedAt)->toIso8601String(),
            'codigo' => $this->formatPersonalCode($reclamo),
            'meta' => [
                'pagado' => (bool) $reclamo->pagado,
                'tipo_id' => $reclamo->reclamo_type_id,
                'persona_id' => $reclamo->persona_id,
                'persona_nombre' => $reclamo->persona
                    ? trim(($reclamo->persona->nombres ?? '').' '.($reclamo->persona->apellidos ?? '')) ?: null
                    : null,
            ],
        ];
    }

    private function mapPersonalStatus(?string $status): array
    {
        return match ($status) {
            'en_proceso' => [
                'value' => 'in_progress',
                'label' => 'En proceso',
                'resolved' => false,
            ],
            'aceptado', 'finalizado' => [
                'value' => 'resolved',
                'label' => 'Finalizado',
                'resolved' => true,
            ],
            'rechazado' => [
                'value' => 'resolved',
                'label' => 'Rechazado',
                'resolved' => true,
            ],
            default => [
                'value' => 'open',
                'label' => 'Creado',
                'resolved' => false,
            ],
        };
    }

    private function formatPersonalCode(PersonalReclamo $reclamo): string
    {
        return sprintf('REC-%05d', $reclamo->id);
    }

    private function normalizeIdentifier(?string $value): ?string
    {
        if (! $value) {
            return null;
        }

        $normalized = preg_replace('/\D+/', '', $value);

        return $normalized !== '' ? $normalized : null;
    }
}
