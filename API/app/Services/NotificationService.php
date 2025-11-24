<?php

namespace App\Services;

use App\Device;
use App\Driver;
use App\Notification;
use Illuminate\Support\Facades\Log;

class NotificationService
{
    public static function sendToDriver(Driver $driver, string $title, string $body): void
    {
        $devices = Device::where('driver_id', $driver->id)
            ->whereNotNull('fcm_token')
            ->get();

        if ($devices->isEmpty()) {
            return;
        }

        $notification = new Notification();
        $notification->text = $body;
        $notification->save();
        $notification->drivers()->attach($driver);

        foreach ($devices as $device) {
            $payload = [
                'to' => $device->fcm_token,
                'notification' => [
                    'title' => $title,
                    'body' => $body,
                    'icon' => 'notification_icon',
                    'click_action' => 'FCM_PLUGIN_ACTIVITY',
                ],
            ];

            self::sendFCM($payload);
        }
    }

    private static function sendFCM(array $data): void
    {
        try {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/json',
                'Authorization: key=' . config('services.fcm.server_key'),
            ]);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
            $result = curl_exec($ch);
            curl_close($ch);

            Log::channel('fcm')->debug($result);
        } catch (\Throwable $exception) {
            Log::channel('fcm')->debug($exception->getMessage());
        }
    }
}
