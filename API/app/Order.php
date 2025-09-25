<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $dates = [
        'date'
    ];

    protected $appends = [
        'status_es'
    ];

    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function drivers()
    {
        return $this->belongsToMany(Driver::class, 'routing_plans');
    }

    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    public function deliveryImages()
    {
        return $this->hasMany(DeliveryImage::class);
    }

    public function actions()
    {
        return $this->belongsToMany(Action::class)
            ->withTimestamps();
    }

    /************************************************************
     * | SCOPES
     *************************************************************/
    public function scopeTodayOrders($query)
    {
        return $query->whereDate('created_at', Carbon::today());
    }

    public function scopeDriverOrders($query, $driver)
    {
        return $query->where('driver_id', $driver->id);
    }

    public function scopePendingStatus($query)
    {
        return $query->where('status', 'pending');
    }

    public function scopeNotDeliveredStatus($query)
    {
        return $query->where('status', '!=', 'delivered');
    }

    /************************************************************
     * | ACCESSORS
     *************************************************************/
    public function getStatusEsAttribute()
    {
        if ($this->status == 'delivered') {
            return 'entregada';
        } else if ($this->status == 'skipped') {
            return 'saltada';
        } else if ($this->status == 'pending') {
            return 'pendiente';
        } else if ($this->status == 'not-delivered') {
            return 'no entregada';
        }

        return $this->status;
    }
}
