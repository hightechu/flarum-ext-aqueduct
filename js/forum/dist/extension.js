'use strict';

System.register('flagrow/aqueduct/addsBoardToDiscussion', ['flarum/extend', 'flarum/utils/DiscussionControls', 'flarum/components/Button'], function (_export, _context) {
    "use strict";

    var extend, DiscussionControls, Button;

    _export('default', function () {
        // Add a control allowing direct visiting of the board.
        extend(DiscussionControls, 'moderationControls', function (items, discussion) {
            var tags = discussion.tags().filter(function (tag) {
                return tag.position() !== null && !tag.isChild();
            });

            tags.forEach(function (tag) {
                items.add('board-' + tag.slug(), Button.component({
                    children: app.translator.trans('flagrow-aqueduct.forum.discussion.buttons.show-board', { tag: tag.name() }),
                    icon: 'trello',
                    href: app.route('flagrow.aqueduct.board', { tag: tag.slug() })
                }));
            });
        });
    });

    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumUtilsDiscussionControls) {
            DiscussionControls = _flarumUtilsDiscussionControls.default;
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton.default;
        }],
        execute: function () {}
    };
});;
'use strict';

System.register('flagrow/aqueduct/main', ['flarum/extend', 'flagrow/aqueduct/routes', 'flagrow/aqueduct/addsBoardToDiscussion', 'flarum/Model', 'flarum/tags/models/Tag'], function (_export, _context) {
    "use strict";

    var extend, routes, addsBoardToDiscussion, Model, Tag;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flagrowAqueductRoutes) {
            routes = _flagrowAqueductRoutes.default;
        }, function (_flagrowAqueductAddsBoardToDiscussion) {
            addsBoardToDiscussion = _flagrowAqueductAddsBoardToDiscussion.default;
        }, function (_flarumModel) {
            Model = _flarumModel.default;
        }, function (_flarumTagsModelsTag) {
            Tag = _flarumTagsModelsTag.default;
        }],
        execute: function () {

            app.initializers.add('flagrow-aqueduct', function (app) {
                Tag.prototype.canManageBoard = Model.attribute('canManageBoard');

                routes(app);

                addsBoardToDiscussion();
            });
        }
    };
});;
"use strict";

