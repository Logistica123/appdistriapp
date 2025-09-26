<?php

namespace App\Http\Controllers\V1\Admin;

use App\Device;
use App\Http\Controllers\Controller;
use App\Notification;
use App\Traits\FCMTrait;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    use FCMTrait;

    public function index(Request $request)
    {
        $notifications = Notification::whereHas('drivers', function ($q) use ($request) {
            $q->where('admin_id', $request->user()->id);
        })
            ->with('drivers')
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'notifications' => $notifications
        ]);
    }

    public function sendNotification(Request $request)
    {
        $notification = new Notification();
        $notification->text = $request->message;
        $notification->save();

        $devices = Device::whereIn('driver_id', $request->drivers)
            ->with('driver')
            ->get();

        foreach ($devices as $device) {
            $data = [
                'to' => $device->fcm_token,
                'notification' => [
                    'body' => $request->message,
                    'title' => 'DistriApp',
                    'icon' => 'notification_icon',
                    'click_action' => 'FCM_PLUGIN_ACTIVITY'
                ]
            ];

            $res = $this->sendFCMNotification($data);
            if ($res && !$notification->drivers->contains($device->driver)) {
                $notification->drivers()->attach($device->driver);
            }
        }

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Notificaciones enviadas'
        ]);
    }

    public function getNotificationsCount(Request $request)
    {
        $notifications = Notification::whereHas('drivers', function ($q) use ($request) {
            $q->where('admin_id', $request->user()->id);
        })->get();

        return response()->json([
            'success' => true,
            'notifications_count' => $notifications->count()
        ]);
    }
}
