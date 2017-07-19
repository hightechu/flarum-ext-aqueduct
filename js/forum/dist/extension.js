;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.sortable = factory();
  }
}(this, function() {
/*
 * HTML5 Sortable library
 * https://github.com/voidberg/html5sortable
 *
 * Original code copyright 2012 Ali Farhadi.
 * This version is mantained by Lukas Oppermann <lukas@vea.re>
 * Previously also mantained by Alexandru Badiu <andu@ctrlz.ro>
 * jQuery-independent implementation by Nazar Mokrynskyi <nazar@mokrynskyi.com>
 *
 * Released under the MIT license.
 */
'use strict'
/*
 * variables global to the plugin
 */
var dragging
var draggingHeight
var placeholders = []
var sortables = []
/**
 * Get or set data on element
 * @param {Element} element
 * @param {string} key
 * @param {*} value
 * @return {*}
 */
var _data = function (element, key, value) {
  if (value === undefined) {
    return element && element.h5s && element.h5s.data && element.h5s.data[key]
  } else {
    element.h5s = element.h5s || {}
    element.h5s.data = element.h5s.data || {}
    element.h5s.data[key] = value
  }
}
/**
 * Remove data from element
 * @param {Element} element
 */
var _removeData = function (element) {
  if (element.h5s) {
    delete element.h5s.data
  }
}
/**
 * Tests if an element matches a given selector. Comparable to jQuery's $(el).is('.my-class')
 * @param {el} DOM element
 * @param {selector} selector test against the element
 * @returns {boolean}
 */
/* istanbul ignore next */
var _matches = function (el, selector) {
  return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector)
}
/**
 * Filter only wanted nodes
 * @param {Array|NodeList} nodes
 * @param {Array/string} wanted
 * @returns {Array}
 */
var _filter = function (nodes, wanted) {
  if (!wanted) {
    return Array.prototype.slice.call(nodes)
  }
  var result = []
  for (var i = 0; i < nodes.length; ++i) {
    if (typeof wanted === 'string' && _matches(nodes[i], wanted)) {
      result.push(nodes[i])
    }
    if (wanted.indexOf(nodes[i]) !== -1) {
      result.push(nodes[i])
    }
  }
  return result
}
/**
 * @param {Array|Element} element
 * @param {Array|string} event
 * @param {Function} callback
 */
var _on = function (element, event, callback) {
  if (element instanceof Array) {
    for (var i = 0; i < element.length; ++i) {
      _on(element[i], event, callback)
    }
    return
  }
  element.addEventListener(event, callback)
  element.h5s = element.h5s || {}
  element.h5s.events = element.h5s.events || {}
  element.h5s.events[event] = callback
}
/**
 * @param {Array|Element} element
 * @param {Array|string} event
 */
var _off = function (element, event) {
  if (element instanceof Array) {
    for (var i = 0; i < element.length; ++i) {
      _off(element[i], event)
    }
    return
  }
  if (element.h5s && element.h5s.events && element.h5s.events[event]) {
    element.removeEventListener(event, element.h5s.events[event])
    delete element.h5s.events[event]
  }
}
/**
 * @param {Array|Element} element
 * @param {string} attribute
 * @param {*} value
 */
var _attr = function (element, attribute, value) {
  if (element instanceof Array) {
    for (var i = 0; i < element.length; ++i) {
      _attr(element[i], attribute, value)
    }
    return
  }
  element.setAttribute(attribute, value)
}
/**
 * @param {Array|Element} element
 * @param {string} attribute
 */
var _removeAttr = function (element, attribute) {
  if (element instanceof Array) {
    for (var i = 0; i < element.length; ++i) {
      _removeAttr(element[i], attribute)
    }
    return
  }
  element.removeAttribute(attribute)
}
/**
 * @param {Element} element
 * @returns {{left: *, top: *}}
 */
var _offset = function (element) {
  var rect = element.getClientRects()[0]
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  }
}
/*
 * remove event handlers from items
 * @param {Array|NodeList} items
 */
var _removeItemEvents = function (items) {
  _off(items, 'dragstart')
  _off(items, 'dragend')
  _off(items, 'selectstart')
  _off(items, 'dragover')
  _off(items, 'dragenter')
  _off(items, 'drop')
}
/*
 * Remove event handlers from sortable
 * @param {Element} sortable a single sortable
 */
var _removeSortableEvents = function (sortable) {
  _off(sortable, 'dragover')
  _off(sortable, 'dragenter')
  _off(sortable, 'drop')
}
/*
 * Attach ghost to dataTransfer object
 * @param {Event} original event
 * @param {object} ghost-object with item, x and y coordinates
 */
var _attachGhost = function (event, ghost) {
  // this needs to be set for HTML5 drag & drop to work
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('text', '')

  // check if setDragImage method is available
  if (event.dataTransfer.setDragImage) {
    event.dataTransfer.setDragImage(ghost.draggedItem, ghost.x, ghost.y)
  }
}
/**
 * _addGhostPos clones the dragged item and adds it as a Ghost item
 * @param {Event} event - the event fired when dragstart is triggered
 * @param {object} ghost - .draggedItem = Element
 */
var _addGhostPos = function (event, ghost) {
  if (!ghost.x) {
    ghost.x = parseInt(event.pageX - _offset(ghost.draggedItem).left)
  }
  if (!ghost.y) {
    ghost.y = parseInt(event.pageY - _offset(ghost.draggedItem).top)
  }
  return ghost
}
/**
 * _makeGhost decides which way to make a ghost and passes it to attachGhost
 * @param {Element} draggedItem - the item that the user drags
 */
var _makeGhost = function (draggedItem) {
  return {
    draggedItem: draggedItem
  }
}
/**
 * _getGhost constructs ghost and attaches it to dataTransfer
 * @param {Event} event - the original drag event object
 * @param {Element} draggedItem - the item that the user drags
 */
// TODO: could draggedItem be replaced by event.target in all instances
var _getGhost = function (event, draggedItem) {
  // add ghost item & draggedItem to ghost object
  var ghost = _makeGhost(draggedItem)
  // attach ghost position
  ghost = _addGhostPos(event, ghost)
  // attach ghost to dataTransfer
  _attachGhost(event, ghost)
}
/*
 * Remove data from sortable
 * @param {Element} sortable a single sortable
 */
var _removeSortableData = function (sortable) {
  _removeData(sortable)
  _removeAttr(sortable, 'aria-dropeffect')
}
/*
 * Remove data from items
 * @param {Array|Element} items
 */
