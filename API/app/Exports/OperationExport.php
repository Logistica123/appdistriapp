<?php

namespace App\Exports;

use App\Operation;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;

class OperationExport implements FromCollection, WithHeadings, ShouldAutoSize
{
    protected $month;
    protected $year;
    protected $driverId;
    protected $company;

    public function __construct($month, $year, $driverId, $company)
    {
        $this->month = $month;
        $this->year = $year;
        $this->driverId = $driverId;
        $this->company = $company;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return DB::table('drivers')
            ->join('operation_controls', 'drivers.id', '=', 'operation_controls.driver_id')
            ->select(
                DB::raw("DATE_FORMAT(operation_controls.date, '%d-%m-%Y') as formatted_dob"),
                DB::raw('CONCAT(drivers.name, " ", drivers.last_name) AS full_name'),
                'operation_controls.transport_make',
                'operation_controls.transport_model',
                'operation_controls.tonnage',
                'operation_controls.company',
                'operation_controls.service',
                'operation_controls.assigned',
                'operation_controls.delivered',
                DB::raw('operation_controls.assigned - operation_controls.delivered AS returned'),
                'operation_controls.description',
                'operation_controls.hours',
                'operation_controls.km',
                DB::raw('operation_controls.hours * drivers.cost_per_hour AS total_hours'),
                DB::raw('operation_controls.km * drivers.cost_per_km AS total_km')
            )
            ->orderBy('operation_controls.date')
            ->whereMonth('operation_controls.date', $this->month)
            ->whereYear('operation_controls.date', $this->year)
            ->where('operation_controls.driver_id', '=', $this->driverId)
//            ->where('operation_controls.company', $this->company ? 'like' : 'is', $this->company)
            ->get();
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'FECHA',
            'CONDUCTOR',
            'MARCA UNIDAD',
            'MODELO UNIDAD',
            'TONELAJE',
            'EMPRESA',
            'SERVICIO',
            'P. ASIGNADOS',
            'P. ENTREGADOS',
            'P. DEVUELTOS',
            'OBSERVACIONES',
            'HORAS',
            'KM',
            'HORAS * VALOR HORA',
            'KM * VALOR KM',
        ];
    }
}
