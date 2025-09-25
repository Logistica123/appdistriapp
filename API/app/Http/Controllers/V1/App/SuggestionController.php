<?php

namespace App\Http\Controllers\V1\App;

use App\Http\Controllers\Controller;
use App\Suggestion;
use Illuminate\Http\Request;

class SuggestionController extends Controller
{
    public function store(Request $request)
    {
        $suggestion = new Suggestion();
        $suggestion->suggestion = $request->suggestion;
        $suggestion->driver_id = $request->user()->id;
        $suggestion->save();

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Sugerencia enviada'
        ]);
    }
}
