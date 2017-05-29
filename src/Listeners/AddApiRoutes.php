<?php

namespace Flagrow\Aqueduct\Listeners;

use Flagrow\Aqueduct\Api\Controllers\ToggleColumnController;
use Flagrow\Aqueduct\Api\Controllers\ShowBoardController;
use Flarum\Event\ConfigureApiRoutes;
use Illuminate\Contracts\Events\Dispatcher;

class AddApiRoutes
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureApiRoutes::class, [$this, 'addRoutes']);
    }

    /**
     * @param ConfigureApiRoutes $event
     */
    public function addRoutes(ConfigureApiRoutes $event)
    {
        $event->get(
            '/board/{tag}',
            'flagrow.aqueduct.api.board',
            ShowBoardController::class
        );

        $event->post(
            '/board/{board}/columns/{column}',
            'flagrow.aqueduct.api.board.columns.add',
            ToggleColumnController::class
        );
    }
}
