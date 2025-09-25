<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFuelControlImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fuel_control_images', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('img_path');
            $table->unsignedBigInteger('fuel_control_id');
            $table->timestamps();

            $table->foreign('fuel_control_id')
                ->references('id')
                ->on('fuel_controls');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fuel_control_images');
    }
}
