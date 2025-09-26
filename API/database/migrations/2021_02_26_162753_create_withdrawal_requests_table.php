<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWithdrawalRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('withdrawal_requests', function (Blueprint $table) {
            $table->id();
            $table->float('amount');
            $table->date('date');
            $table->string('type');
            $table->enum('status', ['pendiente', 'aprobada'])->default('pendiente');
            $table->unsignedBigInteger('driver_id');
            $table->timestamps();

            $table->foreign('driver_id')
                ->references('id')
                ->on('drivers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('withdrawal_requests');
    }
}