var _removeItemData = function (items) {
  _removeAttr(items, 'aria-grabbed')
  _removeAttr(items, 'draggable')
  _removeAttr(items, 'role')
}
/*
 * Check if two lists are connected
 * @param {Element} curList
 * @param {Element} destList
 */
var _listsConnected = function (curList, destList) {
  if (curList === destList) {
    return true
  }
  if (_data(curList, 'connectWith') !== undefined) {
    return _data(curList, 'connectWith') === _data(destList, 'connectWith')
  }
  return false
}
/*
 * get handle or return item
 * @param {Array} items
 * @param {selector} handle
 */
var _getHandles = function (items, handle) {
  var result = []
  var handles
  if (!handle) {
    return items
  }
  for (var i = 0; i < items.length; ++i) {
    handles = items[i].querySelectorAll(handle)
    result = result.concat(Array.prototype.slice.call(handles))
  }
  return result
}
/*
 * Destroy the sortable
 * @param {Element} sortableElement a single sortable
 */
var _destroySortable = function (sortableElement) {
  var opts = _data(sortableElement, 'opts') || {}
  var items = _filter(_getChildren(sortableElement), opts.items)
  var handles = _getHandles(items, opts.handle)
  // remove event handlers & data from sortable
  _removeSortableEvents(sortableElement)
  _removeSortableData(sortableElement)
  // remove event handlers & data from items
  _off(handles, 'mousedown')
  _removeItemEvents(items)
  _removeItemData(items)
}
/*
 * Enable the sortable
 * @param {Element} sortableElement a single sortable
 */
var _enableSortable = function (sortableElement) {
  var opts = _data(sortableElement, 'opts')
  var items = _filter(_getChildren(sortableElement), opts.items)
  var handles = _getHandles(items, opts.handle)
  _attr(sortableElement, 'aria-dropeffect', 'move')
  _data(sortableElement, '_disabled', 'false')
  _attr(handles, 'draggable', 'true')
  // IE FIX for ghost
  // can be disabled as it has the side effect that other events
  // (e.g. click) will be ignored
  var spanEl = (document || window.document).createElement('span')
  if (typeof spanEl.dragDrop === 'function' && !opts.disableIEFix) {
    _on(handles, 'mousedown', function () {
      if (items.indexOf(this) !== -1) {
        this.dragDrop()
      } else {
        var parent = this.parentElement
        while (items.indexOf(parent) === -1) {
          parent = parent.parentElement
        }
        parent.dragDrop()
      }
    })
  }
}
/*
 * Disable the sortable
 * @param {Element} sortableElement a single sortable
 */
var _disableSortable = function (sortableElement) {
  var opts = _data(sortableElement, 'opts')
  var items = _filter(_getChildren(sortableElement), opts.items)
  var handles = _getHandles(items, opts.handle)
  _attr(sortableElement, 'aria-dropeffect', 'none')
  _data(sortableElement, '_disabled', 'true')
  _attr(handles, 'draggable', 'false')
  _off(handles, 'mousedown')
}
/*
 * Reload the sortable
 * @param {Element} sortableElement a single sortable
 * @description events need to be removed to not be double bound
 */
var _reloadSortable = function (sortableElement) {
  var opts = _data(sortableElement, 'opts')
  var items = _filter(_getChildren(sortableElement), opts.items)
  var handles = _getHandles(items, opts.handle)
  _data(sortableElement, '_disabled', 'false')
  // remove event handlers from items
  _removeItemEvents(items)
  _off(handles, 'mousedown')
  // remove event handlers from sortable
  _removeSortableEvents(sortableElement)
}
/**
 * Get position of the element relatively to its sibling elements
 * @param {Element} element
 * @returns {number}
 */
var _index = function (element) {
  if (!element.parentElement) {
    return 0
  }
  return Array.prototype.indexOf.call(element.parentElement.children, element)
}
/**
 * Whether element is in DOM
 * @param {Element} element
 * @returns {boolean}
 */
var _attached = function (element) {
  // document.body.contains(element)
  return !!element.parentNode
}
/**
 * Convert HTML string into DOM element.
 * @param {Element|string} html
 * @param {string} tagname
 * @returns {Element}
 */
var _html2element = function (html, tagName) {
  if (typeof html !== 'string') {
    return html
  }
  var parentElement = document.createElement(tagName)
  parentElement.innerHTML = html
  return parentElement.firstChild
}
/**
 * Insert before target
 * @param {Element} target
 * @param {Element} element
 */
var _before = function (target, element) {
  target.parentElement.insertBefore(
    element,
    target
  )
}
/**
 * Insert after target
 * @param {Element} target
 * @param {Element} element
 */
var _after = function (target, element) {
  target.parentElement.insertBefore(
    element,
    target.nextElementSibling
  )
}
/**
 * Detach element from DOM
 * @param {Element} element
 */
var _detach = function (element) {
  if (element.parentNode) {
    element.parentNode.removeChild(element)
  }
}
/**
 * Make native event that can be dispatched afterwards
 * @param {string} name
 * @param {object} detail
 * @returns {CustomEvent}
 */
var _makeEvent = function (name, detail) {
  var e = document.createEvent('Event')
  if (detail) {
    e.detail = detail
  }
  e.initEvent(name, false, true)
  return e
}
/**
 * @param {Element} sortableElement
 * @param {CustomEvent} event
 */
var _dispatchEventOnConnected = function (sortableElement, event) {
  sortables.forEach(function (target) {
    if (_listsConnected(sortableElement, target)) {
      target.dispatchEvent(event)
    }
  })
}

/**
 * Creates and returns a new debounced version of the passed function which will postpone its execution until after wait milliseconds have elapsed
 * @param {fn} Function to debounce
 * @param {delay} time to wait before calling function with latest arguments, 0 - no debounce
 * @param {context} time to wait before calling function with latest arguments, 0 - no debounce
 * @returns {function} - debounced function
 */
function _debounce (fn, delay, context) {
  var timer = null

  if (delay === 0) {
    return fn
  }
  return function () {
    var eContext = context || this
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(eContext, args)
    }, delay)
  }
}

var _getChildren = function (element) {
  return element.children
}

/*
 * Public sortable object
 * @param {Array|NodeList} sortableElements
 * @param {object|string} options|method
 */
