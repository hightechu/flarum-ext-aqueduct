<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->create('kanban_board_columns', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('board_tag_id')->unsigned();
            $table->integer('column_tag_id')->unsigned();
            $table->integer('sort')->default(0);
            $table->integer('max_items')->nullable();

            $table->unique(['board_tag_id', 'column_tag_id']);
            $table->index(['board_tag_id', 'column_tag_id']);
        });
    },
    'down' => function (Builder $schema) {
        $schema->drop('kanban_board_columns');
    }
];
