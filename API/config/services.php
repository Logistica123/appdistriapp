<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'chatkit' => [
        'secret' => env('CHATKIT_SECRET_KEY'),
        'locator' => env('CHATKIT_INSTANCE_LOCATOR'),
    ],

    'mapquest' => [
        'consumer_key' => env('MAPQUEST_CONSUMER_KEY'),
        'consumer_secret' => env('MAPQUEST_CONSUMER_SECRET')
    ],

    'fcm' => [
        'server_key' => env('FCM_SERVER_KEY')
    ],

    'hereapi' => [
        'consumer_key' => env("HERE_CONSUMER_KEY"),
        'consumer_secret' => env("HERE_CONSUMER_SECRET")
    ],

    'personal' => [
        'sync' => [
            'table' => env('PERSONAL_SYNC_TABLE'),
            'unique_column' => env('PERSONAL_SYNC_UNIQUE_COLUMN', 'dni'),
            'manage_timestamps' => env('PERSONAL_SYNC_MANAGE_TIMESTAMPS', true),
            'columns' => [
                'dni' => env('PERSONAL_SYNC_UNIQUE_COLUMN', 'dni'),
                'name' => env('PERSONAL_SYNC_NAME_COLUMN', 'nombre'),
                'last_name' => env('PERSONAL_SYNC_LAST_NAME_COLUMN', 'apellido'),
                'phone' => env('PERSONAL_SYNC_PHONE_COLUMN', 'telefono'),
                'license_plate' => env('PERSONAL_SYNC_LICENSE_COLUMN', 'patente'),
                'email' => env('PERSONAL_SYNC_EMAIL_COLUMN', 'email'),
            ],
        ],
        'api' => [
            'url' => env('PERSONAL_SYNC_URL'),
            'key' => env('SYNC_API_KEY'),
        ],
    ],

    'routes' => [
        'max_location_distance_km' => env('ROUTE_MAX_DISTANCE_KM', 100),
    ],
];
