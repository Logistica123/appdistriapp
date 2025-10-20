<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class ChangeAmountColumnInWithdrawalRequests extends Migration
{
    public function up()
    {
        DB::statement('ALTER TABLE withdrawal_requests MODIFY amount DECIMAL(15,2) NOT NULL');
    }

    public function down()
    {
        DB::statement('ALTER TABLE withdrawal_requests MODIFY amount FLOAT NOT NULL');
    }
}
