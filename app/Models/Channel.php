<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
	protected $casts = [
        'dst_offices_id' => 'array'
    ];

	protected $fillable = [
		'request_type_id',
		'dst_offices_id'
	];
}
