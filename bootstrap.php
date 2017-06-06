<?php

namespace Flagrow\Aqueduct;

use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listeners\AddAssets::class);
    $events->subscribe(Listeners\AddWebRoutes::class);
    $events->subscribe(Listeners\AddApiRoutes::class);
    $events->subscribe(Listeners\AddTagAttributes::class);
    $events->subscribe(Listeners\AddTagRelationships::class);
    $events->subscribe(Listeners\AddDiscussionRelationships::class);
};