var sortable = function (sortableElements, options) {
  var method = String(options)

  options = (function (options) {
    var result = {
      connectWith: false,
      placeholder: null,
      disableIEFix: false,
      placeholderClass: 'sortable-placeholder',
      draggingClass: 'sortable-dragging',
      hoverClass: false,
      debounce: 0,
      maxItems: 0
    }
    for (var option in options) {
      result[option] = options[option]
    }
    return result
  })(options)

  if (options && typeof options.getChildren === 'function') {
    _getChildren = options.getChildren
  }

  if (typeof sortableElements === 'string') {
    sortableElements = document.querySelectorAll(sortableElements)
  }

  if (sortableElements instanceof window.Element) {
    sortableElements = [sortableElements]
  }

  sortableElements = Array.prototype.slice.call(sortableElements)

  /* TODO: maxstatements should be 25, fix and remove line below */
  /* jshint maxstatements:false */
  sortableElements.forEach(function (sortableElement) {
    if (/enable|disable|destroy/.test(method)) {
      sortable[method](sortableElement)
      return
    }

    // get options & set options on sortable
    options = _data(sortableElement, 'opts') || options
    _data(sortableElement, 'opts', options)
    // reset sortable
    _reloadSortable(sortableElement)
    // initialize
    var items = _filter(_getChildren(sortableElement), options.items)
    var index
    var startParent
    var placeholder = options.placeholder
    var maxItems
    if (!placeholder) {
      placeholder = document.createElement(
        /^ul|ol$/i.test(sortableElement.tagName) ? 'li' : 'div'
      )
    }
    placeholder = _html2element(placeholder, sortableElement.tagName)
    placeholder.classList.add.apply(
      placeholder.classList,
      options.placeholderClass.split(' ')
    )

    // setup sortable ids
    if (!sortableElement.getAttribute('data-sortable-id')) {
      var id = sortables.length
      sortables[id] = sortableElement
      _attr(sortableElement, 'data-sortable-id', id)
      _attr(items, 'data-item-sortable-id', id)
    }

    _data(sortableElement, 'items', options.items)
    placeholders.push(placeholder)
    if (options.connectWith) {
      _data(sortableElement, 'connectWith', options.connectWith)
    }

    _enableSortable(sortableElement)
    _attr(items, 'role', 'option')
    _attr(items, 'aria-grabbed', 'false')

    // Mouse over class
    if (options.hoverClass) {
      var hoverClass = 'sortable-over'
      if (typeof options.hoverClass === 'string') {
        hoverClass = options.hoverClass
      }

      _on(items, 'mouseenter', function () {
        this.classList.add(hoverClass)
      })
      _on(items, 'mouseleave', function () {
        this.classList.remove(hoverClass)
      })
    }

    // max items
    if (options.maxItems && typeof options.maxItems === 'number') {
      maxItems = options.maxItems
    }

    // Handle drag events on draggable items
    _on(items, 'dragstart', function (e) {
      e.stopImmediatePropagation()
      if ((options.handle && !_matches(e.target, options.handle)) || this.getAttribute('draggable') === 'false') {
        return
      }

      // add transparent clone or other ghost to cursor
      _getGhost(e, this)
      // cache selsection & add attr for dragging
      this.classList.add(options.draggingClass)
      dragging = this
      _attr(dragging, 'aria-grabbed', 'true')
      // grab values
      index = _index(dragging)
      draggingHeight = parseInt(window.getComputedStyle(dragging).height)
      startParent = this.parentElement
      // dispatch sortstart event on each element in group
      _dispatchEventOnConnected(sortableElement, _makeEvent('sortstart', {
        item: dragging,
        placeholder: placeholder,
        startparent: startParent
      }))
    })
    // Handle drag events on draggable items
    _on(items, 'dragend', function () {
      var newParent
      if (!dragging) {
        return
      }
      // remove dragging attributes and show item
      dragging.classList.remove(options.draggingClass)
      _attr(dragging, 'aria-grabbed', 'false')
      dragging.style.display = dragging.oldDisplay
      delete dragging.oldDisplay

      placeholders.forEach(_detach)
      newParent = this.parentElement
      _dispatchEventOnConnected(sortableElement, _makeEvent('sortstop', {
        item: dragging,
        startparent: startParent
      }))
      if (index !== _index(dragging) || startParent !== newParent) {
        _dispatchEventOnConnected(sortableElement, _makeEvent('sortupdate', {
          item: dragging,
          index: _filter(_getChildren(newParent), _data(newParent, 'items'))
              .indexOf(dragging),
          oldindex: items.indexOf(dragging),
          elementIndex: _index(dragging),
          oldElementIndex: index,
          startparent: startParent,
          endparent: newParent
        }))
      }
      dragging = null
      draggingHeight = null
    })
    // Handle drop event on sortable & placeholder
    // TODO: REMOVE placeholder?????
    _on([sortableElement, placeholder], 'drop', function (e) {
      var visiblePlaceholder
      if (!_listsConnected(sortableElement, dragging.parentElement)) {
        return
      }

      e.preventDefault()
      e.stopPropagation()
      visiblePlaceholder = placeholders.filter(_attached)[0]
      _after(visiblePlaceholder, dragging)
      dragging.dispatchEvent(_makeEvent('dragend'))
    })

    var debouncedDragOverEnter = _debounce(function (element, pageY) {
      if (!dragging) {
        return
      }

      if (items.indexOf(element) !== -1) {
        var thisHeight = parseInt(window.getComputedStyle(element).height)
        var placeholderIndex = _index(placeholder)
        var thisIndex = _index(element)
        if (options.forcePlaceholderSize) {
          placeholder.style.height = draggingHeight + 'px'
        }

        // Check if `element` is bigger than the draggable. If it is, we have to define a dead zone to prevent flickering
        if (thisHeight > draggingHeight) {
          // Dead zone?
          var deadZone = thisHeight - draggingHeight
          var offsetTop = _offset(element).top
          if (placeholderIndex < thisIndex &&
              pageY < offsetTop + deadZone) {
            return
          }
          if (placeholderIndex > thisIndex &&
              pageY > offsetTop + thisHeight - deadZone) {
            return
          }
        }

        if (dragging.oldDisplay === undefined) {
          dragging.oldDisplay = dragging.style.display
        }

        if (dragging.style.display !== 'none') {
          dragging.style.display = 'none'
        }

        if (placeholderIndex < thisIndex) {
          _after(element, placeholder)
        } else {
          _before(element, placeholder)
        }
        // Intentionally violated chaining, it is more complex otherwise
        placeholders
          .filter(function (element) { return element !== placeholder })
          .forEach(_detach)
      } else {
        if (placeholders.indexOf(element) === -1 &&
            !_filter(_getChildren(element), options.items).length) {
          placeholders.forEach(_detach)
          element.appendChild(placeholder)
        }
      }
    }, options.debounce)

    // Handle dragover and dragenter events on draggable items
    var onDragOverEnter = function (e) {
      if (!dragging || !_listsConnected(sortableElement, dragging.parentElement) || _data(sortableElement, '_disabled') === 'true') {
        return
      }
      if (maxItems && _filter(_getChildren(sortableElement), _data(sortableElement, 'items')).length >= maxItems) {
        return
      }
      e.preventDefault()
      e.stopPropagation()
      e.dataTransfer.dropEffect = 'move'
      debouncedDragOverEnter(this, e.pageY)
    }

    _on(items.concat(sortableElement), 'dragover', onDragOverEnter)
    _on(items.concat(sortableElement), 'dragenter', onDragOverEnter)
  })

  return sortableElements
}

