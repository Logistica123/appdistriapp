<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RouteClosure extends Model
{
    protected $fillable = [
        'driver_id',
        'date',
        'deliveries',
        'notes',
        'evidence_path',
        'points_awarded',
        'status'
    ];

    protected $casts = [
        'date' => 'date',
    ];

    public function driver(): BelongsTo
    {
        return $this->belongsTo(Driver::class);
    }
}
