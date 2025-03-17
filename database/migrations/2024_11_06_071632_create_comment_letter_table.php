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
        Schema::create('comment_letters', function (Blueprint $table) {
            $table->id();
			$table->string('letter_form_id', 14)->foreignIdFor(\App\Models\LetterForm::class)->constrained();
			// $table->foreignIdFor(\App\Models\Employee::class)->constrained();		
			$table->string('src_employee_id')->references('id')->on('employees')->constrained();
			$table->string("comment");
			$table->boolean("hidden_from_requester");
			$table->json('tagged_employee_id')->references('id')->on('employees')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('letter_comments');
    }
};
