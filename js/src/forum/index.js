import createDiscussionBoard from './createDiscussionBoard';

import Model from 'flarum/Model';
import Tag from 'flarum/tags/models/Tag';
import Discussion from 'flarum/models/Discussion';

app.initializers.add('hyn-aqueduct', function(app) {
    Tag.prototype.canAccessBoard = Model.attribute('canAccessBoard');
    Tag.prototype.canUseBoard = Model.attribute('canUseBoard');
    Tag.prototype.canManageBoard = Model.attribute('canManageBoard');
    Tag.prototype.columns = Model.hasMany('columns');
    Tag.prototype.boardSort = Model.attribute('boardSort') || null;
    Tag.prototype.boardMaxItems = Model.attribute('boardMaxItems') || null;

    Discussion.prototype.canAccessBoard = Model.attribute('canAccessBoard');
    Discussion.prototype.canUseBoard = Model.attribute('canUseBoard');
    Discussion.prototype.canManageBoard = Model.attribute('canManageBoard');
    Discussion.prototype.assignedUsers = Model.hasMany('assignedUsers');
    Discussion.prototype.assignedGroups = Model.hasMany('assignedGroups');

    createDiscussionBoard();
});
