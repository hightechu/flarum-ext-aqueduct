import Modal from 'flarum/components/Modal';
import Button from "flarum/components/Button";

export default class AddColumnModal extends Modal {

    title() {
        return app.translator.trans('aqueduct.forum.board.modals.add-card.title');
    }

    init() {
        super.init();

        this.postId = m.prop('');

        this.error = null;
        this.focused = null;
    }

    content() {
        return [
          <div className="Modal-body">
            {this.error ?
              <div className="Alert Alert--error">
                {this.error}
              </div>
            : ''}
            <div className="Form">
              <input className={'FormControl ' + (this.focused === 'postId' ? 'focus' : '')}
                placeholder={app.translator.trans('aqueduct.forum.board.modals.add-column.description')}
                value={this.postId()}
                oninput={m.withAttr('value', this.postId)}
                onfocus={() => this.focused = 'postId'}
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
        return 'AddCardModal';
    }

    onsubmit(e) {
        e.preventDefault();

        if(!this.postId()) {
            this.error = app.translator.trans('aqueduct.forum.board.modals.add-card.error-empty');
            return;
        }

        if(!app.store.getById('discussions', this.postId())) {
            this.error = app.translator.trans('aqueduct.forum.board.modals.add-card.error-notfound');
            return;
        }

        if (this.props.onsubmit) {
            this.props.onsubmit(this.postId());
        }

        app.modal.close();
        m.redraw.strategy('none');
    }
}

