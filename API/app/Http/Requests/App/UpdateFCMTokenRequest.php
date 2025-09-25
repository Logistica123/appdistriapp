<?php

namespace App\Http\Requests\App;

use App\Exceptions\CustomFormRequestException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class UpdateFCMTokenRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'fcm_token' => 'required'
        ];
    }

    /**
     * Get the validation messages that apply to the request.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'fcm_token.required' => 'El token FCM es requerido',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new CustomFormRequestException($validator);
    }
}
