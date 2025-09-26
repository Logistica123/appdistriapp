<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Contracts\Validation\Validator;

class HereAPIException extends Exception
{
    protected $validator;

    protected $code = 400;

    public function __construct(Validator $validator)
    {
        $this->validator = $validator;
    }

    public function render()
    {
        return response()->json([
            "error" => "No se pudo conectar con el API. Intente nuevamente",
            "custom_message" => "No se pudo conectar con el API. Intente nuevamente"
        ], $this->code);
    }
}
