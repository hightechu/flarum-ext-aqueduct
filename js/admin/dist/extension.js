"use strict";

System.register("flagrow/aqueduct/main", ["flarum/extend", "flarum/app", "flarum/components/PermissionGrid"], function (_export, _context) {
    "use strict";

    var extend, app, PermissionGrid;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumComponentsPermissionGrid) {
            PermissionGrid = _flarumComponentsPermissionGrid.default;
        }],
        execute: function () {

            app.initializers.add('flagrow-aqueduct', function (app) {
                // add the permission option to the relative pane.
                extend(PermissionGrid.prototype, 'viewItems', function (items) {
                    items.add('board-access', {
                        icon: 'trello',
                        label: app.translator.trans('flagrow-aqueduct.admin.permissions.board-access'),
                        permission: 'discussion.flagrow.aqueduct.board-access',
                        allowGuest: true
                    });
                });

                extend(PermissionGrid.prototype, 'moderateItems', function (items) {
                    // moderates boards.
                    items.add('board-admin', {
                        icon: 'trello',
                        label: app.translator.trans('flagrow-aqueduct.admin.permissions.board-admin'),
                        permission: 'discussion.flagrow.aqueduct.board-admin'
                    });
                });

                extend(PermissionGrid.prototype, 'createItems', function (items) {
                    // participation on boards.
                    items.add('board-user', {
                        icon: 'trello',
                        label: app.translator.trans('flagrow-aqueduct.admin.permissions.board-user'),
                        permission: 'discussion.flagrow.aqueduct.board-user'
                    });
                });
            });
        }
    };
});