sortable.destroy = function (sortableElement) {
  _destroySortable(sortableElement)
}

sortable.enable = function (sortableElement) {
  _enableSortable(sortableElement)
}

sortable.disable = function (sortableElement) {
  _disableSortable(sortableElement)
}


return sortable;
}));
;
"use strict";

System.register("flagrow/aqueduct/addsBoardToDiscussion", ["flarum/extend", "flarum/components/DiscussionPage", "flarum/components/Button", "flarum/components/SplitDropdown", "flarum/utils/ItemList", "flarum/helpers/avatar", "flarum/helpers/icon", "flarum/components/DiscussionHero", "flagrow/aqueduct/labels/assigneesLabel", "flagrow/aqueduct/modals/AddAssigneeModal"], function (_export, _context) {
    "use strict";

    var extend, DiscussionPage, Button, SplitDropdown, ItemList, avatar, icon, DiscussionHero, assigneesLabel, AddAssigneeModal;

    _export("default", function () {

        // Add a control allowing direct visiting of the board.
        extend(DiscussionPage.prototype, 'sidebarItems', function (items) {
            var discussion = this.discussion;
            var tags = discussion.tags().filter(function (tag) {
                return tag.position() !== null && !tag.isChild();
            });

            var controls = new ItemList();

            tags.forEach(function (tag) {
                controls.add('board-' + tag.slug(), Button.component({
                    children: app.translator.trans('flagrow-aqueduct.forum.discussion.buttons.show-board', { tag: tag.name() }),
                    icon: 'trello',
                    onclick: function onclick() {
                        return m.route(app.route('flagrow.aqueduct.board', { tag: tag.slug() }));
                    }
                }));
            });

            if (tags.length > 0) {
                if (discussion.canManageBoard()) {
                    controls.add('assignee', Button.component({
                        children: app.translator.trans('flagrow-aqueduct.forum.discussion.buttons.set-assignees'),
                        icon: 'user-circle-o',
                        onclick: function onclick() {
                            return app.modal.show(new AddAssigneeModal({ discussion: discussion }));
                        }
                    }));
                }

                items.add('board', SplitDropdown.component({
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
        extend(DiscussionHero.prototype, 'items', function (items) {
            var discussion = this.props.discussion;

            var users = discussion.assignedUsers().map(function (user) {
                return avatar(user);
            });
            var groups = discussion.assignedGroups().map(function (group) {
                return icon(group.icon());
            });

            var assignees = users + groups;

            if (assignees.length > 0) {
                items.add('assignees', assigneesLabel(assignees), 3);
            }
        });
    });

    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsDiscussionPage) {
            DiscussionPage = _flarumComponentsDiscussionPage.default;
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton.default;
        }, function (_flarumComponentsSplitDropdown) {
            SplitDropdown = _flarumComponentsSplitDropdown.default;
        }, function (_flarumUtilsItemList) {
            ItemList = _flarumUtilsItemList.default;
        }, function (_flarumHelpersAvatar) {
            avatar = _flarumHelpersAvatar.default;
        }, function (_flarumHelpersIcon) {
            icon = _flarumHelpersIcon.default;
        }, function (_flarumComponentsDiscussionHero) {
            DiscussionHero = _flarumComponentsDiscussionHero.default;
        }, function (_flagrowAqueductLabelsAssigneesLabel) {
            assigneesLabel = _flagrowAqueductLabelsAssigneesLabel.default;
        }, function (_flagrowAqueductModalsAddAssigneeModal) {
            AddAssigneeModal = _flagrowAqueductModalsAddAssigneeModal.default;
        }],
        execute: function () {}
    };
});;
'use strict';

System.register('flagrow/aqueduct/components/Card', ['flarum/Component', 'flarum/utils/ItemList', 'flarum/helpers/icon', 'flarum/helpers/avatar'], function (_export, _context) {
    "use strict";

    var Component, ItemList, icon, avatar, Card;
    return {
        setters: [function (_flarumComponent) {
            Component = _flarumComponent.default;
        }, function (_flarumUtilsItemList) {
            ItemList = _flarumUtilsItemList.default;
        }, function (_flarumHelpersIcon) {
            icon = _flarumHelpersIcon.default;
        }, function (_flarumHelpersAvatar) {
            avatar = _flarumHelpersAvatar.default;
        }],
        execute: function () {
            Card = function (_Component) {
                babelHelpers.inherits(Card, _Component);

                function Card() {
                    babelHelpers.classCallCheck(this, Card);
                    return babelHelpers.possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
                }

                babelHelpers.createClass(Card, [{
                    key: 'init',
                    value: function init() {
                        this.discussion = this.props.discussion;
                        this.isUnread = this.discussion.isUnread();
                    }
                }, {
                    key: 'view',
                    value: function view() {
                        var jumpTo = Math.min(this.discussion.lastPostNumber(), (this.discussion.readNumber() || 0) + 1);

                        return m('li', {
                            className: 'Card' + (this.isUnread ? ' Unread' : '')
                        }, m('div', [m('div', { className: 'Card--Header' }, [
                        // Issue title.
                        m('div', { className: 'Card--Title' }, m(
                            'a',
                            { href: app.route.discussion(this.discussion, jumpTo),
                                config: m.route },
                            this.discussion.title()
                        ))]), m('div', { className: 'Card--Footer' }, this.footerControls().toArray())]));
                    }
                }, {
                    key: 'footerControls',
                    value: function footerControls() {
                        var items = new ItemList();

                        var startUser = this.discussion.startUser();

                        items.add('startUser', m(
                            'a',
                            { href: startUser ? app.route.user(startUser) : '#',
                                className: 'Card--Author',
                                config: function config(element) {
                                    $(element).tooltip({ placement: 'right' });
                                    m.route.apply(this, arguments);
                                } },
                            avatar(startUser, { title: '' })
                        ));

                        items.add('count', m('div', [icon(this.isUnread ? 'commenting-o' : 'comment-o'), this.discussion[this.isUnread ? 'unreadCount' : 'repliesCount']()]));

                        return items;
                    }
                }]);
                return Card;
            }(Component);

            _export('default', Card);
        }
    };
});;
'use strict';

System.register('flagrow/aqueduct/labels/assigneeLabel', ['flarum/utils/extract', 'flarum/helpers/username', 'flarum/models/User', 'flarum/models/Group'], function (_export, _context) {
    "use strict";

    var extract, username, User, Group;
    function assigneeLabel(recipient) {
        var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        attrs.style = attrs.style || {};
        attrs.className = 'RecipientLabel ' + (attrs.className || '');

        var link = extract(attrs, 'link');

        var label;

        if (recipient instanceof User) {
            label = username(recipient);

            if (link) {
                attrs.title = recipient.username() || '';
                attrs.href = app.route.user(recipient);
                attrs.config = m.route;
            }
        } else if (recipient instanceof Group) {
            label = recipient.namePlural();
        }

        return m(link ? 'a' : 'span', attrs, m(
            'span',
            { className: 'RecipientLabel-text' },
            label
        ));
    }

    _export('default', assigneeLabel);

    return {
        setters: [function (_flarumUtilsExtract) {
            extract = _flarumUtilsExtract.default;
        }, function (_flarumHelpersUsername) {
            username = _flarumHelpersUsername.default;
        }, function (_flarumModelsUser) {
            User = _flarumModelsUser.default;
        }, function (_flarumModelsGroup) {
            Group = _flarumModelsGroup.default;
        }],
        execute: function () {}
    };
});;
'use strict';

System.register('flagrow/aqueduct/labels/assigneesLabel', ['flarum/utils/extract', 'flagrow/aqueduct/labels/assigneeLabel'], function (_export, _context) {
    "use strict";

    var extract, assigneeLabel;
    function assigneesLabel(assignees) {
        var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var children = [];
        var link = extract(attrs, 'link');

        attrs.className = 'AssigneesLabel ' + (attrs.className || '');

        if (assignees) {
            assignees.forEach(function (assignee) {
                children.push(assigneeLabel(assignee, { link: link }));
            });
        } else {
            children.push(assigneeLabel());
        }

        return m(
            'span',
            attrs,
            children
        );
    }

    _export('default', assigneesLabel);

    return {
        setters: [function (_flarumUtilsExtract) {
            extract = _flarumUtilsExtract.default;
        }, function (_flagrowAqueductLabelsAssigneeLabel) {
            assigneeLabel = _flagrowAqueductLabelsAssigneeLabel.default;
        }],
        execute: function () {}
    };
});;
'use strict';

System.register('flagrow/aqueduct/main', ['flarum/extend', 'flagrow/aqueduct/routes', 'flagrow/aqueduct/addsBoardToDiscussion', 'flarum/Model', 'flarum/tags/models/Tag', 'flarum/models/Discussion'], function (_export, _context) {
    "use strict";

    var extend, routes, addsBoardToDiscussion, Model, Tag, Discussion;
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
        }, function (_flarumModelsDiscussion) {
            Discussion = _flarumModelsDiscussion.default;
        }],
        execute: function () {

            app.initializers.add('flagrow-aqueduct', function (app) {
                Tag.prototype.canManageBoard = Model.attribute('canManageBoard');
                Tag.prototype.canUseBoard = Model.attribute('canUseBoard');
                Tag.prototype.columns = Model.hasMany('columns');
                Tag.prototype.board_sort = Model.attribute('board_sort') || null;
                Tag.prototype.board_max_items = Model.attribute('board_max_items') || null;

                Discussion.prototype.canViewBoard = Model.hasMany('canViewBoard');
                Discussion.prototype.canUseBoard = Model.hasMany('canUseBoard');
                Discussion.prototype.canManageBoard = Model.attribute('canManageBoard');
                Discussion.prototype.assignedUsers = Model.hasMany('assignedUsers');
                Discussion.prototype.assignedGroups = Model.hasMany('assignedGroups');

                routes(app);

                addsBoardToDiscussion();
            });
        }
    };
});;
"use strict";

