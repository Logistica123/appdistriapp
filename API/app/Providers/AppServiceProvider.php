<?php

namespace App\Providers;

use App\Driver;
use App\Journey;
use App\Observers\DriverObserver;
use App\Observers\JourneyObserver;
use App\Observers\OperationControlObserver;
use App\Observers\UserObserver;
use App\OperationControl;
use App\User;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if (class_exists(\Chatkit\Chatkit::class)) {
            $this->app->bind('ChatKit', function () {
                return new \Chatkit\Chatkit([
                    'instance_locator' => config('services.chatkit.locator'),
                    'key' => config('services.chatkit.secret'),
                ]);
            });
        }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
//        Driver::observe(DriverObserver::class);
//        OperationControl::observe(OperationControlObserver::class);
    }
}
