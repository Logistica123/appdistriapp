<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DocumentTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $document_types = [
            [
                'type' => 'Mantenimiento vehículo'
            ],
            [
                'type' => 'Documentación vehículo'
            ],
            [
                'type' => 'Documentación chofer'
            ]
        ];

        DB::table('document_types')->insert($document_types);
    }
}
