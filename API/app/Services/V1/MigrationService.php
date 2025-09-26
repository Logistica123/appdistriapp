<?php


namespace App\Services\V1;


use App\Company;
use App\Driver;
use App\Material;
use App\MaterialUbi;
use App\Ubi;
use Illuminate\Support\Facades\Schema;

class MigrationService
{
    public static function populateCompaniesTable()
    {
        $companies = Driver::where('company', '!=', null)->select('company')->groupBy('company')->distinct()->pluck('company')->toArray();

        foreach ($companies as $companyName) {
            $company = new Company();
            $company->name = $companyName;
            $company->save();
        }
    }

    public static function alterActionsTableCompanyId()
    {
        Schema::table('actions', function ($table) {
            $table->tinyInteger('active')->default(1);
            $table->longText('description')->nullable();
        });
    }

    public static function alterDriversTableCompanyId()
    {
        Schema::table('drivers', function ($table) {
            $table->unsignedBigInteger('company_id')->nullable();
            $table->tinyInteger('admin_created')->default(1);
            $table->tinyInteger('status_alt')->default(1);

            $table->foreign('company_id')->references('id')->on('companies');
        });
    }

    public static function assignCompanyToDrivers()
    {
        $drivers = Driver::all();
        foreach ($drivers as $driver) {
            $company = CompanyService::getCompanyByName($driver->company);
            if ($company) {
                $driver->company_id = $company->id;
                $driver->update();
            }
        }
    }

    public static function alterOperationControlsTableBranchId()
    {
        Schema::table('operation_controls', function ($table) {
            $table->unsignedBigInteger('branch_id')->nullable();
            $table->foreign('branch_id')->references('id')->on('branches');
        });
    }

    public static function alterOperationControlsTableValues()
    {
        Schema::table('operation_controls', function ($table) {
            $table->float('branch_km_rate')->nullable();
            $table->float('branch_hour_rate')->nullable();
            $table->float('branch_package_rate')->nullable();
            $table->float('branch_fixed_hours')->nullable();
            $table->float('branch_plus_km')->nullable();
            $table->float('amount')->nullable();
        });
    }

    public static function alterTransactionTable()
    {
        Schema::table('transactions', function ($table) {
            $table->tinyInteger('type');
            $table->unsignedBigInteger('operation_control_id')->nullable();
            $table->foreign('operation_control_id')->references('id')->on('operation_controls');
        });
    }

    public static function populateMaterialsTable()
    {
        $material = new Material();
        $material->name = 'Paquetería';
        $material->save();

        $material = new Material();
        $material->name = 'Postal';
        $material->save();

        $material = new Material();
        $material->name = 'Salud';
        $material->save();

        $material = new Material();
        $material->name = 'Clearing';
        $material->save();

        $material = new Material();
        $material->name = 'VNE';
        $material->save();
    }

    public static function populateUbisTable()
    {
        $ubi = new Ubi();
        $ubi->name = 'Ubicación 1';
        $ubi->save();

        $ubi = new Ubi();
        $ubi->name = 'Ubicación 2';
        $ubi->save();

        $ubi = new Ubi();
        $ubi->name = 'Ubicación 3';
        $ubi->save();
    }

    public static function alterOperationControlsTableMaterialUbi()
    {
        Schema::table('operation_controls', function ($table) {
            $table->unsignedBigInteger('material_ubi_id')->nullable();
            $table->foreign('material_ubi_id')->references('id')->on('material_ubi');
        });
    }

    public static function populateMaterialUbiTable()
    {
        $material = Material::findOrFail(1);

        $ubi = Ubi::findOrFail(1);
        $materialUbi = new MaterialUbi();
        $materialUbi->value = 124.8;
        $materialUbi->material_id = $material->id;
        $materialUbi->ubi_id = $ubi->id;
        $materialUbi->save();

        $ubi = Ubi::findOrFail(2);
        $materialUbi = new MaterialUbi();
        $materialUbi->value = 170.52;
        $materialUbi->material_id = $material->id;
        $materialUbi->ubi_id = $ubi->id;
        $materialUbi->save();

        $ubi = Ubi::findOrFail(3);
        $materialUbi = new MaterialUbi();
        $materialUbi->value = 207.06;
        $materialUbi->material_id = $material->id;
        $materialUbi->ubi_id = $ubi->id;
        $materialUbi->save();

        $material = Material::findOrFail(2);

        $ubi = Ubi::findOrFail(1);
        $materialUbi = new MaterialUbi();
        $materialUbi->value = 128;
        $materialUbi->material_id = $material->id;
        $materialUbi->ubi_id = $ubi->id;
        $materialUbi->save();

        $ubi = Ubi::findOrFail(2);
        $materialUbi = new MaterialUbi();
        $materialUbi->value = 187.58;
        $materialUbi->material_id = $material->id;
        $materialUbi->ubi_id = $ubi->id;
        $materialUbi->save();

        $ubi = Ubi::findOrFail(3);
        $materialUbi = new MaterialUbi();
        $materialUbi->value = 227.77;
        $materialUbi->material_id = $material->id;
        $materialUbi->ubi_id = $ubi->id;
        $materialUbi->save();

        $material = Material::findOrFail(3);

        $ubi = Ubi::findOrFail(1);
        $materialUbi = new MaterialUbi();
        $materialUbi->value = 182.71;
        $materialUbi->material_id = $material->id;
        $materialUbi->ubi_id = $ubi->id;
        $materialUbi->save();

        $ubi = Ubi::findOrFail(2);
        $materialUbi = new MaterialUbi();
        $materialUbi->value = 255.78;
        $materialUbi->material_id = $material->id;
        $materialUbi->ubi_id = $ubi->id;
        $materialUbi->save();

        $ubi = Ubi::findOrFail(3);
        $materialUbi = new MaterialUbi();
        $materialUbi->value = 310.6;
        $materialUbi->material_id = $material->id;
        $materialUbi->ubi_id = $ubi->id;
        $materialUbi->save();

        $material = Material::findOrFail(4);

        $ubi = Ubi::findOrFail(1);
        $materialUbi = new MaterialUbi();
        $materialUbi->value = 146.16;
        $materialUbi->material_id = $material->id;
        $materialUbi->ubi_id = $ubi->id;
        $materialUbi->save();

        $ubi = Ubi::findOrFail(2);
        $materialUbi = new MaterialUbi();
        $materialUbi->value = 204.62;
        $materialUbi->material_id = $material->id;
        $materialUbi->ubi_id = $ubi->id;
        $materialUbi->save();

        $ubi = Ubi::findOrFail(3);
        $materialUbi = new MaterialUbi();
        $materialUbi->value = 248.48;
        $materialUbi->material_id = $material->id;
        $materialUbi->ubi_id = $ubi->id;
        $materialUbi->save();

        $material = Material::findOrFail(5);

        $ubi = Ubi::findOrFail(1);
        $materialUbi = new MaterialUbi();
        $materialUbi->value = 60.9;
        $materialUbi->material_id = $material->id;
        $materialUbi->ubi_id = $ubi->id;
        $materialUbi->save();

        $ubi = Ubi::findOrFail(2);
        $materialUbi = new MaterialUbi();
        $materialUbi->value = 60.9;
        $materialUbi->material_id = $material->id;
        $materialUbi->ubi_id = $ubi->id;
        $materialUbi->save();

        $ubi = Ubi::findOrFail(3);
        $materialUbi = new MaterialUbi();
        $materialUbi->value = 60.9;
        $materialUbi->material_id = $material->id;
        $materialUbi->ubi_id = $ubi->id;
        $materialUbi->save();
    }
}