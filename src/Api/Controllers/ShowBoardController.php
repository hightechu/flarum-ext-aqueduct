<?php

namespace Flagrow\Aqueduct\Api\Controllers;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flagrow\Aqueduct\Repositories\TagRepository;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ShowBoardController extends AbstractListController
{
    public $serializer = DiscussionSerializer::class;
    /**
     * @var TagRepository
     */
    private $tags;

    /**
     * The relationships that are included by default.
     *
     * @var array
     */
    public $include = ['tags', 'startUser'];

    public function __construct(TagRepository $tags)
    {
        $this->tags = $tags;
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

        $tag = $this->tags->getBySlug($slug, $actor);

        // Now find all discussions with the helper tags.
        return $this->tags->getTagDiscussions($tag, $actor);
    }
}
