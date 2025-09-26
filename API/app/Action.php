<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Action extends Model
{
    protected $appends = [
        'name_es'
    ];

    public function operationControls()
    {
        return $this->belongsToMany(OperationControl::class)
            ->withTimestamps();
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class)
            ->withTimestamps();
    }

    public function scopeActive($query) {
        return $query->where('active', 1);
    }

    public function getNameEsAttribute() {
        if ($this->action === 'geolocalization') {
            return 'Guardar cliente';
        } else if ($this->action === 'km') {
            return 'KM';
        }
    }
}
