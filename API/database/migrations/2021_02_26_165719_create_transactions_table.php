<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('transactions')) {
            // Tabla ya existe; evitamos recrear.
            return;
        }

        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->float('amount');
            $table->enum('type', ['deposit', 'withdraw']);
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
        Schema::dropIfExists('transactions');
    }
}
