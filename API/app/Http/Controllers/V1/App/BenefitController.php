<?php

namespace App\Http\Controllers\V1\App;

use App\Benefit;
use App\Http\Controllers\Controller;
use App\Http\Resources\BenefitResource;
use Illuminate\Http\Request;

class BenefitController extends Controller
{
    public function index(Request $request)
    {
        $query = Benefit::query()
            ->active()
            ->orderBy('type')
            ->orderBy('position')
            ->orderByDesc('created_at');

        if ($request->filled('type')) {
            $query->where('type', $request->input('type'));
        }

        if ($request->filled('search')) {
            $query->where(function ($builder) use ($request) {
                $builder->where('title', 'like', '%' . $request->input('search') . '%')
                    ->orWhere('subtitle', 'like', '%' . $request->input('search') . '%')
                    ->orWhere('short_description', 'like', '%' . $request->input('search') . '%');
            });
        }

        $benefits = $query->get();

        $grouped = $benefits
            ->groupBy('type')
            ->map(function ($group) {
                return BenefitResource::collection($group)->resolve();
            });

        return response()->json([
            'success' => true,
            'benefits' => BenefitResource::collection($benefits)->resolve(),
            'grouped' => $grouped,
        ]);
    }
}
