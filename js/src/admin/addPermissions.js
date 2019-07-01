import {extend} from "flarum/extend";
import PermissionGrid from "flarum/components/PermissionGrid";

export default function () {

    // add the permission option to the relative pane.
    extend(PermissionGrid.prototype, 'viewItems', items => {
        items.add('board-access', {
            icon: 'fab fa-trello',
            label: app.translator.trans('aqueduct.admin.permissions.board-access'),
            permission: 'discussion.aqueductBoardAccess',
            allowGuest: true
        });
    });

    extend(PermissionGrid.prototype, 'startItems', items => {
        // participation on boards.
        items.add('board-user', {
            icon: 'fab fa-trello',
            label: app.translator.trans('aqueduct.admin.permissions.board-user'),
            permission: 'discussion.aqueductBoardUser'
        });
    });

    extend(PermissionGrid.prototype, 'moderateItems', items => {
        // moderates boards.
        items.add('board-admin', {
            icon: 'fab fa-trello',
            label: app.translator.trans('aqueduct.admin.permissions.board-admin'),
            permission: 'discussion.aqueductBoardAdmin'
        });
    });
}
