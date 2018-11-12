<?php

namespace Flagrow\Aqueduct\Http\Controllers;

use Flarum\Forum\Controller\FrontendController;
use Flarum\User\User;
use Flarum\Http\Exception\RouteNotFoundException;
use Illuminate\Contracts\Container\Container;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;

class BoardController implements RequestHandlerInterface
{
    /**
     * @var Container
     */
    private $container;

    public function __construct(Container $container)
    {
        $this->container = $container;
    }

    /**
     * Handles a request and produces a response.
     *
     * May call other collaborating code to generate the response.
     */
    public function handle(Request $request): ResponseInterface
    {
        /** @var User $actor */
        $actor = $request->getAttribute('actor');

        if ($actor->cannot('discussion.flagrow.aqueduct.board-access')) {
            throw new RouteNotFoundException();
        }

        return $this->container->make("flarum.forum.frontend");
    }
}
