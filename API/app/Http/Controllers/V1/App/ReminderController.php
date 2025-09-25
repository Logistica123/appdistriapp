<?php

namespace App\Http\Controllers\V1\App;

use App\Http\Controllers\Controller;
use App\Reminder;
use App\ReminderNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReminderController extends Controller
{
    public function index(Request $request)
    {
        $reminders = Reminder::driverReminders($request->user()->id)
            ->get();

        return response()->json([
            'success' => true,
            'reminders' => $reminders
        ]);
    }

    public function store(Request $request)
    {
        $reminder = new Reminder();
        $reminder->description = $request->description;
        $reminder->type = $request->type;
        $reminder->date = Carbon::parse($request->date)->format('Y-m-d');
        $reminder->driver_id = $request->user()->id;
        $reminder->save();

        if ($reminder->type === 'once') {
            $this->storeReminderNotificationOnce($reminder);
        } else if ($reminder->type === 'monthly') {
            $this->storeReminderNotificationMonthly($reminder);
        } else if ($reminder->type === 'semi_annually') {
            $this->storeReminderNotificationSemiAnnually($reminder);
        } else if ($reminder->type === 'yearly') {
            $this->storeReminderNotificationYearly($reminder);
        }

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Recordatorio registrado'
        ]);
    }

    public function storeReminderNotificationOnce($reminder)
    {
        $reminderNotification = new ReminderNotification();
        $reminderNotification->scheduled_at = Carbon::parse($reminder->date)->format('Y-m-d');
        $reminderNotification->reminder_id = $reminder->id;
        $reminderNotification->save();
    }

    public function storeReminderNotificationMonthly($reminder)
    {
        for ($i = 0; $i <= 24; $i++) {
            $reminderNotification = new ReminderNotification();
            $reminderNotification->scheduled_at =
                Carbon::parse($reminder->date)->addMonths($i)->format('Y-m-d');
            $reminderNotification->reminder_id = $reminder->id;
            $reminderNotification->save();
        }
    }

    public function storeReminderNotificationSemiAnnually($reminder)
    {
        for ($i = 0; $i <= 6; $i++) {
            $reminderNotification = new ReminderNotification();
            $reminderNotification->scheduled_at =
                Carbon::parse($reminder->date)->addMonths($i * 6)->format('Y-m-d');
            $reminderNotification->reminder_id = $reminder->id;
            $reminderNotification->save();
        }
    }

    public function storeReminderNotificationYearly($reminder)
    {
        for ($i = 0; $i <= 3; $i++) {
            $reminderNotification = new ReminderNotification();
            $reminderNotification->scheduled_at =
                Carbon::parse($reminder->date)->addYears($i)->format('Y-m-d');
            $reminderNotification->reminder_id = $reminder->id;
            $reminderNotification->save();
        }
    }

    public function delete(Reminder $reminder)
    {
        DB::transaction(function () use ($reminder) {
            $reminder->reminderNotifications()->delete();
            $reminder->delete();
        });

        return response()->json([
            'success' => true,
            'deleted' => true,
            'message' => 'resource deleted',
            'custom_message' => 'Recordatorio eliminado'
        ]);

    }
}
