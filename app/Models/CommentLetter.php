<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CommentLetter extends Model
{
    //
	protected $casts = [
		'tagged_employee_id' => 'array'
	];

	protected $fillable = [
		'letter_form_id',
		'comment',
		'src_employee_id',
		'hidden_from_requester',
		'tagged_employee_id'
	];
}
