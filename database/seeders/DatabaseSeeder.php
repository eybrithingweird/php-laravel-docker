<?php

namespace Database\Seeders;

// use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
// use App\Models\LetterForm;

class DatabaseSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 */
	public function run(): void
	{
		// User::factory(10)->create();

		// User::factory()->create([
		// 	'name' => 'Test User',
		// 	'email' => 'test@example.com',
		// ]);

		// LetterForm::factory(1000)->create([
		// 	'src_employee_id' => '2024-308',
		// ]);

		$this->call(OfficeSeeder::class);
		$this->call(RequestTypeSeeder::class);
		// $this->call(DesignationSeeder::class);
		$this->call(EmployeeSeeder::class);
		$this->call(AllFieldSeeder::class);
		$this->call(RequestFieldSeeder::class);
		$this->call(ChannelSeeder::class);
		$this->call(BufferEmployeeSeeder::class);
	}
}
