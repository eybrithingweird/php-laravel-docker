<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\BufferEmployee;

class BufferEmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $buffer = [
			[
				'buffer_employee_id' => '0002',
				'has_full_permissions' => true,
				'added_by_employee_id' => '2024-308'
			]
		];

		foreach($buffer as $employee) {
			BufferEmployee::create($employee);
		}
    }
}
