<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ubi extends Model
{
    public function materials()
    {
        return $this->belongsToMany(Material::class);
    }
}
