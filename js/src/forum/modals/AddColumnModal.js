import { slug } from 'flarum/utils/string';
import Modal from 'flarum/components/Modal';
import highlight from 'flarum/helpers/highlight';
import classList from 'flarum/utils/classList';
import Button from "flarum/components/Button";

export default class AddColumnModal extends Modal {

    title() {
        return app.translator.trans('aqueduct.forum.board.modals.add-column.title');
    }

    init() {
        super.init();

        this.name = m.prop('');
        this.slug = m.prop('');
        this.description = m.prop('');
        this.existingColumns = this.props.existingColumns || [];

        this.error = null;
        this.focused = null;
    }

    content() {
        const name = this.name();

        return [
          <div className="Modal-body">
            {this.error ?
              <div className="Alert Alert--error">
                {this.error}
              </div>
            : ''}
            <div className="Form">
              <input className={'FormControl ' + (this.focused === 'name' ? 'focus' : '')}
                placeholder={app.translator.trans('aqueduct.forum.board.modals.add-column.name')}
                value={this.name()}
                oninput={m.withAttr('value', value => {
                    this.name(value);
                    this.slug(slug(value));
                })}
                onfocus={() => this.focused = 'name'}
                onblur={() => this.focused = null}/>
              <input className={'FormControl ' + (this.focused === 'slug' ? 'focus' : '')}
                placeholder={app.translator.trans('aqueduct.forum.board.modals.add-column.slug')}
                value={this.slug()}
                oninput={m.withAttr('value', this.slug)}
                onfocus={() => this.focused = 'slug'}
                onblur={() => this.focused = null}/>
              <input className={'FormControl ' + (this.focused === 'description' ? 'focus' : '')}
                placeholder={app.translator.trans('aqueduct.forum.board.modals.add-column.description')}
                value={this.description()}
                oninput={m.withAttr('value', this.description)}
                onfocus={() => this.focused = 'description'}
                onblur={() => this.focused = null}/>
            </div>
            <div className="App-primaryControl">
              {Button.component({
                type: 'submit',
                className: 'Button Button--primary',
                icon: 'check',
                children: app.translator.trans('flarum-tags.forum.choose_tags.submit_button')
              })}
            </div>
          </div>,
        ];
    }

    className() {
        return 'AddColumnModal';
    }

    onsubmit(e) {
        e.preventDefault();

        if (!this.slug()) {
            this.error = app.translator.trans('aqueduct.forum.board.modals.add-column.error-empty');
            return;
        }

        if (this.existingColumns.map(c => c.slug).includes(this.slug())) {
            this.error = app.translator.trans('aqueduct.forum.board.modals.add-column.error-exists');
            return;
        }

        if (this.props.onsubmit) {
            this.props.onsubmit(this.name(), this.slug(), this.description());
        }

        app.modal.close();
        m.redraw.strategy('none');
    }
}
