<?php

namespace Flagrow\Aqueduct\Listeners;

use Flagrow\Aqueduct\Http\Controllers\BoardController;
use Flarum\Event\ConfigureForumRoutes;
use Illuminate\Contracts\Events\Dispatcher;

class AddWebRoutes
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureForumRoutes::class, [$this, 'addBoardPage']);
    }

    /**
     * @param ConfigureForumRoutes $event
     */
    public function addBoardPage(ConfigureForumRoutes $event)
    {
        $event->get(
            '/board/{tag}',
            'flagrow.aqueduct.board',
            BoardController::class
        );
    }
}
