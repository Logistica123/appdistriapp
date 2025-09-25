<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DocumentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $documents = [
            [
                'name' => 'Licencia de conducir',
                'document_type_id' => 1
            ],
            [
                'name' => 'L.N.H',
                'document_type_id' => 1
            ],
            [
                'name' => 'Monotributo',
                'document_type_id' => 1
            ],
            [
                'name' => 'Certificado de reincidencia',
                'document_type_id' => 1
            ],
            [
                'name' => 'Cambio de aceite',
                'document_type_id' => 2
            ],
            [
                'name' => 'Aceite de caja',
                'document_type_id' => 2
            ],
            [
                'name' => 'Filtros',
                'document_type_id' => 2
            ],
            [
                'name' => 'Filtros',
                'document_type_id' => 2
            ],
            [
                'name' => 'Kit de correa',
                'document_type_id' => 2
            ],
            [
                'name' => 'Kilometros cubiertos',
                'document_type_id' => 2
            ],
            [
                'name' => 'Seguro (vigente)',
                'document_type_id' => 3
            ],
            [
                'name' => 'R.T.O',
                'document_type_id' => 3
            ],
            [
                'name' => 'R.U.T.A.',
                'document_type_id' => 3
            ],
            [
                'name' => 'Habilitación',
                'document_type_id' => 3
            ],
        ];

        DB::table('documents')->insert($documents);
    }
}
