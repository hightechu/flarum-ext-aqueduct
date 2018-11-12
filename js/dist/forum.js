module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/addsBoardToDiscussion.js":
/*!********************************************!*\
  !*** ./src/forum/addsBoardToDiscussion.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionPage */ "flarum/components/DiscussionPage");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/SplitDropdown */ "flarum/components/SplitDropdown");
/* harmony import */ var flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/DiscussionHero */ "flarum/components/DiscussionHero");
/* harmony import */ var flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _labels_assigneesLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./labels/assigneesLabel */ "./src/forum/labels/assigneesLabel.js");
/* harmony import */ var _modals_AddAssigneeModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/AddAssigneeModal */ "./src/forum/modals/AddAssigneeModal.js");










/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Add a control allowing direct visiting of the board.
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'sidebarItems', function (items) {
    var discussion = this.discussion;
    var tags = discussion.tags().filter(function (tag) {
      return tag.position() !== null && !tag.isChild();
    });
    var controls = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a();
    tags.forEach(function (tag) {
      controls.add('board-' + tag.slug(), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
        children: app.translator.trans('flagrow-aqueduct.forum.discussion.buttons.show-board', {
          tag: tag.name()
        }),
        icon: 'trello',
        onclick: function onclick() {
          return m.route(app.route('flagrow.aqueduct.board', {
            tag: tag.slug()
          }));
        }
      }));
    });

    if (tags.length > 0) {
      if (discussion.canManageBoard()) {
        controls.add('assignee', flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
          children: app.translator.trans('flagrow-aqueduct.forum.discussion.buttons.set-assignees'),
          icon: 'user-circle-o',
          onclick: function onclick() {
            return app.modal.show(new _modals_AddAssigneeModal__WEBPACK_IMPORTED_MODULE_9__["default"]({
              discussion: discussion
            }));
          }
        }));
      }

      items.add('board', flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        children: controls.toArray(),
        icon: 'trello',
        className: 'App-primaryControl',
        buttonClassName: 'Button--secondary'
      }), -50);
    }
  });
  /**
   *
   * Adds User labels on the discussion Hero.
   */

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_7___default.a.prototype, 'items', function (items) {
    var discussion = this.props.discussion;
    var users = discussion.assignedUsers().map(function (user) {
      return flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default()(user);
    });
    var groups = discussion.assignedGroups().map(function (group) {
      return flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()(group.icon());
    });
    var assignees = users + groups;

    if (assignees.length > 0) {
      items.add('assignees', Object(_labels_assigneesLabel__WEBPACK_IMPORTED_MODULE_8__["default"])(assignees), 3);
    }
  });
});

/***/ }),

/***/ "./src/forum/components/Card.js":
/*!**************************************!*\
  !*** ./src/forum/components/Card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__);






var Card =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Card, _Component);

  function Card() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Card.prototype;

  _proto.init = function init() {
    this.discussion = this.props.discussion;
    this.isUnread = this.discussion.isUnread();
  };

  _proto.view = function view() {
    var jumpTo = Math.min(this.discussion.lastPostNumber(), (this.discussion.readNumber() || 0) + 1);
    return m('li', {
      className: 'Card' + (this.isUnread ? ' Unread' : ''),
      discussion: this.discussion.id()
    }, m('div', {
      className: 'Card--Handle'
    }, [m('div', {
      className: 'Card--Header'
    }, [// Issue title.
    m('div', {
      className: 'Card--Title'
    }, m("a", {
      href: app.route.discussion(this.discussion, jumpTo),
      config: m.route
    }, this.discussion.title()))]), m('div', {
      className: 'Card--Footer'
    }, this.footerControls().toArray())]));
  };

  _proto.footerControls = function footerControls() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();
    var startUser = this.discussion.startUser();
    items.add('startUser', m("a", {
      href: startUser ? app.route.user(startUser) : '#',
      className: "Card--Author",
      config: function config(element) {
        $(element).tooltip({
          placement: 'right'
        });
        m.route.apply(this, arguments);
      }
    }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default()(startUser, {
      title: ''
    })));
    items.add('count', m('div', {
      className: 'Card--Replies-Count'
    }, [flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()(this.isUnread ? 'commenting-o' : 'comment-o'), this.discussion[this.isUnread ? 'unreadCount' : 'repliesCount']()]));
    return items;
  };

  return Card;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./src/forum/routes.js");
/* harmony import */ var _addsBoardToDiscussion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addsBoardToDiscussion */ "./src/forum/addsBoardToDiscussion.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/tags/models/Tag */ "flarum/tags/models/Tag");
/* harmony import */ var flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/models/Discussion */ "flarum/models/Discussion");
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_5__);






