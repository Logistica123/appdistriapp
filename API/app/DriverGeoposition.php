<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class DriverGeoposition extends Model
{
    protected $appends = [
        'date'
    ];

    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    public function getDateAttribute()
    {
        return Carbon::parse($this->created_at)->format('d-m-Y h:m:s');
    }
}
