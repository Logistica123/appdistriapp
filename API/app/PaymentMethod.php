<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentMethod extends Model
{
    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function drivers()
    {
        return $this->belongsToMany(Driver::class);
    }
}
