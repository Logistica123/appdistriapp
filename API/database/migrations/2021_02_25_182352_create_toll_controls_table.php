<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTollControlsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('toll_controls')) {
            // Tabla ya existe; no la recreamos para evitar error.
            return;
        }

        Schema::create('toll_controls', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->string('station');
            $table->float('total');
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
        Schema::dropIfExists('toll_controls');
    }
}
