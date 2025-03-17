<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FormHistory extends Model
{
    protected $fillable = [
		'letter_form_id',
		'src_employee_id',
		'action_description'
	];
}
