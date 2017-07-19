import {extend} from 'flarum/extend';

import routes from 'flagrow/aqueduct/routes';
import addsBoardToDiscussion from 'flagrow/aqueduct/addsBoardToDiscussion';

import Model from 'flarum/Model';
import Tag from 'flarum/tags/models/Tag';
import Discussion from 'flarum/models/Discussion';

app.initializers.add('flagrow-aqueduct', function(app) {
    Tag.prototype.canManageBoard = Model.attribute('canManageBoard');
    Tag.prototype.canUseBoard = Model.attribute('canUseBoard');
    Tag.prototype.columns = Model.hasMany('columns');
    Tag.prototype.board_sort = Model.attribute('board_sort') || null;
    Tag.prototype.board_max_items = Model.attribute('board_max_items') || null;

    Discussion.prototype.canViewBoard = Model.hasMany('canViewBoard');
    Discussion.prototype.canUseBoard = Model.hasMany('canUseBoard');
    Discussion.prototype.canManageBoard = Model.attribute('canManageBoard');
    Discussion.prototype.assignedUsers = Model.hasMany('assignedUsers');
    Discussion.prototype.assignedGroups = Model.hasMany('assignedGroups');

    routes(app);

    addsBoardToDiscussion();
});
