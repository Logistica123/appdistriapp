<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reminder extends Model
{
    protected $appends = [
        'type_es'
    ];

    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    public function reminderNotifications()
    {
        return $this->hasMany(ReminderNotification::class);
    }

    /************************************************************
     * | SCOPES
     *************************************************************/
    public function scopeDriverReminders($query, $driver_id)
    {
        return $query->where('driver_id', $driver_id);
    }

    /************************************************************
     * | ACCESSORS
     *************************************************************/
    public function getTypeEsAttribute()
    {
        if ($this->type === 'once') {
            return 'Una sola vez';
        } else if ($this->type === 'monthly') {
            return 'Una vez al mes';
        }  else if ($this->type === 'semi_annually') {
            return 'Cada 6 meses';
        } else if ($this->type === 'yearly') {
            return 'Una vez al año';
        }
        return $this->type;
    }
}
