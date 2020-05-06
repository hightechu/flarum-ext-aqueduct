import sortable from 'html5sortable';
import YAML from 'yaml'

import Component from "flarum/Component";
import SplitDropdown from 'flarum/components/SplitDropdown';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';
import AddColumnModal from '../modals/AddColumnModal';
import Card from './Card';
import Column from './Column';

export default class Board extends Component {
    init() {
        this.post = this.props.discussion.posts()[0];

        this.boardConfig = {};
        this.loadConfig();

        this.name = this.boardConfig.name || "Board";
        this.columns = this.boardConfig.columns || [];

        this.draggable = 'cards';
        this.dragging = null;

        this.setDraggable();
    }


    loadConfig() {
        let yaml = this.post.content();
        let data = {};
        try {
            data = YAML.parse(yaml);
            // TODO check version
        } catch(e) {
            data.description = YAML.stringify(yaml);
        }

        this.boardConfig = {
            name: data.name || "",
            description: data.description || "",
            columns: data.columns || []
        };
    }

    saveConfig() {
        let header = "# Aqueduct Kamban Board\n"
        let yaml = YAML.stringify({
            version: "1.0", // TODO find a way to retrieve version
            name: this.boardConfig.name,
            description: this.boardConfig.description,
            columns: this.boardConfig.columns
        });
        this.post.save({
            content: header + yaml
        }).catch(console.error);
    }

    view() {
        return m('div', {
            className: 'Kanban--Board'
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
                    }),
                this.dragging && this.draggable === 'columns' ? [
                    Button.component({
                        icon: 'fas fa-lock',
                        className: 'Button Button--danger',
                        children: app.translator.trans('aqueduct.forum.board.buttons.fix-columns'),
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
            }, this.columns.map((col, id) => {
                return Column.component({
                    name: col.name,
                    slug: col.slug,
                    description: col.description,
                    discussions: col.discussions,
                    dragging: this.dragging,
                    draggable: this.draggable,

                    update: discussions => {
                        this.boardConfig.columns[id].discussions = discussions;
                        this.saveConfig();
                        m.redraw();
                    },

                    delete: () => {
                        this.boardConfig.columns.splice(id, 1);
                        this.saveConfig();
                        m.redraw();
                    }
                });
            }))
        ])
    }

    controls() {
        let items = new ItemList();

        if (this.post.canEdit()) {
            items.add('add-column', Button.component({
                icon: 'fas fa-cog',
                children: app.translator.trans('aqueduct.forum.board.buttons.add-column'),
                onclick: () => app.modal.show(new AddColumnModal({
                    existingColumns: this.boardConfig.columns,
                    onsubmit: (name, slug, description) => {
                        this.boardConfig.columns.push({
                            name: name,
                            slug: slug,
                            description: description
                        });
                        this.saveConfig();
                    }
                }))
            }));

            if (this.draggable === 'cards') {
                items.add('drag-columns', Button.component({
                    icon: 'fas fa-lock-open',
                    children: app.translator.trans('aqueduct.forum.board.buttons.drag-columns'),
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
     * Listens to dragging event and updates the sorting of the columns.
     */
    setDraggable() {
        if (!this.post.canEdit()) {
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
        // TODO
    }

}
