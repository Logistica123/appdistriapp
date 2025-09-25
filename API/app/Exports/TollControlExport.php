<?php

namespace App\Exports;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;

class TollControlExport implements FromCollection, WithHeadings, ShouldAutoSize
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
            ->join('toll_controls', 'drivers.id', '=', 'toll_controls.driver_id')
            ->select(
                DB::raw('CONCAT(drivers.name, " ", drivers.last_name) AS full_name'),
                DB::raw("DATE_FORMAT(toll_controls.date, '%d-%m-%Y') as formatted_dob"),
                'toll_controls.station',
                'toll_controls.total'
            )
            ->orderBy('toll_controls.date')
            ->whereMonth('toll_controls.date', $this->month)
            ->whereYear('toll_controls.date', $this->year)
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
            'TOTAL'
        ];
    }
}
