<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Benefit extends Model
{
    protected $fillable = [
        'title',
        'subtitle',
        'short_description',
        'description',
        'cta_label',
        'cta_url',
        'type',
        'position',
        'is_active',
        'meta',
        'external_image_url',
    ];

    protected $casts = [
        'meta' => 'array',
        'is_active' => 'boolean',
        'position' => 'integer',
    ];

    protected $appends = [
        'image_url',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function (Benefit $benefit) {
            $benefit->slug = $benefit->generateUniqueSlug($benefit->title);
        });

        static::updating(function (Benefit $benefit) {
            if ($benefit->isDirty('title')) {
                $benefit->slug = $benefit->generateUniqueSlug($benefit->title, $benefit->id);
            }
        });
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    public function getImageUrlAttribute(): ?string
    {
        if ($this->image_path) {
            return Storage::disk('public')->url($this->image_path);
        }

        if ($this->external_image_url) {
            return $this->external_image_url;
        }

        if (is_array($this->meta)) {
            return Arr::get($this->meta, 'image_url');
        }

        return null;
    }

    public function setMetaAttribute($value): void
    {
        if (is_string($value)) {
            $decoded = json_decode($value, true);
            $this->attributes['meta'] = json_last_error() === JSON_ERROR_NONE ? json_encode($decoded) : $value;
            return;
        }

        $this->attributes['meta'] = $value ? json_encode($value) : null;
    }

    protected function generateUniqueSlug(string $title, ?int $ignoreId = null): string
    {
        $baseSlug = Str::slug($title) ?: Str::uuid()->toString();
        $slug = $baseSlug;
        $counter = 1;

        while ($this->slugExists($slug, $ignoreId)) {
            $slug = "{$baseSlug}-{$counter}";
            $counter++;
        }

        return $slug;
    }

    protected function slugExists(string $slug, ?int $ignoreId = null): bool
    {
        return static::where('slug', $slug)
            ->when($ignoreId, fn (Builder $query) => $query->where('id', '!=', $ignoreId))
            ->exists();
    }
}
