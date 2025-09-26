<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OperationControl extends Model
{
    protected $appends = [
        'per'
    ];

    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    public function operationControlImages()
    {
        return $this->hasMany(OperationControlImage::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function actions()
    {
        return $this->belongsToMany(Action::class)
            ->withTimestamps();
    }

    public function zoneBranch()
    {
        return $this->belongsTo(Branch::class, 'branch_id');
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    public function materialUbi()
    {
        return $this->belongsTo(MaterialUbi::class);
    }

    public function transaction()
    {
        return $this->hasOne(Transaction::class);
    }

    /************************************************************
     * | ACCESSORS
     *************************************************************/
    public function getPerAttribute()
    {
        if ($this->assigned > 0) {
            return number_format($this->delivered * 100 / $this->assigned, 1);
        }
        return 0.0;
    }
}
