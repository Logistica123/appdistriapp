<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BranchResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'hour_rate' => $this->hour_rate,
            'km_rate' => $this->km_rate,
            'package_rate' => $this->package_rate,
            'fixed_hours' => $this->fixed_hours,
            'plus_km' => $this->plus_km,
            'status' => $this->status,
            'type_es' => $this->type_es,
            'type' => $this->type,
            'company' => CompanyResource::make($this->whenLoaded('company'))
        ];
    }
}
