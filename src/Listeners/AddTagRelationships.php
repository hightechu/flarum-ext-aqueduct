<?php

namespace Flagrow\Kanban\Listeners;

use Flarum\Api\Controller\ListDiscussionsController;
use Flarum\Api\Controller\ShowForumController;
use Flarum\Api\Event\WillGetData;
use Flarum\Event\GetApiRelationship;
use Flarum\Event\GetModelRelationship;
use Flarum\Tags\Api\Controller\ListTagsController;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Flarum\Tags\Tag;
use Illuminate\Contracts\Events\Dispatcher;

class AddTagRelationships
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetModelRelationship::class, [$this, 'onModel']);
        $events->listen(GetApiRelationship::class, [$this, 'onApi']);
        $events->listen(WillGetData::class, [$this, 'onController']);
    }

    public function onModel(GetModelRelationship $event)
    {
        if ($event->isRelationship(Tag::class, 'columns')) {
            return $event->model->belongsToMany(
                Tag::class,
                'kanban_board_columns',
                'board_tag_id',
                'column_tag_id'
            )->withPivot([
                'sort',
                'max_items'
            ]);
        }
    }

    public function onApi(GetApiRelationship $event)
    {
        if ($event->isRelationship(TagSerializer::class, 'columns')) {
            return $event->serializer->hasMany($event->model, TagSerializer::class, 'columns');
        }
    }

    public function onController(WillGetData $event)
    {
        if ($event->isController(ListTagsController::class)) {
            $event->addInclude('columns');
        }

        if ($event->isController(ShowForumController::class) ||
            $event->isController(ListDiscussionsController::class)) {
            $event->addInclude(['tags.columns']);
        }
    }
}
