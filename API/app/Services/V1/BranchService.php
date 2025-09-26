<?php


namespace App\Services\V1;


use App\Branch;
use App\Driver;

class BranchService
{
    public static function getAllBranches()
    {
        return Branch::orderBy('name')->with('company')->get();
    }

    public static function getAllActiveBranches()
    {
        return Branch::active()->orderBy('name')->with('company')->get();
    }

    public static function getDriverCompanyActiveBranches(Driver $driver)
    {
        return Branch::active()->CompanyBranches($driver->driverCompany)->orderBy('name')->with('company')->get();
    }

    public static function setAttributes(Branch $branch, $attributes)
    {
        $branch->name = $attributes['name'];
        $branch->hour_rate = $attributes['hour_rate'] ? $attributes['hour_rate'] : 0;
        $branch->km_rate = $attributes['km_rate'] ? $attributes['km_rate'] : 0;
        $branch->package_rate = $attributes['package_rate'] ? $attributes['package_rate'] : 0;
        $branch->fixed_hours = $attributes['fixed_hours'] ? $attributes['fixed_hours'] : 0;
        $branch->plus_km = $attributes['plus_km'] ? $attributes['plus_km'] : 0;
        $branch->company_id = $attributes['company_id'];
        $branch->type = $attributes['type'];
        return $branch;
    }
}