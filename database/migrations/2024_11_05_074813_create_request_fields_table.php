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
		Schema::create('request_fields', function (Blueprint $table) {
			$table->id();
			$table->foreignIdFor(\App\Models\AllField::class)->constrained();
			$table->foreignIdFor(\App\Models\RequestType::class)->constrained();
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('request_fields');
	}
};
