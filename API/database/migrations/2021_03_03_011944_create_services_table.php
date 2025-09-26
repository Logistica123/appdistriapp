<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->longText('description');
            $table->boolean('broadcasted')->default(false);
            $table->boolean('taken')->default(false);
            $table->timestamp('taken_at')->nullable();
            $table->unsignedBigInteger('admin_id');
            $table->unsignedBigInteger('driver_id')->nullable();
            $table->timestamps();

            $table->foreign('admin_id')
                ->references('id')
                ->on('admins');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('services');
    }
}
