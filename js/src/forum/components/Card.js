import Component from 'flarum/Component';
import ItemList from 'flarum/utils/ItemList';
import icon from 'flarum/helpers/icon';
import avatar from 'flarum/helpers/avatar';

export default class Card extends Component {
    init() {
        this.discussion = this.props.discussion;
        this.isUnread = this.discussion.isUnread();
    }

    view() {
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

        const user = this.discussion.user();

        console.log(this.discussion)

        items.add('user',
            <a href={user ? app.route.user(user) : '#'}
              className="Card--Author"
              config={function(element) {
                  $(element).tooltip({placement: 'right'});
                  m.route.apply(this, arguments);
              }}>
            {avatar(user, {title: ''})}
        </a>);

        items.add('count', m('div', {className: 'Card--Replies-Count'}, [
            icon(this.isUnread ? 'commenting-o' : 'comment-o'),
            this.discussion[this.isUnread ? 'unreadCount' : 'replyCount']()
        ]));

        return items;
    }
}
