<?php

namespace Flagrow\Aqueduct\Listeners;

use Flarum\Api\Controller\ShowDiscussionController;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Serializer\GroupSerializer;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Discussion\Discussion;
use Flarum\Group\Group;
use Flarum\User\User;
use Flarum\Api\Event\WillGetData;
use Flarum\Event\GetApiRelationship;
use Flarum\Event\GetModelRelationship;
use Flarum\Api\Event\Serializing;
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
        $events->listen(WillGetData::class, [$this, 'onController']);

        $events->listen(Serializing::class, [$this, 'addPermissions']);
    }

    /**
     * @param GetModelRelationship $event
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function onModel(GetModelRelationship $event)
    {
        if ($event->isRelationship(Discussion::class, 'assignedUsers')) {
            return $event->model->belongsToMany(
                User::class,
                'kanban_assignees'
            );
        }

        if ($event->isRelationship(Discussion::class, 'assignedGroups')) {
            return $event->model->belongsToMany(
                Group::class,
                'kanban_assignees'
            );
        }
    }

    /**
     * @param GetApiRelationship $event
     * @return \Tobscure\JsonApi\Relationship
     */
    public function onApi(GetApiRelationship $event)
    {
        if ($event->isRelationship(DiscussionSerializer::class, 'assignedUsers')) {
            return $event->serializer->hasMany($event->model, UserSerializer::class, 'assignedUsers');
        }

        if ($event->isRelationship(DiscussionSerializer::class, 'assignedGroups')) {
            return $event->serializer->hasMany($event->model, GroupSerializer::class, 'assignedGroups');
        }
    }

    /**
     * @param WillGetData $event
     */
    public function onController(WillGetData $event)
    {
        if ($event->isController(ShowDiscussionController::class)) {
            $event->addInclude([
                'assignedUsers', 'assignedGroups'
            ]);
        }
    }

    /**
     * @param Serializing $event
     */
    public function addPermissions(Serializing $event)
    {
        if ($event->isSerializer(DiscussionSerializer::class)) {
            $event->attributes['canViewBoard'] = $event->actor->can('discussion.flagrow.aqueduct.board-access', $event->model);
            $event->attributes['canUseBoard'] = $event->actor->can('discussion.flagrow.aqueduct.board-user', $event->model);
            $event->attributes['canManageBoard'] = $event->actor->can('discussion.flagrow.aqueduct.board-admin', $event->model);
        }
    }
}
