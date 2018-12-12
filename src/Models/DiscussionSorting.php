<?php

namespace Flagrow\Aqueduct\Models;

use Flarum\Database\AbstractModel;

/**
 * @property int $id
 * @property int $discussion_id
 * @property int $board_tag_id
 * @property int $column_tag_id
 * @property int $sort
 */
class DiscussionSorting extends AbstractModel
{
    protected $table = 'aqueduct_discussion_board_sorting';
}
