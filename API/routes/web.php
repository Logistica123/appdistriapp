<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Driver;
use App\DriverGeoposition;
use App\Events\ServiceCreated;
use App\Location;
use App\Order;
use App\Service;
use Chatkit\Chatkit;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Subscriber\Oauth\Oauth1;
use Illuminate\Support\Facades\Storage;
use Guzzle\Plugin\Oauth\OauthPlugin;

//use Twilio\Rest\Client as TwilioClient;
//use Guzzle\Http\Client;
//
Route::view('/', 'welcome');

//Route::get('chatkit', 'ChatkitController@chatkit');

//Route::get('create', function () {
//    $chatkit = new Chatkit([
//        'instance_locator' => 'v1:us1:ada1c1ba-4006-4a9e-9ac6-b6cff9f3349e',
//        'key' => '3a6b809a-6f91-4ad2-9135-78e6869992e7:ewuiF4FoCGjBxmN+nBeKakpDFrYNrnwa/nySn4cuhzY='
//    ]);
//
//    $chatkit->createUser([
//        'id' => '1cvgfeomu',
//        'name' => 'Admin'
//    ]);
//});

//Route::get('auth', function () {
//    $chatkit = new Chatkit([
//        'instance_locator' => 'v1:us1:ada1c1ba-4006-4a9e-9ac6-b6cff9f3349e',
//        'key' => '3a6b809a-6f91-4ad2-9135-78e6869992e7:ewuiF4FoCGjBxmN+nBeKakpDFrYNrnwa/nySn4cuhzY='
//    ]);
//    $chatkit->authenticate(['user_id' => '1cvgfeomu']);
//});

//Route::get('distancematrix', function () {
//    $response = \GoogleMaps::load('distancematrix')
//        ->setParam([
//            "origins" => "10.376372,-66.956079",
//            "destinations" => "10.372226,-66.961524|10.374589,-66.953178",
//            "mode" => "driving",
//        ])
//        ->get();
//
//    dd($response);
//});
//
//Route::get('fcm', 'Admin\FCMController@sendFCM');
//Route::get('endDelivery', 'App\OrderController@endDelivery');
//
//
//Route::get('geohash/{location}', 'App\LocationController@geohash');
//
//Route::get('oauth', 'App\JourneyController@generateToken');

//Route::get('here-api', function () {
//    $stack = HandlerStack::create();
//
//    $middleware = new Oauth1([
//        'consumer_key' => '99-J3vYcMCrryqOTxe_G_A',
//        'consumer_secret' => 'nzc25kC-aUSeIyqq01wmSppggptz3-m904Pd-mxGWElRUCaUTkeShOGs6X5m1fS2D-Z4zFkSSBgH-4ZlVk8gJQ',
//        'signature_method' => Oauth1::SIGNATURE_METHOD_HMAC
//    ]);
//    $stack->push($middleware);
//
//    $client = new Client([
//        'base_uri' => 'https://account.api.here.com/',
//        'handler' => $stack,
//        'headers' => [
//            'content-type' => 'application/x-www-form-urlencoded'
//        ]
//    ]);
//    $res = $client->post('oauth2/token', ['auth' => 'oauth']);
//    dd($res);

//    $client = new Client([
//        'base_uri' => 'https://account.api.here.com/',
//        'headers' => [
//            'content-type' => 'application/x-www-form-urlencoded'
//        ]
//    ]);

//    $client = new GuzzleHttp\Client();
//    $client = new Client('https://account.api.here.com/');

//    $oauth = new OauthPlugin(array(
//        'consumer_key'    => '99-J3vYcMCrryqOTxe_G_A',
//        'consumer_secret' => 'nzc25kC-aUSeIyqq01wmSppggptz3-m904Pd-mxGWElRUCaUTkeShOGs6X5m1fS2D-Z4zFkSSBgH-4ZlVk8gJQ',
//        'signature_method' => 'HMAC-SHA256',
//        'timestamp' => Carbon::now()->timestamp
//    ));
//    $client->addSubscriber($oauth);
//    $res = $client->request('POST', 'https://account.api.here.com/oauth2/token', [
//        'auth' => ['oauth']
//    ]);
//    $res = $client->post('https://account.api.here.com/oauth2/token', ['auth' => 'oauth']);
//    dd($res->getBody());
//});

