import Modal from 'flarum/components/Modal';
import Button from "flarum/components/Button";
import DiscussionsSearchSource from "flarum/components/DiscussionsSearchSource";

export default class AddColumnModal extends Modal {

    title() {
        return app.translator.trans('aqueduct.forum.board.modals.add-card.title');
    }

    init() {
        super.init();

        this.query = m.prop('');

        this.error = null;
        this.focused = null;

        this.search = new DiscussionsSearchSource();
        this.searchResult = [];

        this.updateSearch = this.updateSearch.bind(this);
        this.updateSearch('');
    }

    updateSearch(query) {
        console.log(query);
        this.query(query);
        this.search.search(query).then(rst => {
            this.searchResult = rst;
            m.redraw();
        });
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
              <input className={'FormControl ' + (this.focused === 'query' ? 'focus' : '')}
                placeholder={app.translator.trans('aqueduct.forum.board.modals.add-column.description')}
                value={this.query()}
                oninput={m.withAttr('value', this.updateSearch)}
                onfocus={() => this.focused = 'query'}
                onblur={() => this.focused = null}/>
            </div>
            <ul className='SearchResults'>
                {this.searchResult.map(r =>
                    <li className='DiscussionSearchResult'
                      onclick={() => this.onsubmit(r)}>
                        {r.title()}
                    </li>
                )}
            </ul>
          </div>
        ];
    }

    className() {
        return 'AddCardModal';
    }

    onsubmit(post) {

        if (this.props.onsubmit) {
            this.props.onsubmit(post.id());
        }

        app.modal.close();
        m.redraw.strategy('none');
    }
}

