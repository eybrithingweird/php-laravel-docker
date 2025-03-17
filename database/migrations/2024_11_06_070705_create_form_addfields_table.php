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
		Schema::create('form_addfields', function (Blueprint $table) {
			$table->id();
			$table->string("letter_form_id", 14)->foreignIdFor(\App\Models\LetterForm::class)->constrained();
			$table->string("field_label");
			$table->string("field_type"); //refactored from boolean to accommodate four types: text, file, radio, checkbox
			$table->string("field_value")->nullable(); //only to be filled if field_type is text or file || TODO: Find a way to check if value to be inserted is URL or not
			$table->string("field_option")->nullable(); //only to be filled if field_type is radio or checkbox || READ AS ARRAY
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('form_addfields');
	}
};
