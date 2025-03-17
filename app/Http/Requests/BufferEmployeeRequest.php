<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BufferEmployeeRequest extends FormRequest
{
	/**
	 * Determine if the user is authorized to make this request.
	 */
	public function authorize(): bool
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
	 */
	public function rules(): array
	{
		return [
			'buffer_employee_id' => ['required', 'string'],
			'has_full_permissions' => ['required', 'boolean'],
			'added_by_employee_id' => ['required', 'string'],
		];
	}
}
