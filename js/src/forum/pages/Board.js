import sortable from 'html5sortable';

import {extend} from "flarum/extend";
import Page from "flarum/components/Page";
import SplitDropdown from 'flarum/components/SplitDropdown';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';
import AddColumnModal from '../modals/AddColumnModal';
import Card from '../components/Card';

export default class Board extends Page {
    init() {
        super.init();

        this.bodyClass = 'Aqueduct--Board';

        this.draggable = 'cards';
        this.dragging = null;

        this.refresh(true);
    }


    config(isInitialized, context) {
        super.config(...arguments);

        if (isInitialized) return;

        app.setTitle('');
        app.setTitleCount(0);

        if (this.tag.canManageBoard()) {
            this.setDraggable();
        }
    }

    view() {
        return m('div', {
            className: 'Board'
        }, [
            m('div', {
                className: 'Board--Controls'
            }, m('div', {className: 'container'}, [
                this.controls().isEmpty() ? [] :
                    SplitDropdown.component({
                        children: this.controls().toArray(),
                        icon: 'ellipsis-v',
                        className: 'App-primaryControl',
                        buttonClassName: 'Button--primary'
                    })
            ])),
            m('div', {
                className: 'Board--List'
            }, this.tags.map(tag => {
                return this.column(tag);
            }))
        ])
    }

    controls() {
        let items = new ItemList;
        let tag = this.tag;

        if (tag.canManageBoard()) {
            items.add('add-column', Button.component({
                icon: 'gear',
                children: app.translator.trans('flagrow-aqueduct.forum.board.buttons.add-column'),
                onclick: () => app.modal.show(new AddColumnModal({
                    tag: tag,
                    onsubmit: tag => {
                        this.refresh(true)
                    }
                }))
            }))
        }

        return items;
    }

    column(tag) {
        return m('div', {
            className: 'Board--Column ' + tag.name(),
            slug: tag.slug()
        }, [
            m('div', {className: 'Board--Inner'}, [
                m('header', {
                    className: 'Board--Header' + (tag.color() ? ' colored' : ''),
                    style: tag.color() ? 'border-top-color: ' + tag.color() + ';' : ''
                }, m('h4', [tag.name(), m('span', tag.description())])),
                m('div', {
                    className: 'Board--Item-List'
                }, this.loading || this.discussions[tag.slug()].length == 0 ? '' : m('ul', this.discussions[tag.slug()].map(discussion => {
                    return Card.component({discussion});
                })))
            ])
        ]);
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
        if (this.draggable == 'cards' && this.dragging) {
            sortable('.Board--Item-List');
        } else if (this.draggable == 'cards') {
            const sorted = sortable('.Board--Item-List', {
                // connectWith: 'Board--Connected--Cards',
                items: '.Card',
                handle: '.Card--Handle',
                placeholder: '<div class="Card Placeholder"></div>',
                forcePlaceholderSize: true
            });
            if (sorted.length > 0) {
                sorted[0].addEventListener('sortupdate', (e) => {
                });
            }
        }

        if (this.draggable == 'columns' && this.dragging) {
            sortable('.Board--List');
        } else if (this.draggable == 'columns') {
            const sorted = sortable('.Board--List', {
                items: '.Board--Column',
                handle: '.Board--Header',
                placeholder: '<div class="Board--Column Placeholder"></div>',
                forcePlaceholderSize: true
            });
            if (sorted.length > 0) {
                sorted[0].addEventListener('sortupdate', (e) => {
                    const sorting = $(e.target).find('.Board--Column').map(function () {
                        return $(this).attr('slug');
                    }).get();

                    this.updateColumnSorting(sorting);
                });
            }
        }

        this.dragging = true;
    }

    updateColumnSorting(sorting) {
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
