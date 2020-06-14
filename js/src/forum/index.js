import createDiscussionBoard from './createDiscussionBoard';

import Model from 'flarum/Model';
import Tag from 'flarum/tags/models/Tag';
import Discussion from 'flarum/models/Discussion';

app.initializers.add('hyn-aqueduct', function(app) {
    createDiscussionBoard();
});
