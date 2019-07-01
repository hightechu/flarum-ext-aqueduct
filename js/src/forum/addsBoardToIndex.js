import {extend} from "flarum/extend";
import IndexPage from "flarum/components/IndexPage";
import Button from "flarum/components/Button";

export default function () {

    // Add a control allowing direct visiting of the board.
    extend(IndexPage.prototype, 'sidebarItems', function (items) {
        const tag = this.currentTag();
        if (tag && (tag.canAccessBoard() || tag.canUseBoard() || tag.canManageBoard())) {
            items.add('board',
                Button.component({
                    className: 'Button Button--block',
                    children: app.translator.trans('aqueduct.forum.discussion.buttons.show-board', {tag: tag.name()}),
                    icon: 'fab fa-trello',
                    onclick: () => m.route(app.route('aqueduct.board', {tag: tag.slug()}))
                }),
                1
            );
        }
    });
}
