<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class LogExecutionTime
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // Add response time as an HTTP header. For better accuracy ensure this middleware
        // is added at the end of the list of global middlewares in the Kernel.php file
        if (defined('LARAVEL_START') and $response instanceof Response) {
            $response->headers->add(['X-RESPONSE-TIME' => microtime(true) - LARAVEL_START]);
        }

        return $response;
    }

    public function terminate($request, $response)
    {
        // At this point the response has already been sent to the browser so any
        // modification to the response (such adding HTTP headers) will have no effect
        if (defined('LARAVEL_START') and $request instanceof Request) {
//            Log::channel('debuglog')->debug(json_encode(
//                [
//                    'method' => $request->getMethod(),
//                    'uri' => $request->getRequestUri(),
//                    'seconds' => microtime(true) - LARAVEL_START,
//                ]
//            ));
        }
    }
}
