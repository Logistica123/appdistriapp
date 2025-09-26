<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TollControlImage extends Model
{
    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function tollControl()
    {
        return $this->belongsTo(TollControl::class);
    }
}
