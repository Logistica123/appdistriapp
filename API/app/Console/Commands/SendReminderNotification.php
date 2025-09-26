<?php

namespace App\Console\Commands;

use App\Reminder;
use App\ReminderNotification;
use App\Traits\FCMTrait;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class SendReminderNotification extends Command
{
    use FCMTrait;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:reminders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $reminderNotifications = ReminderNotification::whereDate('scheduled_at', '<=', Carbon::now()->format('Y-m-d'))
            ->where('processed', 0)
            ->get();

        Log::channel('reminders')->debug(json_encode($reminderNotifications));

        foreach ($reminderNotifications as $reminderNotification) {
            foreach ($reminderNotification->reminder->driver->devices as $device) {
                $data = [
                    'to' => $device->fcm_token,
                    'notification' => [
                        'body' => $reminderNotification->reminder->description,
                        'title' => 'LogApp Recordatorio',
                        'icon' => 'notification_icon',
                        'click_action' => 'FCM_PLUGIN_ACTIVITY'
                    ],
                    'data' => [
                        'type' => 'reminder'
                    ]
                ];

                try  {
                    $result = $this->sendNotification($data);
                    $res = json_decode($result);
                    $str = 'ReminderNotificationID: ' . $reminderNotification->id . ' DeviceID: '  . $device->id . ' Success: ' . $res->success;
                    Log::channel('reminders')->debug('*****SUCCESS*****');
                    Log::channel('reminders')->debug($str);
                    Log::channel('reminders')->debug('******************');
                    if ($res->success === 1) {
                        $reminderNotification->processed = 1;
                        $reminderNotification->update();
                    }
                } catch (\Exception $e) {
                    Log::channel('reminders')->debug('*****ERROR*****');
                    Log::channel('reminders')->debug(json_encode($e->getMessage()));
                    Log::channel('reminders')->debug('***************');
                }
            }
        }
    }
}