app.initializers.add('flagrow-aqueduct', function (app) {
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.canManageBoard = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.attribute('canManageBoard');
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.canUseBoard = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.attribute('canUseBoard');
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.columns = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.hasMany('columns');
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.boardSort = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.attribute('boardSort') || null;
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.boardMaxItems = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.attribute('boardMaxItems') || null;
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.canViewBoard = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.hasMany('canViewBoard');
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.canUseBoard = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.hasMany('canUseBoard');
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.canManageBoard = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.attribute('canManageBoard');
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.assignedUsers = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.hasMany('assignedUsers');
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.assignedGroups = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.hasMany('assignedGroups');
  Object(_routes__WEBPACK_IMPORTED_MODULE_1__["default"])(app);
  Object(_addsBoardToDiscussion__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/forum/labels/assigneeLabel.js":
/*!*******************************************!*\
  !*** ./src/forum/labels/assigneeLabel.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assigneeLabel; });
/* harmony import */ var flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/utils/extract */ "flarum/utils/extract");
/* harmony import */ var flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_models_Group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/models/Group */ "flarum/models/Group");
/* harmony import */ var flarum_models_Group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Group__WEBPACK_IMPORTED_MODULE_3__);




function assigneeLabel(recipient, attrs) {
  if (attrs === void 0) {
    attrs = {};
  }

  attrs.style = attrs.style || {};
  attrs.className = 'RecipientLabel ' + (attrs.className || '');
  var link = flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0___default()(attrs, 'link');
  var label;

  if (recipient instanceof flarum_models_User__WEBPACK_IMPORTED_MODULE_2___default.a) {
    label = flarum_helpers_username__WEBPACK_IMPORTED_MODULE_1___default()(recipient);

    if (link) {
      attrs.title = recipient.username() || '';
      attrs.href = app.route.user(recipient);
      attrs.config = m.route;
    }
  } else if (recipient instanceof flarum_models_Group__WEBPACK_IMPORTED_MODULE_3___default.a) {
    label = recipient.namePlural();
  }

  return m(link ? 'a' : 'span', attrs, m("span", {
    className: "RecipientLabel-text"
  }, label));
}

/***/ }),

/***/ "./src/forum/labels/assigneesLabel.js":
/*!********************************************!*\
  !*** ./src/forum/labels/assigneesLabel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assigneesLabel; });
/* harmony import */ var flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/utils/extract */ "flarum/utils/extract");
/* harmony import */ var flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assigneeLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assigneeLabel */ "./src/forum/labels/assigneeLabel.js");


function assigneesLabel(assignees, attrs) {
  if (attrs === void 0) {
    attrs = {};
  }

  var children = [];
  var link = flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0___default()(attrs, 'link');
  attrs.className = 'AssigneesLabel ' + (attrs.className || '');

  if (assignees) {
    assignees.forEach(function (assignee) {
      children.push(Object(_assigneeLabel__WEBPACK_IMPORTED_MODULE_1__["default"])(assignee, {
        link: link
      }));
    });
  } else {
    children.push(Object(_assigneeLabel__WEBPACK_IMPORTED_MODULE_1__["default"])());
  }

  return m("span", attrs, children);
}

/***/ }),

