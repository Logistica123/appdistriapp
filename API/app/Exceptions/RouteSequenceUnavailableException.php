<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Contracts\Validation\Validator;

class RouteSequenceUnavailableException extends Exception
{
    protected $code = 400;

    public function __construct()
    {
    }

    public function render()
    {
        return response()->json([
            "error" => "Error de validación",
            "message" => 'Ruta no pudo ser encontrada',
            "custom_message" => 'Ruta no pudo ser encontrada'
        ], $this->code);
    }
}
