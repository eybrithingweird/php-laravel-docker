<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Channel;

class ChannelSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		$channels = [
			[
				'request_type_id' => 1,
				'dst_offices_id' => [
					[11, "Chairperson"],
					[10, "Dean"],
					[51, "Head"],
					[48, "Institute Registrar"],
					[46, "Vice Chancellor"],
					[1, "Chancellor"]
				],
			],
			[
				'request_type_id' => 2,
				'dst_offices_id' => [
					[11, "Chairperson"],
					[10, "Dean"],
					[92, "Vice Chancellor"],
					[1, "Chancellor"]
				],
			],
			[
				'request_type_id' => 3,
				'dst_offices_id' => [
					[11, "Chairperson"],
					[10, "Dean"],
					[46, "Vice Chancellor"],
					[1, "Chancellor"]
				], //TODO: Insert CAPP?
			], 
			[
				'request_type_id' => 4,
				'dst_offices_id' => [
					[11, "Chairperson"],
					[10, "Dean"],
					[46, "Vice Chancellor"],
					[1, "Chancellor"]
				],
			],
			[
				'request_type_id' => 68,
				'dst_offices_id' => [
					[10, "Dean"],
					[46, "Vice Chancellor"],
					[1, "Chancellor"]
				],
			]
		];

		foreach($channels as $channel) {
			Channel::create($channel);
		}
	}
}