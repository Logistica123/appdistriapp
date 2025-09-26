<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FuelControl extends Model
{
    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    public function fuelControlImages()
    {
        return $this->hasMany(FuelControlImage::class);
    }
}