//Route::get('here-locations', function () {
//    $locations = Location::select('lat', 'lng')
//        ->take(80)
//        ->get();
//
//    $destination = '';
//    $destination1 = 'destination1=' . $locations[0]->lat . ',' . $locations[0]->lat;
//    $i = 0;
//    foreach ($locations as $location) {
//        if ($i != 0) {
//            $destination1 =
//                $destination1 . '&' . 'destination' . $i . '=' .
//                $location->lat . ',' . $location->lng;
//        }
//        $i++;
//    }
//    $destination1 = $destination1
//        . '&improveFor=time'
//        . '&mode=fastest;car'
//        . '&apiKey=KKr3g3d5rNj7Rr7yo6pbqjkewsSQk_Y3umaoZPQicbI';
//    dd($destination1);
//});

//Route::get('assign', function () {
//    for ($i = 1; $i <= 55; $i++) {
//        $location = Location::inRandomOrder()->first();
//
//        $order = new Order();
//        $order->driver_id = 2;
//        $order->type = 'urban-distribution';
//        $order->status = 'pending';
//        $order->location_id = $location->id;
//        $order->receiver = 'Elio Acosta';
//        $order->description = 'Detalles';
//        $order->save();
//    }
//});

//Route::get('journey', function () {
//    $driver = Driver::find(2);
//    $orders = Order::driverOrders($driver)
//        ->whereType('urban-distribution')
//        ->todayOrders()
//        ->pendingStatus()
//        ->with('location')
//        ->get();
//
//    $destination = '';
//    $i = 1;
//    foreach ($orders as $order) {
//        $destination = $destination . '&' . 'destination' . $i . '=' . $order->location->lat . ',' . $order->location->lng;
//        $i++;
//    }
//
//    $destination = ltrim($destination, $destination[0]);
//    $destination = $destination
//        . '&improveFor=time'
//        . '&mode=fastest;car'
//        . '&apiKey=KKr3g3d5rNj7Rr7yo6pbqjkewsSQk_Y3umaoZPQicbI';
//
//    $curl = curl_init();
//
//    curl_setopt_array($curl, array(
//        CURLOPT_URL => "https://wse.cit.api.here.com/2/findsequence.json",
//        CURLOPT_RETURNTRANSFER => true,
//        CURLOPT_ENCODING => "",
//        CURLOPT_MAXREDIRS => 10,
//        CURLOPT_TIMEOUT => 0,
//        CURLOPT_FOLLOWLOCATION => true,
//        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//        CURLOPT_CUSTOMREQUEST => "GET",
//        CURLOPT_POSTFIELDS => $destination,
//        CURLOPT_HTTPHEADER => array(),
//    ));
//
//    $response = curl_exec($curl);
//
//    curl_close($curl);
//    dd($response);
//
//    dd($destination);
//
//    return response()->json([
//        'success' => true,
//        'orders' => $orders
//    ]);
//});

//Route::get('calculate-eta', function () {
//    $orders = Order::where('status', 'delivered')
//        ->take(5)
//        ->pluck('delivered_at')
//        ->toArray();
//
//    for ($i = 0; $i < sizeof($orders); $i++) {
//        if ($i + 1 < sizeof($orders)) {
//            echo($orders[$i] . ' - ' . $orders[$i + 1]);
//            echo "<br>";
//            $diff_in_minutes = Carbon::createFromFormat('Y-m-d H:i:s', $orders[$i])
//                ->diffInMinutes(Carbon::createFromFormat('Y-m-d H:i:s', $orders[$i + 1]));
//            print_r($diff_in_minutes);
//            echo "<br>";
//        }
//    }
//
//    dd($orders);
//
//});

