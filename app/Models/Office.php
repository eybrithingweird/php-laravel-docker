<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Office extends Model
{
    protected $fillable = [
		'address',
		'initials'
	];

	public function employees()
	{
		return $this->hasMany(Employee::class);
	}
}
