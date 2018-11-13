<?php

namespace Flagrow\Kanban\Api\Controllers;

use Flagrow\Kanban\Repositories\TagRepository;
use Flarum\Api\Controller\AbstractShowController;
use Flarum\Tags\Tag;
use Flarum\User\AssertPermissionTrait;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Flarum\User\User;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ColumnSortingController extends AbstractShowController
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

        $this->assertCan($actor,'tag'.$board->id.'.discussion.flagrow.aqueduct.board-admin');

        $this->tags->columnSorting($board, $request->getParsedBody());

        $board->load('columns');

        return $board;
    }
}
