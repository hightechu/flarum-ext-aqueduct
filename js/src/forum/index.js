import routes from './routes';
import addsBoardToDiscussion from './addsBoardToDiscussion';

import Model from 'flarum/Model';
import Tag from 'flarum/tags/models/Tag';
import Discussion from 'flarum/models/Discussion';

app.initializers.add('flagrow-kanban', function(app) {
    Tag.prototype.canManageBoard = Model.attribute('canManageBoard');
    Tag.prototype.canUseBoard = Model.attribute('canUseBoard');
    Tag.prototype.columns = Model.hasMany('columns');
    Tag.prototype.boardSort = Model.attribute('boardSort') || null;
    Tag.prototype.boardMaxItems = Model.attribute('boardMaxItems') || null;

    Discussion.prototype.canViewBoard = Model.hasMany('canViewBoard');
    Discussion.prototype.canUseBoard = Model.hasMany('canUseBoard');
    Discussion.prototype.canManageBoard = Model.attribute('canManageBoard');
    Discussion.prototype.assignedUsers = Model.hasMany('assignedUsers');
    Discussion.prototype.assignedGroups = Model.hasMany('assignedGroups');

    routes(app);

    addsBoardToDiscussion();
}, -10);
