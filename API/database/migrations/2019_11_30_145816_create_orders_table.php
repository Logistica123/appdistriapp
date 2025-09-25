<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('driver_id');
            $table->unsignedBigInteger('location_id');
            $table->string('type');
            $table->unsignedBigInteger('delivery_order')->nullable();
            $table->string('receiver')->nullable();
            $table->text('description')->nullable();
            $table->text('phone')->nullable();
            $table->enum('status', ['delivered', 'not_delivered', 'skipped', 'pending']);
            $table->timestamp('delivered_at')->nullable();
            $table->timestamp('skipped_at')->nullable();
            $table->timestamp('not_delivered_at')->nullable();
            $table->string('not_delivered_reason')->nullable();
            $table->text('not_delivered_description')->nullable();
            $table->timestamps();

            $table->foreign('driver_id')
                            ->references('id')
                            ->on('drivers');

            $table->foreign('location_id')
                            ->references('id')
                            ->on('locations');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
