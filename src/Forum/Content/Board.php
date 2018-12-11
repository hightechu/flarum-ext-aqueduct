<?php

namespace Flagrow\Aqueduct\Forum\Content;

use Flarum\Frontend\Content\ContentInterface;
use Flarum\Frontend\Document;
use Flarum\User\Exception\PermissionDeniedException;
use Psr\Http\Message\ServerRequestInterface as Request;

class Board
{
    public function __invoke(Document $document, Request $request)
    {
        /** @var User $actor */
        $actor = $request->getAttribute('actor');

        if ($actor->cannot('discussion.flagrow.aqueduct.board-access')) {
            throw new PermissionDeniedException();
        }
    }
}
