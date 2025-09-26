<?php

use App\Http\Controllers\V1\App\OrderController;
use App\Http\Controllers\V2\App\AuthController;
use App\Http\Controllers\V2\App\BranchController;
use App\Http\Controllers\V2\App\DriverController;
use App\Http\Controllers\V2\App\MaterialController;
use App\Http\Controllers\V2\App\TransactionController;
use App\Http\Controllers\V2\App\UbiController;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

Route::post('auth/sign-in', [AuthController::class, 'login']);
Route::post('drivers/register', [DriverController::class, 'register']);

Route::middleware(['auth:sanctum'])->group(function () {
    //BRANCH CONTROLLER
    Route::get('branches', [BranchController::class, 'getActiveBranches']);

    //DRIVER CONTROLLER
    Route::get('drivers/ranking', [DriverController::class, 'getRanking']);
    Route::get('drivers/{driver}/profile-image', [DriverController::class, 'getDriverProfileImage']);

    //MATERIAL CONTROLLER
    Route::get('materials', [MaterialController::class, 'getMaterials']);

    //OPERATION CONTROL CONTROLLER
    Route::get('operation-controls/month/{month}/year/{year}', 'OperationControlController@getOperationControlsByMonthAndYear');
    Route::post('operation-controls', 'OperationControlController@store');
    Route::put('operation-controls/{operationControl}', 'OperationControlController@update');
    Route::delete('operation-controls/{operationControl}', 'OperationControlController@delete');

    //TRANSACTION CONTROLLER
    Route::get('transactions', [TransactionController::class, 'index']);
    Route::post('transactions/withdrawal-request', [TransactionController::class, 'storeWithdrawalRequest']);

    //UBI CONTROLLER
    Route::get('ubis', [UbiController::class, 'getUbis']);
});
