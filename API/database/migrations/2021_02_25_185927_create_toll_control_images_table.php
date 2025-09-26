<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTollControlImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('toll_control_images', function (Blueprint $table) {
            $table->id();
            $table->string('img_path');
            $table->unsignedBigInteger('toll_control_id');
            $table->timestamps();

            $table->foreign('toll_control_id')
                ->references('id')
                ->on('toll_controls');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('toll_control_images');
    }
}
