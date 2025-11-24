<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInsuranceRequestsTable extends Migration
{
    public function up()
    {
        if (Schema::hasTable('insurance_requests')) {
            // Tabla ya existe; evitamos recrearla.
            return;
        }

        Schema::create('insurance_requests', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('driver_id');
            $table->string('insurance_type');
            $table->text('notes')->nullable();
            $table->enum('status', ['pending', 'in_progress', 'approved', 'rejected'])->default('pending');
            $table->timestamps();

            $table->foreign('driver_id')->references('id')->on('drivers')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('insurance_requests');
    }
}
