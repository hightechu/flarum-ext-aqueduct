<?php

namespace Flagrow\Aqueduct\Listeners;

use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Api\Event\Serializing;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Illuminate\Contracts\Events\Dispatcher;

class AddApiAttributes
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'permissions']);
    }

    public function permissions(Serializing $event)
    {
        if ($event->isSerializer(TagSerializer::class)) {
            $discussion = $event->model->discussions()->first();

            $event->attributes['canAccessBoard'] = $event->actor->can(
                'aqueductBoardAccess',
                $discussion
            );
            $event->attributes['canUseBoard'] = $event->actor->can(
                'aqueductBoardUser',
                $discussion
            );
            $event->attributes['canManageBoard'] = $event->actor->can(
                'aqueductBoardAdmin',
                $discussion
            );

            // Inject the pivot information.
            if (isset($event->model->pivot)) {
                $event->attributes['boardSort'] = $event->model->pivot->sort;
                $event->attributes['boardMaxItems'] = $event->model->pivot->max_items;
            }
        }

        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['canAccessBoard'] = $event->actor->can(
                'discussion.aqueductBoardAccess'
            );
            $event->attributes['canUseBoard'] = $event->actor->can(
                'discussion.aqueductBoardUser'
            );
            $event->attributes['canManageBoard'] = $event->actor->can(
                'discussion.aqueductBoardAdmin'
            );
        }
    }
}
