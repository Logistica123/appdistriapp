<?php

namespace App\Http\Requests\App;

use App\Exceptions\CustomFormRequestException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'name' => 'required',
            'email' => 'required|unique:drivers',
//            'company' => 'required',
            'password' => 'required|confirmed'
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
            'name.required' => 'Atributo nombre es requerido',
            'email.required' => 'Atributo email es requerido',
            'email.unique' => 'Email ya registrado',
            'company.required' => 'Atributo empresa es requerido',
            'password.required' => 'Atributo contraseña es requerido',
            'password.confirmed' => 'La constraseña no coincide',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new CustomFormRequestException($validator);
    }
}
