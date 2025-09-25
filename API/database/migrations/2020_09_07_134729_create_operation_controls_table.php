<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOperationControlsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('operation_controls', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('date');
            $table->enum('status', ['pending', 'approved'])->default('pending');
            $table->string('city')->nullable();
            $table->string('service')->nullable();
            $table->string('transportModel')->nullable();
            $table->string('transportMake')->nullable();
            $table->string('tonnage')->nullable();
            $table->string('company')->nullable();
            $table->float('hours')->nullable();
            $table->float('km')->nullable();
            $table->integer('assigned');
            $table->integer('delivered');
            $table->longText('description')->nullable();
            $table->float('no_devolution_credits');
            $table->float('km_credits');
            $table->unsignedBigInteger('company_id')->nullable();
            $table->unsignedBigInteger('driver_id');
            $table->timestamps();

            $table->foreign('company_id')
                ->references('id')
                ->on('companies');

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
        Schema::dropIfExists('operation_controls');
    }
}
