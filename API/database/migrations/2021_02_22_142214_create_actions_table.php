<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('actions')) {
            // Ya existe (cargada manualmente o por otra migración). Evitamos el error por duplicado.
            return;
        }

        Schema::create('actions', function (Blueprint $table) {
            $table->id();
            $table->string('action');
            $table->float('credits');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('actions');
    }
}
