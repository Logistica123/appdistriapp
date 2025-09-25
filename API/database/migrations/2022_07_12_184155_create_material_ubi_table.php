<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaterialUbiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('material_ubi', function (Blueprint $table) {
            $table->id();
            $table->float('value');
            $table->unsignedBigInteger('material_id');
            $table->unsignedBigInteger('ubi_id');
            $table->timestamps();

            $table->foreign('material_id')
                ->on('materials')
                ->references('id');

            $table->foreign('ubi_id')
                ->on('ubis')
                ->references('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('material_ubi');
    }
}
