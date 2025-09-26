<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReminderNotification extends Model
{
    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function reminder()
    {
        return $this->belongsTo(Reminder::class);
    }
}
