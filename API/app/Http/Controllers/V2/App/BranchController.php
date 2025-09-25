<?php

namespace App\Http\Controllers\V2\App;

use App\Http\Controllers\Controller;
use App\Http\Resources\BranchResource;
use App\Services\V1\BranchService;
use Illuminate\Http\Request;

class BranchController extends Controller
{
    public function getActiveBranches(Request $request)
    {
        $branches = BranchService::getDriverCompanyActiveBranches($request->user());

        return [
            'branches' => BranchResource::collection($branches)
        ];
    }
}
