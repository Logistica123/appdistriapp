<?php

namespace App\Services\V1;

use App\Company;
use App\Driver;
use App\DriverBankChange;
use App\Services\EmailNotificationService;
use App\Services\NotificationService;
use Carbon\Carbon;
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
        if (array_key_exists('bank_holder_document', $attributes)) {
            $driver->bank_holder_document = $attributes['bank_holder_document'] ?: null;
        }
        if (array_key_exists('bank_holder_phone', $attributes)) {
            $driver->bank_holder_phone = $attributes['bank_holder_phone'] ?: null;
        }
        if (array_key_exists('bank_holder_email', $attributes)) {
            $driver->bank_holder_email = $attributes['bank_holder_email'] ?: null;
        }
        $driver->bank_cbu = isset($attributes['bank_cbu']) && $attributes['bank_cbu'] !== null
            ? preg_replace('/\D/', '', $attributes['bank_cbu'])
            : null;
        $driver->bank_cvu = null;
        $driver->bank_alias = $driver->bank_cbu;
        if (! $driver->bank_cbu_status) {
            $driver->bank_cbu_status = 'confirmed_owner';
        }
        if (! $driver->bank_cbu_requested_at) {
            $driver->bank_cbu_requested_at = null;
        }
        if (! $driver->bank_cbu_blocked_until) {
            $driver->bank_cbu_blocked_until = null;
        }

        return $driver;
    }

    public static function syncBankDataWithPersonal(Driver $driver): void
    {
        if (isset($driver->bank_cbu_status) && $driver->bank_cbu_status !== 'confirmed_owner') {
            return;
        }

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

    public static function flagBankChangePending(Driver $driver, array $context = []): DriverBankChange
    {
        $driver->bank_cbu_status = 'pending_owner_confirm';
        $driver->bank_cbu_previous = $context['previous_cbu'] ?? $driver->bank_cbu_previous;
        $driver->bank_cbu_requested_at = Carbon::now();
        $driver->save();

        $change = DriverBankChange::create([
            'driver_id' => $driver->id,
            'previous_cbu' => $context['previous_cbu'] ?? null,
            'new_cbu' => $context['new_cbu'] ?? null,
            'previous_bank_owner_is_driver' => $context['previous_bank_owner_is_driver'] ?? true,
            'new_bank_owner_is_driver' => $driver->bank_owner_is_driver,
            'previous_bank_holder_name' => $context['previous_bank_holder_name'] ?? null,
            'new_bank_holder_name' => $driver->bank_holder_name,
            'previous_bank_holder_document' => $context['previous_bank_holder_document'] ?? null,
            'new_bank_holder_document' => $driver->bank_holder_document,
            'previous_bank_holder_phone' => $context['previous_bank_holder_phone'] ?? null,
            'new_bank_holder_phone' => $driver->bank_holder_phone,
            'previous_bank_holder_email' => $context['previous_bank_holder_email'] ?? null,
            'new_bank_holder_email' => $driver->bank_holder_email,
            'status' => 'pending_owner_confirm',
            'requested_by' => $context['requested_by'] ?? null,
            'requested_by_id' => $context['requested_by_id'] ?? null,
            'ip' => $context['ip'] ?? null,
            'user_agent' => $context['user_agent'] ?? null,
        ]);

        NotificationService::sendToDriver(
            $driver,
            'CBU en revisión',
            'Se solicitó un cambio de CBU. Queda pendiente de aprobación.'
        );

        EmailNotificationService::send(
            [
                $driver->email,
                $driver->bank_owner_is_driver ? null : $driver->bank_holder_email,
            ],
            'CBU en revisión',
            'Se solicitó un cambio de CBU y quedó pendiente de aprobación. Cuando se apruebe, te avisaremos.'
        );

        return $change;
    }

    public static function approveBankChange(Driver $driver, DriverBankChange $change = null, array $context = []): void
    {
        $change = $change ?: $driver->bankChanges()
            ->where('status', 'pending_owner_confirm')
            ->latest()
            ->first();

        $driver->bank_cbu_status = 'confirmed_owner';
        $driver->bank_cbu_previous = null;
        $driver->bank_cbu_requested_at = null;
        $driver->bank_cbu_blocked_until = null;
        $driver->save();

        if ($change) {
            $change->status = 'confirmed_owner';
            $change->resolved_by = $context['resolved_by'] ?? null;
            $change->resolved_by_id = $context['resolved_by_id'] ?? null;
            $change->resolved_at = Carbon::now();
            $change->save();
        }

        NotificationService::sendToDriver(
            $driver,
            'CBU aprobado',
            'El nuevo CBU fue aprobado y queda activo.'
        );

        EmailNotificationService::send(
            [
                $driver->email,
                $driver->bank_owner_is_driver ? null : $driver->bank_holder_email,
            ],
            'CBU aprobado',
            'El nuevo CBU fue aprobado y ya está activo para pagos.'
        );
    }

    public static function rejectBankChange(Driver $driver, DriverBankChange $change = null, int $blockDays = 30, array $context = []): void
    {
        $change = $change ?: $driver->bankChanges()
            ->where('status', 'pending_owner_confirm')
            ->latest()
            ->first();

        if ($change) {
            $driver->bank_cbu = $change->previous_cbu;
            $driver->bank_alias = $change->previous_cbu;
            $driver->bank_owner_is_driver = $change->previous_bank_owner_is_driver;
            $driver->bank_holder_name = $change->previous_bank_holder_name;
            $driver->bank_holder_document = $change->previous_bank_holder_document;
            $driver->bank_holder_phone = $change->previous_bank_holder_phone;
            $driver->bank_holder_email = $change->previous_bank_holder_email;
        }

        $driver->bank_cbu_status = 'rejected';
        $driver->bank_cbu_previous = null;
        $driver->bank_cbu_requested_at = null;
        $driver->bank_cbu_blocked_until = Carbon::now()->addDays($blockDays);
        $driver->save();

        if ($change) {
            $change->status = 'rejected';
            $change->resolved_by = $context['resolved_by'] ?? null;
            $change->resolved_by_id = $context['resolved_by_id'] ?? null;
            $change->resolved_at = Carbon::now();
            $change->save();
        }

        NotificationService::sendToDriver(
            $driver,
            'CBU rechazado',
            'El cambio de CBU fue rechazado. Se revirtió al CBU anterior.'
        );

        EmailNotificationService::send(
            [
                $driver->email,
                $driver->bank_owner_is_driver ? null : $driver->bank_holder_email,
            ],
            'CBU rechazado',
            'El cambio de CBU fue rechazado y se revirtió al CBU anterior. Si necesitas hacer un nuevo cambio, contacta a soporte.'
        );
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
