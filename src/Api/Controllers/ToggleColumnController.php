<?php

namespace Flagrow\Aqueduct\Api\Controllers;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\User\AssertPermissionTrait;
use Flarum\User\User;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Flagrow\Aqueduct\Repositories\TagRepository;
use Flarum\Tags\Tag;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ToggleColumnController extends AbstractShowController
{
    use AssertPermissionTrait;

    public $serializer = TagSerializer::class;

    public $include = ['columns'];
    /**
     * @var TagRepository
     */
    protected $tags;

    function __construct(TagRepository $tags)
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
        /** @var User $actor */
        $actor = $request->getAttribute('actor');

        /** @var Tag $board */
        $board = $this->tags->getBySlug(Arr::get($request->getQueryParams(), 'board'));
        /** @var Tag $column */
        $column = $this->tags->getBySlug(Arr::get($request->getQueryParams(), 'column'));

        $this->assertCan($actor,'tag'.$board->id.'.discussion.flagrow.aqueduct.board-admin');

        if (strtolower($request->getMethod()) === 'delete') {
            $this->tags->removeColumn($board, $column);
        } else {
            $this->tags->addColumn($board, $column);
        }

        $board->load('columns');

        return $board;
    }
}
