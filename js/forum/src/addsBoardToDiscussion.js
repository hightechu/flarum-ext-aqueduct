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

        tags.forEach(tag => {
            controls.add('board-' + tag.slug(), Button.component({
                children: app.translator.trans('flagrow-aqueduct.forum.discussion.buttons.show-board', {tag: tag.name()}),
                icon: 'trello',
                onclick: () => m.route(app.route('flagrow.aqueduct.board', {tag: tag.slug()}))
            }));
        })

        if (tags.length > 0) {
            controls.add('assignee', Button.component({
                children: discussion.assignee() ?
                    app.translator.trans('flagrow-aqueduct.forum.discussion.buttons.update-assignee', {assignee: discussion.assignee().username}) :
                    app.translator.trans('flagrow-aqueduct.forum.discussion.buttons.set-assignee'),
                icon: 'user-circle-o'
            }));

            items.add(
                'board',
                SplitDropdown.component({
                    children: controls.toArray(),
                    icon: 'trello',
                    className: 'App-primaryControl',
                    buttonClassName: 'Button--secondary'
                }),
                -50
            );
        }
    });
}
