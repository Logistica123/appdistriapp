<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class AddMissingColumnsToDriversTable extends Migration
{
    public function up()
    {
        $connection = Schema::getConnection()->getName();
        $hasAdminForeign = ! empty(DB::connection($connection)->select("
            SELECT CONSTRAINT_NAME
            FROM information_schema.KEY_COLUMN_USAGE
            WHERE TABLE_SCHEMA = DATABASE()
              AND TABLE_NAME = 'drivers'
              AND COLUMN_NAME = 'admin_id'
              AND REFERENCED_TABLE_NAME = 'admins'
        "));

        $hasCompanyForeign = ! empty(DB::connection($connection)->select("
            SELECT CONSTRAINT_NAME
            FROM information_schema.KEY_COLUMN_USAGE
            WHERE TABLE_SCHEMA = DATABASE()
              AND TABLE_NAME = 'drivers'
              AND COLUMN_NAME = 'company_id'
              AND REFERENCED_TABLE_NAME = 'companies'
        "));

        Schema::table('drivers', function (Blueprint $table) {
            if (! Schema::hasColumn('drivers', 'admin_id')) {
                $table->unsignedBigInteger('admin_id')->nullable()->after('id');
            }

            if (! Schema::hasColumn('drivers', 'company_id')) {
                $table->unsignedBigInteger('company_id')->nullable()->after('admin_id');
            }

            if (! Schema::hasColumn('drivers', 'test_driver')) {
                $table->boolean('test_driver')->default(false)->after('contractor');
            }
        });

        Schema::table('drivers', function (Blueprint $table) use ($hasAdminForeign, $hasCompanyForeign) {
            if (Schema::hasColumn('drivers', 'admin_id') && ! $hasAdminForeign) {
                $table->foreign('admin_id')->references('id')->on('admins')->onDelete('set null');
            }

            if (Schema::hasColumn('drivers', 'company_id') && ! $hasCompanyForeign) {
                $table->foreign('company_id')->references('id')->on('companies')->onDelete('set null');
            }
        });
    }

    public function down()
    {
        Schema::table('drivers', function (Blueprint $table) {
            if (Schema::hasColumn('drivers', 'company_id')) {
                $table->dropForeign(['company_id']);
                $table->dropColumn('company_id');
            }

            if (Schema::hasColumn('drivers', 'admin_id')) {
                $table->dropForeign(['admin_id']);
                $table->dropColumn('admin_id');
            }

            if (Schema::hasColumn('drivers', 'test_driver')) {
                $table->dropColumn('test_driver');
            }
        });
    }
}
