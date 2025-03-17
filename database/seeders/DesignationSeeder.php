<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Designation;

class DesignationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
		$designations = [
			[
				"designation" => "Chancellor", //1
			],
			[
				"designation" => "Campus Secretary", //2
			],
			[
				"designation" => "Chief Security Officer", //3
			],
			[
				"designation" => "Chief Administrative Officer", //4
			],
			[
				"designation" => "Vice Chancellor", //5
			],
			[
				"designation" => "Institute Registrar", //6
			],
			[
				"designation" => "Acting Institute Registrar", //7
			],
			[
				"designation" => "Head", //8
			],
			[
				"designation" => "Acting Head", //9
			],
			[
				"designation" => "Director", //10
			],
			[
				"designation" => "Acting Director", //11
			],
			[
				"designation" => "Manager", //12
			],
			[
				"designation" => "Focal Person", //13
			],
			[
				"designation" => "President", //14
			],
			[
				"designation" => "Dean", //15
			],
			[
				"designation" => "Assistant Dean", //16
			],
			[
				"designation" => "Chairperson", //17
			],
			[
				"designation" => "Coordinator", //18
			],
		];

		foreach($designations as $designation) {
			Designation::create($designation);
		}
    }
}
