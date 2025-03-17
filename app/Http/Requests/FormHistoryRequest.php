<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FormHistoryRequest extends FormRequest
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
			'src_employee_id' => ['required', 'string'],
			'action_description' => ['required', 'string'],
        ];
    }
}
