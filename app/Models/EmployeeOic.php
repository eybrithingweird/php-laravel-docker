<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmployeeOic extends Model
{
    //
	protected $fillable = [
		'employee_id',
		'oic_employee_id',
		'oic_start_date',
		'oic_end_date',
		'added_by',
	];	
}
