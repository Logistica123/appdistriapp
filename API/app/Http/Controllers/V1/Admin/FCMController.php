<?php

namespace App\Http\Controllers\V1\Admin;

use App\Driver;
use App\Http\Controllers\Controller;
use App\Notification;
use Illuminate\Http\Request;
use LaravelFCM\Message\OptionsBuilder;
use LaravelFCM\Message\PayloadDataBuilder;
use LaravelFCM\Message\PayloadNotificationBuilder;
use FCM;

class FCMController extends Controller
{
    public function sendFCM(Request $request, Driver $driver)
    {
        $optionBuilder = new OptionsBuilder();
        $optionBuilder->setTimeToLive(60*20);

        $notificationBuilder = new PayloadNotificationBuilder('my title');
        $notificationBuilder->setBody('Hello world')
            ->setSound('default');

        $dataBuilder = new PayloadDataBuilder();
        $dataBuilder->addData(['a_data' => 'my_data']);

        $option = $optionBuilder->build();
        $notification = $notificationBuilder->build();
        $data = $dataBuilder->build();

        $token = "a_registration_from_your_database";
        $token = 'cZXCuxQdaag:APA91bH0Fq-vG-Uganvo7g6fhl7qEcWvuq6gsaUOITBIhxJjIMmrs2R3Pbq-OMs2sDLB64B-cIcqLQIzPPmHuQJA4FNPeXUr7bWx3x2c-GjcqFZqL4KdgerpAeTNaR8Atyarf1CgIeBH';
        $token = 'd-8iGb0T-_w:APA91bGecZZ0g_mnbyM9icgZBXGp2AGsQboig-1y7AEU2DNsx2hG9SnUJbg3KRKf5gBHa1p5yz6onitGB5zbjpEaqH-Lp75tsEfHoJN0ACxCDVxlxOs9FE5OUn4oDo2OfjWN8bvLdK6d';

        $downstreamResponse = FCM::sendTo($token, $option, $notification, $data);

        $notification = new Notification();
        $notification->text = 'Hiciste 25 km en tu último viaje';
        $notification->save();
        $notification->drivers()->attach(2);


        $downstreamResponse->numberSuccess();
        $downstreamResponse->numberFailure();
        $downstreamResponse->numberModification();

// return Array - you must remove all this tokens in your database
        $downstreamResponse->tokensToDelete();

// return Array (key : oldToken, value : new token - you must change the token in your database)
        $downstreamResponse->tokensToModify();

// return Array - you should try to resend the message to the tokens in the array
        $downstreamResponse->tokensToRetry();

// return Array (key:token, value:error) - in production you should remove from your database the tokens
        $downstreamResponse->tokensWithError();
    }
}
