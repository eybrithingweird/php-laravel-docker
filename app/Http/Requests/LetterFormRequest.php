<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LetterFormRequest extends FormRequest
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
			'subject' => ['required', 'string'],
			'request_type_id' => ['required', 'integer'],
			'src_employee_id' => ['required', 'string'],
			'letter_date' => ['required', 'date'],
			'notes' => ['nullable', 'string'],
			'supporting_docu' => ['nullable', 'url:drive.google.com'],
			'is_sent' => ['required', 'boolean'],
			'is_urgent' => ['nullable', 'boolean'],
		];
	}
}
