<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    /************************************************************
    | RELATIONSHIPS
     *************************************************************/
    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    /************************************************************
    | SCOPES
     *************************************************************/
    public function scopeDriverDevice($query, $user, $uuid)
    {
        return $query->where('driver_id', $user->id)
            ->where('uuid', $uuid);
    }
}
