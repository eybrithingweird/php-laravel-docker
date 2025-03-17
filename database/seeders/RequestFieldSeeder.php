<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\RequestField;

class RequestFieldSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
		$requestfields = [
			[
				'all_field_id' => 1,
				'request_type_id' => 1
			], 
			[
				'all_field_id' => 2,
				'request_type_id' => 1
			],
			[
				'all_field_id' => 3,
				'request_type_id' => 2
			],
			[
				'all_field_id' => 4,
				'request_type_id' => 2
			],
			[
				'all_field_id' => 5,
				'request_type_id' => 2
			],
			[
				'all_field_id' => 6,
				'request_type_id' => 3
			],
			[
				'all_field_id' => 7,
				'request_type_id' => 3
			],
			[
				'all_field_id' => 8,
				'request_type_id' => 3
			],
			[
				'all_field_id' => 9,
				'request_type_id' => 3
			],
			[
				'all_field_id' => 10,
				'request_type_id' => 3
			],
			[
				'all_field_id' => 11,
				'request_type_id' => 4
			],
			[
				'all_field_id' => 12,
				'request_type_id' => 4
			],
			[
				'all_field_id' => 13,
				'request_type_id' => 4
			],
			[
				'all_field_id' => 15,
				'request_type_id' => 6
			],
			[
				'all_field_id' => 16,
				'request_type_id' => 6
			],
			[
				'all_field_id' => 17,
				'request_type_id' => 6
			],
			[
				'all_field_id' => 18,
				'request_type_id' => 6
			],
			[
				'all_field_id' => 19,
				'request_type_id' => 6
			],
			[
				'all_field_id' => 20,
				'request_type_id' => 7
			],
			[
				'all_field_id' => 21,
				'request_type_id' => 7
			],
			[
				'all_field_id' => 22,
				'request_type_id' => 7
			],
			[
				'all_field_id' => 23,
				'request_type_id' => 7
			],
			[
				'all_field_id' => 17,
				'request_type_id' => 7
			],
			[
				'all_field_id' => 18,
				'request_type_id' => 7
			],
			[
				'all_field_id' => 19,
				'request_type_id' => 7
			],
			[
				'all_field_id' => 24,
				'request_type_id' => 8
			],
			[
				'all_field_id' => 25,
				'request_type_id' => 8
			],
			[
				'all_field_id' => 26,
				'request_type_id' => 8
			],
			[
				'all_field_id' => 24,
				'request_type_id' => 10
			],
			[
				'all_field_id' => 27,
				'request_type_id' => 10
			],
			[
				'all_field_id' => 4,
				'request_type_id' => 10
			],
			[
				'all_field_id' => 24,
				'request_type_id' => 11
			],
			[
				'all_field_id' => 4,
				'request_type_id' => 11
			],
			[
				'all_field_id' => 24,
				'request_type_id' => 12
			],
			[
				'all_field_id' => 4,
				'request_type_id' => 12
			],
			[
				'all_field_id' => 26,
				'request_type_id' => 12
			],
			[
				'all_field_id' => 28,
				'request_type_id' => 12
			],
			[
				'all_field_id' => 24,
				'request_type_id' => 13
			],
			[
				'all_field_id' => 4,
				'request_type_id' => 13
			],
			[
				'all_field_id' => 29,
				'request_type_id' => 14
			],
			[
				'all_field_id' => 27,
				'request_type_id' => 14
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 14
			],
			[
				'all_field_id' => 31,
				'request_type_id' => 14
			],
			[
				'all_field_id' => 32,
				'request_type_id' => 14
			],
			[
				'all_field_id' => 26,
				'request_type_id' => 14
			],
			[
				'all_field_id' => 29,
				'request_type_id' => 15
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 15
			],
			[
				'all_field_id' => 31,
				'request_type_id' => 15
			],
			[
				'all_field_id' => 32,
				'request_type_id' => 15
			],
			[
				'all_field_id' => 33,
				'request_type_id' => 16
			],
			[
				'all_field_id' => 34,
				'request_type_id' => 16
			],
			[
				'all_field_id' => 29,
				'request_type_id' => 16
			],
			[
				'all_field_id' => 32,
				'request_type_id' => 16
			],
			[
				'all_field_id' => 35,
				'request_type_id' => 16
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 16
			],
			[
				'all_field_id' => 29,
				'request_type_id' => 17
			],
			[
				'all_field_id' => 27,
				'request_type_id' => 17
			],
			[
				'all_field_id' => 32,
				'request_type_id' => 17
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 17
			],
			[
				'all_field_id' => 26,
				'request_type_id' => 17
			],
			[
				'all_field_id' => 31,
				'request_type_id' => 17
			],
			[
				'all_field_id' => 29,
				'request_type_id' => 18
			],
			[
				'all_field_id' => 27,
				'request_type_id' => 18
			],
			[
				'all_field_id' => 32,
				'request_type_id' => 18
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 18
			],
			[
				'all_field_id' => 26,
				'request_type_id' => 18
			],
			[
				'all_field_id' => 31,
				'request_type_id' => 18
			],
			[
				'all_field_id' => 29,
				'request_type_id' => 19
			],
			[
				'all_field_id' => 27,
				'request_type_id' => 19
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 19
			],
			[
				'all_field_id' => 26,
				'request_type_id' => 19
			],
			[
				'all_field_id' => 31,
				'request_type_id' => 19
			],
			[
				'all_field_id' => 33,
				'request_type_id' => 20
			],
			[
				'all_field_id' => 34,
				'request_type_id' => 20
			],
			[
				'all_field_id' => 36,
				'request_type_id' => 20
			],
			[
				'all_field_id' => 37,
				'request_type_id' => 20
			],
			[
				'all_field_id' => 38,
				'request_type_id' => 20
			],
			[
				'all_field_id' => 29,
				'request_type_id' => 20
			],
			[
				'all_field_id' => 27,
				'request_type_id' => 20
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 20
			],
			[
				'all_field_id' => 33,
				'request_type_id' => 21
			],
			[
				'all_field_id' => 34,
				'request_type_id' => 21
			],
			[
				'all_field_id' => 36,
				'request_type_id' => 21
			],
			[
				'all_field_id' => 37,
				'request_type_id' => 21
			],
			[
				'all_field_id' => 38,
				'request_type_id' => 21
			],
			[
				'all_field_id' => 29,
				'request_type_id' => 21
			],
			[
				'all_field_id' => 27,
				'request_type_id' => 21
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 21
			],
			[
				'all_field_id' => 36,
				'request_type_id' => 22
			],
			[
				'all_field_id' => 27,
				'request_type_id' => 22
			],
			[
				'all_field_id' => 39,
				'request_type_id' => 22
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 22
			],
			[
				'all_field_id' => 40,
				'request_type_id' => 22
			],
			[
				'all_field_id' => 41,
				'request_type_id' => 23
			],
			[
				'all_field_id' => 34,
				'request_type_id' => 23
			],
			[
				'all_field_id' => 27,
				'request_type_id' => 23
			],
			[
				'all_field_id' => 39,
				'request_type_id' => 23
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 23
			],
			[
				'all_field_id' => 36,
				'request_type_id' => 24
			],
			[
				'all_field_id' => 34,
				'request_type_id' => 24
			],
			[
				'all_field_id' => 42,
				'request_type_id' => 24
			],
			[
				'all_field_id' => 39,
				'request_type_id' => 24
			],
			[
				'all_field_id' => 43,
				'request_type_id' => 25
			],
			[
				'all_field_id' => 29,
				'request_type_id' => 25
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 25
			],
			[
				'all_field_id' => 41,
				'request_type_id' => 26
			],
			[
				'all_field_id' => 34,
				'request_type_id' => 26
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 26
			],
			[
				'all_field_id' => 44,
				'request_type_id' => 26
			],
			[
				'all_field_id' => 41,
				'request_type_id' => 27
			],
			[
				'all_field_id' => 34,
				'request_type_id' => 27
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 27
			],
			[
				'all_field_id' => 36,
				'request_type_id' => 28
			],
			[
				'all_field_id' => 27,
				'request_type_id' => 28
			],
			[
				'all_field_id' => 36,
				'request_type_id' => 29
			],
			[
				'all_field_id' => 34,
				'request_type_id' => 29
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 29
			],
			[
				'all_field_id' => 27,
				'request_type_id' => 29
			],
			[
				'all_field_id' => 29,
				'request_type_id' => 30
			],
			[
				'all_field_id' => 45,
				'request_type_id' => 30
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 30
			],
			[
				'all_field_id' => 29,
				'request_type_id' => 31
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 31
			],
			[
				'all_field_id' => 33,
				'request_type_id' => 32
			],
			[
				'all_field_id' => 34,
				'request_type_id' => 32
			],
			[
				'all_field_id' => 36,
				'request_type_id' => 32
			],
			[
				'all_field_id' => 37,
				'request_type_id' => 32
			],
			[
				'all_field_id' => 38,
				'request_type_id' => 32
			],
			[
				'all_field_id' => 29,
				'request_type_id' => 32
			],
			[
				'all_field_id' => 27,
				'request_type_id' => 32
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 32
			],
			[
				'all_field_id' => 46,
				'request_type_id' => 33
			],
			[
				'all_field_id' => 47,
				'request_type_id' => 33
			],
			[
				'all_field_id' => 48,
				'request_type_id' => 33
			],
			[
				'all_field_id' => 41,
				'request_type_id' => 35
			],
			[
				'all_field_id' => 32,
				'request_type_id' => 35
			],
			[
				'all_field_id' => 4,
				'request_type_id' => 35
			],
			[
				'all_field_id' => 49,
				'request_type_id' => 36
			],
			[
				'all_field_id' => 32,
				'request_type_id' => 36
			],
			[
				'all_field_id' => 50,
				'request_type_id' => 38
			],
			[
				'all_field_id' => 51,
				'request_type_id' => 38
			],
			[
				'all_field_id' => 20,
				'request_type_id' => 39
			],
			[
				'all_field_id' => 21,
				'request_type_id' => 39
			],
			[
				'all_field_id' => 52,
				'request_type_id' => 39
			],
			[
				'all_field_id' => 53,
				'request_type_id' => 39
			],
			[
				'all_field_id' => 54,
				'request_type_id' => 41
			],
			[
				'all_field_id' => 55,
				'request_type_id' => 41
			],
			[
				'all_field_id' => 56,
				'request_type_id' => 41
			],
			[
				'all_field_id' => 57,
				'request_type_id' => 41
			],
			[
				'all_field_id' => 58,
				'request_type_id' => 42
			],
			[
				'all_field_id' => 59,
				'request_type_id' => 42
			],
			[
				'all_field_id' => 7,
				'request_type_id' => 42
			],
			[
				'all_field_id' => 60,
				'request_type_id' => 42
			],
			[
				'all_field_id' => 61,
				'request_type_id' => 42
			],
			[
				'all_field_id' => 19,
				'request_type_id' => 42
			],
			[
				'all_field_id' => 4,
				'request_type_id' => 42
			],
			[
				'all_field_id' => 62,
				'request_type_id' => 43
			],
			[
				'all_field_id' => 63,
				'request_type_id' => 43
			],
			[
				'all_field_id' => 64,
				'request_type_id' => 43
			],
			[
				'all_field_id' => 20,
				'request_type_id' => 44
			],
			[
				'all_field_id' => 65,
				'request_type_id' => 45
			],
			[
				'all_field_id' => 66,
				'request_type_id' => 45
			],
			[
				'all_field_id' => 67,
				'request_type_id' => 45
			],
			[
				'all_field_id' => 68,
				'request_type_id' => 45
			],
			[
				'all_field_id' => 69,
				'request_type_id' => 45
			],
			[
				'all_field_id' => 70,
				'request_type_id' => 45
			],
			[
				'all_field_id' => 71,
				'request_type_id' => 45
			],
			[
				'all_field_id' => 72,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 73,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 74,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 75,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 76,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 24,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 40,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 77,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 78,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 79,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 80,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 81,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 82,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 83,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 84,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 85,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 86,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 87,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 88,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 89,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 90,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 91,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 92,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 93,
				'request_type_id' => 48
			],
			[
				'all_field_id' => 94,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 91,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 72,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 73,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 74,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 75,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 76,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 24,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 40,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 79,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 80,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 81,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 82,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 83,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 84,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 85,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 86,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 87,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 88,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 89,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 90,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 92,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 93,
				'request_type_id' => 49
			],
			[
				'all_field_id' => 95,
				'request_type_id' => 50
			],
			[
				'all_field_id' => 96,
				'request_type_id' => 50
			],
			[
				'all_field_id' => 97,
				'request_type_id' => 50
			],
			[
				'all_field_id' => 98,
				'request_type_id' => 50
			],
			[
				'all_field_id' => 95,
				'request_type_id' => 51
			],
			[
				'all_field_id' => 96,
				'request_type_id' => 51
			],
			[
				'all_field_id' => 97,
				'request_type_id' => 51
			],
			[
				'all_field_id' => 98,
				'request_type_id' => 51
			],
			[
				'all_field_id' => 95,
				'request_type_id' => 52
			],
			[
				'all_field_id' => 96,
				'request_type_id' => 52
			],
			[
				'all_field_id' => 97,
				'request_type_id' => 52
			],
			[
				'all_field_id' => 98,
				'request_type_id' => 52
			],
			[
				'all_field_id' => 95,
				'request_type_id' => 53
			],
			[
				'all_field_id' => 96,
				'request_type_id' => 53
			],
			[
				'all_field_id' => 97,
				'request_type_id' => 53
			],
			[
				'all_field_id' => 98,
				'request_type_id' => 53
			],
			[
				'all_field_id' => 99,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 100,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 81,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 82,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 83,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 85,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 86,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 87,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 88,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 89,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 90,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 91,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 101,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 102,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 103,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 104,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 105,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 106,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 107,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 108,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 109,
				'request_type_id' => 54
			],
			[
				'all_field_id' => 110,
				'request_type_id' => 55
			],
			[
				'all_field_id' => 54,
				'request_type_id' => 59
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 59
			],
			[
				'all_field_id' => 54,
				'request_type_id' => 60
			],
			[
				'all_field_id' => 30,
				'request_type_id' => 60
			],
			[
				'all_field_id' => 111,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 72,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 73,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 74,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 75,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 76,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 78,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 79,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 81,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 83,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 85,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 86,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 87,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 88,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 89,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 90,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 91,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 112,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 113,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 114,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 115,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 116,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 117,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 118,
				'request_type_id' => 61
			],
			[
				'all_field_id' => 119,
				'request_type_id' => 62
			],
			[
				'all_field_id' => 119,
				'request_type_id' => 63
			],
			[
				'all_field_id' => 120,
				'request_type_id' => 64
			],
			[
				'all_field_id' => 120,
				'request_type_id' => 65
			],
			[
				'all_field_id' => 120,
				'request_type_id' => 66
			],
			[
				'all_field_id' => 121,
				'request_type_id' => 66
			],
			[
				'all_field_id' => 122,
				'request_type_id' => 66
			],
			[
				'all_field_id' => 120,
				'request_type_id' => 67
			],
			[
				'all_field_id' => 121,
				'request_type_id' => 67
			],
			[
				'all_field_id' => 122,
				'request_type_id' => 67
			],
			[
				'all_field_id' => 49,
				'request_type_id' => 68
			],
			[
				'all_field_id' => 53,
				'request_type_id' => 68
			],
		];

        foreach($requestfields as $requestfield) {
			RequestField::create($requestfield);
		}
    }
}
