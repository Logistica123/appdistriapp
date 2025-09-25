<?php

namespace App\Exceptions;

use App\OperationControl;
use Exception;
use Illuminate\Support\Facades\Log;

class CreditsOperationControlNoDevolutionException extends Exception
{
    protected $operationControl;

    public function __construct(OperationControl $operationControl) {
        $this->operationControl = $operationControl;
    }

    public function report(\Throwable $exception)
    {
        Log::channel('credits')->debug('***NoDevolution***');
        Log::channel('credits')->debug(json_encode($exception));
        Log::channel('credits')->debug(json_encode( $this->operationControl));
        Log::channel('credits')->debug('********_____********');
    }
}
