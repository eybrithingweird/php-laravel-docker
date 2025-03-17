<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommentLetterRequest extends FormRequest
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
            // 'letter_form_id' => ['required', 'string'],
			'comment' => ['required', 'string'],
			'src_employee_id' => ['required', 'string'],
			'hidden_from_requester' => ['required', 'boolean'],
			'tagged_employee_id' => ['nullable', 'array'],
        ];
    }
}
