<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MaterialUbiResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'value' => $this->value,
            'material' => MaterialResource::make($this->whenLoaded('material')),
            'ubi' => UbiResource::make($this->whenLoaded('ubi'))
        ];
    }
}
