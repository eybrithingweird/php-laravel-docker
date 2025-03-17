<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FormAddfieldRequest extends FormRequest
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
			'field_label' => ['required', 'string'],
			'field_type' => ['required', 'string'],
			'field_value' => ['nullable', 'string'],
			'field_option' => ['nullable', 'string']
		];
	}
}
