<?php namespace App\Traits;
use Illuminate\Support\Facades\Log;

trait FCMTrait
{
    protected $serverKey = "SERVER_KEY_GOES_HERE";
    protected $endPoint = 'https://fcm.googleapis.com/fcm/send';

    public function sendFCMNotification($data)
    {
        try {
            $data = json_encode($data);
            $headers = array(
                'Content-Type:application/json',
                'Authorization: key=' . config('services.fcm.server_key')
            );
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $this->endPoint);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            $result = curl_exec($ch);
            curl_close($ch);
            Log::channel('fcm')->debug(($result));
            return $result;
        } catch (\Exception $exception) {
            Log::channel('fcm')->debug(json_encode($exception->getMessage()));
            return null;
        }

    }
}
