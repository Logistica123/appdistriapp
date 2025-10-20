<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCuilToDriversTable extends Migration
{
    public function up()
    {
        Schema::table('drivers', function (Blueprint $table) {
            if (! Schema::hasColumn('drivers', 'cuil')) {
                $table->string('cuil', 20)
                    ->nullable()
                    ->unique()
                    ->after('license_plate');
            }
        });
    }

    public function down()
    {
        Schema::table('drivers', function (Blueprint $table) {
            if (Schema::hasColumn('drivers', 'cuil')) {
                $table->dropUnique('drivers_cuil_unique');
                $table->dropColumn('cuil');
            }
        });
    }
}
