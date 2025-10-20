<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InsuranceRequest extends Model
{
    protected $fillable = [
        'driver_id',
        'insurance_type',
        'notes',
        'status',
    ];

    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }
}
