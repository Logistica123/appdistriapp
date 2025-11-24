<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DriverBankChange extends Model
{
    protected $fillable = [
        'driver_id',
        'previous_cbu',
        'new_cbu',
        'previous_bank_owner_is_driver',
        'new_bank_owner_is_driver',
        'previous_bank_holder_name',
        'new_bank_holder_name',
        'previous_bank_holder_document',
        'new_bank_holder_document',
        'previous_bank_holder_phone',
        'new_bank_holder_phone',
        'previous_bank_holder_email',
        'new_bank_holder_email',
        'status',
        'requested_by',
        'requested_by_id',
        'resolved_by',
        'resolved_by_id',
        'resolved_at',
        'ip',
        'user_agent',
    ];

    protected $casts = [
        'previous_bank_owner_is_driver' => 'boolean',
        'new_bank_owner_is_driver' => 'boolean',
        'resolved_at' => 'datetime',
    ];

    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }
}
