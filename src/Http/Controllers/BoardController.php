<?php

namespace Flagrow\Aqueduct\Http\Controllers;

use Flarum\Forum\Controller\FrontendController;
use Flarum\Frontend\HtmlDocumentFactory;
use Flarum\Http\Controller\AbstractHtmlController;
use Flarum\User\User;
use Flarum\Http\Exception\RouteNotFoundException;
use Illuminate\Contracts\Container\Container;
use Illuminate\Contracts\Support\Renderable;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as Request;

class BoardController extends AbstractHtmlController
{
    /**
     * @var Container
     */
    private $container;

    public function __construct(Container $container)
    {
        $this->container = $container;
    }
    protected function render(Request $request)
    {
        /** @var User $actor */
        $actor = $request->getAttribute('actor');

        if ($actor->cannot('discussion.flagrow.aqueduct.board-access')) {
            throw new RouteNotFoundException();
        }

        /** @var HtmlDocumentFactory $factory */
        $factory = $this->container->make("flarum.forum.frontend");

        return $factory->make($request);
    }
}
