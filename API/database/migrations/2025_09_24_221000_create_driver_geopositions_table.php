<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDriverGeopositionsTable extends Migration
{
    public function up()
    {
        if (! Schema::hasTable('driver_geopositions')) {
            Schema::create('driver_geopositions', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->unsignedBigInteger('driver_id');
                $table->decimal('lat', 10, 7);
                $table->decimal('lng', 10, 7);
                $table->float('accuracy')->nullable();
                $table->float('altitude')->nullable();
                $table->float('altitude_accuracy')->nullable();
                $table->float('heading')->nullable();
                $table->float('speed')->nullable();
                $table->timestamps();

                $table->foreign('driver_id')->references('id')->on('drivers')->onDelete('cascade');
            });
        }
    }

    public function down()
    {
        Schema::dropIfExists('driver_geopositions');
    }
}
