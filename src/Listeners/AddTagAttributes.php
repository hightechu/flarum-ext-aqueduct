<?php

namespace Flagrow\Aqueduct\Listeners;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Api\Event\Serializing;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Illuminate\Contracts\Events\Dispatcher;

class AddTagAttributes
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'canManageBoard']);
    }

    public function canManageBoard(Serializing $event)
    {
        if ($event->isSerializer(TagSerializer::class)) {
            $event->attributes['canAccessBoard'] = $event->actor->can(
                'tag'.$event->model->id.'.discussion.flagrow.kanban.board-access',
                $event->model
            );
            $event->attributes['canUseBoard'] = $event->actor->can(
                'tag'.$event->model->id.'.discussion.flagrow.kanban.board-user',
                $event->model
            );
            $event->attributes['canManageBoard'] = $event->actor->can(
                'tag'.$event->model->id.'.discussion.flagrow.kanban.board-admin',
                $event->model
            );

            // Inject the pivot information.
            if (isset($event->model->pivot)) {
                $event->attributes['boardSort'] = $event->model->pivot->sort;
                $event->attributes['boardMaxItems'] = $event->model->pivot->max_items;
            }
        }

        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['canUseBoard'] = $event->actor->can(
                'discussion.flagrow.kanban.board-user'
            );
            $event->attributes['canManageBoard'] = $event->actor->can(
                'discussion.flagrow.kanban.board-admin'
            );
            $event->attributes['canAccessBoard'] = $event->actor->can(
                'discussion.flagrow.kanban.board-access'
            );
        }
    }
}
