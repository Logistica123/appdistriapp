<?php

namespace App\Http\Controllers\V2\App;

use App\Http\Controllers\Controller;
use App\Http\Resources\OperationControlResource;
use App\OperationControl;
use App\Services\V1\MaterialUbiService;
use App\Services\V1\OperationControlService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OperationControlController extends Controller
{
    public function getOperationControlsByMonthAndYear(Request $request, $month, $year)
    {
        $operationControls = OperationControlService::getDriverOperationControlsByMonthAndYear($request->user(), $month, $year);

        return [
            'operation_controls' => OperationControlResource::collection($operationControls)
        ];
    }

    public function store(Request $request)
    {
        $operationControl = OperationControlService::setAttributes(new OperationControl(), $request->all());
        $operationControl->approved = 0;
        $operationControl->driver_id = $request->user()->id;
        $operationControl->branch_id = $request->branch_id;
        $materialUbi = MaterialUbiService::getUbiMaterial($request->material_id, $request->ubi_id);
        $operationControl->material_ubi_id = $materialUbi->id;
        $operationControl->save();

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Información guardada',
            'operation_control_id' => $operationControl->id
        ]);
    }

    public function update(Request $request, OperationControl $operationControl)
    {
        $operationControl = OperationControlService::setAttributes($operationControl, $request->all());
        $operationControl->approved = 0;
        $operationControl->branch_id = $request->branch_id;
        $materialUbi = MaterialUbiService::getUbiMaterial($request->material_id, $request->ubi_id);
        $operationControl->material_ubi_id = $materialUbi->id;
        $operationControl->update();

        return response()->json([
            'success' => true,
            'created' => true,
            'message' => 'resource stored',
            'custom_message' => 'Información actualizada',
            'operation_control_id' => $operationControl->id
        ]);
    }
}
