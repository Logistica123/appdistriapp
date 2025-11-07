<?php

namespace App\Personal;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Reclamo extends Model
{
    use SoftDeletes;

    protected $connection = 'personal';

    protected $table = 'reclamos';

    protected $guarded = [];

    protected $casts = [
        'fecha_alta' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime',
        'pagado' => 'boolean',
    ];

    public function persona(): BelongsTo
    {
        return $this->belongsTo(Persona::class, 'persona_id');
    }

    public function tipo(): BelongsTo
    {
        return $this->belongsTo(ReclamoType::class, 'reclamo_type_id');
    }
}
