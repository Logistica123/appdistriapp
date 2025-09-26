<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Suggestion;
use Illuminate\Http\Request;

class SuggestionController extends Controller
{
    public function index(Request $request)
    {
        $suggestions = Suggestion::whereHas('driver', function ($q) use ($request) {
            $q->where('admin_id', $request->user()->id);
        })
            ->latest()
            ->with('driver')
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'suggestions' => $suggestions
        ]);
    }

    public function getSuggestionsCount(Request $request)
    {
        $suggestions = Suggestion::whereHas('driver', function ($q) use ($request) {
            $q->where('admin_id', $request->user()->id);
        })->get();

        return response()->json([
            'success' => true,
            'suggestions_count' => $suggestions->count()
        ]);
    }
}
