<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function operationControls()
    {
        return $this->hasMany(OperationControl::class);
    }

    public function drivers()
    {
        return $this->hasMany(Driver::class);
    }

    public function branches()
    {
        return $this->hasMany(Branch::class);
    }
}
