<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRemindersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('reminders')) {
            // Tabla existente; evitamos recrearla para no fallar la migración.
            return;
        }

        Schema::create('reminders', function (Blueprint $table) {
            $table->id();
            $table->longText('description');
            $table->string('type');
            $table->date('date');
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
        Schema::dropIfExists('reminders');
    }
}
