<?php

use App\Http\Controllers\V1\App\OrderController;
use App\Http\Controllers\V1\App\RewardController;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

Route::post('auth/sign-in', 'AuthController@signIn');
Route::middleware(['auth:sanctum'])->group(function () {

    //COMPANY CONTROLLER
    ROUTE::get('companies', 'CompanyController@index');

    //DELIVERY IMAGE CONTROLLER
    Route::post('delivery-images', 'DeliveryImageController@store');

    //DEVICE CONTROLLER
    Route::post('devices', 'DeviceController@store');
    Route::put('devices/fcm-token', 'DeviceController@updateDeviceFCMToken');

    //DOCUMENT CONTROLLER
    Route::get('documents', 'DocumentController@index');

    //DOCUMENT FILE CONTROLLER
    Route::get('document-files/{documentFile}/download', 'DocumentFileController@download');
    Route::post('document-files', 'DocumentFileController@store');

    //DOCUMENT TYPE CONTROLLER
    Route::get('document-types', 'DocumentTypeController@index');
    Route::get('document-types/{documentType}/documents', 'DocumentTypeController@getDocumentsByDocumentType');

    //DRIVER CONTROLLER
    Route::get('drivers/profile', 'DriverController@getProfile');
    Route::get('drivers/payment-methods', 'DriverController@getPaymentMethods');
    Route::get('drivers/profile/image', 'DriverController@getProfileImage');
    Route::get('drivers/{driver}/profile-image', 'DriverController@getDriverProfileImage');
    Route::get('drivers/ranking', 'DriverController@getRanking');
    Route::post('drivers/profile/image', 'DriverController@storeProfileImage');
    Route::delete('drivers/profile/image', 'DriverController@deleteProfileImage');
    Route::put('drivers/phone-number', 'DriverController@updatePhoneNumber');
    Route::put('drivers/password', 'DriverController@updatePassword');
    Route::put('drivers/fcm-token', 'DriverController@updateFCMToken');
    Route::put('drivers/profile', 'DriverController@updateProfile');
    Route::put('drivers/contractor', 'DriverController@updateContractor');
    Route::put('drivers/payment-methods', 'DriverController@updatePaymentMethods');

    //DRIVER GEOPOSITION CONTROLLER
    Route::post('driver-geopositions', 'DriverGeopositionController@store');

    // COMPLAINTS
    Route::get('complaints', 'ComplaintController@index');
    Route::post('complaints', 'ComplaintController@store');

    //FUEL CONTROL CONTROLLER
    Route::get('fuel-controls/month/{month}/year/{year}', 'FuelControlController@getFuelControlsByMonthAndYear');
    Route::post('fuel-controls', 'FuelControlController@store');
    Route::put('fuel-controls/{fuelControl}', 'FuelControlController@update');
    Route::delete('fuel-controls/{fuelControl}', 'FuelControlController@delete');

    //FUEL CONTROL IMAGE CONTROLLER
    Route::post('fuel-control-images', 'FuelControlImageController@store');

    //HELP CONTROLLER
    // Route disabled: ChatKit backend removed from codebase.
    // Route::get('help', 'ChatKitController@checkChatStatus');

    //JOURNEY CONTROLLER
    Route::get('journeys', 'JourneyController@index');
    Route::post('journeys', 'JourneyController@store');
    Route::post('journeys-sequences', 'JourneyController@findSequence');

    Route::put('journeys/finish', 'JourneyController@finishJourney');

    //LOCATION CONTROLLER
    Route::get('locations', 'LocationController@index');
    Route::get('locations/keyword/{keyword}', 'LocationController@getLocationsByKeyword');
    Route::post('locations', 'LocationController@store');
    Route::post('locations/geocode-address', 'LocationController@geocodeAddress');
    Route::put('locations/{location_id}/coords', 'LocationController@updateCoords');

    //NOTIFICATION CONTROLLER
    Route::get('notifications', 'NotificationController@index');

    // BENEFIT CONTROLLER
    Route::get('benefits', 'BenefitController@index');

    //OPERATION CONTROL CONTROLLER
    Route::get('operation-controls/month/{month}/year/{year}', 'OperationControlController@getOperationControlsByMonthAndYear');
    Route::post('operation-controls', 'OperationControlController@store');
    Route::put('operation-controls/{operationControl}', 'OperationControlController@update');
    Route::delete('operation-controls/{operationControl}', 'OperationControlController@delete');

    //OPERATION CONTROL IMAGE CONTROLLER
    Route::post('operation-control-images', 'OperationControlImageController@store');

    //ORDER CONTROLLER
    Route::get('orders/type/{type}/day/{day}/month/{month}/year/{year}', 'OrderController@getOrdersByDate');
    Route::post('orders', 'OrderController@store');
    Route::post('orders/optimize', 'OrderController@optimizeOrders');
    Route::put('orders/delivery-order', [OrderController::class, 'setDeliveryOrderToOrders']);
    Route::put('orders/{order}', 'OrderController@update');
    Route::put('orders/{order}/status', 'OrderController@setOrderStatus');
    Route::put('orders/{order}/delivered', 'OrderController@setDeliveredOrder');
    Route::put('orders/{order}/delivered-offline', 'OrderController@setDeliveredOrderOffline');
    Route::put('orders/{order}/not-delivered', 'OrderController@setNotDeliveredOrder');
    Route::delete('orders/{order}', 'OrderController@delete');

    //PAYMENT METHOD CONTROLLER
    Route::get('payment-methods', 'PaymentMethodController@index');
    Route::get('payment-methods/driver', 'PaymentMethodController@getDriverPaymentMethods');
    Route::put('payment-methods', 'PaymentMethodController@updatePaymentMethods');

    //REMINDER CONTROLLER
    Route::get('reminders', 'ReminderController@index');
    Route::post('reminders', 'ReminderController@store');
    Route::put('reminders/{reminder}', 'ReminderController@update');
    Route::delete('reminders/{reminder}', 'ReminderController@delete');

    // ROUTE CLOSURES (HOJA DE RUTA)
    Route::post('route-closures', 'RouteClosureController@store');
    Route::get('rewards/balance', 'RewardController@balance');

    //SUGGESTION CONTROLLER
    Route::post('suggestions', 'SuggestionController@store');

    //TOLL CONTROL CONTROLLER
    Route::get('toll-controls/month/{month}/year/{year}', 'TollControlController@getTollControlsByMonthAndYear');
    Route::post('toll-controls', 'TollControlController@store');
    Route::put('toll-controls/{tollControl}', 'TollControlController@update');
    Route::delete('toll-controls/{tollControl}', 'TollControlController@delete');

    //TOLL CONTROL IMAGE CONTROLLER
    Route::post('toll-control-images', 'TollControlImageController@store');

    //TRANSACTION CONTROLLER
    Route::get('transactions', 'TransactionController@index');
    Route::post('transactions/withdrawal-request', 'TransactionController@storeWithdrawalRequest');

    //UPDATE LOCATION REQUEST CONTROLLER
    Route::post('update-location-requests', 'UpdateLocationRequestController@store');

    //UPLOADED DOCUMENT CONTROLLER
    Route::get('uploaded-documents', 'UploadedDocumentController@index');
    Route::post('uploaded-documents', 'UploadedDocumentController@store');
    Route::delete('uploaded-documents/{uploadedDocument}', 'UploadedDocumentController@delete');

    //WITHDRAWAL REQUEST CONTROLLER
    Route::get('withdrawal-requests', 'WithdrawalRequestController@index');
    Route::post('withdrawal-requests', 'WithdrawalRequestController@store');

    // LOGGING ROUTES
    Route::post('directions-route-request', function () {
        Log::channel('directionsrouterequestlog')->info('REQUESTED');
        return response()->json([
            'success' => true
        ]);
    });
});
