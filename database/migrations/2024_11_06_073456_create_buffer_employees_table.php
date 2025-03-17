<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('buffer_employees', function (Blueprint $table) {
            $table->id();
			$table->string('buffer_employee_id')->references('id')->on('employees')->constrained();
			$table->boolean('has_full_permissions');
			$table->string('added_by_employee_id')->references('id')->on('employees')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('buffer_employees');
    }
};
