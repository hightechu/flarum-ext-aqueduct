<?php

namespace Flagrow\Aqueduct;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
    (new Extend\Locales(__DIR__ . '/resources/locale')),
    (new Extend\Routes('api'))
        ->get('/board/{tag}', 'flagrow.aqueduct.api.board', Api\Controllers\ShowBoardController::class)
        ->post('/board/{board}/sorting', 'flagrow.aqueduct.api.board.columns.sorting', Api\Controllers\ColumnSortingController::class)
        ->post('/board/{board}/columns/{column}', 'flagrow.aqueduct.api.board.columns.add', Api\Controllers\ToggleColumnController::class),
    (new Extend\Routes('forum'))
        ->get('/board/{tag}', 'flagrow.aqueduct.board', Http\Controllers\BoardController::class),
    (new Extend\Compat(function (Dispatcher $events) {
        $events->subscribe(Listeners\AddTagRelationships::class);
        $events->subscribe(Listeners\AddTagRelationships::class);
        $events->subscribe(Listeners\AddDiscussionRelationships::class);
    }))
];

