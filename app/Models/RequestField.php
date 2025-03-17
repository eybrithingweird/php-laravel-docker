<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RequestField extends Model
{
    //
	protected $fillable = [
		'request_type_id',
		'all_field_id',
	];
}
