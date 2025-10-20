<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route; // ✅ importante
use App\Http\Controllers\DriverSyncController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Rutas del sistema APPRUTEO (API de choferes).
| Aquí registramos los endpoints, incluyendo la sincronización con
| el sistema de Personal de Logística Argentina.
|
*/

Route::middleware('api')->group(function () {
    // 🔁 Sincronización de choferes con el sistema de Personal
    Route::apiResource('driversync', DriverSyncController::class);
});
