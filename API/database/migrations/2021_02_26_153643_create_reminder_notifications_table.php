<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReminderNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('reminder_notifications')) {
            // Tabla ya existe; evitamos recrearla para no fallar la migración.
            return;
        }

        Schema::create('reminder_notifications', function (Blueprint $table) {
            $table->id();
            $table->date('scheduled_at');
            $table->boolean('processed')->default(false);
            $table->unsignedBigInteger('reminder_id');
            $table->timestamps();

            $table->foreign('reminder_id')
                ->references('id')
                ->on('reminders')
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
        Schema::dropIfExists('reminder_notifications');
    }
}
