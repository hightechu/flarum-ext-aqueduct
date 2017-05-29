import {extend} from "flarum/extend";
import Page from "flarum/components/Page";
import icon from 'flarum/helpers/icon';
import avatar from 'flarum/helpers/avatar';
import SplitDropdown from 'flarum/components/SplitDropdown';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';
import AddColumnModal from 'flagrow/aqueduct/modals/AddColumnModal';

export default class Board extends Page {
    init() {
        super.init();

        this.bodyClass = 'Aqueduct--Board';

        this.refresh(true)
    }



    config(isInitialized, context) {
        super.config(...arguments);

        if (isInitialized) return;

        app.setTitle('');
        app.setTitleCount(0);

        this.setDraggable();
    }

    view() {
        return m('div', {
            className: 'Board'
        }, [
            m('div', {
                className: 'Board--Controls'
            }, [
                SplitDropdown.component({
                    children: this.controls().toArray(),
                    icon: 'ellipsis-v',
                    className: 'App-primaryControl',
                    buttonClassName: 'Button--primary'
                })
            ]),
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
                    return this.card(discussion);
                })))
            ])
        ]);
    }

    card(discussion) {
        const jumpTo = Math.min(discussion.lastPostNumber(), (discussion.readNumber() || 0) + 1);
        const isUnread = discussion.isUnread();
        const startUser = discussion.startUser();

        return m('li', {
            className: 'Card' + (isUnread ? ' Unread' : '')
        }, m('div', [
            m('div', {className: 'Card--Header'}, [
                // Issue title.
                m('div', {className: 'Card--Title'},
                    <a href={app.route.discussion(discussion, jumpTo)}
                       config={m.route}>
                        {discussion.title()}
                    </a>
                )
            ]),
            m('div', {className: 'Card--Footer'}, [
                <a href={startUser ? app.route.user(startUser) : '#'}
                   className="Card--Author"
                   config={function(element) {
                       $(element).tooltip({placement: 'right'});
                       m.route.apply(this, arguments);
                   }}>
                    {avatar(startUser, {title: ''})}
                </a>,
                // Number of comments.
                m('div', [
                    icon(isUnread ? 'commenting-o' : 'comment-o'),
                    discussion[isUnread ? 'unreadCount' : 'repliesCount']()
                ])
            ])
        ]))
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

            // Todo make this a configured set of column tags.
            this.tags = this.tag.columns() || [];
        }

        this.load().then(
            results => {
                app.store.pushPayload(results);

                this.discussions = {};
                this.parseResults(results.data);
            },
            () => {
                this.loading = false;
                m.redraw();
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

                if (discussion.tags().map(tag => tag.id()).indexOf(tag.id()) > 0) {
                    this.discussions[tag.slug()].push(discussion);
                }
            })
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

    setDraggable() {

        sortable('.Board--List', {
            items: '.Board--Column',
            handle: '.Board--Header',
            placeholder: '<div class="Board--Column Placeholder"></div>',
            forcePlaceholderSize: true
        })[0].addEventListener('sortupdate', function (e) {
            const sorting = $(e.target).find('.Board--Column').map(function () {
                return $(this).attr('slug');
            }).get()

            console.log(sorting)

            this.updateSorting(sorting)
        });
    }

    updateSorting(sorting) {
        return app.request({
            method: 'post',
            url: app.forum.attribute('apiUrl') + '/board/' + this.tag.slug()
        })
    }
}
