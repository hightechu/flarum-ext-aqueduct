import {extend} from "flarum/extend";
import DiscussionPage from "flarum/components/DiscussionPage";
import Button from "flarum/components/Button";
import SplitDropdown from "flarum/components/SplitDropdown";
import ItemList from "flarum/utils/ItemList";
import avatar from "flarum/helpers/avatar";
import icon from "flarum/helpers/icon";
import DiscussionHero from "flarum/components/DiscussionHero";
import assigneesLabel from "flagrow/aqueduct/labels/assigneesLabel";
import AddAssigneeModal from "flagrow/aqueduct/modals/AddAssigneeModal";

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
            if (discussion.canManageBoard()) {
                controls.add('assignee', Button.component({
                    children: app.translator.trans('flagrow-aqueduct.forum.discussion.buttons.set-assignees'),
                    icon: 'user-circle-o',
                    onclick: () => app.modal.show(new AddAssigneeModal({discussion}))
                }));
            }

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
    /**
     *
     * Adds User labels on the discussion Hero.
     */
    extend(DiscussionHero.prototype, 'items', function(items) {
        const discussion = this.props.discussion;

        let users = discussion.assignedUsers().map(user => {
            return avatar(user);
        });
        let groups = discussion.assignedGroups().map(group => {
            return icon(group.icon());
        });

        const assignees = users + groups;

        if (assignees.length > 0) {
            items.add('assignees', assigneesLabel(assignees), 3);
        }
    });
}