System.register("flagrow/aqueduct/modals/AddAssigneeModal", ["flarum/components/Modal", "flarum/components/DiscussionPage", "flarum/components/Button", "flarum/utils/ItemList", "flagrow/aqueduct/search/RecipientSearch", "flarum/models/User", "flarum/models/Group"], function (_export, _context) {
    "use strict";

    var Modal, DiscussionPage, Button, ItemList, RecipientSearch, User, Group, AddAssigneeModal;
    return {
        setters: [function (_flarumComponentsModal) {
            Modal = _flarumComponentsModal.default;
        }, function (_flarumComponentsDiscussionPage) {
            DiscussionPage = _flarumComponentsDiscussionPage.default;
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton.default;
        }, function (_flarumUtilsItemList) {
            ItemList = _flarumUtilsItemList.default;
        }, function (_flagrowAqueductSearchRecipientSearch) {
            RecipientSearch = _flagrowAqueductSearchRecipientSearch.default;
        }, function (_flarumModelsUser) {
            User = _flarumModelsUser.default;
        }, function (_flarumModelsGroup) {
            Group = _flarumModelsGroup.default;
        }],
        execute: function () {
            AddAssigneeModal = function (_Modal) {
                babelHelpers.inherits(AddAssigneeModal, _Modal);

                function AddAssigneeModal() {
                    babelHelpers.classCallCheck(this, AddAssigneeModal);
                    return babelHelpers.possibleConstructorReturn(this, (AddAssigneeModal.__proto__ || Object.getPrototypeOf(AddAssigneeModal)).apply(this, arguments));
                }

                babelHelpers.createClass(AddAssigneeModal, [{
                    key: "init",
                    value: function init() {
                        babelHelpers.get(AddAssigneeModal.prototype.__proto__ || Object.getPrototypeOf(AddAssigneeModal.prototype), "init", this).call(this);

                        this.selected = m.prop(new ItemList());

                        if (this.props.discussion) {
                            // Adds recipients of the currently viewed discussion.
                            this.assignInitialRecipients(this.props.discussion);
                        } else if (this.props.assignees) {
                            // Adds previously selected recipients.
                            this.selected().merge(this.props.assignees);
                        }

                        this.recipientSearch = RecipientSearch.component({
                            selected: this.selected,
                            discussion: this.props.discussion
                        });
                    }
                }, {
                    key: "assignInitialRecipients",
                    value: function assignInitialRecipients(discussion) {
                        var _this2 = this;

                        discussion.assignedUsers().map(function (user) {
                            _this2.selected().add("users:" + user.id(), user);
                        });
                        discussion.assignedGroups().map(function (group) {
                            _this2.selected().add("groups:" + group.id(), group);
                        });
                    }
                }, {
                    key: "className",
                    value: function className() {
                        return 'AddAssigneeModal';
                    }
                }, {
                    key: "title",
                    value: function title() {
                        return this.props.discussion ? app.translator.trans('flagrow-aqueduct.forum.modal.titles.update_recipients', { title: m(
                                "em",
                                null,
                                this.props.discussion.title()
                            ) }) : app.translator.trans('flagrow-aqueduct.forum.modal.titles.add_recipients');
                    }
                }, {
                    key: "content",
                    value: function content() {
                        return [m(
                            "div",
                            { className: "Modal-body" },
                            m(
                                "div",
                                { className: "AddAssigneeModal-form" },
                                this.recipientSearch,
                                m(
                                    "div",
                                    { className: "AddAssigneeModal-form-submit App-primaryControl" },
                                    Button.component({
                                        type: 'submit',
                                        className: 'Button Button--primary',
                                        disabled: false,
                                        icon: 'check',
                                        children: app.translator.trans('flagrow-aqueduct.forum.buttons.submit')
                                    })
                                )
                            )
                        )];
                    }
                }, {
                    key: "select",
                    value: function select(e) {
                        // Ctrl + Enter submits the selection, just Enter completes the current entry
                        if (e.metaKey || e.ctrlKey || this.selected.indexOf(this.index) !== -1) {
                            if (this.selected().length) {
                                this.$('form').submit();
                            }
                        }
                    }
                }, {
                    key: "onsubmit",
                    value: function onsubmit(e) {
                        e.preventDefault();

                        var discussion = this.props.discussion;
                        var recipients = this.selected();

                        var recipientGroups = [];
                        var recipientUsers = [];

                        recipients.toArray().forEach(function (recipient) {

                            if (recipient instanceof User) {
                                recipientUsers.push(recipient);
                            }

                            if (recipient instanceof Group) {
                                recipientGroups.push(recipient);
                            }
                        });

                        if (discussion) {
                            discussion.save({ relationships: { recipientUsers: recipientUsers, recipientGroups: recipientGroups } }).then(function () {
                                if (app.current instanceof DiscussionPage) {
                                    app.current.stream.update();
                                }
                                m.redraw();
                            });
                        }

                        if (this.props.onsubmit) this.props.onsubmit(recipients, recipientUsers, recipientGroups);

                        app.modal.close();

                        m.redraw.strategy('none');
                    }
                }]);
                return AddAssigneeModal;
            }(Modal);

            _export("default", AddAssigneeModal);
        }
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
            var _this2 = this;

            babelHelpers.get(AddColumnModal.prototype.__proto__ || Object.getPrototypeOf(AddColumnModal.prototype), 'init', this).call(this);
            this.for = this.props.tag;

            this.tags = app.store.all('tags').filter(function (tag) {
              return _this2.for.columns().indexOf(tag) == -1;
            });

            this.selected = m.prop('');
            this.filter = m.prop('');
            this.index = this.tags[0].id();
            this.focused = false;
          }
        }, {
          key: 'content',
          value: function content() {
            var _this3 = this;

            var tags = this.tags;
            var filter = this.filter().toLowerCase();

            tags = tags.filter(function (tag) {
              return tag.id() != _this3.for.id() && (tag.position() === null || tag.parent() && tag.parent().id() == _this3.for.id());
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
                            _this3.selected('');
                            _this3.onready();
                          } },
                        tagLabel(this.selected())
                      ) : ''
                    ),
                    m('input', { className: 'FormControl',
                      value: this.filter(),
                      oninput: m.withAttr('value', this.filter),
                      onfocus: function onfocus() {
                        return _this3.focused = true;
                      },
                      onblur: function onblur() {
                        return _this3.focused = false;
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
                  return filter || !tag.parent() || _this3.selected().id == tag.id();
                }).map(function (tag) {
                  return m(
                    'li',
                    { 'data-index': tag.id(),
                      className: classList({
                        pinned: tag.position() !== null,
                        child: !!tag.parent(),
                        colored: !!tag.color(),
                        selected: _this3.selected() && _this3.selected().id == tag.id(),
                        active: _this3.index === tag
                      }),
                      style: { color: tag.color() },
                      onmouseover: function onmouseover() {
                        return _this3.index = tag;
                      },
                      onclick: function onclick() {
                        return _this3.selected(tag);
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
        }, {
          key: 'onsubmit',
          value: function onsubmit(e) {
            var _this4 = this;

            e.preventDefault();

            var board = this.for;
            var column = this.selected();

            app.request({
              method: 'POST',
              url: app.forum.attribute('apiUrl') + '/board/' + board.slug() + '/columns/' + column.slug()
            }).then(function (results) {
              var tag = app.store.pushPayload(results);

              if (_this4.props.onsubmit) _this4.props.onsubmit(tag);

              app.modal.close();

              m.redraw.strategy('none');
            });
          }
        }]);
        return AddColumnModal;
      }(Modal);

      _export('default', AddColumnModal);
    }
  };
});;
"use strict";