/***/ "./src/forum/modals/AddAssigneeModal.js":
/*!**********************************************!*\
  !*** ./src/forum/modals/AddAssigneeModal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddAssigneeModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/DiscussionPage */ "flarum/components/DiscussionPage");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _search_MultiSelectionInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/MultiSelectionInput */ "./src/forum/search/MultiSelectionInput.js");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_models_Group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/models/Group */ "flarum/models/Group");
/* harmony import */ var flarum_models_Group__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Group__WEBPACK_IMPORTED_MODULE_7__);









var AddAssigneeModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AddAssigneeModal, _Modal);

  function AddAssigneeModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = AddAssigneeModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.selected = m.prop(new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a());

    if (this.props.discussion) {
      // Adds recipients of the currently viewed discussion.
      this.assignInitialRecipients(this.props.discussion);
    } else if (this.props.assignees) {
      // Adds previously selected recipients.
      this.selected().merge(this.props.assignees);
    }

    this.recipientSearch = _search_MultiSelectionInput__WEBPACK_IMPORTED_MODULE_5__["default"].component({
      selected: this.selected,
      discussion: this.props.discussion
    });
  };

  _proto.assignInitialRecipients = function assignInitialRecipients(discussion) {
    var _this = this;

    discussion.assignedUsers().map(function (user) {
      _this.selected().add("users:" + user.id(), user);
    });
    discussion.assignedGroups().map(function (group) {
      _this.selected().add("groups:" + group.id(), group);
    });
  };

  _proto.className = function className() {
    return 'AddAssigneeModal';
  };

  _proto.title = function title() {
    return this.props.discussion ? app.translator.trans('flagrow-aqueduct.forum.modal.titles.update_recipients', {
      title: m("em", null, this.props.discussion.title())
    }) : app.translator.trans('flagrow-aqueduct.forum.modal.titles.add_recipients');
  };

  _proto.content = function content() {
    return [m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "AddAssigneeModal-form"
    }, this.recipientSearch, m("div", {
      className: "AddAssigneeModal-form-submit App-primaryControl"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      type: 'submit',
      className: 'Button Button--primary',
      disabled: false,
      icon: 'check',
      children: app.translator.trans('flagrow-aqueduct.forum.buttons.submit')
    }))))];
  };

  _proto.select = function select(e) {
    // Ctrl + Enter submits the selection, just Enter completes the current entry
    if (e.metaKey || e.ctrlKey || this.selected.indexOf(this.index) !== -1) {
      if (this.selected().length) {
        this.$('form').submit();
      }
    }
  };

  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    var discussion = this.props.discussion;
    var recipients = this.selected();
    var recipientGroups = [];
    var recipientUsers = [];
    recipients.toArray().forEach(function (recipient) {
      if (recipient instanceof flarum_models_User__WEBPACK_IMPORTED_MODULE_6___default.a) {
        recipientUsers.push(recipient);
      }

      if (recipient instanceof flarum_models_Group__WEBPACK_IMPORTED_MODULE_7___default.a) {
        recipientGroups.push(recipient);
      }
    });

    if (discussion) {
      discussion.save({
        relationships: {
          recipientUsers: recipientUsers,
          recipientGroups: recipientGroups
        }
      }).then(function () {
        if (app.current instanceof flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default.a) {
          app.current.stream.update();
        }

        m.redraw();
      });
    }

    if (this.props.onsubmit) this.props.onsubmit(recipients, recipientUsers, recipientGroups);
    app.modal.close();
    m.redraw.strategy('none');
  };

  return AddAssigneeModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/modals/AddColumnModal.js":
/*!********************************************!*\
  !*** ./src/forum/modals/AddColumnModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddColumnModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_tags_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/tags/helpers/tagLabel */ "flarum/tags/helpers/tagLabel");
/* harmony import */ var flarum_tags_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_tags_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/tags/helpers/tagIcon */ "flarum/tags/helpers/tagIcon");
/* harmony import */ var flarum_tags_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/highlight */ "flarum/helpers/highlight");
/* harmony import */ var flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_classList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/classList */ "flarum/utils/classList");
/* harmony import */ var flarum_utils_classList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_classList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_6__);








var AddColumnModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AddColumnModal, _Modal);

  function AddColumnModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = AddColumnModal.prototype;

  _proto.title = function title() {
    return app.translator.trans('flagrow-aqueduct.forum.board.modals.add-column.title');
  };

  _proto.init = function init() {
    var _this = this;

    _Modal.prototype.init.call(this);

    this.for = this.props.tag;
    this.tags = app.store.all('tags').filter(function (tag) {
      return _this.for.columns().indexOf(tag) == -1;
    });
    this.selected = m.prop('');
    this.filter = m.prop('');
    this.index = this.tags[0].id();
    this.focused = false;
  };

  _proto.content = function content() {
    var _this2 = this;

    var tags = this.tags;
    var filter = this.filter().toLowerCase();
    tags = tags.filter(function (tag) {
      return tag.id() != _this2.for.id() && (tag.position() === null || tag.parent() && tag.parent().id() == _this2.for.id());
    }); // If the user has entered text in the filter input, then filter by tags
    // whose name matches what they've entered.

    if (filter) {
      tags = tags.filter(function (tag) {
        return tag.name().substr(0, filter.length).toLowerCase() === filter;
      });
    }

    return [m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "TagDiscussionModal-form"
    }, m("div", {
      className: "TagDiscussionModal-form-input"
    }, m("div", {
      className: 'TagsInput FormControl ' + (this.focused ? 'focus' : '')
    }, m("span", {
      className: "TagsInput-selected"
    }, this.selected() ? m("span", {
      className: "TagsInput-tag",
      onclick: function onclick() {
        _this2.selected('');

        _this2.onready();
      }
    }, flarum_tags_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_2___default()(this.selected())) : ''), m("input", {
      className: "FormControl",
      value: this.filter(),
      oninput: m.withAttr('value', this.filter),
      onfocus: function onfocus() {
        return _this2.focused = true;
      },
      onblur: function onblur() {
        return _this2.focused = false;
      }
    }))), m("div", {
      className: "TagDiscussionModal-form-submit App-primaryControl"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      type: 'submit',
      className: 'Button Button--primary',
      disabled: !this.selected(),
      icon: 'check',
      children: app.translator.trans('flarum-tags.forum.choose_tags.submit_button')
    })))), m("div", {
      className: "Modal-footer"
    }, m("ul", {
      className: "TagDiscussionModal-list SelectTagList"
    }, tags.filter(function (tag) {
      return filter || !tag.parent() || _this2.selected().id == tag.id();
    }).map(function (tag) {
      return m("li", {
        "data-index": tag.id(),
        className: flarum_utils_classList__WEBPACK_IMPORTED_MODULE_5___default()({
          pinned: tag.position() !== null,
          child: !!tag.parent(),
          colored: !!tag.color(),
          selected: _this2.selected() && _this2.selected().id == tag.id(),
          active: _this2.index === tag
        }),
        style: {
          color: tag.color()
        },
        onmouseover: function onmouseover() {
          return _this2.index = tag;
        },
        onclick: function onclick() {
          return _this2.selected(tag);
        }
      }, flarum_tags_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_3___default()(tag), m("span", {
        className: "SelectTagListItem-name"
      }, flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_4___default()(tag.name(), filter)), tag.description() ? m("span", {
        className: "SelectTagListItem-description"
      }, tag.description()) : '');
    })))];
  };

  _proto.className = function className() {
    return 'AddColumnModal';
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this3 = this;

    e.preventDefault();
    var board = this.for;
    var column = this.selected();
    app.request({
      method: 'POST',
      url: app.forum.attribute('apiUrl') + '/board/' + board.slug() + '/columns/' + column.slug()
    }).then(function (results) {
      var tag = app.store.pushPayload(results);
      if (_this3.props.onsubmit) _this3.props.onsubmit(tag);
      app.modal.close();
      m.redraw.strategy('none');
    });
  };

  return AddColumnModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/pages/Board.js":
