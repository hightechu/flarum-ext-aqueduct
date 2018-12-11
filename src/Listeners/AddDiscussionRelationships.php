<?php

namespace Flagrow\Aqueduct\Listeners;

use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Event\Serializing;
use Illuminate\Contracts\Events\Dispatcher;

class AddDiscussionRelationships
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'addPermissions']);
    }
    /**
     * @param Serializing $event
     */
    public function addPermissions(Serializing $event)
    {
        if ($event->isSerializer(DiscussionSerializer::class)) {
            $event->attributes['canAccessBoard'] = $event->actor->can('discussion.flagrow.aqueduct.board-access', $event->model);
            $event->attributes['canUseBoard'] = $event->actor->can('discussion.flagrow.aqueduct.board-user', $event->model);
            $event->attributes['canManageBoard'] = $event->actor->can('discussion.flagrow.aqueduct.board-admin', $event->model);
        }
    }
}
