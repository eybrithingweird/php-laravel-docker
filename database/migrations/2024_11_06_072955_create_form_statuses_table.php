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
		Schema::create('form_statuses', function (Blueprint $table) {
			$table->id();
			$table->string('letter_form_id', 14)->foreignIdFor(\App\Models\LetterForm::class)->constrained();
			$table->string('status', 15);
			$table->string('current_employee_id')->references('id')->on('employees')->constrained()->nullable();
			$table->string('next_employee_id')->references('id')->on('employees')->constrained()->nullable();
			$table->json('dst_employee_id');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('form_statuses');
	}
};
