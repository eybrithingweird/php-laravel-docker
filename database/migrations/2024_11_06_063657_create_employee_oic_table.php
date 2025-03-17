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
		Schema::create('employee_oics', function (Blueprint $table) {
			$table->id();
			// $colDefSrc = $table->foreignIdFor(\App\Models\Employee::class)->constrained();
			// $colDefDst = $table->foreignIdFor(\App\Models\Employee::class)->constrained();
			$table->string('employee_id')->references('id')->on('employees')->constrained();
			$table->string('oic_employee_id')->references('id')->on('employees')->constrained();
			$table->dateTime('oic_start_date');
			$table->dateTime('oic_end_date');
			$table->string('added_by')->references('id')->on('employees')->constrained();
			$table->timestamps();

			// $table->unique([$colDefSrc->name, 'employee_id']);
			// $table->unique([$colDefDst->name, 'oic_employee_id']);
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('oic_employees');
	}
};
