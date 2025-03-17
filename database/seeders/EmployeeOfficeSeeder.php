<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\EmployeeOffice;

class EmployeeOfficeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $employees_offices = [
			[
				'employee_id' => 1,
				'office_id' => 1,
			],
			[
				'employee_id' => 2,
				'office_id' => 2,
			],
			[
				'employee_id' => 3,
				'office_id' => 3,
			],
			[
				'employee_id' => 4,
				'office_id' => 4,
			],
			[
				'employee_id' => 5,
				'office_id' => 5,
			],
			[
				'employee_id' => 6,
				'office_id' => 6,
			],
			[
				'employee_id' => 7,
				'office_id' => 7,
			],
			[
				'employee_id' => 8,
				'office_id' => 8,
			],
		];

		foreach($employees_offices as $employee_office) {
			EmployeeOffice::create($employee_office);
		}
    }
}
