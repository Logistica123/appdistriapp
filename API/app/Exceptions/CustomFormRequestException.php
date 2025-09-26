<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Contracts\Validation\Validator;

class CustomFormRequestException extends Exception
{
    protected $validator;

    protected $code = 422;

    public function __construct(Validator $validator)
    {
        $this->validator = $validator;
    }

    public function render()
    {
        return response()->json([
            "error" => "Error de validación",
            "message" => $this->validator->errors()->first(),
            "custom_message" => $this->validator->errors()->first()
        ], $this->code);
    }
}
