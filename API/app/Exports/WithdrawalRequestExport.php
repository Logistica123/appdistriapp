<?php

namespace App\Exports;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;

class WithdrawalRequestExport implements FromCollection, WithHeadings, ShouldAutoSize
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
            ->join('withdrawal_requests', 'drivers.id', '=', 'withdrawal_requests.driver_id')
            ->select(
                DB::raw('CONCAT(drivers.name, " ", drivers.last_name) AS full_name'),
                DB::raw("DATE_FORMAT(withdrawal_requests.date, '%d-%m-%Y') as formatted_dob"),
                'withdrawal_requests.amount',
                'withdrawal_requests.type',
                'withdrawal_requests.status'
            )
            ->orderBy('withdrawal_requests.date')
            ->whereMonth('withdrawal_requests.date', $this->month)
            ->whereYear('withdrawal_requests.date', $this->year)
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
            'MONTO',
            'TIPO',
            'ESTATUS',
        ];
    }
}
