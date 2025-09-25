<?php

use Chatkit\Exceptions\ChatkitException;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UsersTableSeeder extends Seeder
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
                'name' => 'Super',
                'email' => 'super@distapp.com',
                'password' => bcrypt(123456),
                'role' => 'super',
                'pusher_chat_id' => '1UjBhgBZe'
            ],
            [
                'name' => 'Admin',
                'email' => 'admin@distapp.com',
                'password' => bcrypt(123456),
                'role' => 'admin',
                'pusher_chat_id' => '1UjBhgBZe'
            ]
        ];

        DB::table('users')->insert($users);

        if (! app()->bound('ChatKit')) {
            return;
        }

        $chatkit = app('ChatKit');

        try {
            $chatkit->getUser(['id' => '1UjBhgBZe']);
        } catch (ChatkitException $e) {
            Log::channel('pusherchatkit')->error($e);
            Log::channel('pusherchatkit')->error($e->getCode());
            Log::channel('pusherchatkit')->error($e->getMessage());

            if ($e->getCode() === 404) {
                try {
                    $chatkit->createUser([
                        'id' => '1UjBhgBZe',
                        'name' => 'Administrador'
                    ]);
                } catch (\Exception $e) {
                    Log::channel('pusherchatkit')->error($e);
                    Log::channel('pusherchatkit')->error($e->getCode());
                    Log::channel('pusherchatkit')->error($e->getMessage());
                }
            }
        }
    }
}
