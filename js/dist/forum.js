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

/***/ "./node_modules/html5sortable/dist/html.sortable.js":
/*!**********************************************************!*\
  !*** ./node_modules/html5sortable/dist/html.sortable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function() {
/*
 * HTML5 Sortable library
 * https://github.com/lukasoppermann/html5sortable
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
  // Firefox requires some arbitrary content in the data in order for
  // the drag & drop functionality to work
  event.dataTransfer.setData('text', 'arbitrary-content')

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

var _serialize = function (list) {
  var children = _filter(_getChildren(list), _data(list, 'items'))
  return children
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

  if (/serialize/.test(method)) {
    var serialized = []
    sortableElements.forEach(function (sortableElement) {
      serialized.push({
        list: sortableElement,
        children: _serialize(sortableElement)
      })
    })
    return serialized
  }

  /* TODO: maxstatements should be 25, fix and remove line below */
  /* jshint maxstatements:false */
  sortableElements.forEach(function (sortableElement) {
    if (/enable|disable|destroy/.test(method)) {
      return sortable[method](sortableElement)
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
    var startList
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
      startList = _serialize(startParent)
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
          endparent: newParent,
          newEndList: _serialize(newParent),
          newStartList: _serialize(startParent),
          oldStartList: startList
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





/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Add a control allowing direct visiting of the board.
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'sidebarItems', function (items) {
    var discussion = this.discussion;
    var tags = discussion.tags().filter(function (tag) {
      return tag.position() !== null && !tag.isChild();
    });
    var controls = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a();
    tags = tags.filter(function (tag) {
      return tag.canAccessBoard() || tag.canUseBoard() || tag.canManageBoard();
    });
    tags.forEach(function (tag) {
      controls.add('board-' + tag.slug(), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
        children: app.translator.trans('flagrow-aqueduct.forum.discussion.buttons.show-board', {
          tag: tag.name()
        }),
        icon: 'fab fa-trello',
        onclick: function onclick() {
          return m.route(app.route('flagrow.kanban.board', {
            tag: tag.slug()
          }));
        }
      }));
    });

    if (tags.length > 0) {
      items.add('board', flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        children: controls.toArray(),
        icon: 'fab fa-trello',
        className: 'App-primaryControl',
        buttonClassName: 'Button--secondary'
      }), -50);
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
    var jumpTo = Math.min(this.discussion.lastPostNumber(), (this.discussion.lastReadPostNumber() || 0) + 1);
    return m('div', {
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
    var user = this.discussion.user();
    items.add('user', m("a", {
      href: user ? app.route.user(user) : '#',
      className: "Card--Author",
      config: function config(element) {
        $(element).tooltip({
          placement: 'right'
        });
        m.route.apply(this, arguments);
      }
    }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default()(user, {
      title: ''
    })));
    items.add('count', m('div', {
      className: 'Card--Replies-Count'
    }, [flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()(this.isUnread ? 'commenting-o' : 'comment-o'), this.discussion[this.isUnread ? 'unreadCount' : 'replyCount']()]));
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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./src/forum/routes.js");
/* harmony import */ var _addsBoardToDiscussion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addsBoardToDiscussion */ "./src/forum/addsBoardToDiscussion.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/tags/models/Tag */ "flarum/tags/models/Tag");
/* harmony import */ var flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/models/Discussion */ "flarum/models/Discussion");
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_Sorting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/Sorting */ "./src/forum/models/Sorting.js");






app.initializers.add('flagrow-aqueduct', function (app) {
  app.store.models.discussionSorting = _models_Sorting__WEBPACK_IMPORTED_MODULE_5__["default"];
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.canAccessBoard = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('canAccessBoard');
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.canUseBoard = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('canUseBoard');
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.canManageBoard = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('canManageBoard');
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.columns = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasMany('columns');
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.boardSort = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('boardSort') || null;
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.boardMaxItems = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('boardMaxItems') || null;
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.canAccessBoard = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('canAccessBoard');
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.canUseBoard = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('canUseBoard');
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.canManageBoard = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('canManageBoard');
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.assignedUsers = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasMany('assignedUsers');
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.assignedGroups = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasMany('assignedGroups');
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.discussionSorting = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasMany('discussionSorting');
  Object(_routes__WEBPACK_IMPORTED_MODULE_0__["default"])(app);
  Object(_addsBoardToDiscussion__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

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

/***/ "./src/forum/models/Sorting.js":
/*!*************************************!*\
  !*** ./src/forum/models/Sorting.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sorting; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var Sorting =
/*#__PURE__*/
function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Sorting, _mixin);

  function Sorting() {
    return _mixin.apply(this, arguments) || this;
  }

  return Sorting;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  discussionId: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('discussionId'),
  boardTagId: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('boardTagId'),
  columnTagId: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('columnTagId'),
  sort: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('sort')
}));



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
/* harmony import */ var html5sortable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html5sortable */ "./node_modules/html5sortable/dist/html.sortable.js");
/* harmony import */ var html5sortable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html5sortable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/SplitDropdown */ "flarum/components/SplitDropdown");
/* harmony import */ var flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__);
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

    this.bodyClass = 'Kanban--Board';
    this.draggable = 'cards';
    this.dragging = null;
    this.refresh(true);
  };

  _proto.config = function config(isInitialized, context) {
    _Page.prototype.config.apply(this, arguments);

    if (isInitialized) return;
    app.setTitle('');
    app.setTitleCount(0);
    if (this.tag) if (this.tag.canUseBoard() || this.tag.canManageBoard()) {
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
    }, [this.controls().isEmpty() ? [] : flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_4___default.a.component({
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

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default.a();
    var tag = this.tag;

    if (tag.canManageBoard()) {
      items.add('add-column', flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        icon: 'fas fa-cog',
        children: app.translator.trans('flagrow-aqueduct.forum.board.buttons.add-column'),
        onclick: function onclick() {
          return app.modal.show(new _modals_AddColumnModal__WEBPACK_IMPORTED_MODULE_7__["default"]({
            tag: tag,
            onsubmit: function onsubmit() {
              _this2.refresh(true);
            }
          }));
        }
      }));

      if (this.draggable === 'cards') {
        items.add('drag-columns', flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
          icon: 'fas fa-lock-open',
          children: app.translator.trans('flagrow-aqueduct.forum.board.buttons.drag-columns'),
          onclick: function onclick() {
            _this2.draggable = 'columns';

            _this2.setDraggable();
          }
        }));
      } else if (this.dragging && this.draggable === 'columns') {
        items.add('drag-columns', flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
          icon: 'fas fa-lock',
          children: app.translator.trans('flagrow-aqueduct.forum.board.buttons.fix-columns'),
          onclick: function onclick() {
            _this2.draggable = 'cards';

            _this2.setDraggable();
          }
        }));
      }
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
      className: 'Board--Item-List',
      slug: tag.slug()
    }, this.loading || this.discussions[tag.slug()].length == 0 ? '' : this.discussions[tag.slug()].map(function (discussion) {
      return _components_Card__WEBPACK_IMPORTED_MODULE_8__["default"].component({
        discussion: discussion
      });
    }))])]);
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

    var sorted = [];

    if (this.dragging === null && this.draggable === 'cards') {
      sorted = html5sortable__WEBPACK_IMPORTED_MODULE_1___default()('.Board--Item-List', {
        connectWith: 'Board--Connected--Cards',
        items: '.Card',
        // handle: '.Card--Header',
        placeholder: '<div class="Card Placeholder"></div>',
        forcePlaceholderSize: true
      });

      if (sorted.length > 0) {
        sorted.forEach(function (sort) {
          sort.addEventListener('sortupdate', function (e) {
            var tag = $(e.target).attr('slug'); // prevents updating multiple times

            if (tag === $(e.detail.endparent).attr('slug')) {
              var sorting = $(e.target).find('.Card').map(function () {
                return $(this).attr('discussion');
              }).get();

              _this5.updateDiscussionSorting(sorting, tag);
            }
          });
        });
      }
    } else if (this.draggable === 'cards') {
      html5sortable__WEBPACK_IMPORTED_MODULE_1___default()('.Board--Item-List');
    }

    if (this.dragging === null && this.draggable === 'columns') {
      sorted = html5sortable__WEBPACK_IMPORTED_MODULE_1___default()('.Board--List', {
        items: '.Board--Column',
        handle: '.Board--Header',
        placeholder: '<div class="Board--Column Placeholder"></div>',
        forcePlaceholderSize: true
      });

      if (sorted.length > 0) {
        sorted[0].addEventListener('sortupdate', function (e) {
          var sorting = $(e.target).find('.Board--Column').map(function () {
            return $(this).attr('slug');
          }).get();

          _this5.updateColumnSorting(sorting);
        });
      }
    } else if (this.draggable === 'columns') {
      html5sortable__WEBPACK_IMPORTED_MODULE_1___default()('.Board--List');
    }

    this.dragging = this.dragging === null && sorted.length > 0 || this.dragging !== null && true;
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

  _proto.updateDiscussionSorting = function updateDiscussionSorting(sorting, slug) {
    var _this7 = this;

    var tag = app.store.getBy('tags', 'slug', slug);

    if (sorting.length > 0) {
      sorting.forEach(function (id, i) {
        var discussion = app.store.getById('discussions', id);
        var tags = discussion.tags();
        var data = {
          relationships: {
            tags: [],
            discussionSorting: []
          } // drop all tags from discussion that are part of this board as column

        };
        tags.forEach(function (t) {
          if (_this7.tags.indexOf(t) < 0 && t.id() !== tag.id()) {
            data.relationships.tags.push(t);
          }
        }); // then re-add that tag so it can be saved

        data.relationships.tags.push(tag);
        var sort = app.store.createRecord('discussionSorting', {
          sort: i,
          board_tag_id: _this7.tag.id(),
          column_tag_id: tag.id()
        });
        data.relationships.discussionSorting.push(sort);
        discussion.save(data);
      });
    }
  };

  return Board;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_3___default.a);



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
  app.routes['flagrow.kanban.board'] = {
    path: '/board/:tag',
    component: _pages_Board__WEBPACK_IMPORTED_MODULE_0__["default"].component()
  };
});

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

/***/ "flarum/components/DiscussionPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionPage']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionPage'];

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

/***/ "flarum/components/SplitDropdown":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/SplitDropdown']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SplitDropdown'];

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

/***/ "flarum/models/Discussion":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['models/Discussion']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/Discussion'];

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

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/mixin'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map