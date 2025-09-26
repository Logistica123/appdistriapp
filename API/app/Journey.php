<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Journey extends Model
{
    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/

    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class)
            ->withTimestamps();
    }

    /************************************************************
     * | SCOPES
     *************************************************************/
    public function scopeTodayJourneys($query)
    {
        return $query->whereDate('created_at', Carbon::today());
    }

    public function scopeDriverJourneys($query, $driver)
    {
        return $query->where('driver_id', $driver->id);
    }

    public function scopeIsNotFinished($query)
    {
        return $query->where('finished', false);
    }

    public function scopeIsFinished($query)
    {
        return $query->where('finished', true);
    }
}
