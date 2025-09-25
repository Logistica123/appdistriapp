<?php

namespace App\Exceptions;

use Exception;

class UnavailableHereAPIException extends Exception
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
            "custom_message" => 'API no disponible, intente nuevamente'
        ], $this->code);
    }
}
