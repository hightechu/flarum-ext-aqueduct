import sortable from 'html5sortable';

import Page from "flarum/components/Page";
import SplitDropdown from 'flarum/components/SplitDropdown';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';
import AddColumnModal from '../modals/AddColumnModal';
import Card from '../components/Card';
import Column from '../components/Column';

export default class Board extends Page {
    init() {
        super.init();

        this.bodyClass = 'Kanban--Board';

        this.draggable = 'cards';
        this.dragging = null;

        this.refresh(true);
    }


    config(isInitialized, context) {
        super.config(...arguments);

        if (isInitialized) return;

        app.setTitle('');
        app.setTitleCount(0);

        this.$().ready(() => {
            this.setDraggable();
        });

    }

    view() {
        return m('div', {
            className: 'Board'
        }, [
            m('div', {
                className: 'Board--Controls'
            }, m('div', {className: 'container'}, [
                Button.component({
                    icon: 'fas fa-tag',
                    className: 'Button',
                    children: this.tag.name(),
                    onclick: () => m.route('/t/' + this.tag.slug())
                }),
                this.controls().isEmpty() ? [] :
                    SplitDropdown.component({
                        children: this.controls().toArray(),
                        icon: 'ellipsis-v',
                        className: 'App-primaryControl',
                        buttonClassName: 'Button--primary'
                    }),
                this.dragging && this.draggable === 'columns' ? [
                    Button.component({
                        icon: 'fas fa-lock',
                        className: 'Button Button--danger',
                        children: app.translator.trans('flagrow-aqueduct.forum.board.buttons.fix-columns'),
                        onclick: () => {
                            this.updateColumnSorting()

                            this.draggable = 'cards';
                            this.setDraggable();
                        }
                    })
                ] : []
            ])),
            m('div', {
                className: 'Board--List'
            }, (this.loading ? [] : this.tags).map(tag => {
                return Column.component({
                    board: this.tag,
                    tag,
                    discussions: this.discussions[tag.slug()] || [],
                    loading: this.loading,
                    dragging: this.dragging,
                    draggable: this.draggable,
                    tags: this.tags
                });
            }))
        ])
    }

    controls() {
        let items = new ItemList;
        let tag = this.tag;

        if (tag.canManageBoard()) {
            items.add('add-column', Button.component({
                icon: 'fas fa-cog',
                children: app.translator.trans('flagrow-aqueduct.forum.board.buttons.add-column'),
                onclick: () => app.modal.show(new AddColumnModal({
                    tag: tag,
                    onsubmit: () => {
                        this.refresh(true)
                    }
                }))
            }));

            if (this.draggable === 'cards') {
                items.add('drag-columns', Button.component({
                    icon: 'fas fa-lock-open',
                    children: app.translator.trans('flagrow-aqueduct.forum.board.buttons.drag-columns'),
                    onclick: () => {
                        this.draggable = 'columns';
                        this.setDraggable();
                    }
                }));
            }
        }

        return items;
    }

    /**
     * Clear and reload the discussion list.
     *
     * @public
     */
    refresh(clear = true) {
        if (clear) {
            this.loading = true;

            // The primary tag for which we will show the board.
            this.tag = app.store.getBy('tags', 'slug', m.route.param('tag'));

            /**
             * The discussions in the discussion list.
             *
             * @type {Discussion[]}
             */
            this.discussions = {};

            this.tags = this.tag.columns() || [];
        }

        this.tags.sort((a, b) => {
            return a.boardSort() - b.boardSort();
        });

        this.load().then(
            results => {
                app.store.pushPayload(results);

                this.discussions = {};
                this.parseResults(results.data);

                this.setDraggable()
            },
            () => {
                this.loading = false;
                m.redraw();

                this.setDraggable()
            }
        );
    }

    /**
     * Parse results and append them to the discussion list.
     *
     * @param {Discussion[]} results
     * @return {Discussion[]}
     */
    parseResults(results) {
        this.tags.forEach(tag => {

            this.discussions[tag.slug()] = [];

            results.forEach(discussion => {
                discussion = app.store.getById(discussion.type, discussion.id);

                if (discussion.tags().map(tag => tag.id()).indexOf(tag.id()) != -1) {
                    this.discussions[tag.slug()].push(discussion);
                }
            });
        })

        this.loading = false;

        m.lazyRedraw();

        return results;
    }

    /**
     * Load discussions based on the tags.
     */
    load() {
        return app.request({
            method: 'get',
            url: app.forum.attribute('apiUrl') + '/board/' + this.tag.slug(),
        });
    }

    /**
     * Listens to dragging event and updates the sorting of the columns.
     */
    setDraggable() {
        if (!this.tag.canManageBoard()) {
            return;
        }

        let sorted = [];

        if (! this.dragging && this.draggable === 'columns') {
            sorted = sortable('.Board--List', {
                items: '.Board--Column',
                handle: '.Board--Header',
                placeholder: '<div class="Board--Column Placeholder"></div>',
                forcePlaceholderSize: true
            });
        } else if (this.draggable === 'columns') {
            sortable('.Board--List');
        } else {
            sortable('.Board--List', 'destroy');
        }

        this.dragging = (this.dragging === null && sorted.length > 0) || this.dragging !== null;
    }

    updateColumnSorting() {
        const sorting = this.$().find('.Board--Column').map(function () {
            return $(this).attr('slug');
        }).get();

        return app.request({
            method: 'post',
            url: app.forum.attribute('apiUrl') + '/board/' + this.tag.slug() + '/sorting',
            data: sorting
        }).then(results => {
            app.store.pushPayload(results);
            m.redraw()

            this.setDraggable()
        })
    }


}
