<?php

namespace Flagrow\Kanban\Forum\Content;

use Flarum\Frontend\Content\ContentInterface;
use Flarum\Frontend\HtmlDocument;
use Flarum\User\Exception\PermissionDeniedException;
use Psr\Http\Message\ServerRequestInterface as Request;

class Board implements ContentInterface
{

    /**
     * @param HtmlDocument $document
     * @param Request      $request
     */
    public function __invoke(HtmlDocument $document, Request $request)
    {
        /** @var User $actor */
        $actor = $request->getAttribute('actor');

        if ($actor->cannot('discussion.flagrow.aqueduct.board-access')) {
            throw new PermissionDeniedException();
        }
    }
}
