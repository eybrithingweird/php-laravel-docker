<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FormStatusRequest extends FormRequest
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
			'letter_form_id' => ['required', 'string'],
			'status' => ['required', 'string'],
			'current_employee_id' => ['nullable', 'string'],
			'next_employee_id' => ['nullable', 'string'],
			'dst_employee_id' => ['required', 'array'],
		];
	}
}
