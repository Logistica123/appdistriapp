<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DriversTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'Pedro',
                'last_name' => 'Pérez',
                'email' => 'conductor@gmail.com',
                'city' => 'Caracas',
                'phone_number' => '+876532819873',
                'car_make' => 'Fiat',
                'car_model' => 'Argo',
                'car_year' => '2019',
                'license_plate' => 'AG759LH',
                'password' => bcrypt(123456),
                'score' => 5,
                'admin_id' => 1,
                'test_driver' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Elio',
                'last_name' => 'Acosta',
                'email' => 'eliojavier86@gmail.com',
                'city' => 'Caracas',
                'phone_number' => '+584241449720',
                'car_make' => 'Fiat',
                'car_model' => 'Cronos',
                'car_year' => '2018',
                'license_plate' => 'AG759LH',
                'password' => bcrypt(123456),
                'score' => 5,
                'admin_id' => 1,
                'test_driver' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach ($users as $user) {
            DB::table('drivers')->updateOrInsert(
                ['email' => $user['email']],
                $user
            );
        }
    }
}
