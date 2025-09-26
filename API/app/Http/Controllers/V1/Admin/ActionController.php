<?php

namespace App\Http\Controllers\V1\Admin;

use App\Action;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ActionController extends Controller
{
    public function getActions()
    {
        $actions = Action::active()->get();

        return [
            'actions' => $actions
        ];
    }

    public function updateCredits(Request $request, Action $action)
    {
        $action->credits = $request->credits;
        $action->update();

        return [
            'custom_message' => 'Actualizado exitosamente'
        ];
    }
}
