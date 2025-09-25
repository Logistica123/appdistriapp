<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TollControl extends Model
{
    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    public function tollControlImages()
    {
        return $this->hasMany(TollControlImage::class);
    }
}
