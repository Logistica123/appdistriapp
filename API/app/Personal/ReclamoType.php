<?php

namespace App\Personal;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ReclamoType extends Model
{
    protected $connection = 'personal';

    protected $table = 'reclamo_types';

    protected $guarded = [];

    public $timestamps = true;

    public function reclamos(): HasMany
    {
        return $this->hasMany(Reclamo::class, 'reclamo_type_id');
    }
}
