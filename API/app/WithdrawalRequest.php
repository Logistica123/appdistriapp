<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WithdrawalRequest extends Model
{
    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    /************************************************************
     * | SCOPES
     *************************************************************/
    public function scopeDriverWithdrawalRequests($query, $driver_id)
    {
        return $query->where('driver_id', $driver_id);
    }

    /************************************************************
     * | ACCESSORS
     *************************************************************/
    public function getTypeAttribute($value)
    {
        if ($value === 'advance') {
            return 'Adelanto';
        }

        if ($value === 'loan') {
            return 'Préstamo';
        }

        return ucfirst($value);
    }
}
