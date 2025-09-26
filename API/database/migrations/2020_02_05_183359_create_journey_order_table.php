<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJourneyOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('journey_order', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('journey_id');
            $table->unsignedBigInteger('order_id');
            $table->timestamps();

            $table->foreign('journey_id')
                ->references('id')
                ->on('journeys');

            $table->foreign('order_id')
                ->references('id')
                ->on('orders');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('journey_order');
    }
}
