<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddBankOwnerProtectionToDriversTable extends Migration
{
    public function up()
    {
        Schema::table('drivers', function (Blueprint $table) {
            if (! Schema::hasColumn('drivers', 'bank_holder_document')) {
                $table->string('bank_holder_document', 50)
                    ->nullable()
                    ->after('bank_holder_name');
            }

            if (! Schema::hasColumn('drivers', 'bank_holder_phone')) {
                $table->string('bank_holder_phone', 50)
                    ->nullable()
                    ->after('bank_holder_document');
            }

            if (! Schema::hasColumn('drivers', 'bank_holder_email')) {
                $table->string('bank_holder_email', 120)
                    ->nullable()
                    ->after('bank_holder_phone');
            }

            if (! Schema::hasColumn('drivers', 'bank_cbu_status')) {
                $table->string('bank_cbu_status', 50)
                    ->default('confirmed_owner')
                    ->after('bank_holder_email');
            }

            if (! Schema::hasColumn('drivers', 'bank_cbu_previous')) {
                $table->string('bank_cbu_previous', 32)
                    ->nullable()
                    ->after('bank_cbu_status');
            }

            if (! Schema::hasColumn('drivers', 'bank_cbu_requested_at')) {
                $table->timestamp('bank_cbu_requested_at')
                    ->nullable()
                    ->after('bank_cbu_previous');
            }

            if (! Schema::hasColumn('drivers', 'bank_cbu_blocked_until')) {
                $table->timestamp('bank_cbu_blocked_until')
                    ->nullable()
                    ->after('bank_cbu_requested_at');
            }
        });
    }

    public function down()
    {
        Schema::table('drivers', function (Blueprint $table) {
            if (Schema::hasColumn('drivers', 'bank_cbu_blocked_until')) {
                $table->dropColumn('bank_cbu_blocked_until');
            }

            if (Schema::hasColumn('drivers', 'bank_cbu_requested_at')) {
                $table->dropColumn('bank_cbu_requested_at');
            }

            if (Schema::hasColumn('drivers', 'bank_cbu_previous')) {
                $table->dropColumn('bank_cbu_previous');
            }

            if (Schema::hasColumn('drivers', 'bank_cbu_status')) {
                $table->dropColumn('bank_cbu_status');
            }

            if (Schema::hasColumn('drivers', 'bank_holder_email')) {
                $table->dropColumn('bank_holder_email');
            }

            if (Schema::hasColumn('drivers', 'bank_holder_phone')) {
                $table->dropColumn('bank_holder_phone');
            }

            if (Schema::hasColumn('drivers', 'bank_holder_document')) {
                $table->dropColumn('bank_holder_document');
            }
        });
    }
}
