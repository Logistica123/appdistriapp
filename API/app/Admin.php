<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Admin extends Authenticatable
{
    use HasApiTokens;

    protected $hidden = [
        'password'
    ];

    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function drivers()
    {
        return $this->hasMany(Driver::class);
    }
}
