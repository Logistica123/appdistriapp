<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('admins')->updateOrInsert(
            ['email' => 'admin@distapp.com'],
            [
                'name' => 'Administrador',
                'password' => Hash::make('123456'),
                'updated_at' => now(),
                'created_at' => now(),
            ]
        );
    }
}
