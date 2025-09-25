<?php

namespace App\Services\V1;

use App\Driver;
use App\Order;

class OrderService {

    public static function setDeliveryOrderToOrders(Array $ordersIds)
    {
        $i = 1;
        foreach ($ordersIds as $orderId) {
            $order = Order::findOrFail($orderId);
            $order->delivery_order = $i;
            $order->update();
            $i++;
        }
    }

    public static function getOrdersByDate(Driver $driver, $type, $day, $month, $year)
    {
        return Order::DriverOrders($driver)
            ->whereDay('date', $day)
            ->whereMonth('date', $month)
            ->whereYear('date', $year)
            ->whereType($type)
            ->with('location')
            ->orderBy('delivery_order')
            ->get();
    }
}