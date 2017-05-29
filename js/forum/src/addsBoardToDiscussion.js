import { extend } from 'flarum/extend';
import DiscussionControls from 'flarum/utils/DiscussionControls';
import Button from 'flarum/components/Button';

export default function () {
    // Add a control allowing direct visiting of the board.
    extend(DiscussionControls, 'moderationControls', function(items, discussion) {
        let tags = discussion.tags().filter(tag => tag.position() !== null && ! tag.isChild());

        tags.forEach(tag => {
                items.add('board-' + tag.slug(), Button.component({
                    children: app.translator.trans('flagrow-aqueduct.forum.discussion.buttons.show-board', {tag: tag.name()}),
                    icon: 'trello',
                    onclick: () => m.route(app.route('flagrow.aqueduct.board', {tag: tag.slug()}))
                }));
        })
    });
}
