import Component from 'flarum/Component';
import ItemList from 'flarum/utils/ItemList';
import Button from 'flarum/components/Button';
import icon from 'flarum/helpers/icon';
import avatar from 'flarum/helpers/avatar';

export default class Card extends Component {
    init() {
        this.discussion = app.store.getById('discussions', this.props.discussionId);
        if(this.discussion) {
            this.isUnread = this.discussion.isUnread();
        }
        this.delete = this.props.delete;
    }

    view() {
        if(!this.discussion) {
            return m('div', {
                className: 'Card',
                discussion: ''
            }, m('div', {className: 'Card--Handle'}, [
                m('div', {className: 'Card--Header'}, [
                    m('div', {className: 'Card--Title'},
                        <span>
                        Discussion not found
                        </span>
                    )
                ]),
                m('div', {className: 'Card--Footer'}, this.footerControls().toArray())
            ]))
        }

        const jumpTo = Math.min(this.discussion.lastPostNumber(), (this.discussion.lastReadPostNumber() || 0) + 1);

        return m('div', {
            className: 'Card' + (this.isUnread ? ' Unread' : ''),
            discussion: this.discussion.id()
        }, m('div', {className: 'Card--Handle'}, [
            m('div', {className: 'Card--Header'}, [
                // Issue title.
                m('div', {className: 'Card--Title'},
                    <a href={app.route.discussion(this.discussion, jumpTo)}
                       config={m.route}>
                        {this.discussion.title()}
                    </a>
                )
            ]),
            m('div', {className: 'Card--Footer'}, this.footerControls().toArray())
        ]))
    }

    footerControls() {
        let items = new ItemList;

        items.add('delete', Button.component({
            icon: 'fas fa-cog',
            children: app.translator.trans('aqueduct.forum.board.buttons.remove-card'),
            onclick: () => {
                this.delete();
            }
        }));

        if(this.discussion) {
            const user = this.discussion.user();

            if (user) {
                items.add('user',
                    <a href={user ? app.route.user(user) : '#'}
                      className="Card--Author"
                      config={function(element) {
                          $(element).tooltip({placement: 'right'});
                          m.route.apply(this, arguments);
                      }}>
                        {avatar(user, {title: user.username()})}
                        <span className="Username">{user.username()}</span>
                    </a>
                );
            }

            items.add('count', m('div', {className: 'Card--Replies-Count'}, [
                icon(this.isUnread ? 'fas fa-comments' : 'fas fa-comment-slash'),
                this.discussion[this.isUnread ? 'unreadCount' : 'replyCount']()
            ]));
        }

        return items;
    }
}
