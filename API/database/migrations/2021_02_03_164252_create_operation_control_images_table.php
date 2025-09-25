<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOperationControlImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('operation_control_images', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('img_path');
            $table->unsignedBigInteger('operation_control_id');
            $table->timestamps();

            $table->foreign('operation_control_id')
                ->references('id')
                ->on('operation_controls');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('operation_control_images');
    }
}
