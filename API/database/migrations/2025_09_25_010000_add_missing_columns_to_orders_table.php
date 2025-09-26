<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMissingColumnsToOrdersTable extends Migration
{
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            if (! Schema::hasColumn('orders', 'date')) {
                $table->date('date')->nullable()->after('type');
            }

            if (! Schema::hasColumn('orders', 'flag_color')) {
                $table->string('flag_color')->nullable()->after('phone');
            }
        });
    }

    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            if (Schema::hasColumn('orders', 'flag_color')) {
                $table->dropColumn('flag_color');
            }

            if (Schema::hasColumn('orders', 'date')) {
                $table->dropColumn('date');
            }
        });
    }
}
