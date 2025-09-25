<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OperationControlResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'date' => $this->date,
            'city' => $this->city,
            'service' => $this->service,
            'zone' => $this->zone,
            'transport_model' => $this->transport_model,
            'transport_make' => $this->transport_make,
            'tonnage' => $this->tonnage,
            'company' => $this->company,
            'hours' => $this->hours,
            'km' => $this->km,
            'assigned' => $this->assigned,
            'delivered' => $this->delivered,
            'description' => $this->description,
            'approved' => $this->approved,
            'branch_km_rate' => $this->branch_km_rate,
            'branch_hour_rate' => $this->branch_hour_rate,
            'branch_package_rate' => $this->branch_package_rate,
            'branch_fixed_hours' => $this->branch_fixed_hours,
            'branch_plus_km' => $this->branch_plus_km,
            'branch_id' => $this->branch_id,
            'amount' => $this->amount,
            'calculation_mode' => $this->calculation_mode,
            'per' => $this->per,
            'branch' => BranchResource::make($this->whenLoaded('branch')),
            'zone_branch' => BranchResource::make($this->whenLoaded('zoneBranch')),
            'driver' => DriverResource::make($this->whenLoaded('driver')),
            'material_ubi' => MaterialUbiResource::make($this->whenLoaded('materialUbi')),
            'operation_control_images' => $this->operation_control_images
        ];
    }
}
