<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDriversTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('drivers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->string('city');
            $table->string('phone_number');
            $table->string('car_make');
            $table->string('car_model');
            $table->string('car_year');
            $table->string('license_plate');
            $table->string('tonnage')->nullable();
            $table->string('company')->nullable();
            $table->string('password');
            $table->string('fcm_token')->nullable();
            $table->string('profile_img_path')->nullable();
            $table->boolean('has_profile_img')->default(0);
            $table->float('cost_per_hour')->default(0);
            $table->float('cost_per_km')->default(0);
            $table->float('acc_km')->default(0);
            $table->float('send_notif_each_km')->default(5000);
            $table->enum('status', ['active', 'inactive', 'suspended'])->default('active');
            $table->enum('contractor', ['logistic_company', 'none'])->default('none');
            $table->float('score');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('drivers');
    }
}
