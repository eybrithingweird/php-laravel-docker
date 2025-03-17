<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FormAddfield extends Model
{
    //
	// public $incrementing = false;
	// protected $keyType = 'string';

	protected $fillable = [
		'letter_form_id',
		'field_label',
		'field_type',
		'field_value',
		'field_option'
	];
}