/*!**********************************!*\
  !*** ./src/forum/pages/Board.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/SplitDropdown */ "flarum/components/SplitDropdown");
/* harmony import */ var flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modals_AddColumnModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/AddColumnModal */ "./src/forum/modals/AddColumnModal.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Card */ "./src/forum/components/Card.js");










var Board =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Board, _Page);

  function Board() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = Board.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);

    this.bodyClass = 'Aqueduct--Board';
    this.draggable = 'cards';
    this.dragging = null;
    this.refresh(true);
  };

  _proto.config = function config(isInitialized, context) {
    _Page.prototype.config.apply(this, arguments);

    if (isInitialized) return;
    app.setTitle('');
    app.setTitleCount(0);

    if (this.tag.canManageBoard()) {
      this.setDraggable();
    }
  };

  _proto.view = function view() {
    var _this = this;

    return m('div', {
      className: 'Board'
    }, [m('div', {
      className: 'Board--Controls'
    }, m('div', {
      className: 'container'
    }, [flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      children: this.controls().toArray(),
      icon: 'ellipsis-v',
      className: 'App-primaryControl',
      buttonClassName: 'Button--primary'
    })])), m('div', {
      className: 'Board--List'
    }, this.tags.map(function (tag) {
      return _this.column(tag);
    }))]);
  };

  _proto.controls = function controls() {
    var _this2 = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default.a();
    var tag = this.tag;

    if (tag.canManageBoard()) {
      items.add('add-column', flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
        icon: 'gear',
        children: app.translator.trans('flagrow-aqueduct.forum.board.buttons.add-column'),
        onclick: function onclick() {
          return app.modal.show(new _modals_AddColumnModal__WEBPACK_IMPORTED_MODULE_7__["default"]({
            tag: tag,
            onsubmit: function onsubmit(tag) {
              _this2.refresh(true);
            }
          }));
        }
      }));
    }

    return items;
  };

  _proto.column = function column(tag) {
    return m('div', {
      className: 'Board--Column ' + tag.name(),
      slug: tag.slug()
    }, [m('div', {
      className: 'Board--Inner'
    }, [m('header', {
      className: 'Board--Header' + (tag.color() ? ' colored' : ''),
      style: tag.color() ? 'border-top-color: ' + tag.color() + ';' : ''
    }, m('h4', [tag.name(), m('span', tag.description())])), m('div', {
      className: 'Board--Item-List'
    }, this.loading || this.discussions[tag.slug()].length == 0 ? '' : m('ul', this.discussions[tag.slug()].map(function (discussion) {
      return _components_Card__WEBPACK_IMPORTED_MODULE_8__["default"].component({
        discussion: discussion
      });
    })))])]);
  };
  /**
   * Clear and reload the discussion list.
   *
   * @public
   */


  _proto.refresh = function refresh(clear) {
    var _this3 = this;

    if (clear === void 0) {
      clear = true;
    }

    if (clear) {
      this.loading = true; // The primary tag for which we will show the board.

      this.tag = app.store.getBy('tags', 'slug', m.route.param('tag'));
      /**
       * The discussions in the discussion list.
       *
       * @type {Discussion[]}
       */

      this.discussions = {};
      this.tags = this.tag.columns() || [];
    }

    this.tags.sort(function (a, b) {
      return a.boardSort() - b.boardSort();
    });
    this.load().then(function (results) {
      app.store.pushPayload(results);
      _this3.discussions = {};

      _this3.parseResults(results.data);

      _this3.setDraggable();
    }, function () {
      _this3.loading = false;
      m.redraw();

      _this3.setDraggable();
    });
  };
  /**
   * Parse results and append them to the discussion list.
   *
   * @param {Discussion[]} results
   * @return {Discussion[]}
   */


  _proto.parseResults = function parseResults(results) {
    var _this4 = this;

    this.tags.forEach(function (tag) {
      _this4.discussions[tag.slug()] = [];
      results.forEach(function (discussion) {
        discussion = app.store.getById(discussion.type, discussion.id);

        if (discussion.tags().map(function (tag) {
          return tag.id();
        }).indexOf(tag.id()) != -1) {
          _this4.discussions[tag.slug()].push(discussion);
        }
      });
    });
    this.loading = false;
    m.lazyRedraw();
    return results;
  };
  /**
   * Load discussions based on the tags.
   */


  _proto.load = function load() {
    return app.request({
      method: 'get',
      url: app.forum.attribute('apiUrl') + '/board/' + this.tag.slug()
    });
  };
  /**
   * Listens to dragging event and updates the sorting of the columns.
   */


  _proto.setDraggable = function setDraggable() {
    var _this5 = this;

    if (this.draggable == 'cards' && this.dragging) {
      sortable('.Board--Item-List');
    } else if (this.draggable == 'cards') {
      sortable('.Board--Item-List', {
        // connectWith: 'Board--Connected--Cards',
        items: '.Card',
        handle: '.Card--Handle',
        placeholder: '<div class="Card Placeholder"></div>',
        forcePlaceholderSize: true
      })[0].addEventListener('sortupdate', function (e) {});
    }

    if (this.draggable == 'columns' && this.dragging) {
      sortable('.Board--List');
    } else if (this.draggable == 'columns') {
      sortable('.Board--List', {
        items: '.Board--Column',
        handle: '.Board--Header',
        placeholder: '<div class="Board--Column Placeholder"></div>',
        forcePlaceholderSize: true
      })[0].addEventListener('sortupdate', function (e) {
        var sorting = $(e.target).find('.Board--Column').map(function () {
          return $(this).attr('slug');
        }).get();

        _this5.updateColumnSorting(sorting);
      });
    }

    this.dragging = true;
  };

  _proto.updateColumnSorting = function updateColumnSorting(sorting) {
    var _this6 = this;

    return app.request({
      method: 'post',
      url: app.forum.attribute('apiUrl') + '/board/' + this.tag.slug() + '/sorting',
      data: sorting
    }).then(function (results) {
      app.store.pushPayload(results);
      m.redraw();

      _this6.setDraggable();
    });
  };

  return Board;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/routes.js":
