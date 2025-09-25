<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FuelControlImage extends Model
{
    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function fuelControl()
    {
        return $this->belongsTo(FuelControl::class);
    }
}
