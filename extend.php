<?php

namespace Flagrow\Aqueduct;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less')
        ->route('/board/{tag}', 'flagrow.kanban.board', Forum\Content\Board::class),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),
    (new Extend\Locales(__DIR__ . '/resources/locale')),
    (new Extend\Routes('api'))
        ->get('/board/{tag}', 'flagrow.kanban.api.board', Api\Controllers\ShowBoardController::class)
        ->post('/board/{board}/sorting', 'flagrow.kanban.api.board.columns.sorting', Api\Controllers\ColumnSortingController::class)
        ->post('/board/{board}/columns/{column}', 'flagrow.kanban.api.board.columns.add', Api\Controllers\ToggleColumnController::class)
        ->delete('/board/{board}/columns/{column}', 'flagrow.kanban.api.board.columns.remove', Api\Controllers\ToggleColumnController::class),
    (new Extend\Compat(function (Dispatcher $events) {
        $events->subscribe(Listeners\AddTagRelationships::class);
        $events->subscribe(Listeners\AddApiAttributes::class);
        $events->subscribe(Listeners\AddDiscussionRelationships::class);
    }))
];

