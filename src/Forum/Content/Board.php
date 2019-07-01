<?php

namespace Flagrow\Aqueduct\Forum\Content;

use Flagrow\Aqueduct\Repositories\TagRepository;
use Flarum\Frontend\Content\ContentInterface;
use Flarum\Frontend\Document;
use Flarum\User\Exception\PermissionDeniedException;
use Flarum\User\User;
use Psr\Http\Message\ServerRequestInterface as Request;

class Board
{

    /**
     * @var TagRepository
     */
    private $tags;

    public function __construct(TagRepository $tags)
    {
        $this->tags = $tags;
    }

    public function __invoke(Document $document, Request $request)
    {
        /** @var User $actor */
        $actor = $request->getAttribute('actor');
        $slug = $request->getQueryParams()['tag'];

        $tag = $this->tags->getBySlug($slug, $actor);

        if ($actor->cannot('aqueductBoardAccess', $tag->discussions()->firstOrNew([]))) {
            throw new PermissionDeniedException();
        }
    }
}
