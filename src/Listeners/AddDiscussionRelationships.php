<?php

namespace Flagrow\Aqueduct\Listeners;

use Flagrow\Aqueduct\Api\Serializers\DiscussionSortingSerializer;
use Flagrow\Aqueduct\Models\DiscussionSorting;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Event\Serializing;
use Flarum\Discussion\Discussion;
use Flarum\Event\GetApiRelationship;
use Flarum\Event\GetModelRelationship;
use Illuminate\Contracts\Events\Dispatcher;

class AddDiscussionRelationships
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetModelRelationship::class, [$this, 'onModel']);
        $events->listen(GetApiRelationship::class, [$this, 'onApi']);
        $events->listen(Serializing::class, [$this, 'addPermissions']);
    }

    public function onModel(GetModelRelationship $event)
    {
        if ($event->isRelationship(Discussion::class, 'discussionSorting')) {
            return $event->model->hasMany(DiscussionSorting::class);
        }
    }

    public function onApi(GetApiRelationship $event)
    {
        if ($event->isRelationship(DiscussionSerializer::class, 'discussionSorting')) {
            return $event->serializer->hasMany($event->model, DiscussionSortingSerializer::class, 'discussionSorting');
        }
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
