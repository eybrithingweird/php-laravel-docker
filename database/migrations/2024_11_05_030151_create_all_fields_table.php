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
        Schema::create('all_fields', function (Blueprint $table) {
            $table->id();
			$table->string("field");
			$table->string("field_type"); //refactored from boolean to accommodate four types: text, file, radio, checkbox
			$table->json("field_options"); //only to be filled if field_type is radio or checkbox || READ AS ARRAY
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('all_fields');
    }
};
