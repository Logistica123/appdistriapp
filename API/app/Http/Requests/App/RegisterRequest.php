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
            'last_name' => 'required',
            'email' => 'required|unique:drivers',
            'cuil' => 'required|unique:drivers,cuil|regex:/^\d{11}$/',
//            'company' => 'required',
            'password' => 'required|confirmed',
            'phone_number' => 'nullable',
            'city' => 'nullable',
            'car_make' => 'nullable',
            'car_model' => 'nullable',
            'car_year' => 'nullable',
            'license_plate' => 'nullable',
            'bank_cbu' => 'nullable|digits:22',
            'bank_owner_is_driver' => 'nullable|boolean',
            'bank_holder_name' => 'nullable|string|max:255',
            'bank_holder_document' => 'nullable|string|max:50',
            'bank_holder_phone' => 'nullable|string|max:50',
            'bank_holder_email' => 'nullable|email|max:120',
            'company' => 'nullable|string|max:255'
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
            'last_name.required' => 'Atributo apellido es requerido',
            'email.required' => 'Atributo email es requerido',
            'email.unique' => 'Email ya registrado',
            'cuil.required' => 'Atributo CUIL es requerido',
            'cuil.unique' => 'CUIL ya registrado',
            'cuil.regex' => 'El CUIL debe contener 11 dígitos',
            'password.required' => 'Atributo contraseña es requerido',
            'password.confirmed' => 'La constraseña no coincide',
            'bank_cbu.digits' => 'El CBU debe contener 22 dígitos',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new CustomFormRequestException($validator);
    }
}
