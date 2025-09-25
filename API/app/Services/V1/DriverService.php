<?php

namespace App\Services\V1;

use App\Company;
use App\Driver;

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
        $driver->email = $attributes['email'];
        $driver->password = bcrypt($attributes['password']);
        return $driver;
    }
}