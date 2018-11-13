import Search from "flarum/components/Search";
import UserSearchSource from "./sources/UserSearchSource";
import GroupSearchSource from "./sources/GroupSearchSource";
import ItemList from "flarum/utils/ItemList";
import classList from "flarum/utils/classList";
import extractText from "flarum/utils/extractText";
import LoadingIndicator from "flarum/components/LoadingIndicator";
import User from "flarum/models/User";
import Group from "flarum/models/Group";

export default class MultiSelectionInput extends Search {

    config(isInitialized) {
        if (isInitialized) return;

        const $search = this;

        this.$('.Search-results').on('click', (e) => {
            var target = this.$('.SearchResult.active')


            $search.addSelection(target.data('index'));

            $search.$('.MultiSelectionInput').focus();
        });

        this.$('.Search-results').on('touchstart', (e) => {
            var target = this.$(e.target.parentNode);

            $search.addSelection(target.data('index'));

            $search.$('.MultiSelectionInput').focus();
        });

        super.config(isInitialized);
    }

    generateLabel(selection, attrs = {}) {
        // ..
    }

    view() {
        if (typeof this.value() === 'undefined') {
            this.value('');
        }

        // Initialize search sources in the view rather than the constructor so
        // that we have access to app.forum.
        if (!this.sources) {
            this.sources = this.sourceItems().toArray();
        }

        return m('div', {
            className: 'addSelectionModal-form-input'
        }, [
            m('div', {
                className: 'MultiSelectionInput-selected RecipientsLabel'
            }, this.props.selected().toArray().map(selection => this.generateLabel(selection, {
                    onclick: () => {
                        this.removeSelection(selection);
                    }
                })
            )),
            m('input', {
                className: 'MultiSelectionInput FormControl ' + classList({
                    open: !!this.value(),
                    focused: !!this.value(),
                    active: !!this.value(),
                    loading: !!this.loadingSources
                }),
                config: function (element) {
                    element.focus();
                },
                type: 'search',
                placeholder: extractText(app.translator.trans('flagrow-kanban.forum.modals.set-assignee.input')),
                value: this.value(),
                oninput: m.withAttr('value', this.value),
                onfocus: () => this.hasFocus = true,
                onblur: () => this.hasFocus = false
            }),
            m('ul', {
                className: 'Dropdown-menu Search-results'
            }, this.value() && this.value().length >= 3
                ? this.sources.map(source => source.view(this.value()))
                : LoadingIndicator.component({size: 'tiny', className: 'Button Button--icon Button--link'})
            )
        ]);
    }

    /**
     * Build an item list of SearchSources.
     *
     * @return {ItemList}
     */
    sourceItems() {
        const items = new ItemList();

        // Add user source based on permissions.
        items.add('users', new UserSearchSource());

        // Add group source based on permissions.
        items.add('groups', new GroupSearchSource());

        return items;
    }


    /**
     * Clear the search input and the current controller's active search.
     */
    clear() {
        this.value('');

        m.redraw();
    }

    /**
     * Adds a recipient.
     *
     * @param value
     */
    addSelection(value) {

        let values = value.split(':'),
            type = values[0],
            id = values[1];

        let recipient = this.findRecipient(type, id);

        this.props.selected().add(value, recipient);

        this.clear();
    }

    /**
     * Removes a recipient.
     *
     * @param recipient
     */
    removeSelection(recipient) {
        let type;

        if (recipient instanceof User) {
            type = 'users';
        }
        if (recipient instanceof Group) {
            type = 'groups';
        }

        this.props.selected().remove(type + ":" + recipient.id());

        m.redraw();
    }

    /**
     * Loads a recipient from the global store.
     *
     * @param store
     * @param id
     * @returns {Model}
     */
    findRecipient(store, id) {
        return app.store.getById(store, id);
    }
}
