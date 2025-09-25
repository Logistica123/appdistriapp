<?php

use Illuminate\Database\Seeder;

class BranchesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $branches = [
            [
                'id' => 1,
                'name' => 'Corrientes',
                'package_value' => 100
            ],
            [
                'id' => 2,
                'name' => 'Resistencia',
                'package_value' => 100
            ],
        ];

        \Illuminate\Support\Facades\DB::table('branches')->insert($branches);
    }
}
