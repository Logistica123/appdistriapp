<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    public function ubis()
    {
        return $this->belongsToMany(Ubi::class);
    }
}
