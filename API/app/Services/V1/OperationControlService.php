<?php


namespace App\Services\V1;


use App\Driver;
use App\OperationControl;
use Carbon\Carbon;

class OperationControlService
{
    public static function getDriverOperationControlsByMonthAndYear(Driver $driver, $month, $year)
    {
        return OperationControl::whereDriverId($driver->id)
            ->whereMonth('date', '=', $month)
            ->whereYear('date', '=', $year)
            ->with('branch', 'materialUbi', 'zoneBranch')
            ->latest()
            ->get();
    }

    public static function setAttributes(OperationControl $operationControl, $attributes)
    {
        $operationControl->date = Carbon::parse($attributes['date'])->format('Y-m-d');
        $operationControl->city = $attributes['city'];
        $operationControl->zone = $attributes['zone'];
        $operationControl->service = $attributes['service'];
        $operationControl->transport_model = $attributes['transport_model'];
        $operationControl->transport_make = $attributes['transport_make'];
        $operationControl->tonnage = $attributes['tonnage'];
        $operationControl->company = $attributes['company'];
        $operationControl->hours = $attributes['hours'];
        $operationControl->km = $attributes['km'];
        $operationControl->assigned = $attributes['assigned'];
        $operationControl->delivered = $attributes['delivered'];
        $operationControl->description = $attributes['description'];
        $operationControl->company = $attributes['company'];

        return $operationControl;
    }

    public static function calculate()
    {
        //interior
        //#paquetes * valor por paquete (depende de la sucursal)
        //ej 60 paquetes * 100

        //total km - 100 * valor km

        //#paquetes * valor por paquete + total km - 100 * valor km (si total km - 100 > 0)

    }

    public static function calculate2()
    {
        //distribucion urbana
        //total horas * valor por hora

        //interior
        //total km * valor por km + 6 total h * valor hora

    }
}