<?php

namespace App\Http\Controllers\V1\Admin;

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

    public function store(Request $request)
    {
        $company = new Company();
        $company->name = $request->name;
        $company->save();

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Empresa guardada'
        ]);
    }

    public function update(Request $request, $companyId)
    {
        $company = Company::findOrfail($companyId);
        $company->name = $request->name;
        $company->update();

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Empresa actualizada'
        ]);
    }

    public function delete($companyId)
    {
        $company = Company::findOrfail($companyId);
        try {
            $company->delete();
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'custom_message' => 'No se puede eliminar porque tiene datos asociados'
            ], 400);
        }

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Empresa eliminada'
        ]);
    }
}
