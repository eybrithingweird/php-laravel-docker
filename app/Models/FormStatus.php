<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FormStatus extends Model
{
	//
	protected $casts = [
		'dst_employee_id' => 'array'
	];
	
	protected $fillable = [
		'letter_form_id',
		'status',
		'current_employee_id',
		'next_employee_id',
		'dst_employee_id',
	];
}
