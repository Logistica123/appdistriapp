<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddBankFieldsToDriversTable extends Migration
{
    public function up()
    {
        Schema::table('drivers', function (Blueprint $table) {
            if (! Schema::hasColumn('drivers', 'bank_cbu')) {
                $table->string('bank_cbu', 32)->nullable()->after('company');
            }

            if (! Schema::hasColumn('drivers', 'bank_cvu')) {
                $table->string('bank_cvu', 32)->nullable()->after('bank_cbu');
            }

            if (! Schema::hasColumn('drivers', 'bank_alias')) {
                $table->string('bank_alias', 120)->nullable()->after('bank_cvu');
            }
        });
    }

    public function down()
    {
        Schema::table('drivers', function (Blueprint $table) {
            if (Schema::hasColumn('drivers', 'bank_alias')) {
                $table->dropColumn('bank_alias');
            }

            if (Schema::hasColumn('drivers', 'bank_cvu')) {
                $table->dropColumn('bank_cvu');
            }

            if (Schema::hasColumn('drivers', 'bank_cbu')) {
                $table->dropColumn('bank_cbu');
            }
        });
    }
}
