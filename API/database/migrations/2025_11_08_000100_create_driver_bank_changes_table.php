<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDriverBankChangesTable extends Migration
{
    public function up()
    {
        if (! Schema::hasTable('driver_bank_changes')) {
            Schema::create('driver_bank_changes', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->unsignedBigInteger('driver_id');
                $table->string('previous_cbu', 32)->nullable();
                $table->string('new_cbu', 32)->nullable();
                $table->boolean('previous_bank_owner_is_driver')->default(true);
                $table->boolean('new_bank_owner_is_driver')->default(true);
                $table->string('previous_bank_holder_name', 255)->nullable();
                $table->string('new_bank_holder_name', 255)->nullable();
                $table->string('previous_bank_holder_document', 50)->nullable();
                $table->string('new_bank_holder_document', 50)->nullable();
                $table->string('previous_bank_holder_phone', 50)->nullable();
                $table->string('new_bank_holder_phone', 50)->nullable();
                $table->string('previous_bank_holder_email', 120)->nullable();
                $table->string('new_bank_holder_email', 120)->nullable();
                $table->string('status', 50)->default('pending_owner_confirm');
                $table->string('requested_by', 50)->nullable();
                $table->unsignedBigInteger('requested_by_id')->nullable();
                $table->string('resolved_by', 50)->nullable();
                $table->unsignedBigInteger('resolved_by_id')->nullable();
                $table->timestamp('resolved_at')->nullable();
                $table->string('ip', 45)->nullable();
                $table->string('user_agent', 512)->nullable();
                $table->timestamps();

                $table->index('driver_id');
                $table->index('status');
                $table->foreign('driver_id')
                    ->references('id')
                    ->on('drivers')
                    ->onDelete('cascade');
            });
        }
    }

    public function down()
    {
        Schema::dropIfExists('driver_bank_changes');
    }
}
