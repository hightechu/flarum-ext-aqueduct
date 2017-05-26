import {extend} from "flarum/extend";
import Page from "flarum/components/Page";
import icon from 'flarum/helpers/icon';
import avatar from 'flarum/helpers/avatar';

export default class Board extends Page {
    init() {
        super.init();

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
        this.tags = app.store.all('tags').filter(tag => tag.position() === null);

        this.bodyClass = 'Aqueduct--Board';

        this.refresh()
    }



    config(isInitialized, context) {
        super.config(...arguments);

        if (isInitialized) return;

        app.setTitle('');
        app.setTitleCount(0);
    }

    view() {
        return m('div', {
            className: 'Board'
        }, [
            m('div', {
                className: 'Board--List'
            }, this.tags.map(tag => {
                return this.column(tag);
            }))
        ])
    }

    column(tag) {
        return m('div', {
            className: 'Board--Column ' + tag.name()
        }, [
            m('div', {className: 'Board--Inner'}, [
                m('header', {
                    className: 'Board--Header' + (tag.color() ? ' colored' : ''),
                    style: tag.color() ? 'border-top-color: ' + tag.color() + ';' : ''
                }, m('h4', [tag.name(), m('span', tag.description())])),
                m('div', {
                    className: 'Board--List'
                }, this.loading ? '' : m('ul', this.discussions[tag.slug()].map(discussion => {
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
            this.discussions = {};
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
        let params = {};

        return app.request({
            method: 'get',
            url: app.forum.attribute('apiUrl') + '/board/' + this.tag.slug(),
        });
    }
}