//Route::get('whatsapp', function () {
//    //5493795073930
//    $ch = curl_init();
//
//    curl_setopt($ch, CURLOPT_URL, "https://api.chat-api.com/instance166770/sendMessage?token=tmcb4e6rrh056c6i");
//    curl_setopt($ch, CURLOPT_POST, 1);
//    curl_setopt($ch, CURLOPT_POSTFIELDS,
//        array('phone' => '5493795073930', 'body' => 'Mensaje de prueba'));
//    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//    $server_output = curl_exec($ch);
//    curl_close($ch);
//    dd($server_output);
//});

Route::get('download/{time}', 'V1\Admin\OperationController@export');

Route::get('query', function () {
    $date = Carbon::createFromFormat('d/m/Y', '11/06/1990')->format('d/m/y');

    $operations = DB::table('drivers')
        ->join('operations', 'drivers.id', '=', 'operations.driver_id')
        ->select(
            DB::raw('CONCAT(drivers.name, " ", drivers.last_name) AS full_name'),
            DB::raw("DATE_FORMAT(operations.date, '%d-%m-%Y') as formatted_dob"),
            'operations.assigned',
            'operations.delivered',
            'operations.returned',
            'operations.hours',
            'operations.km'
        )
        ->whereDate('date', \Carbon\Carbon::yesterday())
        ->get();

    dd($operations);
});

Route::get('is-file', function () {
    dd(unlink(storage_path() . '/app/' . 'files/images/profile/u5vrU7SddYYEgIf12qABnPTX0TJSpSQ2ITSlgwtF.jpeg'));
    dd(Storage::delete(storage_path() . '/app/' . 'files/images/profile/u5vrU7SddYYEgIf12qABnPTX0TJSpSQ2ITSlgwtF.jpeg'));
    dd(is_file(storage_path() . '/app/' . 'files/images/profile/u5vrU7SddYYEgIf12qABnPTX0TJSpSQ2ITSlgwtF.jpeg'));
});

Route::get('test-pusher-event', function () {
    $service = new Service();
    $service->description = 'Nuevo servicio: llevar una mudanza desde hasta';
    $service->admin_id = 1;
    $service->save();

    event(new ServiceCreated(1, $service));

    return 'xy';
});

Route::get('saved-clients', function () {
    $orders = Order::where('saved_client', 1)->get();

    foreach ($orders as $order) {
        $order->location->saved_client = 1;
        $order->location->update();
    }
});

Route::get('last-geolocations', function () {
    $drivers = Driver::all();

    foreach ($drivers as $driver) {
        $except = 10;
        $keep = DriverGeoposition::where('driver_id', $driver->id)
            ->latest()
            ->take($except)
            ->pluck('id')
            ->toArray();

        DriverGeoposition::where('driver_id', $driver->id)
            ->whereNotIn('id', $keep)
            ->delete();
    }

    return response()->json([
        'success' => true
    ]);
});


Route::get('run-migration', function () {
//    \App\Services\V1\MigrationService::populateCompaniesTable();
//    \App\Services\V1\MigrationService::alterDriversTableCompanyId();
//    \App\Services\V1\MigrationService::assignCompanyToDrivers();
//    \App\Services\V1\MigrationService::alterActionsTableCompanyId();
//    \App\Services\V1\MigrationService::alterOperationControlsTableBranchId();
//    \App\Services\V1\MigrationService::alterOperationControlsTableValues();
//    \App\Services\V1\MigrationService::alterTransactionTable();
//    \App\Services\V1\MigrationService::populateMaterialsTable();
//    \App\Services\V1\MigrationService::populateUbisTable();
    \App\Services\V1\MigrationService::alterOperationControlsTableMaterialUbi();
//    \App\Services\V1\MigrationService::populateMaterialUbiTable();
});
