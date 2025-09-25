<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $appends = [
        'full_address'
    ];

    public function drivers()
    {
        return $this->belongsToMany(Driver::class, 'orders')
            ->withTimestamps()
            ->withPivot(['status', 'delivered_at', 'skipped_at', 'canceled_at']);
    }

    public function order()
    {
        return $this->hasOne(Order::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function updateRequests()
    {
        return $this->belongsToMany(Driver::class, 'update_location_requests')
            ->withPivot('lat', 'lng');

    }

    /************************************************************
     * | ACCESSORS
     *************************************************************/
    public function getFullAddressAttribute()
    {
        return "{$this->name}. {$this->address}. {$this->city}";
    }

}
