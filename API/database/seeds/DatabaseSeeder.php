<?php

use Illuminate\Database\Seeder;

require_once __DIR__.'/AdminsTableSeeder.php';

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AdminsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(DriversTableSeeder::class);
        $this->call(DocumentTypesTableSeeder::class);
        $this->call(DocumentsTableSeeder::class);
    }
}
