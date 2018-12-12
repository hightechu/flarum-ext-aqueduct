<?php

namespace Flagrow\Aqueduct\Api\Serializers;

use Flarum\Api\Serializer\AbstractSerializer;

class DiscussionSortingSerializer extends AbstractSerializer
{
    protected $type = 'discussionSorting';

    /**
     * Get the default set of serialized attributes for a model.
     *
     * @param object|array $model
     * @return array
     */
    protected function getDefaultAttributes($model)
    {
        return $model->attributesToArray();
    }
}
