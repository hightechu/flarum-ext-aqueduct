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
        const jumpTo = Math.min(this.discussion.lastPostNumber(), (this.discussion.readNumber() || 0) + 1);

        return m('li', {
            className: 'Card' + (this.isUnread ? ' Unread' : '')
        }, m('div', [
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

        const startUser = this.discussion.startUser();

        items.add('startUser',
            <a href={startUser ? app.route.user(startUser) : '#'}
              className="Card--Author"
              config={function(element) {
                  $(element).tooltip({placement: 'right'});
                  m.route.apply(this, arguments);
              }}>
            {avatar(startUser, {title: ''})}
        </a>);

        items.add('count', m('div', [
            icon(this.isUnread ? 'commenting-o' : 'comment-o'),
            this.discussion[this.isUnread ? 'unreadCount' : 'repliesCount']()
        ]));

        return items;
    }
}