System.register("flagrow/aqueduct/pages/Board", ["flarum/extend", "flarum/components/Page", "flarum/components/SplitDropdown", "flarum/components/Button", "flarum/utils/ItemList", "flagrow/aqueduct/modals/AddColumnModal", "flagrow/aqueduct/components/Card"], function (_export, _context) {
    "use strict";

    var extend, Page, SplitDropdown, Button, ItemList, AddColumnModal, Card, Board;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsPage) {
            Page = _flarumComponentsPage.default;
        }, function (_flarumComponentsSplitDropdown) {
            SplitDropdown = _flarumComponentsSplitDropdown.default;
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton.default;
        }, function (_flarumUtilsItemList) {
            ItemList = _flarumUtilsItemList.default;
        }, function (_flagrowAqueductModalsAddColumnModal) {
            AddColumnModal = _flagrowAqueductModalsAddColumnModal.default;
        }, function (_flagrowAqueductComponentsCard) {
            Card = _flagrowAqueductComponentsCard.default;
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

                        this.bodyClass = 'Aqueduct--Board';

                        this.draggable = null;

                        this.refresh(true);
                    }
                }, {
                    key: "config",
                    value: function config(isInitialized, context) {
                        babelHelpers.get(Board.prototype.__proto__ || Object.getPrototypeOf(Board.prototype), "config", this).apply(this, arguments);

                        if (isInitialized) return;

                        app.setTitle('');
                        app.setTitleCount(0);
                        if (this.tag.canManageBoard()) {
                            this.setDraggable();
                        }
                    }
                }, {
                    key: "view",
                    value: function view() {
                        var _this2 = this;

                        return m('div', {
                            className: 'Board'
                        }, [m('div', {
                            className: 'Board--Controls'
                        }, m('div', { className: 'container' }, [SplitDropdown.component({
                            children: this.controls().toArray(),
                            icon: 'ellipsis-v',
                            className: 'App-primaryControl',
                            buttonClassName: 'Button--primary'
                        })])), m('div', {
                            className: 'Board--List'
                        }, this.tags.map(function (tag) {
                            return _this2.column(tag);
                        }))]);
                    }
                }, {
                    key: "controls",
                    value: function controls() {
                        var _this3 = this;

                        var items = new ItemList();
                        var tag = this.tag;

                        if (tag.canManageBoard()) {
                            items.add('add-column', Button.component({
                                icon: 'gear',
                                children: app.translator.trans('flagrow-aqueduct.forum.board.buttons.add-column'),
                                onclick: function onclick() {
                                    return app.modal.show(new AddColumnModal({
                                        tag: tag,
                                        onsubmit: function onsubmit(tag) {
                                            _this3.refresh(true);
                                        }
                                    }));
                                }
                            }));
                        }

                        return items;
                    }
                }, {
                    key: "column",
                    value: function column(tag) {
                        return m('div', {
                            className: 'Board--Column ' + tag.name(),
                            slug: tag.slug()
                        }, [m('div', { className: 'Board--Inner' }, [m('header', {
                            className: 'Board--Header' + (tag.color() ? ' colored' : ''),
                            style: tag.color() ? 'border-top-color: ' + tag.color() + ';' : ''
                        }, m('h4', [tag.name(), m('span', tag.description())])), m('div', {
                            className: 'Board--Item-List'
                        }, this.loading || this.discussions[tag.slug()].length == 0 ? '' : m('ul', this.discussions[tag.slug()].map(function (discussion) {
                            return Card.component({ discussion: discussion });
                        })))])]);
                    }
                }, {
                    key: "refresh",
                    value: function refresh() {
                        var _this4 = this;

                        var clear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                        if (clear) {
                            this.loading = true;

                            // The primary tag for which we will show the board.
                            this.tag = app.store.getBy('tags', 'slug', m.route.param('tag'));

                            /**
                             * The discussions in the discussion list.
                             *
                             * @type {Discussion[]}
                             */
                            this.discussions = {};

                            this.tags = this.tag.columns() || [];

                            this.tags.sort(function (a, b) {
                                return a.board_sort() - b.board_sort();
                            });
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
                                }).indexOf(tag.id()) != -1) {
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
                        return app.request({
                            method: 'get',
                            url: app.forum.attribute('apiUrl') + '/board/' + this.tag.slug()
                        });
                    }
                }, {
                    key: "setDraggable",
                    value: function setDraggable() {
                        var _this6 = this;

                        if (this.draggable) {
                            sortable('.Board--List');
                        } else {
                            sortable('.Board--List', {
                                items: '.Board--Column',
                                handle: '.Board--Header',
                                placeholder: '<div class="Board--Column Placeholder"></div>',
                                forcePlaceholderSize: true
                            })[0].addEventListener('sortupdate', function (e) {
                                var sorting = $(e.target).find('.Board--Column').map(function () {
                                    return $(this).attr('slug');
                                }).get();

                                _this6.updateSorting(sorting);
                            });
                        }

                        this.draggable = true;
                    }
                }, {
                    key: "updateSorting",
                    value: function updateSorting(sorting) {
                        var _this7 = this;

                        return app.request({
                            method: 'post',
                            url: app.forum.attribute('apiUrl') + '/board/' + this.tag.slug() + '/sorting',
                            data: sorting
                        }).then(function (results) {
                            app.store.pushPayload(results);
                            m.redraw();

                            _this7.setDraggable();
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
"use strict";

System.register("flagrow/aqueduct/search/RecipientSearch", ["flarum/components/Search", "flagrow/aqueduct/search/sources/UserSearchSource", "flagrow/aqueduct/search/sources/GroupSearchSource", "flarum/utils/ItemList", "flarum/utils/classList", "flarum/utils/extractText", "flarum/components/LoadingIndicator", "flagrow/aqueduct/helpers/assigneeLabel", "flarum/models/User", "flarum/models/Group"], function (_export, _context) {
    "use strict";

    var Search, UserSearchSource, GroupSearchSource, ItemList, classList, extractText, LoadingIndicator, recipientLabel, User, Group, RecipientSearch;
    return {
        setters: [function (_flarumComponentsSearch) {
            Search = _flarumComponentsSearch.default;
        }, function (_flagrowAqueductSearchSourcesUserSearchSource) {
            UserSearchSource = _flagrowAqueductSearchSourcesUserSearchSource.default;
        }, function (_flagrowAqueductSearchSourcesGroupSearchSource) {
            GroupSearchSource = _flagrowAqueductSearchSourcesGroupSearchSource.default;
        }, function (_flarumUtilsItemList) {
            ItemList = _flarumUtilsItemList.default;
        }, function (_flarumUtilsClassList) {
            classList = _flarumUtilsClassList.default;
        }, function (_flarumUtilsExtractText) {
            extractText = _flarumUtilsExtractText.default;
        }, function (_flarumComponentsLoadingIndicator) {
            LoadingIndicator = _flarumComponentsLoadingIndicator.default;
        }, function (_flagrowAqueductHelpersAssigneeLabel) {
            recipientLabel = _flagrowAqueductHelpersAssigneeLabel.default;
        }, function (_flarumModelsUser) {
            User = _flarumModelsUser.default;
        }, function (_flarumModelsGroup) {
            Group = _flarumModelsGroup.default;
        }],
        execute: function () {
            RecipientSearch = function (_Search) {
                babelHelpers.inherits(RecipientSearch, _Search);

                function RecipientSearch() {
                    babelHelpers.classCallCheck(this, RecipientSearch);
                    return babelHelpers.possibleConstructorReturn(this, (RecipientSearch.__proto__ || Object.getPrototypeOf(RecipientSearch)).apply(this, arguments));
                }

                babelHelpers.createClass(RecipientSearch, [{
                    key: "config",
                    value: function config(isInitialized) {
                        var _this2 = this;

                        if (isInitialized) return;

                        var $search = this;

                        this.$('.Search-results').on('click', function (e) {
                            var target = _this2.$('.SearchResult.active');

                            $search.addRecipient(target.data('index'));

                            $search.$('.RecipientsInput').focus();
                        });

                        this.$('.Search-results').on('touchstart', function (e) {
                            var target = _this2.$(e.target.parentNode);

                            $search.addRecipient(target.data('index'));

                            $search.$('.RecipientsInput').focus();
                        });

                        babelHelpers.get(RecipientSearch.prototype.__proto__ || Object.getPrototypeOf(RecipientSearch.prototype), "config", this).call(this, isInitialized);
                    }
                }, {
                    key: "view",
                    value: function view() {
                        var _this3 = this;

                        if (typeof this.value() === 'undefined') {
                            this.value('');
                        }

                        return m('div', {
                            className: 'AddRecipientModal-form-input'
                        }, [m('div', {
                            className: 'RecipientsInput-selected RecipientsLabel'
                        }, this.props.selected().toArray().map(function (recipient) {
                            return recipientLabel(recipient, {
                                onclick: function onclick() {
                                    _this3.removeRecipient(recipient);
                                }
                            });
                        })), m('input', {
                            className: 'RecipientsInput FormControl ' + classList({
                                open: !!this.value(),
                                focused: !!this.value(),
                                active: !!this.value(),
                                loading: !!this.loadingSources
                            }),
                            config: function config(element) {
                                element.focus();
                            },
                            type: 'search',
                            placeholder: extractText(app.translator.trans('flagrow-aqueduct.forum.input.search_recipients')),
                            value: this.value(),
                            oninput: m.withAttr('value', this.value),
                            onfocus: function onfocus() {
                                return _this3.hasFocus = true;
                            },
                            onblur: function onblur() {
                                return _this3.hasFocus = false;
                            }
                        }), m('ul', {
                            className: 'Dropdown-menu Search-results'
                        }, this.value() && this.value().length >= 3 ? this.sources.map(function (source) {
                            return source.view(_this3.value());
                        }) : LoadingIndicator.component({ size: 'tiny', className: 'Button Button--icon Button--link' }))]);
                    }
                }, {
                    key: "sourceItems",
                    value: function sourceItems() {
                        var items = new ItemList();

                        // Add user source based on permissions.
                        items.add('users', new UserSearchSource());

                        // Add group source based on permissions.
                        items.add('groups', new GroupSearchSource());

                        return items;
                    }
                }, {
                    key: "clear",
                    value: function clear() {
                        this.value('');

                        m.redraw();
                    }
                }, {
                    key: "addRecipient",
                    value: function addRecipient(value) {

                        var values = value.split(':'),
                            type = values[0],
                            id = values[1];

                        var recipient = this.findRecipient(type, id);

                        this.props.selected().add(value, recipient);

                        this.clear();
                    }
                }, {
                    key: "removeRecipient",
                    value: function removeRecipient(recipient) {
                        var type;

                        if (recipient instanceof User) {
                            type = 'users';
                        }
                        if (recipient instanceof Group) {
                            type = 'groups';
                        }

                        this.props.selected().remove(type + ":" + recipient.id());

                        m.redraw();
                    }
                }, {
                    key: "findRecipient",
                    value: function findRecipient(store, id) {
                        return app.store.getById(store, id);
                    }
                }]);
                return RecipientSearch;
            }(Search);

            _export("default", RecipientSearch);
        }
    };
});;
'use strict';

System.register('flagrow/aqueduct/search/sources/GroupSearchSource', ['flarum/helpers/highlight'], function (_export, _context) {
    "use strict";

    var highlight, GroupSearchSource;
    return {
        setters: [function (_flarumHelpersHighlight) {
            highlight = _flarumHelpersHighlight.default;
        }],
        execute: function () {
            GroupSearchSource = function () {
                function GroupSearchSource() {
                    babelHelpers.classCallCheck(this, GroupSearchSource);
                }

                babelHelpers.createClass(GroupSearchSource, [{
                    key: 'search',
                    value: function search(query) {
                        return app.store.find('groups', {
                            filter: { q: query },
                            page: { limit: 5 }
                        });
                    }
                }, {
                    key: 'view',
                    value: function view(query) {
                        query = query.toLowerCase();

                        var results = app.store.all('groups').filter(function (group) {
                            return group.namePlural().toLowerCase().substr(0, query.length) === query;
                        });

                        if (!results.length) return '';

                        return [m(
                            'li',
                            { className: 'Dropdown-header' },
                            app.translator.trans('flagrow-byobu.forum.search.headings.groups')
                        ), results.map(function (group) {
                            var groupName = group.namePlural();
                            var name = highlight(groupName, query);

                            return m(
                                'li',
                                { className: 'SearchResult', 'data-index': 'groups:' + group.id() },
                                m(
                                    'a',
                                    { 'data-index': 'groups:' + group.id() },
                                    m(
                                        'span',
                                        { 'class': 'groupName' },
                                        name
                                    )
                                )
                            );
                        })];
                    }
                }]);
                return GroupSearchSource;
            }();

            _export('default', GroupSearchSource);
        }
    };
});;
'use strict';

System.register('flagrow/aqueduct/search/sources/UserSearchSource', ['flarum/helpers/highlight', 'flarum/helpers/avatar', 'flarum/helpers/username'], function (_export, _context) {
    "use strict";

    var highlight, avatar, username, UserSearchSource;
    return {
        setters: [function (_flarumHelpersHighlight) {
            highlight = _flarumHelpersHighlight.default;
        }, function (_flarumHelpersAvatar) {
            avatar = _flarumHelpersAvatar.default;
        }, function (_flarumHelpersUsername) {
            username = _flarumHelpersUsername.default;
        }],
        execute: function () {
            UserSearchSource = function () {
                function UserSearchSource() {
                    babelHelpers.classCallCheck(this, UserSearchSource);
                }

                babelHelpers.createClass(UserSearchSource, [{
                    key: 'search',
                    value: function search(query) {
                        return app.store.find('users', {
                            filter: { q: query },
                            page: { limit: 5 }
                        });
                    }
                }, {
                    key: 'view',
                    value: function view(query) {
                        query = query.toLowerCase();

                        var results = app.store.all('users').filter(function (user) {
                            return user.username().toLowerCase().substr(0, query.length) === query;
                        });

                        if (!results.length) return '';

                        return [m(
                            'li',
                            { className: 'Dropdown-header' },
                            app.translator.trans('core.forum.search.users_heading')
                        ), results.map(function (user) {
                            var name = username(user);
                            name.children[0] = highlight(name.children[0], query);

                            return m(
                                'li',
                                { className: 'SearchResult', 'data-index': 'users:' + user.id() },
                                m(
                                    'a',
                                    { 'data-index': 'users:' + user.id() },
                                    avatar(user),
                                    name
                                )
                            );
                        })];
                    }
                }]);
                return UserSearchSource;
            }();

            _export('default', UserSearchSource);
        }
    };
});