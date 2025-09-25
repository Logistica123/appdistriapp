<?php namespace App\Traits;
use App\Exceptions\HereAPIException;
use App\Order;
use Illuminate\Support\Facades\Log;

trait HereMapsAPITrait
{
    protected function generateToken()
    {
        $oauth_grant_type = 'client_credentials';
        $oauth_consumer_key = config('services.hereapi.consumer_key');
        $oauth_nonce = substr(md5(uniqid(mt_rand(), true)), 0, 11);
        $oauth_signature_method = 'HMAC-SHA256';
        $oauth_timestamp = time();
        $oauth_version = '1.0';

        $kv1 = 'grant_type=' . rawurlencode($oauth_grant_type);
        $kv2 = 'oauth_consumer_key=' . rawurlencode($oauth_consumer_key);
        $kv3 = 'oauth_nonce=' . rawurlencode($oauth_nonce);
        $kv4 = 'oauth_signature_method=' . rawurlencode($oauth_signature_method);
        $kv5 = 'oauth_timestamp=' . rawurlencode($oauth_timestamp);
        $kv6 = 'oauth_version=' . rawurlencode($oauth_version);

        $encoded_parameters = rawurlencode($kv1 . '&' . $kv2 . '&' . $kv3 . '&' . $kv4 . '&' . $kv5 . '&' . $kv6);
        $base_string = 'POST' . '&' . rawurlencode('https://account.api.here.com/oauth2/token') . '&' . $encoded_parameters;
        $signature = rawurlencode(base64_encode(hash_hmac('sha256', $base_string, (config('services.hereapi.consumer_secret') . '&'), true)));

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://account.api.here.com/oauth2/token",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => "grant_type=client_credentials",
            CURLOPT_HTTPHEADER => array(
                "Content-Type: application/x-www-form-urlencoded",
                "Authorization: OAuth oauth_consumer_key=\"$oauth_consumer_key\",oauth_nonce=\"$oauth_nonce\",oauth_signature=\"$signature\",oauth_signature_method=\"$oauth_signature_method\",oauth_timestamp=\"$oauth_timestamp\",oauth_version=\"$oauth_version\""
            ),
        ));

        $response = curl_exec($curl);
        Log::channel('debuglog')->debug(json_encode($response));
        $retry = 0;
        while (curl_errno($curl) == 28 && $retry < 3) {
            $response = curl_exec($curl);
            $retry++;
        }

        curl_close($curl);
        $decoded_res = json_decode($response);
        if (!$decoded_res) {
            throw  new HereAPIException();
        }
        return $decoded_res->access_token;
    }

    protected function optimizeWaypoints($orders, $params) {
        $access_token = $this->generateToken();
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://wse.ls.hereapi.com/2/findsequence.json?" . $params,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "Content-Type: application/x-www-form-urlencoded",
                "Authorization: Bearer $access_token"
            ),
        ));

        $response = curl_exec($curl);
        Log::channel('hereapi')->debug(json_encode($response));
        $retry = 0;
        while (curl_errno($curl) == 28 && $retry < 3) {
            $response = curl_exec($curl);
            $retry++;
        }

        curl_close($curl);
        $decoded_response = json_decode($response);
        Log::channel('hereapilog')->debug(json_encode($decoded_response));

        if ($decoded_response && $decoded_response->responseCode == 200) {
            $sequence_ids = [];
            $arranged_ids = [];
            $orders_ids = $orders->pluck('id')->toArray();
            foreach ($decoded_response->results[0]->waypoints as $waypoint) {
                if (($pos = strrpos($waypoint->id, "destination")) !== FALSE) {
                    $str = $waypoint->id;
                    $del = "destination";
                    $pos = strpos($str, $del);
                    $important = substr($str, $pos + strlen($del), strlen($str) - 1);
                    array_push($sequence_ids, (int)$important);
                }
            }

            foreach ($sequence_ids as $s) {
                array_push($arranged_ids, $orders_ids[$s - 1]);
            }
            return $arranged_ids;
//            $i = 1;
//            foreach ($arranged_ids as $id) {
//                $order = Order::findOrFail($id);
//                $order->priority = $i;
//                $order->update();
//                $i++;
//            }
        }
        throw new \Exception();
    }
}
