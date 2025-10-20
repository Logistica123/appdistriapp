<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddBankHolderToDriversTable extends Migration
{
    public function up()
    {
        Schema::table('drivers', function (Blueprint $table) {
            if (! Schema::hasColumn('drivers', 'bank_owner_is_driver')) {
                $table->boolean('bank_owner_is_driver')
                    ->default(true)
                    ->after('bank_alias');
            }

            if (! Schema::hasColumn('drivers', 'bank_holder_name')) {
                $table->string('bank_holder_name', 255)
                    ->nullable()
                    ->after('bank_owner_is_driver');
            }
        });
    }

    public function down()
    {
        Schema::table('drivers', function (Blueprint $table) {
            if (Schema::hasColumn('drivers', 'bank_holder_name')) {
                $table->dropColumn('bank_holder_name');
            }

            if (Schema::hasColumn('drivers', 'bank_owner_is_driver')) {
                $table->dropColumn('bank_owner_is_driver');
            }
        });
    }
}
