<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('route_closures', function (Blueprint $table) {
            $table->id();
            $table->foreignId('driver_id')->constrained('drivers')->onDelete('cascade');
            $table->date('date');
            $table->unsignedInteger('deliveries')->default(0);
            $table->text('notes')->nullable();
            $table->string('evidence_path');
            $table->unsignedInteger('points_awarded')->default(0);
            $table->enum('status', ['approved', 'pending', 'rejected'])->default('approved');
            $table->timestamps();

            $table->unique(['driver_id', 'date']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('route_closures');
    }
};
