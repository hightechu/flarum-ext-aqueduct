<?php

namespace Flagrow\Aqueduct\Listeners;

use Flarum\Discussion\Event\Saving;
use Illuminate\Contracts\Events\Dispatcher;

class PersistDiscussionSorting
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Saving::class, [$this, 'persist']);
    }

    public function persist(Saving $event)
    {
        $discussion = $event->discussion;
        $actor = $event->actor;

        if ($sorting = array_get($event->data, 'relationships.discussionSorting.data', [])) {
            $board_tag_id = $sorting['board_tag_id'];
            $column_tag_id = $sorting['column_tag_id'];
            $sort = $sorting['sort'];

            dd($sorting);
        }
    }
}
