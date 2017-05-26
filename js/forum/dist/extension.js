'use strict';

System.register('flagrow/aqueduct/main', ['flarum/extend', 'flagrow/aqueduct/routes'], function (_export, _context) {
    "use strict";

    var extend, routes;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flagrowAqueductRoutes) {
            routes = _flagrowAqueductRoutes.default;
        }],
        execute: function () {

            app.initializers.add('flagrow-aqueduct', function (app) {
                routes(app);
            });
        }
    };
});;
"use strict";

System.register("flagrow/aqueduct/pages/Board", ["flarum/extend", "flarum/components/Page", "flarum/helpers/icon", "flarum/helpers/avatar"], function (_export, _context) {
    "use strict";

    var extend, Page, icon, avatar, Board;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsPage) {
            Page = _flarumComponentsPage.default;
        }, function (_flarumHelpersIcon) {
            icon = _flarumHelpersIcon.default;
        }, function (_flarumHelpersAvatar) {
            avatar = _flarumHelpersAvatar.default;
        }],
        execute: function () {
            Board = function (_Page) {
                babelHelpers.inherits(Board, _Page);

                function Board() {
                    babelHelpers.classCallCheck(this, Board);
                    return babelHelpers.possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
                }

                babelHelpers.createClass(Board, [{
                    key: "init",
                    value: function init() {
                        babelHelpers.get(Board.prototype.__proto__ || Object.getPrototypeOf(Board.prototype), "init", this).call(this);

                        this.loading = true;

                        // The primary tag for which we will show the board.
                        this.tag = app.store.getBy('tags', 'slug', m.route.param('tag'));

                        /**
                         * The discussions in the discussion list.
                         *
                         * @type {Discussion[]}
                         */
                        this.discussions = {};

                        // Todo make this a configured set of column tags.
                        this.tags = app.store.all('tags').filter(function (tag) {
                            return tag.position() === null;
                        });

                        this.bodyClass = 'Aqueduct--Board';

                        this.refresh();
                    }
                }, {
                    key: "config",
                    value: function config(isInitialized, context) {
                        babelHelpers.get(Board.prototype.__proto__ || Object.getPrototypeOf(Board.prototype), "config", this).apply(this, arguments);

                        if (isInitialized) return;

                        app.setTitle('');
                        app.setTitleCount(0);
                    }
                }, {
                    key: "view",
                    value: function view() {
                        var _this2 = this;

                        return m('div', {
                            className: 'Board'
                        }, [m('div', {
                            className: 'Board--List'
                        }, this.tags.map(function (tag) {
                            return _this2.column(tag);
                        }))]);
                    }
                }, {
                    key: "column",
                    value: function column(tag) {
                        var _this3 = this;

                        return m('div', {
                            className: 'Board--Column ' + tag.name()
                        }, [m('div', { className: 'Board--Inner' }, [m('header', {
                            className: 'Board--Header' + (tag.color() ? ' colored' : ''),
                            style: tag.color() ? 'border-top-color: ' + tag.color() + ';' : ''
                        }, m('h4', [tag.name(), m('span', tag.description())])), m('div', {
                            className: 'Board--List'
                        }, this.loading ? '' : m('ul', this.discussions[tag.slug()].map(function (discussion) {
                            return _this3.card(discussion);
                        })))])]);
                    }
                }, {
                    key: "card",
                    value: function card(discussion) {
                        var jumpTo = Math.min(discussion.lastPostNumber(), (discussion.readNumber() || 0) + 1);
                        var isUnread = discussion.isUnread();
                        var startUser = discussion.startUser();

                        return m('li', {
                            className: 'Card' + (isUnread ? ' Unread' : '')
                        }, m('div', [m('div', { className: 'Card--Header' }, [
                        // Issue title.
                        m('div', { className: 'Card--Title' }, m(
                            "a",
                            { href: app.route.discussion(discussion, jumpTo),
                                config: m.route },
                            discussion.title()
                        ))]), m('div', { className: 'Card--Footer' }, [m(
                            "a",
                            { href: startUser ? app.route.user(startUser) : '#',
                                className: "Card--Author",
                                config: function config(element) {
                                    $(element).tooltip({ placement: 'right' });
                                    m.route.apply(this, arguments);
                                } },
                            avatar(startUser, { title: '' })
                        ),
                        // Number of comments.
                        m('div', [icon(isUnread ? 'commenting-o' : 'comment-o'), discussion[isUnread ? 'unreadCount' : 'repliesCount']()])])]));
                    }
                }, {
                    key: "refresh",
                    value: function refresh() {
                        var _this4 = this;

                        var clear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                        if (clear) {
                            this.loading = true;
                            this.discussions = {};
                        }

                        this.load().then(function (results) {
                            app.store.pushPayload(results);

                            _this4.discussions = {};
                            _this4.parseResults(results.data);
                        }, function () {
                            _this4.loading = false;
                            m.redraw();
                        });
                    }
                }, {
                    key: "parseResults",
                    value: function parseResults(results) {
                        var _this5 = this;

                        this.tags.forEach(function (tag) {

                            _this5.discussions[tag.slug()] = [];

                            results.forEach(function (discussion) {
                                discussion = app.store.getById(discussion.type, discussion.id);

                                if (discussion.tags().map(function (tag) {
                                    return tag.id();
                                }).indexOf(tag.id()) > 0) {
                                    _this5.discussions[tag.slug()].push(discussion);
                                }
                            });
                        });

                        this.loading = false;

                        m.lazyRedraw();

                        return results;
                    }
                }, {
                    key: "load",
                    value: function load() {
                        var params = {};

                        return app.request({
                            method: 'get',
                            url: app.forum.attribute('apiUrl') + '/board/' + this.tag.slug()
                        });
                    }
                }]);
                return Board;
            }(Page);

            _export("default", Board);
        }
    };
});;
'use strict';

System.register('flagrow/aqueduct/routes', ['flagrow/aqueduct/pages/Board'], function (_export, _context) {
    "use strict";

    var Board;

    _export('default', function (app) {
        app.routes['flagrow.aqueduct.board'] = { path: '/board/:tag', component: Board.component() };
    });

    return {
        setters: [function (_flagrowAqueductPagesBoard) {
            Board = _flagrowAqueductPagesBoard.default;
        }],
        execute: function () {}
    };
});