<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComplaintsTable extends Migration
{
    public function up()
    {
        if (Schema::hasTable('complaints')) {
            // Tabla ya existe; evitamos recrearla.
            return;
        }

        Schema::create('complaints', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('driver_id');
            $table->string('subject')->nullable();
            $table->text('message');
            $table->enum('status', ['open', 'in_progress', 'resolved'])->default('open');
            $table->timestamp('resolved_at')->nullable();
            $table->text('admin_notes')->nullable();
            $table->timestamps();

            $table->foreign('driver_id')->references('id')->on('drivers')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('complaints');
    }
}
