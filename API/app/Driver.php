<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Driver extends Authenticatable
{
    use HasApiTokens;

    protected $appends = [
        'full_name',
        'car'
    ];

    protected $hidden = [
        'password',
        'profile_img_path',
        'fcm_token'
    ];

    protected $with = [
        'driverCompany'
    ];

    /************************************************************
     * | RELATIONSHIPS
     *************************************************************/
    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function locations()
    {
        return $this->belongsToMany(Location::class, 'orders');
    }

    public function updateLocationRequests()
    {
        return $this->belongsToMany(Location::class, 'update_location_requests');
    }

    public function devices()
    {
        return $this->hasMany(Device::class);
    }

    public function lastDevice()
    {
        return $this->hasOne(Device::class)->latest();
    }

    public function suggestions()
    {
        return $this->hasMany(Suggestion::class);
    }

    public function documents()
    {
        return $this->hasMany(Document::class);
    }

    public function notifications()
    {
        return $this->belongsToMany(Notification::class);
    }

    public function driverGeopositions()
    {
        return $this->hasMany(DriverGeoposition::class);
    }

    public function lastDriverGeoposition()
    {
        return $this->hasOne(DriverGeoposition::class)->latest();
    }

    public function journeys()
    {
        return $this->hasMany(Journey::class);
    }

    public function operationControls()
    {
        return $this->hasMany(OperationControl::class);
    }

    public function latestOperationControls()
    {
        return $this->hasMany(OperationControl::class)
            ->latest();
    }

    public function fuelControls()
    {
        return $this->hasMany(FuelControl::class);
    }

    public function latestFuelControls()
    {
        return $this->hasMany(FuelControl::class)
            ->latest();
    }

    public function tollControls()
    {
        return $this->hasMany(TollControl::class);
    }

    public function withdrawalRequests()
    {
        return $this->hasMany(WithdrawalRequest::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function paymentMethods()
    {
        return $this->belongsToMany(PaymentMethod::class);
    }

    public function driverCompany()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

    /************************************************************
     * | ACCESSORS
     *************************************************************/
    public function getFullNameAttribute()
    {
        return "{$this->name} {$this->last_name}";
    }

    public function getCarAttribute()
    {
        return "{$this->car_make} {$this->car_model} {$this->car_year}";
    }

    /************************************************************
     * | SCOPES
     *************************************************************/
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeAdminDrivers($query, $admin)
    {
        return $query->where('admin_id', $admin->id);
    }

    public function scopeCompanyDrivers($query, $companyId)
    {
        return $query->where('company_id', $companyId);
    }

    public function scopeScores($query)
    {
        return $query->orderBy('score', 'desc')
            ->where('test_driver', false);
    }

    public function scopeRandomScores($query)
    {
        return $query->inRandomOrder()
            ->where('test_driver', false);
    }

    public function scopeNotTest($query)
    {
        return $query->where('test_driver', false);
    }
}
