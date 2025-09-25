<?php

namespace App\Http\Controllers\V1\App;

use App\Company;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function index()
    {
        $companies = Company::all();

        return response()->json([
            'success' => true,
            'companies' => $companies
        ]);
    }
}
