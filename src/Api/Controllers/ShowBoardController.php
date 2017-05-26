<?php

namespace Flagrow\Aqueduct\Api\Controllers;

use Flarum\Api\Controller\AbstractCollectionController;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Core\Repository\DiscussionRepository;
use Flarum\Core\User;
use Flarum\Tags\Tag;
use Flarum\Tags\TagRepository;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ShowBoardController extends AbstractCollectionController
{
    public $serializer = DiscussionSerializer::class;
    /**
     * @var TagRepository
     */
    private $tags;
    /**
     * @var DiscussionRepository
     */
    private $discussions;

    /**
     * The relationships that are included by default.
     *
     * @var array
     */
    public $include = ['tags', 'startUser'];

    public function __construct(TagRepository $tags, DiscussionRepository $discussions)
    {
        $this->tags = $tags;
        $this->discussions = $discussions;
    }

    /**
     * Get the data to be serialized and assigned to the response document.
     *
     * @param ServerRequestInterface $request
     * @param Document $document
     * @return mixed
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $slug = Arr::get($request->getQueryParams(), 'tag');
        $actor = $request->getAttribute('actor');

        $tag = $this->getBoardTag($slug, $actor);

        // Now find all discussions with the helper tags.
        return $this->getBoardDiscussions($tag, $actor);
    }

    /**
     * @param $slug
     * @param User|null $actor
     * @return Tag
     */
    protected function getBoardTag($slug, User $actor = null)
    {
        $query = $this->tags->query()
            ->where('slug', $slug);

        if ($actor) {
            $query->whereVisibleTo($actor);
        }

        return $query->firstOrFail();
    }

    /**
     * @param Tag $tag
     * @param User|null $actor
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    protected function getBoardDiscussions(Tag $tag, User $actor = null)
    {
        $query = $this->discussions->query()->with('tags')
            ->whereHas('tags', function ($q) use ($tag, $actor) {
                $q->where('tags.slug', $tag->slug);
            })
            ->whereHas('tags', function ($q) {
                $this->injectHelperTagFilter($q);
            });

        if ($actor) {
            $query->whereVisibleTo($actor);
        }

        return $query->get();
    }

    protected function injectHelperTagFilter($query)
    {
        $tags = $this->tags->query()->whereNull('position')->get();

        $query->where(function ($q) use ($tags) {
            $tags->each(function ($tag) use ($q) {
                $q->orWhere('tags.id', $tag->id);
            });
        });
    }
}
