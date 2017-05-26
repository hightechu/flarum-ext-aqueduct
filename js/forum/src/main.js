import {extend} from 'flarum/extend';

import routes from 'flagrow/aqueduct/routes';
import addsBoardToDiscussion from 'flagrow/aqueduct/addsBoardToDiscussion';

import Model from 'flarum/Model';
import Tag from 'flarum/tags/models/Tag';

app.initializers.add('flagrow-aqueduct', function(app) {
    Tag.prototype.canManageBoard = Model.attribute('canManageBoard');

    routes(app);

    addsBoardToDiscussion();
});
