<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $payment_methods = [
            [
                'name' => 'Por paquete'
            ],
            [
                'name' => 'Por hora'
            ],
            [
                'name' => 'Por kilómetro'
            ],
            [
                'name' => 'Por básico'
            ]
        ];

        DB::table('payment_methods')->insert($payment_methods);
    }
}
