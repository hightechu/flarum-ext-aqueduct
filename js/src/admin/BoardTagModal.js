import SettingsModal from 'flarum/components/SettingsModal';

export default class HelloWorldSettingsModal extends SettingsModal {
    className() {
        return 'Modal--small';
    }

    title() {
        return app.translator.trans('aqueduct.admin.settings.title');
    }

    form() {
        return [
            <div className="Form-group">
                <label>{app.translator.trans('aqueduct.admin.settings.label')}</label>
                <input className="FormControl" bidi={this.setting('aqueduct.boardTag', 'board')}/>
            </div>,
        ];
    }
}

