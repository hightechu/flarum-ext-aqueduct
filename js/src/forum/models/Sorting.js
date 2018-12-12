import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class Sorting extends mixin(Model, {
    discussionId: Model.attribute('discussionId'),
    boardTagId: Model.attribute('boardTagId'),
    columnTagId: Model.attribute('columnTagId'),
    sort: Model.attribute('sort'),
}) {}
