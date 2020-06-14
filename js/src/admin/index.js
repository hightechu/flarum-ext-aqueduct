import app from "flarum/app";
import BoardTagModal from './BoardTagModal';

app.initializers.add('hyn-aqueduct', app => {
    app.extensionSettings['hyn-aqueduct'] = () => app.modal.show(new BoardTagModal());
});
