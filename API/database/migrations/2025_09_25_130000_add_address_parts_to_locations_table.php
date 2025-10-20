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
            $table->string('b')->nullable()->after('phones');
            $table->string('v')->nullable()->after('b');
            $table->string('s')->nullable()->after('v');
            $table->string('m')->nullable()->after('s');
            $table->string('c')->nullable()->after('m');
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
            $table->dropColumn(['b', 'v', 's', 'm', 'c']);
        });
    }
}
