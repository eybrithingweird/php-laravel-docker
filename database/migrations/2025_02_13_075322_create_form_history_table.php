<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use App\Models\LetterForm;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('form_histories', function (Blueprint $table) {
            $table->id();
			$table->string("letter_form_id", 14)->foreignIdFor(\App\Models\LetterForm::class)->constrained();
			$table->string('src_employee_id')->constrained();
			$table->string('action_description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('form_history');
    }
};
