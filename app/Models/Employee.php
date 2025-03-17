<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    /** @use HasFactory<\Database\Factories\EmployeeFactory> */
    use HasFactory;

	protected $primaryKey = 'id';
	public $incrementing = false;
	protected $keyType = 'string';

	protected $fillable = [
		'first_name',
		'last_name',
		'middle_initial',
		'prenominal_title',
		'postnominal_title',
		'designation',
		'office_id'
	];

	public function office()
	{
		return $this->belongsTo(Office::class);
	}
}
