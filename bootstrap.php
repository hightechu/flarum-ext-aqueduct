<?php

namespace Flagrow\Aqueduct;

use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listeners\AddAssets::class);
    $events->subscribe(Listeners\AddWebRoutes::class);
    $events->subscribe(Listeners\AddApiRoutes::class);
};