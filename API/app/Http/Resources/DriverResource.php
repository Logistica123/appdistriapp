<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DriverResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'firebase_uid' => $this->firebase_uid,
            'name' => $this->name,
            'last_name' => $this->last_name,
            'full_name' => $this->full_name,
            'email' => $this->email,
            'cuil' => $this->cuil,
            'city' => $this->city,
            'phone_number' => $this->phone_number,
            'company' => $this->company,
            'bank_cbu' => $this->bank_cbu ? preg_replace('/\D/', '', $this->bank_cbu) : null,
            'bank_owner_is_driver' => (bool) $this->bank_owner_is_driver,
            'bank_holder_name' => $this->bank_holder_name,
            'car_make' => $this->car_make,
            'car_model' => $this->car_model,
            'car_year' => $this->car_year,
            'license_plate' => $this->license_plate,
            'tonnage' => $this->tonnage,
            'status' => $this->status,
            'status_alt' => $this->status_alt,
            'profile_img_path' => $this->profile_img_path,
            'has_profile_img' => $this->has_profile_img,
            'cost_per_km' => $this->cost_per_km,
            'cost_per_hour' => $this->cost_per_hour,
            'acc_km' => $this->acc_km,
            'send_notif_each_km' => $this->send_notif_each_km,
            'contractor' => $this->contractor,
            'score' => $this->score,
            'test_driver' => $this->test_driver,
            'admin_created' => $this->admin_created,
            'driver_company' => CompanyResource::make($this->whenLoaded('driverCompany'))
        ];
    }
}
