import {extend} from "flarum/extend";
import app from "flarum/app";
import PermissionGrid from "flarum/components/PermissionGrid";
import PermissionDropdown from 'flarum/components/PermissionDropdown';

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
});
