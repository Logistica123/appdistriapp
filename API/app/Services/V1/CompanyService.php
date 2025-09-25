<?php

namespace App\Services\V1;

use App\Company;

class CompanyService {

    public static function setAttributes(Company $company, $attributes)
    {
        $company->name = $attributes['name'];
        return $company;
    }

    public static function getCompanyByName($companyName)
    {
        return Company::where('name', $companyName)->first();
    }

    public static function getCompanyById($companyId)
    {
        return Company::findOrFail($companyId);
    }

    public static function getCompanyDrivers(Company $company)
    {
        return $company->drivers;
    }
}