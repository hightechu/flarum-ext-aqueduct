<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->create('kanban_assignees', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('discussion_id')->unsigned();
            $table->integer('user_id')->unsigned()->nullable();
            $table->integer('group_id')->unsigned()->nullable();

            $table->foreign('discussion_id')->references('id')->on('discussions')
                ->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')
                ->onDelete('cascade');
            $table->foreign('group_id')->references('id')->on('groups')
                ->onDelete('cascade');
        });
    },
    'down' => function (Builder $schema) {
        $schema->drop('kanban_assignees');
    }
];
