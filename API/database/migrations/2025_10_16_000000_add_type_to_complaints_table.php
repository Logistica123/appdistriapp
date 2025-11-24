<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTypeToComplaintsTable extends Migration
{
    public function up()
    {
        Schema::table('complaints', function (Blueprint $table) {
            if (! Schema::hasColumn('complaints', 'type')) {
                $table->string('type')->nullable()->after('driver_id');
            }
        });
    }

    public function down()
    {
        Schema::table('complaints', function (Blueprint $table) {
            if (Schema::hasColumn('complaints', 'type')) {
                $table->dropColumn('type');
            }
        });
    }
}
