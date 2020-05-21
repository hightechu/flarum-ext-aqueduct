import Component from 'flarum/Component';
import SplitDropdown from 'flarum/components/SplitDropdown';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';
import Card from '../components/Card';
import AddCardModal from '../modals/AddCardModal';
import sortable from "html5sortable";


export default class Column extends Component {
    init() {
        this.name = this.props.name;
        this.slug = this.props.slug;
        this.description = this.props.description || "";
        this.discussions = this.props.discussions || [];

        this.dragging = this.props.dragging;
        this.draggingEnabled = this.props.draggable === 'cards';

        this.update = this.props.update || (() => {});
        this.delete = this.props.delete || (() => {});

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
                }, this.discussions.map((dis, i) => {
                    if(!dis) return;
                    return Card.component({
                        discussionId: dis.id,
                        delete: () => {
                            delete this.discussions[i];
                            this.update(this.discussions);
                        }
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

        items.add('add-card', Button.component({
            icon: 'fas fa-cog',
            children: app.translator.trans('aqueduct.forum.board.buttons.add-card'),
            onclick: () => app.modal.show(new AddCardModal({
                onsubmit: (postId) => {
                    this.discussions.push({
                        id: postId
                    });
                    this.update(this.discussions);
                }
            }))
        }));

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
                this.update($(e.target).find('.Card').map(function () {
                    return {
                        id: $(this).attr('discussion')
                    };
                }).get());
            });
        } else if (this.draggingEnabled) {
            sortable(selector);
        }

        this.dragging = (this.dragging === null && this.sorted.length > 0) || this.dragging !== null;
    }
}
