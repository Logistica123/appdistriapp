<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    protected $appends = [
        'type_es'
    ];

    protected $with = [
        'company'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    public function scopeCompanyBranches($query, Company $company)
    {
        return $query->where('company_id', $company->id);
    }

    public function getTypeEsAttribute()
    {
        if ($this->type === 1) {
            return 'Cabecera';
        }
        return 'Interior';
    }
}
