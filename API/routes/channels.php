<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

use Illuminate\Support\Facades\Broadcast;

//SERVICE CREATED
Broadcast::channel('admin.{pusherId}.service.created', function ($admin, $pusherId) {
    return true;
    return $admin->pusher_id === $pusherId;
});
