<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->create('aqueduct_discussion_board_sorting', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('discussion_id')->unsigned();
            $table->integer('board_tag_id')->unsigned();
            $table->integer('column_tag_id')->unsigned();
            $table->integer('sort')->default(0);

            $table->unique(['discussion_id', 'board_tag_id', 'column_tag_id'], 'discussion_tag_limitation');
        });
    },
    'down' => function (Builder $schema) {
        $schema->drop('aqueduct_discussion_board_sorting');
    }
];
