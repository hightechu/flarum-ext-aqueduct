import Component from 'flarum/Component';
import SplitDropdown from 'flarum/components/SplitDropdown';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';
import Card from '../components/Card';
import sortable from "html5sortable";


export default class Column extends Component {
    init() {
        this.name = this.props.name;
        this.slug = this.props.slug;
        this.description = this.props.description || "";
        this.discussions = this.props.discussions || [];
        this.loading = this.props.loading;
        this.dragging = this.props.dragging;
        this.draggingEnabled = this.props.draggable === 'cards';
        this.sorted = [];

        this.$().ready(() => {
            this.sortable();
        });
    }

    view() {

        return m('div', {
            className: 'Board--Column ' + this.name,
            slug: this.slug
        }, [
            m('div', {className: 'Board--Inner'}, [
                m('header', {
                    className: 'Board--Header',
                    slug: this.slug
                }, m('h4', [
                    this.name,
                    m('span', this.description),

                    this.controls().isEmpty() ? [] :
                        SplitDropdown.component({
                            children: this.controls().toArray(),
                            icon: 'ellipsis-v',
                            buttonClassName: 'Button'
                        })
                ])),
                m('div', {
                    className: 'Board--Item-List',
                    slug: this.slug
                }, this.discussions.map(dis => {
                    return Card.component({
                        discussionId: dis.id
                    });
                }))
            ])
        ]);
    }

    controls() {
        let items = new ItemList;

        if (this.props.draggable === 'columns' && true) { // this.board.canManageBoard()) {
            items.add('remove-column', Button.component({
                icon: 'fas fa-cog',
                children: app.translator.trans('aqueduct.forum.board.buttons.remove-column'),
                onclick: () => {
                    if (confirm(app.translator.trans('aqueduct.forum.board.buttons.remove-column-confirmation', {name: this.name}))) {
                        this.delete();
                    }
                }
            }));
        }

        return items;
    }

    sortable() {
        if (false) { //! this.board.canUseBoard()) {
            return;
        }

        const selector = '.Board--Item-List[slug=' + this.slug + ']';

        if (!this.dragging && this.draggingEnabled && this.sorted.length === 0) {
            this.sorted = sortable(selector, {
                connectWith: '.Board--Item-List',
                items: '.Card',
                // handle: '.Card--Header',
                placeholder: '<div class="Card Placeholder"></div>',
                forcePlaceholderSize: true
            });

            this.sorted[0].addEventListener('sortupdate', (e) => {
                const tag = $(e.target).attr('slug');
                // prevents updating multiple times
                if (tag === $(e.detail.endparent).attr('slug')) {
                    const sorting = $(e.target).find('.Card').map(function () {
                        return $(this).attr('discussion');
                    }).get();

                    this.updateDiscussionSorting(sorting, tag);
                }
            });
        } else if (this.draggingEnabled) {
            sortable(selector);
        }

        this.dragging = (this.dragging === null && this.sorted.length > 0) || this.dragging !== null;
    }

    delete() {
        return;
        const board = this.board;
        const column = this.tag;

        app.request({
            method: 'DELETE',
            url: app.forum.attribute('apiUrl') + '/board/' + board.slug() + '/columns/' + column.slug(),
        }).then(results => {
            this.tag = app.store.pushPayload(results);

            m.redraw();
        });
    }

    updateDiscussionSorting(sorting, slug) {
        const tag = app.store.getBy('tags', 'slug', slug);

        if (sorting.length > 0) {
            sorting.forEach(id => {
                const discussion = app.store.getById('discussions', id);
                const tags = discussion.tags();

                const data = {
                    relationships: {
                        tags: []
                    }
                }

                // drop all tags from discussion that are part of this board as column
                tags.forEach(t => {
                    //if (this.tags.indexOf(t) < 0 && t.id() !== tag.id()) {
                        data.relationships.tags.push(t);
                    //}
                })

                // then re-add that tag so it can be saved
                data.relationships.tags.push(tag);

                discussion.save(data);
            })
        }
    }
}
