<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMissingColumnsToDriversTable extends Migration
{
    public function up()
    {
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

        Schema::table('drivers', function (Blueprint $table) {
            if (Schema::hasColumn('drivers', 'admin_id')) {
                $table->foreign('admin_id')->references('id')->on('admins')->onDelete('set null');
            }

            if (Schema::hasColumn('drivers', 'company_id')) {
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
