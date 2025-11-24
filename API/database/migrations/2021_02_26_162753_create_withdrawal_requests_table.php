<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWithdrawalRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('withdrawal_requests')) {
            // Tabla ya existe; evitamos recrearla para no fallar la migración.
            return;
        }

        Schema::create('withdrawal_requests', function (Blueprint $table) {
            $table->id();
            $table->float('amount');
            $table->date('date');
            $table->string('type');
            $table->enum('status', ['pendiente', 'aprobada'])->default('pendiente');
            $table->unsignedBigInteger('driver_id');
            $table->timestamps();

            $table->foreign('driver_id')
                ->references('id')
                ->on('drivers')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('withdrawal_requests');
    }
}
