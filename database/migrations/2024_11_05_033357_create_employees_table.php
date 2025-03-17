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
		Schema::create('employees', function (Blueprint $table) {
			$table->string('id')->primary();
			$table->string("first_name");
			$table->string("middle_initial");
			$table->string("last_name");
			$table->string("prenominal_title");
			$table->string("postnominal_title");
			$table->string("designation");
			// $table->unsignedBigInteger('designation_id')
			$table->foreignIdFor(\App\Models\Office::class);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('employees');
	}
};
