import Modal from "flarum/components/Modal";
import DiscussionPage from "flarum/components/DiscussionPage";
import Button from "flarum/components/Button";
import ItemList from "flarum/utils/ItemList";
import RecipientSearch from "flagrow/aqueduct/search/RecipientSearch";
import User from "flarum/models/User";
import Group from "flarum/models/Group";

export default class AddAssigneeModal extends Modal {
    init() {
        super.init();

        this.selected = m.prop(new ItemList);

        if (this.props.discussion) {
            // Adds recipients of the currently viewed discussion.
            this.assignInitialRecipients(this.props.discussion);
        } else if (this.props.assignees) {
            // Adds previously selected recipients.
            this.selected().merge(this.props.assignees);
        }

        this.recipientSearch = RecipientSearch.component({
            selected: this.selected,
            discussion: this.props.discussion
        });
    }

    assignInitialRecipients(discussion) {
        discussion.assignedUsers().map(user => {
            this.selected().add("users:" + user.id(), user);
        });
        discussion.assignedGroups().map(group => {
            this.selected().add("groups:" + group.id(), group);
        });
    }

    className() {
        return 'AddAssigneeModal';
    }

    title() {
        return this.props.discussion
            ? app.translator.trans('flagrow-aqueduct.forum.modal.titles.update_recipients', {title: <em>{this.props.discussion.title()}</em>})
            : app.translator.trans('flagrow-aqueduct.forum.modal.titles.add_recipients');
    }

    content() {
        return [
            <div className="Modal-body">
                <div className="AddAssigneeModal-form">
                    {this.recipientSearch}
                    <div className="AddAssigneeModal-form-submit App-primaryControl">
                        {Button.component({
                            type: 'submit',
                            className: 'Button Button--primary',
                            disabled: false,
                            icon: 'check',
                            children: app.translator.trans('flagrow-aqueduct.forum.buttons.submit')
                        })}
                    </div>
                </div>
            </div>
        ];
    }

    select(e) {
        // Ctrl + Enter submits the selection, just Enter completes the current entry
        if (e.metaKey || e.ctrlKey || this.selected.indexOf(this.index) !== -1) {
            if (this.selected().length) {
                this.$('form').submit();
            }
        }
    }

    onsubmit(e) {
        e.preventDefault();

        const discussion = this.props.discussion;
        const recipients = this.selected();

        var recipientGroups = [];
        var recipientUsers = [];

        recipients.toArray().forEach(recipient => {

            if (recipient instanceof User) {
                recipientUsers.push(recipient);
            }

            if (recipient instanceof Group) {
                recipientGroups.push(recipient);
            }
        });

        if (discussion) {
            discussion.save({relationships: {recipientUsers, recipientGroups}})
                .then(() => {
                    if (app.current instanceof DiscussionPage) {
                        app.current.stream.update();
                    }
                    m.redraw();
                });
        }

        if (this.props.onsubmit) this.props.onsubmit(recipients, recipientUsers, recipientGroups);

        app.modal.close();

        m.redraw.strategy('none');
    }
}
