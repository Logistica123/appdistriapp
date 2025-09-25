<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MaterialUbi extends Model
{
    protected $table = 'material_ubi';

    protected $with = [
        'material',
        'ubi'
    ];

    public function material()
    {
        return $this->belongsTo(Material::class);
    }

    public function ubi()
    {
        return $this->belongsTo(Ubi::class);
    }
}
