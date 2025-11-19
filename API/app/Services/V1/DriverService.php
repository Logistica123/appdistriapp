<?php

namespace App\Services\V1;

use App\Company;
use App\Driver;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DriverService {

    public static function getDriverByEmail($email)
    {
        return Driver::where('email', $email)->first();
    }

    public static function assignCompanyToDriver(Driver $driver, Company $company)
    {
        $driver->company_id = $company->id;
        $driver->update();
    }

    public static function setAttributes(Driver $driver, $attributes)
    {
        $driver->name = $attributes['name'];
        if (isset($attributes['last_name'])) {
            $driver->last_name = $attributes['last_name'];
        }
        $driver->email = $attributes['email'];
        $driver->password = bcrypt($attributes['password']);

        if (isset($attributes['cuil'])) {
            $driver->cuil = $attributes['cuil'];
        }

        $driver->phone_number = $attributes['phone_number'] ?? ($attributes['telefono'] ?? '');
        $driver->city = $attributes['city'] ?? ($driver->city ?? 'S/D');
        $driver->car_make = $attributes['car_make'] ?? 'S/D';
        $driver->car_model = $attributes['car_model'] ?? 'S/D';
        $driver->car_year = $attributes['car_year'] ?? 'S/D';
        $driver->license_plate = $attributes['license_plate']
            ?? ($attributes['patente'] ?? 'S/D');
        $driver->score = $attributes['score'] ?? 0;
        if (isset($attributes['company'])) {
            $driver->company = $attributes['company'] ?: $driver->company;
        }
        if (isset($attributes['bank_owner_is_driver'])) {
            $driver->bank_owner_is_driver = (bool) $attributes['bank_owner_is_driver'];
        }
        if (array_key_exists('bank_holder_name', $attributes)) {
            $driver->bank_holder_name = $attributes['bank_holder_name'] ?: null;
        }
        $driver->bank_cbu = isset($attributes['bank_cbu']) && $attributes['bank_cbu'] !== null
            ? preg_replace('/\D/', '', $attributes['bank_cbu'])
            : null;
        $driver->bank_cvu = null;
        $driver->bank_alias = $driver->bank_cbu;

        return $driver;
    }

    public static function syncBankDataWithPersonal(Driver $driver): void
    {
        if (! config('database.connections.personal')) {
            return;
        }

        $normalizedCuil = self::normalizeIdentifier($driver->cuil);
        if (! $normalizedCuil) {
            return;
        }

        $alias = self::normalizeCbu($driver->bank_cbu);
        if (! $alias) {
            return;
        }

        try {
            $connection = DB::connection('personal');
            $query = $connection->table('personas')
                ->whereRaw(
                    "REPLACE(REPLACE(REPLACE(IFNULL(cuil, ''), '-', ''), '.', ''), ' ', '') = ?",
                    [$normalizedCuil]
                );

            $person = $query->first();

            if (! $person) {
                return;
            }

            $currentAlias = self::normalizeCbu($person->cbu_alias);
            if ($alias === $currentAlias) {
                return;
            }

            $query->update(['cbu_alias' => $alias]);
        } catch (\Throwable $exception) {
            Log::error('Error syncing driver bank information with Personal', [
                'driver_id' => $driver->id,
                'error' => $exception->getMessage(),
            ]);
        }
    }

    private static function normalizeIdentifier(?string $value): string
    {
        if (! $value) {
            return '';
        }

        return preg_replace('/\\D/', '', $value);
    }

    private static function normalizeCbu(?string $value): ?string
    {
        if (! $value) {
            return null;
        }

        $sanitized = preg_replace('/\\D/', '', $value);

        return $sanitized === '' ? null : $sanitized;
    }
}
