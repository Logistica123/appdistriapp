<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAddressPartsToLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('locations', function (Blueprint $table) {
            if (! Schema::hasColumn('locations', 'b')) {
                $table->string('b')->nullable()->after('phones');
            }
            if (! Schema::hasColumn('locations', 'v')) {
                $table->string('v')->nullable()->after('b');
            }
            if (! Schema::hasColumn('locations', 's')) {
                $table->string('s')->nullable()->after('v');
            }
            if (! Schema::hasColumn('locations', 'm')) {
                $table->string('m')->nullable()->after('s');
            }
            if (! Schema::hasColumn('locations', 'c')) {
                $table->string('c')->nullable()->after('m');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('locations', function (Blueprint $table) {
            $columns = ['b', 'v', 's', 'm', 'c'];
            foreach ($columns as $column) {
                if (Schema::hasColumn('locations', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
}
