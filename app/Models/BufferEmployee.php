<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BufferEmployee extends Model
{
    //
	protected $fillable = [
		'buffer_employee_id',
		'has_full_permissions',
		'added_by_employee_id',
	];
}
