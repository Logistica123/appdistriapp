<?php

namespace App\Http\Controllers\V2\App;

use App\Driver;
use App\Http\Controllers\Controller;
use App\Http\Requests\App\RegisterRequest;
use App\Http\Resources\DriverResource;
use App\Services\V1\DriverService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DriverController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $driver = DriverService::setAttributes(new Driver(), $request->all());
        $driver->admin_created = 0;
        $driver->save();
        if ($driver->bank_cbu) {
            DriverService::syncBankDataWithPersonal($driver);
        }

        return [
            'custom_message' => 'Registrado exitosamente'
        ];
    }

    public function lookupByCuil($cuil)
    {
        $sanitizedCuil = preg_replace('/\D/', '', $cuil);

        if (strlen($sanitizedCuil) !== 11) {
            return response()->json([
                'success' => false,
                'message' => 'Formato de CUIL inválido'
            ], 422);
        }

        try {
            $person = DB::connection('personal')
                ->table('personas')
                ->select([
                    'nombres',
                    'apellidos',
                    'email',
                    'telefono',
                    'patente',
                    'cbu_alias',
                    'observaciones',
                    'estado_id',
                    'cliente_id',
                    'sucursal_id',
                ])
                ->where('cuil', $sanitizedCuil)
                ->whereNull('deleted_at')
                ->first();
        } catch (\Throwable $exception) {
            Log::error('Error consultando base de Personal', [
                'cuil' => $sanitizedCuil,
                'error' => $exception->getMessage(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'No se pudo consultar la base de Personal'
            ], 500);
        }

        if (! $person) {
            return response()->json([
                'success' => false,
                'message' => 'CUIL no encontrado en la base de Personal'
            ], 404);
        }

        $companyName = $this->resolveCompanyName($person->cliente_id ?? null);
       $bankCbu = $person->cbu_alias ? preg_replace('/\s+/', '', $person->cbu_alias) : null;

        return response()->json([
            'success' => true,
            'person' => [
                'name' => $person->nombres,
                'last_name' => $person->apellidos,
                'email' => $person->email,
                'phone_number' => $person->telefono,
                'license_plate' => $person->patente,
                'bank_cbu' => $bankCbu,
                'bank_owner_is_driver' => true,
                'bank_holder_name' => null,
                'company' => $companyName,
                'estado_id' => $person->estado_id,
                'cliente_id' => $person->cliente_id,
                'sucursal_id' => $person->sucursal_id,
            ],
        ]);
    }

    private function resolveCompanyName($clienteId): ?string
    {
        if (! $clienteId) {
            return null;
        }

        try {
            $row = DB::connection('personal')
                ->table('clientes')
                ->where('id', $clienteId)
                ->first();
        } catch (\Throwable $exception) {
            Log::warning('No se pudo obtener cliente desde Personal', [
                'cliente_id' => $clienteId,
                'error' => $exception->getMessage(),
            ]);
            return null;
        }

        if (! $row) {
            return null;
        }

        foreach (['nombre', 'razon_social', 'descripcion', 'nombre_fantasia', 'fantasia'] as $field) {
            if (isset($row->{$field}) && $row->{$field}) {
                return $row->{$field};
            }
        }

        return (string) $clienteId;
    }

    public function getRanking(Request $request)
    {
        $drivers = Driver::CompanyDrivers($request->user()->company_id)->active()->scores()->get();
        if (sizeof($drivers) > 3) {
            $podium = Driver::CompanyDrivers($request->user()->company_id)->active()->scores()->take(3)->get();
            $count = count($drivers);
            $skip = 3;
            $limit = $count - $skip; // the limit
            $list = Driver::CompanyDrivers($request->user()->company_id)->active()->scores()->skip($skip)->take($limit)->get();
        } else {
            $podium = $drivers;
            $list = [];
        }

        return [
            'drivers' => DriverResource::collection($drivers),
            'podium' => DriverResource::collection($podium),
            'list' => DriverResource::collection($list),
        ];
    }

    public function getDriverProfileImage(Driver $driver)
    {
        if ($driver->has_profile_img && File::exists(storage_path() . '/app/' . $driver->profile_img_path)) {
            return response()->file(storage_path() . '/app/' . $driver->profile_img_path);
        }
        return response()->file(storage_path() . '/app/' . 'default_profile_img.png');
    }
}