System.register("flagrow/aqueduct/pages/Board", ["flarum/extend", "flarum/components/Page", "flarum/helpers/icon", "flarum/helpers/avatar", "flarum/components/SplitDropdown", "flarum/components/Button", "flarum/utils/ItemList", "flagrow/aqueduct/modals/AddColumnModal"], function (_export, _context) {
    "use strict";

    var extend, Page, icon, avatar, SplitDropdown, Button, ItemList, AddColumnModal, Board;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsPage) {
            Page = _flarumComponentsPage.default;
        }, function (_flarumHelpersIcon) {
            icon = _flarumHelpersIcon.default;
        }, function (_flarumHelpersAvatar) {
            avatar = _flarumHelpersAvatar.default;
        }, function (_flarumComponentsSplitDropdown) {
            SplitDropdown = _flarumComponentsSplitDropdown.default;
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton.default;
        }, function (_flarumUtilsItemList) {
            ItemList = _flarumUtilsItemList.default;
        }, function (_flagrowAqueductModalsAddColumnModal) {
            AddColumnModal = _flagrowAqueductModalsAddColumnModal.default;
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
                            className: 'Board--Controls'
                        }, [SplitDropdown.component({
                            children: this.controls().toArray(),
                            icon: 'ellipsis-v',
                            className: 'App-primaryControl',
                            buttonClassName: 'Button--primary'
                        })]), m('div', {
                            className: 'Board--List'
                        }, this.tags.map(function (tag) {
                            return _this2.column(tag);
                        }))]);
                    }
                }, {
                    key: "controls",
                    value: function controls() {
                        var items = new ItemList();
                        var tag = this.tag;

                        if (tag.canManageBoard()) {
                            items.add('add-column', Button.component({
                                icon: 'gear',
                                children: app.translator.trans('flagrow-aqueduct.forum.board.buttons.add-column'),
                                onclick: function onclick() {
                                    return app.modal.show(new AddColumnModal({ tag: tag }));
                                }
                            }));
                        }

                        return items;
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
                        }, this.loading || this.discussions[tag.slug()].length == 0 ? '' : m('ul', this.discussions[tag.slug()].map(function (discussion) {
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
});;
'use strict';

System.register('flagrow/aqueduct/modals/AddColumnModal', ['flarum/components/Modal', 'flarum/components/Button', 'flarum/tags/helpers/tagLabel', 'flarum/tags/helpers/tagIcon', 'flarum/helpers/highlight', 'flarum/utils/classList'], function (_export, _context) {
  "use strict";

  var Modal, Button, tagLabel, tagIcon, highlight, classList, AddColumnModal;
  return {
    setters: [function (_flarumComponentsModal) {
      Modal = _flarumComponentsModal.default;
    }, function (_flarumComponentsButton) {
      Button = _flarumComponentsButton.default;
    }, function (_flarumTagsHelpersTagLabel) {
      tagLabel = _flarumTagsHelpersTagLabel.default;
    }, function (_flarumTagsHelpersTagIcon) {
      tagIcon = _flarumTagsHelpersTagIcon.default;
    }, function (_flarumHelpersHighlight) {
      highlight = _flarumHelpersHighlight.default;
    }, function (_flarumUtilsClassList) {
      classList = _flarumUtilsClassList.default;
    }],
    execute: function () {
      AddColumnModal = function (_Modal) {
        babelHelpers.inherits(AddColumnModal, _Modal);

        function AddColumnModal() {
          babelHelpers.classCallCheck(this, AddColumnModal);
          return babelHelpers.possibleConstructorReturn(this, (AddColumnModal.__proto__ || Object.getPrototypeOf(AddColumnModal)).apply(this, arguments));
        }

        babelHelpers.createClass(AddColumnModal, [{
          key: 'title',
          value: function title() {
            return app.translator.trans('flagrow-aqueduct.forum.board.modals.add-column.title');
          }
        }, {
          key: 'init',
          value: function init() {
            babelHelpers.get(AddColumnModal.prototype.__proto__ || Object.getPrototypeOf(AddColumnModal.prototype), 'init', this).call(this);

            this.tags = app.store.all('tags');
            this.for = this.props.tag;

            this.selected = m.prop('');
            this.filter = m.prop('');
            this.index = this.tags[0].id();
            this.focused = false;
          }
        }, {
          key: 'content',
          value: function content() {
            var _this2 = this;

            var tags = this.tags;
            var filter = this.filter().toLowerCase();

            tags = tags.filter(function (tag) {
              return tag.id() != _this2.for.id() && (tag.position() === null || tag.parent() && tag.parent().id() == _this2.for.id());
            });

            // If the user has entered text in the filter input, then filter by tags
            // whose name matches what they've entered.
            if (filter) {
              tags = tags.filter(function (tag) {
                return tag.name().substr(0, filter.length).toLowerCase() === filter;
              });
            }

            return [m(
              'div',
              { className: 'Modal-body' },
              m(
                'div',
                { className: 'TagDiscussionModal-form' },
                m(
                  'div',
                  { className: 'TagDiscussionModal-form-input' },
                  m(
                    'div',
                    { className: 'TagsInput FormControl ' + (this.focused ? 'focus' : '') },
                    m(
                      'span',
                      { className: 'TagsInput-selected' },
                      this.selected() ? m(
                        'span',
                        { className: 'TagsInput-tag', onclick: function onclick() {
                            _this2.selected('');
                            _this2.onready();
                          } },
                        tagLabel(this.selected())
                      ) : ''
                    ),
                    m('input', { className: 'FormControl',
                      value: this.filter(),
                      oninput: m.withAttr('value', this.filter),
                      onfocus: function onfocus() {
                        return _this2.focused = true;
                      },
                      onblur: function onblur() {
                        return _this2.focused = false;
                      } })
                  )
                ),
                m(
                  'div',
                  { className: 'TagDiscussionModal-form-submit App-primaryControl' },
                  Button.component({
                    type: 'submit',
                    className: 'Button Button--primary',
                    disabled: !this.selected(),
                    icon: 'check',
                    children: app.translator.trans('flarum-tags.forum.choose_tags.submit_button')
                  })
                )
              )
            ), m(
              'div',
              { className: 'Modal-footer' },
              m(
                'ul',
                { className: 'TagDiscussionModal-list SelectTagList' },
                tags.filter(function (tag) {
                  return filter || !tag.parent() || _this2.selected().id == tag.id();
                }).map(function (tag) {
                  return m(
                    'li',
                    { 'data-index': tag.id(),
                      className: classList({
                        pinned: tag.position() !== null,
                        child: !!tag.parent(),
                        colored: !!tag.color(),
                        selected: _this2.selected() && _this2.selected().id == tag.id(),
                        active: _this2.index === tag
                      }),
                      style: { color: tag.color() },
                      onmouseover: function onmouseover() {
                        return _this2.index = tag;
                      },
                      onclick: function onclick() {
                        return _this2.selected(tag);
                      }
                    },
                    tagIcon(tag),
                    m(
                      'span',
                      { className: 'SelectTagListItem-name' },
                      highlight(tag.name(), filter)
                    ),
                    tag.description() ? m(
                      'span',
                      { className: 'SelectTagListItem-description' },
                      tag.description()
                    ) : ''
                  );
                })
              )
            )];
          }
        }, {
          key: 'className',
          value: function className() {
            return 'AddColumnModal';
          }
        }]);
        return AddColumnModal;
      }(Modal);

      _export('default', AddColumnModal);
    }
  };
});