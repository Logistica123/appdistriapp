<?php

use App\Http\Controllers\V1\Admin\ActionController;
use App\Http\Controllers\V1\Admin\BranchController;
use App\Http\Controllers\V1\Admin\MaterialUbiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('auth/sign-in', 'AuthController@signIn');
Route::middleware(['auth:sanctum'])->group(function () {
    //ACTION CONTROLLER
    Route::get('actions', [ActionController::class, 'getActions']);
    Route::put('actions/{action}', [ActionController::class, 'updateCredits']);

    //BRANCH CONTROLLER
    Route::get('branches', [BranchController::class, 'index']);
    Route::post('branches', [BranchController::class, 'store']);
    Route::put('branches/{branch}', [BranchController::class, 'update']);
    Route::get('branches/{branch}', [BranchController::class, 'delete']);

    //COMPANY CONTROLLER
    Route::get('companies', 'CompanyController@index');
    Route::post('companies', 'CompanyController@store');
    Route::put('companies/{companyId}', 'CompanyController@update');
    Route::delete('companies/{companyId}', 'CompanyController@delete');

    //DELIVERY IMAGE CONTROLLER
    Route::get('delivery-images/{deliveryImage}/image', 'DeliveryImageController@getImage');

    //DOCUMENT CONTROLLER
    Route::get('documents', 'DocumentController@index');

    //DOCUMENT FILE CONTROLLER
    Route::get('document-files', 'DocumentFileController@index');

    // DRIVER CONTROLLER
    Route::get('drivers', 'DriverController@index');
    Route::get('drivers/count', 'DriverController@getDriversCount');
    Route::get('drivers/driver-location', 'DriverController@getDriversLastLocation');
    Route::get('drivers/ranking', 'DriverController@getRanking');
    Route::post('drivers', 'DriverController@store');
    Route::put('drivers/{driver}', 'DriverController@update');
    Route::put('drivers/{driver}/status', 'DriverController@updateStatus');
    Route::put('drivers/{driver}/bank/confirm', 'DriverController@confirmBankData');
    Route::put('drivers/{driver}/bank/reject', 'DriverController@rejectBankData');
    Route::put('drivers/{driver}/password', 'DriverController@resetPassword');
    Route::put('drivers/{driver}/firebase-uid', 'DriverController@updateFirebaseUID');
    Route::put('drivers/{driver}/company', 'DriverController@assignCompanyToDriver');
    Route::put('drivers/{driver}/values', 'DriverController@updateDriverValues');
    Route::delete('drivers/{driver}', 'DriverController@delete');

    //DRIVER LOCATION CONTROLLER
    Route::get('driver-locations/drivers/{driver}/{date}', 'DriverLocationController@getDriverLocationsByDate');
    Route::get('driver-locations', 'DriverLocationController@getDriversWithLastLocation');

    //FUEL CONTROL CONTROLLER
    Route::get('fuel-controls/month/{month}/year/{year}', 'FuelControlController@index');
    Route::get('fuel-controls/download/{month}/{year}/{time}', 'FuelControlController@export');

    //FUEL CONTROL IMAGE CONTROLLER
    Route::get('fuel-control-images/{fuelControlImage}/image', 'FuelControlImageController@getImage');

    // CHATKIT CONTROLLER, HELP CONTROLLER
    // Route disabled: legacy ChatKit controller removed from codebase.
    // Route::get('chatkit/drivers/{driver}', 'ChatKitController@checkIfDriverRoomExists');

    //DOCUMENT FILE CONTROLLER
    Route::get('document-files/{documentFile}/download', 'DocumentFileController@download');

    // LOCATION CONTROLLER
    Route::get('locations', 'LocationController@index');
    Route::get('locations/count', 'LocationController@getLocationsCount');
    Route::post('locations', 'LocationController@store');
    Route::put('locations/{location}', 'LocationController@update');
    Route::put('locations/{location}/coords', 'LocationController@updateCoords');
    Route::delete('locations/{location}', 'LocationController@delete');

    //MATERIAL UBI CONTROLLER
    Route::get('material-ubis', [MaterialUbiController::class, 'index']);
    Route::put('material-ubis/{materialUbi}', [MaterialUbiController::class, 'updateValue']);

    //NOTIFICATION CONTROLLER
    Route::get('notifications', 'NotificationController@index');
    Route::get('notifications/count', 'NotificationController@getNotificationsCount');
    Route::post('notifications', 'NotificationController@sendNotification');

    // BENEFIT CONTROLLER
    Route::get('benefits', 'BenefitController@index');
    Route::post('benefits', 'BenefitController@store');
    Route::get('benefits/{benefit}', 'BenefitController@show');
    Route::put('benefits/{benefit}', 'BenefitController@update');
    Route::delete('benefits/{benefit}', 'BenefitController@destroy');

    // COMPLAINTS
    Route::get('complaints', 'ComplaintController@index');
    Route::put('complaints/{complaint}/status', 'ComplaintController@updateStatus');

    // INSURANCE REQUESTS
    Route::get('insurance-requests', 'InsuranceRequestController@index');

    //OPERATION CONTROL CONTROLLER
    Route::get('operation-controls/month/{month}/year/{year}', 'OperationControlController@index');
    Route::get('operation-controls/companies', 'OperationControlController@getCompanies');
    Route::post('operation-controls/download/{time}', 'OperationControlController@export');
    Route::put('operation-controls/{operationControl}', 'OperationControlController@update');
    Route::put('operation-controls/{operationControl}/approve', 'OperationControlController@approveOperationControl');
    Route::put('operation-controls/{operationControl}/no-devolution', 'OperationControlController@sumNoDevCredits');
    Route::put('operation-controls/{operationControl}/values', 'OperationControlController@updateValues');

    //OPERATION CONTROL IMAGE CONTROLLER
    Route::get('operation-control-images/{operationControlImage}/image', 'OperationControlImageController@getImage');

    // ORDER CONTROLLER
    Route::get('orders/type/{type}', 'OrderController@index');
    Route::get('orders/type/{type}/month/{month}/year/{year}', 'OrderController@getOrdersByDate');
    Route::get('orders/type/{type}/from/{start_date}/to/{end_date}', 'OrderController@getOrdersByDateRange');

    //SUGGESTION CONTROLLER
    Route::get('suggestions', 'SuggestionController@index');
    Route::get('suggestions/count', 'SuggestionController@getSuggestionsCount');

    //TOLL CONTROL CONTROLLER
    Route::get('toll-controls/month/{month}/year/{year}', 'TollControlController@index');
    Route::get('toll-controls/download/{month}/{year}/{time}', 'TollControlController@export');

    //TOLL CONTROL IMAGE CONTROLLER
    Route::get('toll-control-images/{tollControlImage}/image', 'TollControlImageController@getImage');

    //TRANSACTION CONTROLLER
    Route::get('transactions/month/{month}/year/{year}', 'TransactionController@index');
    Route::get('transactions/download/{month}/{year}/{time}', 'TransactionController@export');

    //UPLOADED DOCUMENT CONTROLLER
    Route::get('uploaded-documents', 'UploadedDocumentController@index');
    Route::get('uploaded-documents/count', 'UploadedDocumentController@getUploadedDocumentsCount');

    // USER CONTROLLER
    Route::get('users/profile', 'UserController@getProfile');

    //WITHDRAWAL REQUEST CONTROLLER
    Route::get('withdrawal-requests/month/{month}/year/{year}', 'WithdrawalRequestController@index');
    Route::get('withdrawal-requests/download/{month}/{year}/{time}', 'WithdrawalRequestController@export');
});
