<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BenefitResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'subtitle' => $this->subtitle,
            'short_description' => $this->short_description,
            'description' => $this->description,
            'type' => $this->type,
            'position' => $this->position,
            'is_active' => (bool) $this->is_active,
            'image_url' => $this->image_url,
            'cta_label' => $this->cta_label,
            'cta_url' => $this->cta_url,
            'external_image_url' => $this->external_image_url,
            'slug' => $this->slug,
            'meta' => $this->meta,
            'created_at' => optional($this->created_at)->toIso8601String(),
            'updated_at' => optional($this->updated_at)->toIso8601String(),
        ];
    }
}
