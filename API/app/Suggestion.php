<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Suggestion extends Model
{
    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }
}
