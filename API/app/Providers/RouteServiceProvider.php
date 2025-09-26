<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();

        $this->mapAdminRoutes();

        $this->mapAppRoutes();
        $this->mapAppV2Routes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
            ->middleware('api')
            ->namespace($this->namespace)
            ->group(base_path('routes/api.php'));
    }

    /**
     * Define the "api admin" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapAdminRoutes()
    {
        Route::prefix('api/v1/admin')
            ->middleware(['bindings'])
            ->namespace('App\Http\Controllers\V1\Admin')
            ->group(base_path('routes/v1/admin.php'));
    }

    /**
     * Define the "api app" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapAppRoutes()
    {
        Route::prefix('api/v1/app')
            ->middleware(['bindings'])
            ->namespace('App\Http\Controllers\V1\App')
            ->group(base_path('routes/v1/app.php'));
    }

    /**
     * Define the "api app" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapAppV2Routes()
    {
        Route::prefix('api/v2/app')
            ->middleware(['bindings'])
            ->namespace('App\Http\Controllers\V2\App')
            ->group(base_path('routes/v2/app.php'));
    }
}
