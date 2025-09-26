<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeliveryImage extends Model
{
    /************************************************************
     * | ACCESSORS
     *************************************************************/
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
