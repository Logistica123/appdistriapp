<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OperationControlImage extends Model
{
    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function operationControl()
    {
        return $this->belongsTo(OperationControl::class);
    }
}
