<?php

namespace App;

use App\Helpers\Constant;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $appends = [
        'type_es',
        'status_es'
    ];

    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    public function operationControl()
    {
        return $this->belongsTo(OperationControl::class);
    }

    /************************************************************
     * | SCOPES
     *************************************************************/
    public function scopeDriverTransactions($query, $driver_id)
    {
        return $query->where('driver_id', $driver_id);
    }

    public function getTypeEsAttribute()
    {
        if ($this->type === Constant::OPERATION_CONTROL_TYPE['control_operativo']) {
            return 'Contol Operativo';
        } else if ($this->type === Constant::OPERATION_CONTROL_TYPE['adelanto']) {
            return 'Adelanto';
        } else if ($this->type === Constant::OPERATION_CONTROL_TYPE['retiro']) {
            return 'Retiro';
        } else if ($this->type === Constant::OPERATION_CONTROL_TYPE['gasto_combustible']) {
            return 'Gasto de Combustible';
        }
        return '';
    }

    public function getStatusEsAttribute()
    {
        if ($this->type === 1) {
            return 'Aprobado';
        }
        return 'Pendiente';
    }
}
