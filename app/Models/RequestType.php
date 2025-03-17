<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RequestType extends Model
{
    //
	protected $fillable = [
		'reqtype',
		'definition',
		'is_approvable_by_oic',
	];
}