/*!*****************************!*\
  !*** ./src/forum/routes.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Board */ "./src/forum/pages/Board.js");

/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  app.routes['flagrow.aqueduct.board'] = {
    path: '/board/:tag',
    component: _pages_Board__WEBPACK_IMPORTED_MODULE_0__["default"].component()
  };
});

/***/ }),

/***/ "./src/forum/search/MultiSelectionInput.js":
/*!*************************************************!*\
  !*** ./src/forum/search/MultiSelectionInput.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiSelectionInput; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Search */ "flarum/components/Search");
/* harmony import */ var flarum_components_Search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sources_UserSearchSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sources/UserSearchSource */ "./src/forum/search/sources/UserSearchSource.js");
/* harmony import */ var _sources_GroupSearchSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sources/GroupSearchSource */ "./src/forum/search/sources/GroupSearchSource.js");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_classList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/classList */ "flarum/utils/classList");
/* harmony import */ var flarum_utils_classList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_classList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/utils/extractText */ "flarum/utils/extractText");
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_models_Group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/models/Group */ "flarum/models/Group");
/* harmony import */ var flarum_models_Group__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Group__WEBPACK_IMPORTED_MODULE_9__);











var MultiSelectionInput =
/*#__PURE__*/
function (_Search) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MultiSelectionInput, _Search);

  function MultiSelectionInput() {
    return _Search.apply(this, arguments) || this;
  }

  var _proto = MultiSelectionInput.prototype;

  _proto.config = function config(isInitialized) {
    var _this = this;

    if (isInitialized) return;
    var $search = this;
    this.$('.Search-results').on('click', function (e) {
      var target = _this.$('.SearchResult.active');

      $search.addSelection(target.data('index'));
      $search.$('.MultiSelectionInput').focus();
    });
    this.$('.Search-results').on('touchstart', function (e) {
      var target = _this.$(e.target.parentNode);

      $search.addSelection(target.data('index'));
      $search.$('.MultiSelectionInput').focus();
    });

    _Search.prototype.config.call(this, isInitialized);
  };

  _proto.generateLabel = function generateLabel(selection, attrs) {// ..

    if (attrs === void 0) {
      attrs = {};
    }
  };

  _proto.view = function view() {
    var _this2 = this;

    if (typeof this.value() === 'undefined') {
      this.value('');
    }

    return m('div', {
      className: 'addSelectionModal-form-input'
    }, [m('div', {
      className: 'MultiSelectionInput-selected RecipientsLabel'
    }, this.props.selected().toArray().map(function (selection) {
      return _this2.generateLabel(selection, {
        onclick: function onclick() {
          _this2.removeSelection(selection);
        }
      });
    })), m('input', {
      className: 'MultiSelectionInput FormControl ' + flarum_utils_classList__WEBPACK_IMPORTED_MODULE_5___default()({
        open: !!this.value(),
        focused: !!this.value(),
        active: !!this.value(),
        loading: !!this.loadingSources
      }),
      config: function config(element) {
        element.focus();
      },
      type: 'search',
      placeholder: flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(app.translator.trans('flagrow-aqueduct.forum.input.search_recipients')),
      value: this.value(),
      oninput: m.withAttr('value', this.value),
      onfocus: function onfocus() {
        return _this2.hasFocus = true;
      },
      onblur: function onblur() {
        return _this2.hasFocus = false;
      }
    }), m('ul', {
      className: 'Dropdown-menu Search-results'
    }, this.value() && this.value().length >= 3 ? this.sources.map(function (source) {
      return source.view(_this2.value());
    }) : flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7___default.a.component({
      size: 'tiny',
      className: 'Button Button--icon Button--link'
    }))]);
  };
  /**
   * Build an item list of SearchSources.
   *
   * @return {ItemList}
   */


  _proto.sourceItems = function sourceItems() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a(); // Add user source based on permissions.

    items.add('users', new _sources_UserSearchSource__WEBPACK_IMPORTED_MODULE_2__["default"]()); // Add group source based on permissions.

    items.add('groups', new _sources_GroupSearchSource__WEBPACK_IMPORTED_MODULE_3__["default"]());
    return items;
  };
  /**
   * Clear the search input and the current controller's active search.
   */


  _proto.clear = function clear() {
    this.value('');
    m.redraw();
  };
  /**
   * Adds a recipient.
   *
   * @param value
   */


  _proto.addSelection = function addSelection(value) {
    var values = value.split(':'),
        type = values[0],
        id = values[1];
    var recipient = this.findRecipient(type, id);
    this.props.selected().add(value, recipient);
    this.clear();
  };
  /**
   * Removes a recipient.
   *
   * @param recipient
   */


  _proto.removeSelection = function removeSelection(recipient) {
    var type;

    if (recipient instanceof flarum_models_User__WEBPACK_IMPORTED_MODULE_8___default.a) {
      type = 'users';
    }

    if (recipient instanceof flarum_models_Group__WEBPACK_IMPORTED_MODULE_9___default.a) {
      type = 'groups';
    }

    this.props.selected().remove(type + ":" + recipient.id());
    m.redraw();
  };
  /**
   * Loads a recipient from the global store.
   *
   * @param store
   * @param id
   * @returns {Model}
   */


  _proto.findRecipient = function findRecipient(store, id) {
    return app.store.getById(store, id);
  };

  return MultiSelectionInput;
}(flarum_components_Search__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/search/sources/GroupSearchSource.js":
/*!*******************************************************!*\
  !*** ./src/forum/search/sources/GroupSearchSource.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupSearchSource; });
/* harmony import */ var flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/helpers/highlight */ "flarum/helpers/highlight");
/* harmony import */ var flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_0__);


