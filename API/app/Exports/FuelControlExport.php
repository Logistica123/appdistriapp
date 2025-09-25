<?php

namespace App\Exports;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;

class FuelControlExport implements FromCollection, WithHeadings, ShouldAutoSize
{
    protected $month;
    protected $year;

    public function __construct($month, $year)
    {
        $this->month = $month;
        $this->year = $year;
    }

    /**
    * @return Collection
    */
    public function collection()
    {
        return DB::table('drivers')
            ->join('fuel_controls', 'drivers.id', '=', 'fuel_controls.driver_id')
            ->select(
                DB::raw('CONCAT(drivers.name, " ", drivers.last_name) AS full_name'),
                DB::raw("DATE_FORMAT(fuel_controls.date, '%d-%m-%Y') as formatted_dob"),
                'fuel_controls.station',
                'fuel_controls.fuel_type',
                'fuel_controls.liters',
                'fuel_controls.price',
                'fuel_controls.total'
            )
            ->orderBy('fuel_controls.date')
            ->whereMonth('fuel_controls.date', $this->month)
            ->whereYear('fuel_controls.date', $this->year)
            ->get();
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'CONDUCTOR',
            'FECHA',
            'ESTACIÓN',
            'TIPO',
            'LITROS',
            'PRECIO',
            'TOTAL'
        ];
    }
}
