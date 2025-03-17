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
        Schema::create('letter_forms', function (Blueprint $table) {
            // $table->id();
			$table->string('id', 14)->primary();
			$table->string('subject');
			$table->foreignIdFor(\App\Models\RequestType::class)->constrained();
			$table->string('src_employee_id')->references('id')->on('employees')->constrained();
			// $colDef = $table->foreignIdFor(\App\Models\Employee::class)->constrained();
			$table->date('letter_date');
			$table->string('notes', 400)->nullable();
			$table->string('supporting_docu', 100)->nullable();
			$table->boolean('is_sent')->default(0); //NOTE: Draft status, if sent (longer editable) = 1
			$table->boolean('is_urgent')->default(0);
            $table->timestamps();

			// $table->unique([$colDef->name, 'src_employee_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('letter_forms');
    }
};
