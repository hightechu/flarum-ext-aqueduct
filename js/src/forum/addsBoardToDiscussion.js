import {extend} from "flarum/extend";
import DiscussionPage from "flarum/components/DiscussionPage";
import Button from "flarum/components/Button";
import SplitDropdown from "flarum/components/SplitDropdown";
import ItemList from "flarum/utils/ItemList";

export default function () {

    // Add a control allowing direct visiting of the board.
    extend(DiscussionPage.prototype, 'sidebarItems', function (items) {
        const discussion = this.discussion;
        let tags = discussion.tags().filter(tag => tag.position() !== null && !tag.isChild());

        let controls = new ItemList;

        tags = tags.filter(tag => tag.canAccessBoard() || tag.canUseBoard() || tag.canManageBoard());

        tags.forEach(tag => {
            controls.add('board-' + tag.slug(), Button.component({
                children: app.translator.trans('aqueduct.forum.discussion.buttons.show-board', {tag: tag.name()}),
                icon: 'fab fa-trello',
                onclick: () => m.route(app.route('aqueduct.board', {tag: tag.slug()}))
            }));
        })

        if (tags.length > 0) {
            items.add(
                'board',
                SplitDropdown.component({
                    children: controls.toArray(),
                    icon: 'fab fa-trello',
                    className: 'App-primaryControl',
                    buttonClassName: 'Button--secondary'
                }),
                -50
            );
        }
    });
}
