<?php

namespace App\Personal;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Persona extends Model
{
    protected $connection = 'personal';

    protected $table = 'personas';

    protected $guarded = [];

    public $timestamps = true;

    public function reclamos(): HasMany
    {
        return $this->hasMany(Reclamo::class, 'persona_id');
    }
}
