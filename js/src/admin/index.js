import {extend} from "flarum/extend";
import app from "flarum/app";
import PermissionGrid from "flarum/components/PermissionGrid";

app.initializers.add('flagrow-aqueduct', app => {
    // add the permission option to the relative pane.
    extend(PermissionGrid.prototype, 'viewItems', items => {
        items.add('board-access', {
            icon: 'fab fa-trello',
            label: app.translator.trans('flagrow-aqueduct.admin.permissions.board-access'),
            permission: 'discussion.flagrow.kanban.board-access',
            allowGuest: true
        });
    });

    extend(PermissionGrid.prototype, 'startItems', items => {
        // participation on boards.
        items.add('board-user', {
            icon: 'fab fa-trello',
            label: app.translator.trans('flagrow-aqueduct.admin.permissions.board-user'),
            permission: 'discussion.flagrow.kanban.board-user'
        });
    });

    extend(PermissionGrid.prototype, 'moderateItems', items => {
        // moderates boards.
        items.add('board-admin', {
            icon: 'fab fa-trello',
            label: app.translator.trans('flagrow-aqueduct.admin.permissions.board-admin'),
            permission: 'discussion.flagrow.kanban.board-admin'
        });
    });
});
