<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStartLocationToDriversTable extends Migration
{
    public function up(): void
    {
        Schema::table('drivers', function (Blueprint $table) {
            if (! Schema::hasColumn('drivers', 'start_address')) {
                $table->string('start_address')->nullable()->after('company');
            }

            if (! Schema::hasColumn('drivers', 'start_lat')) {
                $table->decimal('start_lat', 10, 7)->nullable()->after('start_address');
            }

            if (! Schema::hasColumn('drivers', 'start_lng')) {
                $table->decimal('start_lng', 10, 7)->nullable()->after('start_lat');
            }
        });
    }

    public function down(): void
    {
        Schema::table('drivers', function (Blueprint $table) {
            if (Schema::hasColumn('drivers', 'start_lng')) {
                $table->dropColumn('start_lng');
            }

            if (Schema::hasColumn('drivers', 'start_lat')) {
                $table->dropColumn('start_lat');
            }

            if (Schema::hasColumn('drivers', 'start_address')) {
                $table->dropColumn('start_address');
            }
        });
    }
}
