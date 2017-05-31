import {extend} from "flarum/extend";
import app from "flarum/app";
import PermissionGrid from "flarum/components/PermissionGrid";


app.initializers.add('flagrow-aqueduct', app => {
    // add the permission option to the relative pane.
    extend(PermissionGrid.prototype, 'viewItems', items => {
        items.add('board-access', {
            icon: 'trello',
            label: app.translator.trans('flagrow-aqueduct.admin.permissions.board-access'),
            permission: 'discussion.flagrow.aqueduct.board-access',
            allowGuest: true
        });
    });

    extend(PermissionGrid.prototype, 'moderateItems', items => {
        // moderates boards.
        items.add('board-admin', {
            icon: 'trello',
            label: app.translator.trans('flagrow-aqueduct.admin.permissions.board-admin'),
            permission: 'discussion.flagrow.aqueduct.board-admin'
        });
    });

    extend(PermissionGrid.prototype, 'createItems', items => {
        // participation on boards.
        items.add('board-user', {
            icon: 'trello',
            label: app.translator.trans('flagrow-aqueduct.admin.permissions.board-user'),
            permission: 'discussion.flagrow.aqueduct.board-user'
        });
    });
});
