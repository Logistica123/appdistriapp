<?php

namespace App\Http\Controllers\V1\Admin;

use App\Benefit;
use App\Http\Controllers\Controller;
use App\Http\Resources\BenefitResource;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class BenefitController extends Controller
{
    public function index(Request $request)
    {
        $query = Benefit::query()
            ->orderBy('position')
            ->orderByDesc('created_at');

        if ($request->filled('type')) {
            $query->where('type', $request->input('type'));
        }

        if ($request->filled('status')) {
            $status = $request->input('status') === 'active';
            $query->where('is_active', $status);
        }

        if ($request->filled('search')) {
            $query->where(function ($builder) use ($request) {
                $builder->where('title', 'like', '%' . $request->input('search') . '%')
                    ->orWhere('subtitle', 'like', '%' . $request->input('search') . '%')
                    ->orWhere('short_description', 'like', '%' . $request->input('search') . '%');
            });
        }

        $benefits = $query->get();

        return response()->json([
            'success' => true,
            'benefits' => BenefitResource::collection($benefits)->resolve(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $this->validateBenefit($request);

        $benefit = new Benefit();
        $this->fillBenefit($benefit, $data, $request);
        $benefit->save();

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'benefit' => (new BenefitResource($benefit))->resolve(),
        ]);
    }

    public function show(Benefit $benefit)
    {
        return response()->json([
            'success' => true,
            'benefit' => (new BenefitResource($benefit))->resolve(),
        ]);
    }

    public function update(Request $request, Benefit $benefit)
    {
        $data = $this->validateBenefit($request, $benefit);

        $this->fillBenefit($benefit, $data, $request);
        $benefit->save();

        return response()->json([
            'success' => true,
            'updated' => true,
            'message' => 'resource updated',
            'benefit' => (new BenefitResource($benefit))->resolve(),
        ]);
    }

    public function destroy(Benefit $benefit)
    {
        if ($benefit->image_path) {
            Storage::disk('public')->delete($benefit->image_path);
        }

        $benefit->delete();

        return response()->json([
            'success' => true,
            'deleted' => true,
            'message' => 'resource deleted',
        ]);
    }

    protected function validateBenefit(Request $request, ?Benefit $benefit = null): array
    {
        $types = ['hero', 'highlight', 'feature', 'card'];

        $rules = [
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'short_description' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'cta_label' => ['nullable', 'string', 'max:255'],
            'cta_url' => ['nullable', 'string', 'max:2048'],
            'external_image_url' => ['nullable', 'url', 'max:2048'],
            'type' => ['required', 'string', Rule::in($types)],
            'position' => ['nullable', 'integer', 'min:0', 'max:65535'],
            'is_active' => ['nullable', 'boolean'],
            'meta' => ['nullable'],
        ];

        $imageRule = ['nullable', 'image', 'max:4096'];
        $rules['image'] = $imageRule;

        return $request->validate($rules);
    }

    protected function fillBenefit(Benefit $benefit, array $data, Request $request): void
    {
        $benefit->title = Arr::get($data, 'title');
        $benefit->subtitle = Arr::get($data, 'subtitle');
        $benefit->short_description = Arr::get($data, 'short_description');
        $benefit->description = Arr::get($data, 'description');
        $benefit->cta_label = Arr::get($data, 'cta_label');
        $benefit->cta_url = Arr::get($data, 'cta_url');
        $benefit->type = Arr::get($data, 'type', $benefit->type ?? 'feature');
        $benefit->position = Arr::get($data, 'position', $benefit->position ?? 0);
        $benefit->is_active = Arr::get($data, 'is_active', $benefit->is_active ?? true);
        $benefit->meta = $this->normalizeMeta($request->input('meta'));

        if ($request->hasFile('image')) {
            if ($benefit->image_path) {
                Storage::disk('public')->delete($benefit->image_path);
            }
            $benefit->image_path = $request->file('image')->store('benefits', 'public');
            $benefit->external_image_url = null;
        } elseif (!empty($data['external_image_url'])) {
            if ($benefit->image_path) {
                Storage::disk('public')->delete($benefit->image_path);
            }
            $benefit->image_path = null;
            $benefit->external_image_url = $data['external_image_url'];
        } elseif ($request->has('external_image_url') && empty($data['external_image_url'])) {
            if ($benefit->image_path) {
                Storage::disk('public')->delete($benefit->image_path);
            }
            $benefit->image_path = null;
            $benefit->external_image_url = null;
        }
    }

    protected function normalizeMeta($meta): ?array
    {
        if (is_null($meta) || $meta === '') {
            return null;
        }

        if (is_array($meta)) {
            return $meta;
        }

        if (is_string($meta)) {
            $decoded = json_decode($meta, true);
            if (json_last_error() === JSON_ERROR_NONE) {
                return $decoded;
            }
        }

        return null;
    }
}
