import {extend} from 'flarum/extend';

import routes from 'flagrow/aqueduct/routes';
import addsBoardToDiscussion from 'flagrow/aqueduct/addsBoardToDiscussion';

import Model from 'flarum/Model';
import Tag from 'flarum/tags/models/Tag';

app.initializers.add('flagrow-aqueduct', function(app) {
    Tag.prototype.canManageBoard = Model.attribute('canManageBoard');
    Tag.prototype.columns = Model.hasMany('columns');
    Tag.prototype.board_sort = Model.attribute('board_sort') || null;
    Tag.prototype.board_max_items = Model.attribute('board_max_items') || null;

    routes(app);

    addsBoardToDiscussion();
});
