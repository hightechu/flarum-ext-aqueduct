<?php

namespace Flagrow\Aqueduct\Http\Controllers;

use Flarum\Core\User;
use Flarum\Forum\Controller\WebAppController;
use Flarum\Http\Exception\RouteNotFoundException;
use Psr\Http\Message\ServerRequestInterface as Request;

class BoardController extends WebAppController
{

    protected function getView(Request $request)
    {
        /** @var User $actor */
        $actor = $request->getAttribute('actor');

        if ($actor->cannot('discussion.flagrow.aqueduct.board-access')) {
            throw new RouteNotFoundException();
        }

        return parent::getView($request);
    }
}
