<?php


namespace App\Services\V1;


use App\Driver;
use App\Helpers\Constant;
use App\OperationControl;
use App\Transaction;
use Carbon\Carbon;

class TransactionService
{
    public static function getDriverTransactions(Driver $driver)
    {
        return Transaction::driverTransactions($driver->id)
            ->get();
    }

    public static function getDriverTransactionsAmount(Driver $driver)
    {
        $sumControlOperations = Transaction::driverTransactions($driver->id)
            ->where('type', Constant::OPERATION_CONTROL_TYPE['control_operativo'])
            ->sum('amount');

        $sumAdelantos = Transaction::driverTransactions($driver->id)
            ->where('type', Constant::OPERATION_CONTROL_TYPE['adelanto'])
            ->sum('amount');

        $sumRetiros = Transaction::driverTransactions($driver->id)
            ->where('type', Constant::OPERATION_CONTROL_TYPE['retiro'])
            ->sum('amount');

        $sumGastosCombustibles = Transaction::driverTransactions($driver->id)
            ->where('type', Constant::OPERATION_CONTROL_TYPE['gasto_combustible'])
            ->sum('amount');

        return number_format($sumControlOperations - $sumAdelantos - $sumRetiros - $sumGastosCombustibles, 2);
    }

    public static function createOrUpdateOperationControlTransaction(OperationControl $operationControl)
    {
        if ($operationControl->transaction) {
            $transaction  = $operationControl->transaction;
        } else {
            $transaction = new Transaction();
        }
        $transaction->amount = $operationControl->amount;
        $transaction->type = Constant::OPERATION_CONTROL_TYPE['control_operativo'];
        $transaction->date = Carbon::now();
        $transaction->status = 1;
        $transaction->driver_id = $operationControl->driver_id;
        $transaction->operation_control_id = $operationControl->id;

        if ($operationControl->transaction) {
            $transaction->update();

        } else {
            $transaction->save();
        }
    }
}