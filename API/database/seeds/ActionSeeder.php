<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $actions = [
            [
                'action' => 'delivered',
                'credits' => 10
            ],
            [
                'action' => 'geolocalization',
                'credits' => 30
            ],
            [
                'action' => 'service-finished',
                'credits' => 10
            ],
            [
                'action' => 'no-devolution',
                'credits' => 30
            ],
            [
                'action' => 'full-week',
                'credits' => 50
            ],
            [
                'action' => 'km',
                'credits' => 0.3
            ]
        ];

        DB::table('actions')->insert($actions);
    }
}
