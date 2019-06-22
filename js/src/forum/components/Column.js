import Component from 'flarum/Component';
import SplitDropdown from 'flarum/components/SplitDropdown';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';
import Card from '../components/Card';


export default class Column extends Component {
    init() {
        this.board = this.props.board;
        this.tag = this.props.tag;
        this.discussions = this.props.discussions;
        this.loading = this.props.loading;
    }

    view() {
        const tag = this.tag;

        return m('div', {
            className: 'Board--Column ' + tag.name(),
            slug: tag.slug()
        }, [
            m('div', {className: 'Board--Inner'}, [
                m('header', {
                    className: 'Board--Header' + (tag.color() ? ' colored' : ''),
                    style: tag.color() ? 'border-top-color: ' + tag.color() + ';' : ''
                }, m('h4', [
                    tag.name(),
                    m('span', tag.description()),

                    this.controls().isEmpty() ? [] :
                        SplitDropdown.component({
                            children: this.controls().toArray(),
                            icon: 'ellipsis-v',
                            buttonClassName: 'Button'
                        })
                ])),
                m('div', {
                    className: 'Board--Item-List',
                    slug: tag.slug()
                }, this.loading || this.discussions.length == 0 ? '' : this.discussions.map(discussion => {
                    return Card.component({discussion});
                }))
            ])
        ]);
    }

    controls() {
        const tag = this.tag;
        let items = new ItemList;

        if (this.draggable === 'columns' && tag.canManageBoard()) {
            items.add('remove-column', Button.component({
                icon: 'fas fa-cog',
                children: app.translator.trans('flagrow-aqueduct.forum.board.buttons.remove-column'),
                onclick: () => {
                    if (confirm(app.translator.trans('flagrow-aqueduct.forum.board.buttons.remove-column-confirmation', {tag: tag.name()}))) {
                        this.delete();
                    }
                }
            }));
        }

        return items;
    }

    delete() {
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
}
