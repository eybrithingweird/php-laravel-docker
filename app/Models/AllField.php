<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AllField extends Model
{
	protected $casts = [
		'field_options' => 'array'
	];
	
	protected $fillable = [
		'field',
		'field_type',
		'field_options'
	];
}
