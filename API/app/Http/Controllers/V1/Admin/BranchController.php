<?php

namespace App\Http\Controllers\V1\Admin;

use App\Branch;
use App\Http\Controllers\Controller;
use App\Http\Resources\BranchResource;
use App\Services\V1\BranchService;
use Illuminate\Http\Request;

class BranchController extends Controller
{
    public function index()
    {
        $branches = BranchService::getAllBranches();

        return [
            'branches' => BranchResource::collection($branches)
        ];
    }

    public function store(Request $request)
    {
        $branch = BranchService::setAttributes(new Branch(), $request->all());
        $branch->save();

        return [
            'custom_message' => 'Sucursal registrada'
        ];
    }

    public function update(Request $request, Branch $branch)
    {
        $branch = BranchService::setAttributes($branch, $request->all());
        $branch->update();

        return [
            'custom_message' => 'Sucursal actualizada'
        ];
    }
}