var GroupSearchSource =
/*#__PURE__*/
function () {
  function GroupSearchSource() {}

  var _proto = GroupSearchSource.prototype;

  _proto.search = function search(query) {
    return app.store.find('groups', {
      filter: {
        q: query
      },
      page: {
        limit: 5
      }
    });
  };

  _proto.view = function view(query) {
    query = query.toLowerCase();
    var results = app.store.all('groups').filter(function (group) {
      return group.namePlural().toLowerCase().substr(0, query.length) === query;
    });
    if (!results.length) return '';
    return [m("li", {
      className: "Dropdown-header"
    }, app.translator.trans('flagrow-byobu.forum.search.headings.groups')), results.map(function (group) {
      var groupName = group.namePlural();
      var name = flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_0___default()(groupName, query);
      return m("li", {
        className: "SearchResult",
        "data-index": 'groups:' + group.id()
      }, m("a", {
        "data-index": 'groups:' + group.id()
      }, m("span", {
        class: "groupName"
      }, name)));
    })];
  };

  return GroupSearchSource;
}();



/***/ }),

/***/ "./src/forum/search/sources/UserSearchSource.js":
/*!******************************************************!*\
  !*** ./src/forum/search/sources/UserSearchSource.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserSearchSource; });
/* harmony import */ var flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/helpers/highlight */ "flarum/helpers/highlight");
/* harmony import */ var flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2__);




