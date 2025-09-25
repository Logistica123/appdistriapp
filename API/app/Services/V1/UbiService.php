<?php


namespace App\Services\V1;


use App\Ubi;

class UbiService
{
    public static function getAllUbis()
    {
        return Ubi::all();
    }
}