<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LetterForm extends Model
{
    //
	protected $primaryKey = 'id';
	public $incrementing = false;
	protected $keyType = 'string';

	protected $fillable = [
		'id',
		'subject',
		'request_type_id',
		'src_employee_id',
		'letter_date',
		'notes',
		'supporting_docu',
		'is_sent',
		'is_urgent'
	];
}
