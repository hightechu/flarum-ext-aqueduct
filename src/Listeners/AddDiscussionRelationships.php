<?php

namespace Flagrow\Aqueduct\Listeners;

use Flarum\Api\Controller\ShowDiscussionController;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Serializer\GroupSerializer;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Core\Discussion;
use Flarum\Core\Group;
use Flarum\Core\User;
use Flarum\Event\ConfigureApiController;
use Flarum\Event\GetApiRelationship;
use Flarum\Event\GetModelRelationship;
use Flarum\Event\PrepareApiAttributes;
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
        $events->listen(ConfigureApiController::class, [$this, 'onController']);

        $events->listen(PrepareApiAttributes::class, [$this, 'addPermissions']);
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
                'aqueduct_assignees'
            );
        }

        if ($event->isRelationship(Discussion::class, 'assignedGroups')) {
            return $event->model->belongsToMany(
                Group::class,
                'aqueduct_assignees'
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
     * @param ConfigureApiController $event
     */
    public function onController(ConfigureApiController $event)
    {
        if ($event->isController(ShowDiscussionController::class)) {
            $event->addInclude([
                'assignedUsers', 'assignedGroups'
            ]);
        }
    }

    /**
     * @param PrepareApiAttributes $event
     */
    public function addPermissions(PrepareApiAttributes $event)
    {
        if ($event->isSerializer(DiscussionSerializer::class)) {
            $event->attributes['canViewBoard'] = $event->actor->can('discussion.flagrow.aqueduct.board-access', $event->model);
            $event->attributes['canUseBoard'] = $event->actor->can('discussion.flagrow.aqueduct.board-user', $event->model);
            $event->attributes['canManageBoard'] = $event->actor->can('discussion.flagrow.aqueduct.board-admin', $event->model);
        }
    }
}