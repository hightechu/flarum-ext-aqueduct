<?php

namespace Flagrow\Aqueduct\Listeners;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Event\PrepareApiAttributes;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Illuminate\Contracts\Events\Dispatcher;

class AddTagAttributes
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(PrepareApiAttributes::class, [$this, 'canManageBoard']);
    }

    public function canManageBoard(PrepareApiAttributes $event)
    {
        if ($event->isSerializer(TagSerializer::class)) {
            $event->attributes['canManageBoard'] = $event->actor->can(
                'tag'.$event->model->id.'.discussion.flagrow.aqueduct.board-admin',
                $event->model
            );

            // Inject the pivot information.
            if (isset($event->model->pivot)) {
                $event->attributes['board_sort'] = $event->model->pivot->sort;
                $event->attributes['board_max_items'] = $event->model->pivot->max_items;
            }
        }

        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['canManageBoard'] = $event->actor->can(
                'discussion.flagrow.aqueduct.board-admin'
            );
        }
    }
}
