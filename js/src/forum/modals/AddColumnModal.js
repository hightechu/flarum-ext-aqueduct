import Modal from 'flarum/components/Modal';
import tagLabel from 'flarum/tags/helpers/tagLabel';
import tagIcon from 'flarum/tags/helpers/tagIcon';
import highlight from 'flarum/helpers/highlight';
import classList from 'flarum/utils/classList';
import Button from "flarum/components/Button";

export default class AddColumnModal extends Modal {

    title() {
        return app.translator.trans('aqueduct.forum.board.modals.add-column.title');
    }
    init() {
        super.init();
        this.for = this.props.tag;

        this.tags = app.store.all('tags').filter(tag => {
            return this.for.columns().indexOf(tag) == -1;
        });

        this.selected = m.prop('');
        this.filter = m.prop('');
        this.index = this.tags[0].id();
        this.focused = false;
    }

    content() {
        let tags = this.tags;
        const filter = this.filter().toLowerCase();

        tags = tags.filter(tag => {
            return tag.id() != this.for.id() &&
                (tag.position() === null || (tag.parent() && tag.parent().id() == this.for.id()));
        })

        // If the user has entered text in the filter input, then filter by tags
        // whose name matches what they've entered.
        if (filter) {
            tags = tags.filter(tag => tag.name().substr(0, filter.length).toLowerCase() === filter);
        }

        return [
          <div className="Modal-body">
            <div className="TagDiscussionModal-form">
              <div className="TagDiscussionModal-form-input">
                <div className={'TagsInput FormControl ' + (this.focused ? 'focus' : '')}>
                  <span className="TagsInput-selected">
                    {this.selected() ?
                            <span className="TagsInput-tag" onclick={() => {
                            this.selected('')
                            this.onready();
                          }}>
                            {tagLabel(this.selected())}
                          </span>
                        : ''
                    }
                  </span>
                  <input className="FormControl"
                    value={this.filter()}
                    oninput={m.withAttr('value', this.filter)}
                    onfocus={() => this.focused = true}
                    onblur={() => this.focused = false}/>
                </div>
              </div>
              <div className="TagDiscussionModal-form-submit App-primaryControl">
                {Button.component({
                  type: 'submit',
                  className: 'Button Button--primary',
                  disabled: !this.selected(),
                  icon: 'check',
                  children: app.translator.trans('flarum-tags.forum.choose_tags.submit_button')
                })}
              </div>
            </div>
          </div>,

          <div className="Modal-footer">
            <ul className="TagDiscussionModal-list SelectTagList">
              {tags
                .filter(tag => filter || !tag.parent() || this.selected().id == tag.id())
                .map(tag => (
                  <li data-index={tag.id()}
                    className={classList({
                      pinned: tag.position() !== null,
                      child: !!tag.parent(),
                      colored: !!tag.color(),
                      selected: this.selected() && this.selected().id == tag.id(),
                      active: this.index === tag
                    })}
                    style={{color: tag.color()}}
                    onmouseover={() => this.index = tag}
                    onclick={() => this.selected(tag)}
                  >
                    {tagIcon(tag)}
                    <span className="SelectTagListItem-name">
                      {highlight(tag.name(), filter)}
                    </span>
                    {tag.description()
                      ? (
                        <span className="SelectTagListItem-description">
                          {tag.description()}
                        </span>
                      ) : ''}
                  </li>
                ))}
            </ul>
          </div>
        ];
    }

    className() {
        return 'AddColumnModal';
    }


    onsubmit(e) {
        e.preventDefault();

        const board = this.for;
        const column = this.selected();

        app.request({
            method: 'POST',
            url: app.forum.attribute('apiUrl') + '/board/' + board.slug() + '/columns/' + column.slug(),
        }).then(results => {
            let tag = app.store.pushPayload(results);

            if (this.props.onsubmit) this.props.onsubmit(tag);

            app.modal.close();

            m.redraw.strategy('none');
        });
    }
}