var UserSearchSource =
/*#__PURE__*/
function () {
  function UserSearchSource() {}

  var _proto = UserSearchSource.prototype;

  _proto.search = function search(query) {
    return app.store.find('users', {
      filter: {
        q: query
      },
      page: {
        limit: 5
      }
    });
  };

  _proto.view = function view(query) {
    query = query.toLowerCase();
    var results = app.store.all('users').filter(function (user) {
      return user.username().toLowerCase().substr(0, query.length) === query;
    });
    if (!results.length) return '';
    return [m("li", {
      className: "Dropdown-header"
    }, app.translator.trans('core.forum.search.users_heading')), results.map(function (user) {
      var name = flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2___default()(user);
      name.children[0] = flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_0___default()(name.children[0], query);
      return m("li", {
        className: "SearchResult",
        "data-index": 'users:' + user.id()
      }, m("a", {
        "data-index": 'users:' + user.id()
      }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_1___default()(user), name));
    })];
  };

  return UserSearchSource;
}();



/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/DiscussionHero":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionHero']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionHero'];

/***/ }),

/***/ "flarum/components/DiscussionPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionPage']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionPage'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/Search":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Search']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Search'];

/***/ }),

/***/ "flarum/components/SplitDropdown":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/SplitDropdown']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SplitDropdown'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/highlight":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/highlight']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/highlight'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/helpers/username":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/username']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/username'];

/***/ }),

/***/ "flarum/models/Discussion":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['models/Discussion']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/Discussion'];

/***/ }),

/***/ "flarum/models/Group":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['models/Group']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/Group'];

/***/ }),

/***/ "flarum/models/User":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/User']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/User'];

/***/ }),

/***/ "flarum/tags/helpers/tagIcon":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['tags/helpers/tagIcon']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/helpers/tagIcon'];

/***/ }),

/***/ "flarum/tags/helpers/tagLabel":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['tags/helpers/tagLabel']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/helpers/tagLabel'];

/***/ }),

/***/ "flarum/tags/models/Tag":
/*!********************************************************!*\
  !*** external "flarum.core.compat['tags/models/Tag']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/models/Tag'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/classList":
/*!********************************************************!*\
  !*** external "flarum.core.compat['utils/classList']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/classList'];

/***/ }),

/***/ "flarum/utils/extract":
/*!******************************************************!*\
  !*** external "flarum.core.compat['utils/extract']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/extract'];

/***/ }),

/***/ "flarum/utils/extractText":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['utils/extractText']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/extractText'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map