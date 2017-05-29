<?php

namespace Flagrow\Aqueduct\Repositories;

use Flarum\Core\Discussion;
use Flarum\Core\User;
use Flarum\Tags\Tag;
use Flarum\Tags\TagRepository as NativeTagRepository;

class TagRepository extends NativeTagRepository
{
    /**
     * @param $slug
     * @param User|null $actor
     * @return Tag
     */
    public function getBySlug($slug, User $actor = null)
    {
        $query = $this->query()
            ->where('slug', $slug);

        return $this->scopeVisibleTo($query, $actor)->firstOrFail();
    }

    /**
     * @param Tag $tag
     * @param User|null $actor
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getTagDiscussions(Tag $tag, User $actor = null)
    {
        $query = Discussion::query()->with('tags')
            ->whereHas('tags', function ($q) use ($tag, $actor) {
                $q->where('tags.slug', $tag->slug);
            })
            ->whereHas('tags', function ($q) {
                $this->injectHelperTagFilter($q);
            });

        return $this->scopeVisibleTo($query, $actor)->get();
    }

    /**
     * @param $query
     */
    protected function injectHelperTagFilter($query)
    {
        $tags = $this->query()->whereNull('position')->get();

        $query->where(function ($q) use ($tags) {
            $tags->each(function ($tag) use ($q) {
                $q->orWhere('tags.id', $tag->id);
            });
        });
    }

    /**
     * Adds a tag to a board tag, including additional data.
     *
     * @param Tag $board
     * @param Tag $column
     * @param array $pivot
     * @return void
     */
    public function addColumn(Tag $board, Tag $column, $pivot = [])
    {
        $board->columns()->attach($column, $pivot);
    }

    /**
     * Drops a tag as a column from a board tag.
     *
     * @param Tag $board
     * @param Tag $column
     * @return int
     */
    public function removeColumn(Tag $board, Tag $column)
    {
        return $board->columns()->detach($column);
    }

    /**
     * @param Tag $board
     * @param array $slugs
     */
    public function columnSorting(Tag $board, $slugs = [])
    {
        foreach ($slugs as $sort => $slug) {
            $column = $this->getBySlug($slug);

            $this->updateColumn($board, $column, [
                'sort' => $sort
            ]);
        }
    }

    /**
     * @param Tag $board
     * @param Tag $column
     * @param array $pivot
     * @return int
     */
    public function updateColumn(Tag $board, Tag $column, $pivot = [])
    {
        return $board->columns()->updateExistingPivot($column->id, $pivot);
    }
}
