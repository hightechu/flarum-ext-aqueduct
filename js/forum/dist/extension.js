/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */

(function sortableModule(factory) {
	"use strict";

	if (typeof define === "function" && define.amd) {
		define(factory);
	}
	else if (typeof module != "undefined" && typeof module.exports != "undefined") {
		module.exports = factory();
	}
	else {
		/* jshint sub:true */
		window["Sortable"] = factory();
	}
})(function sortableFactory() {
	"use strict";

	if (typeof window === "undefined" || !window.document) {
		return function sortableError() {
			throw new Error("Sortable.js requires a window with a document");
		};
	}

	var dragEl,
		parentEl,
		ghostEl,
		cloneEl,
		rootEl,
		nextEl,
		lastDownEl,

		scrollEl,
		scrollParentEl,
		scrollCustomFn,

		lastEl,
		lastCSS,
		lastParentCSS,

		oldIndex,
		newIndex,

		activeGroup,
		putSortable,

		autoScroll = {},

		tapEvt,
		touchEvt,

		moved,

		/** @const */
		R_SPACE = /\s+/g,
		R_FLOAT = /left|right|inline/,

		expando = 'Sortable' + (new Date).getTime(),

		win = window,
		document = win.document,
		parseInt = win.parseInt,
		setTimeout = win.setTimeout,

		$ = win.jQuery || win.Zepto,
		Polymer = win.Polymer,

		captureMode = false,
		passiveMode = false,

		supportDraggable = ('draggable' in document.createElement('div')),
		supportCssPointerEvents = (function (el) {
			// false when IE11
			if (!!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)) {
				return false;
			}
			el = document.createElement('x');
			el.style.cssText = 'pointer-events:auto';
			return el.style.pointerEvents === 'auto';
		})(),

		_silent = false,

		abs = Math.abs,
		min = Math.min,

		savedInputChecked = [],
		touchDragOverListeners = [],

		_autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl) {
			// Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
			if (rootEl && options.scroll) {
				var _this = rootEl[expando],
					el,
					rect,
					sens = options.scrollSensitivity,
					speed = options.scrollSpeed,

					x = evt.clientX,
					y = evt.clientY,

					winWidth = window.innerWidth,
					winHeight = window.innerHeight,

					vx,
					vy,

					scrollOffsetX,
					scrollOffsetY
				;

				// Delect scrollEl
				if (scrollParentEl !== rootEl) {
					scrollEl = options.scroll;
					scrollParentEl = rootEl;
					scrollCustomFn = options.scrollFn;

					if (scrollEl === true) {
						scrollEl = rootEl;

						do {
							if ((scrollEl.offsetWidth < scrollEl.scrollWidth) ||
								(scrollEl.offsetHeight < scrollEl.scrollHeight)
							) {
								break;
							}
							/* jshint boss:true */
						} while (scrollEl = scrollEl.parentNode);
					}
				}

				if (scrollEl) {
					el = scrollEl;
					rect = scrollEl.getBoundingClientRect();
					vx = (abs(rect.right - x) <= sens) - (abs(rect.left - x) <= sens);
					vy = (abs(rect.bottom - y) <= sens) - (abs(rect.top - y) <= sens);
				}


				if (!(vx || vy)) {
					vx = (winWidth - x <= sens) - (x <= sens);
					vy = (winHeight - y <= sens) - (y <= sens);

					/* jshint expr:true */
					(vx || vy) && (el = win);
				}


				if (autoScroll.vx !== vx || autoScroll.vy !== vy || autoScroll.el !== el) {
					autoScroll.el = el;
					autoScroll.vx = vx;
					autoScroll.vy = vy;

					clearInterval(autoScroll.pid);

					if (el) {
						autoScroll.pid = setInterval(function () {
							scrollOffsetY = vy ? vy * speed : 0;
							scrollOffsetX = vx ? vx * speed : 0;

							if ('function' === typeof(scrollCustomFn)) {
								return scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt);
							}

							if (el === win) {
								win.scrollTo(win.pageXOffset + scrollOffsetX, win.pageYOffset + scrollOffsetY);
							} else {
								el.scrollTop += scrollOffsetY;
								el.scrollLeft += scrollOffsetX;
							}
						}, 24);
					}
				}
			}
		}, 30),

		_prepareGroup = function (options) {
			function toFn(value, pull) {
				if (value === void 0 || value === true) {
					value = group.name;
				}

				if (typeof value === 'function') {
					return value;
				} else {
					return function (to, from) {
						var fromGroup = from.options.group.name;

						return pull
							? value
							: value && (value.join
								? value.indexOf(fromGroup) > -1
								: (fromGroup == value)
							);
					};
				}
			}

			var group = {};
			var originalGroup = options.group;

			if (!originalGroup || typeof originalGroup != 'object') {
				originalGroup = {name: originalGroup};
			}

			group.name = originalGroup.name;
			group.checkPull = toFn(originalGroup.pull, true);
			group.checkPut = toFn(originalGroup.put);
			group.revertClone = originalGroup.revertClone;

			options.group = group;
		}
	;

	// Detect support a passive mode
	try {
		window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
			get: function () {
				// `false`, because everything starts to work incorrectly and instead of d'n'd,
				// begins the page has scrolled.
				passiveMode = false;
				captureMode = {
					capture: false,
					passive: passiveMode
				};
			}
		}));
	} catch (err) {}

	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */
	function Sortable(el, options) {
		if (!(el && el.nodeType && el.nodeType === 1)) {
			throw 'Sortable: `el` must be HTMLElement, and not ' + {}.toString.call(el);
		}

		this.el = el; // root element
		this.options = options = _extend({}, options);


		// Export instance
		el[expando] = this;

		// Default options
		var defaults = {
			group: Math.random(),
			sort: true,
			disabled: false,
			store: null,
			handle: null,
			scroll: true,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			draggable: /[uo]l/i.test(el.nodeName) ? 'li' : '>*',
			ghostClass: 'sortable-ghost',
			chosenClass: 'sortable-chosen',
			dragClass: 'sortable-drag',
			ignore: 'a, img',
			filter: null,
			preventOnFilter: true,
			animation: 0,
			setData: function (dataTransfer, dragEl) {
				dataTransfer.setData('Text', dragEl.textContent);
			},
			dropBubble: false,
			dragoverBubble: false,
			dataIdAttr: 'data-id',
			delay: 0,
			forceFallback: false,
			fallbackClass: 'sortable-fallback',
			fallbackOnBody: false,
			fallbackTolerance: 0,
			fallbackOffset: {x: 0, y: 0},
			supportPointer: Sortable.supportPointer !== false
		};


		// Set default options
		for (var name in defaults) {
			!(name in options) && (options[name] = defaults[name]);
		}

		_prepareGroup(options);

		// Bind all private methods
		for (var fn in this) {
			if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
				this[fn] = this[fn].bind(this);
			}
		}

		// Setup drag mode
		this.nativeDraggable = options.forceFallback ? false : supportDraggable;

		// Bind events
		_on(el, 'mousedown', this._onTapStart);
		_on(el, 'touchstart', this._onTapStart);
		options.supportPointer && _on(el, 'pointerdown', this._onTapStart);

		if (this.nativeDraggable) {
			_on(el, 'dragover', this);
			_on(el, 'dragenter', this);
		}

		touchDragOverListeners.push(this._onDragOver);

		// Restore sorting
		options.store && this.sort(options.store.get(this));
	}


	Sortable.prototype = /** @lends Sortable.prototype */ {
		constructor: Sortable,

		_onTapStart: function (/** Event|TouchEvent */evt) {
			var _this = this,
				el = this.el,
				options = this.options,
				preventOnFilter = options.preventOnFilter,
				type = evt.type,
				touch = evt.touches && evt.touches[0],
				target = (touch || evt).target,
				originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0]) || target,
				filter = options.filter,
				startIndex;

			_saveInputCheckedState(el);


			// Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
			if (dragEl) {
				return;
			}

			if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
				return; // only left button or enabled
			}

			// cancel dnd if original target is content editable
			if (originalTarget.isContentEditable) {
				return;
			}

			target = _closest(target, options.draggable, el);

			if (!target) {
				return;
			}

			if (lastDownEl === target) {
				// Ignoring duplicate `down`
				return;
			}

			// Get the index of the dragged element within its parent
			startIndex = _index(target, options.draggable);

			// Check filter
			if (typeof filter === 'function') {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent(_this, originalTarget, 'filter', target, el, el, startIndex);
					preventOnFilter && evt.preventDefault();
					return; // cancel dnd
				}
			}
			else if (filter) {
				filter = filter.split(',').some(function (criteria) {
					criteria = _closest(originalTarget, criteria.trim(), el);

					if (criteria) {
						_dispatchEvent(_this, criteria, 'filter', target, el, el, startIndex);
						return true;
					}
				});

				if (filter) {
					preventOnFilter && evt.preventDefault();
					return; // cancel dnd
				}
			}

			if (options.handle && !_closest(originalTarget, options.handle, el)) {
				return;
			}

			// Prepare `dragstart`
			this._prepareDragStart(evt, touch, target, startIndex);
		},

		_prepareDragStart: function (/** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
			var _this = this,
				el = _this.el,
				options = _this.options,
				ownerDocument = el.ownerDocument,
				dragStartFn;

			if (target && !dragEl && (target.parentNode === el)) {
				tapEvt = evt;

				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				lastDownEl = target;
				activeGroup = options.group;
				oldIndex = startIndex;

				this._lastX = (touch || evt).clientX;
				this._lastY = (touch || evt).clientY;

				dragEl.style['will-change'] = 'all';

				dragStartFn = function () {
					// Delayed drag has been triggered
					// we can re-enable the events: touchmove/mousemove
					_this._disableDelayedDrag();

					// Make the element draggable
					dragEl.draggable = _this.nativeDraggable;

					// Chosen item
					_toggleClass(dragEl, options.chosenClass, true);

					// Bind the events: dragstart/dragend
					_this._triggerDragStart(evt, touch);

					// Drag start event
					_dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, rootEl, oldIndex);
				};

				// Disable "draggable"
				options.ignore.split(',').forEach(function (criteria) {
					_find(dragEl, criteria.trim(), _disableDraggable);
				});

				_on(ownerDocument, 'mouseup', _this._onDrop);
				_on(ownerDocument, 'touchend', _this._onDrop);
				_on(ownerDocument, 'touchcancel', _this._onDrop);
				_on(ownerDocument, 'selectstart', _this);
				options.supportPointer && _on(ownerDocument, 'pointercancel', _this._onDrop);

				if (options.delay) {
					// If the user moves the pointer or let go the click or touch
					// before the delay has been reached:
					// disable the delayed drag
					_on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchend', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
					_on(ownerDocument, 'mousemove', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchmove', _this._disableDelayedDrag);
					options.supportPointer && _on(ownerDocument, 'pointermove', _this._disableDelayedDrag);

					_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
				} else {
					dragStartFn();
				}


			}
		},

		_disableDelayedDrag: function () {
			var ownerDocument = this.el.ownerDocument;

			clearTimeout(this._dragStartTimer);
			_off(ownerDocument, 'mouseup', this._disableDelayedDrag);
			_off(ownerDocument, 'touchend', this._disableDelayedDrag);
			_off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
			_off(ownerDocument, 'mousemove', this._disableDelayedDrag);
			_off(ownerDocument, 'touchmove', this._disableDelayedDrag);
			_off(ownerDocument, 'pointermove', this._disableDelayedDrag);
		},

		_triggerDragStart: function (/** Event */evt, /** Touch */touch) {
			touch = touch || (evt.pointerType == 'touch' ? evt : null);

			if (touch) {
				// Touch device support
				tapEvt = {
					target: dragEl,
					clientX: touch.clientX,
					clientY: touch.clientY
				};

				this._onDragStart(tapEvt, 'touch');
			}
			else if (!this.nativeDraggable) {
				this._onDragStart(tapEvt, true);
			}
			else {
				_on(dragEl, 'dragend', this);
				_on(rootEl, 'dragstart', this._onDragStart);
			}

			try {
				if (document.selection) {
					// Timeout neccessary for IE9
					_nextTick(function () {
						document.selection.empty();
					});
				} else {
					window.getSelection().removeAllRanges();
				}
			} catch (err) {
			}
		},

		_dragStarted: function () {
			if (rootEl && dragEl) {
				var options = this.options;

				// Apply effect
				_toggleClass(dragEl, options.ghostClass, true);
				_toggleClass(dragEl, options.dragClass, false);

				Sortable.active = this;

				// Drag start event
				_dispatchEvent(this, rootEl, 'start', dragEl, rootEl, rootEl, oldIndex);
			} else {
				this._nulling();
			}
		},

		_emulateDragOver: function () {
			if (touchEvt) {
				if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY) {
					return;
				}

				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', 'none');
				}

				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
				var parent = target;
				var i = touchDragOverListeners.length;

				if (target && target.shadowRoot) {
					target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
					parent = target;
				}

				if (parent) {
					do {
						if (parent[expando]) {
							while (i--) {
								touchDragOverListeners[i]({
									clientX: touchEvt.clientX,
									clientY: touchEvt.clientY,
									target: target,
									rootEl: parent
								});
							}

							break;
						}

						target = parent; // store last element
					}
					/* jshint boss:true */
					while (parent = parent.parentNode);
				}

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', '');
				}
			}
		},


		_onTouchMove: function (/**TouchEvent*/evt) {
			if (tapEvt) {
				var	options = this.options,
					fallbackTolerance = options.fallbackTolerance,
					fallbackOffset = options.fallbackOffset,
					touch = evt.touches ? evt.touches[0] : evt,
					dx = (touch.clientX - tapEvt.clientX) + fallbackOffset.x,
					dy = (touch.clientY - tapEvt.clientY) + fallbackOffset.y,
					translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

				// only set the status to dragging, when we are actually dragging
				if (!Sortable.active) {
					if (fallbackTolerance &&
						min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance
					) {
						return;
					}

					this._dragStarted();
				}

				// as well as creating the ghost element on the document body
				this._appendGhost();

				moved = true;
				touchEvt = touch;

				_css(ghostEl, 'webkitTransform', translate3d);
				_css(ghostEl, 'mozTransform', translate3d);
				_css(ghostEl, 'msTransform', translate3d);
				_css(ghostEl, 'transform', translate3d);

				evt.preventDefault();
			}
		},

		_appendGhost: function () {
			if (!ghostEl) {
				var rect = dragEl.getBoundingClientRect(),
					css = _css(dragEl),
					options = this.options,
					ghostRect;

				ghostEl = dragEl.cloneNode(true);

				_toggleClass(ghostEl, options.ghostClass, false);
				_toggleClass(ghostEl, options.fallbackClass, true);
				_toggleClass(ghostEl, options.dragClass, true);

				_css(ghostEl, 'top', rect.top - parseInt(css.marginTop, 10));
				_css(ghostEl, 'left', rect.left - parseInt(css.marginLeft, 10));
				_css(ghostEl, 'width', rect.width);
				_css(ghostEl, 'height', rect.height);
				_css(ghostEl, 'opacity', '0.8');
				_css(ghostEl, 'position', 'fixed');
				_css(ghostEl, 'zIndex', '100000');
				_css(ghostEl, 'pointerEvents', 'none');

				options.fallbackOnBody && document.body.appendChild(ghostEl) || rootEl.appendChild(ghostEl);

				// Fixing dimensions.
				ghostRect = ghostEl.getBoundingClientRect();
				_css(ghostEl, 'width', rect.width * 2 - ghostRect.width);
				_css(ghostEl, 'height', rect.height * 2 - ghostRect.height);
			}
		},

		_onDragStart: function (/**Event*/evt, /**boolean*/useFallback) {
			var _this = this;
			var dataTransfer = evt.dataTransfer;
			var options = _this.options;

			_this._offUpEvents();

			if (activeGroup.checkPull(_this, _this, dragEl, evt)) {
				cloneEl = _clone(dragEl);

				cloneEl.draggable = false;
				cloneEl.style['will-change'] = '';

				_css(cloneEl, 'display', 'none');
				_toggleClass(cloneEl, _this.options.chosenClass, false);

				// #1143: IFrame support workaround
				_this._cloneId = _nextTick(function () {
					rootEl.insertBefore(cloneEl, dragEl);
					_dispatchEvent(_this, rootEl, 'clone', dragEl);
				});
			}

			_toggleClass(dragEl, options.dragClass, true);

			if (useFallback) {
				if (useFallback === 'touch') {
					// Bind touch events
					_on(document, 'touchmove', _this._onTouchMove);
					_on(document, 'touchend', _this._onDrop);
					_on(document, 'touchcancel', _this._onDrop);

					if (options.supportPointer) {
						_on(document, 'pointermove', _this._onTouchMove);
						_on(document, 'pointerup', _this._onDrop);
					}
				} else {
					// Old brwoser
					_on(document, 'mousemove', _this._onTouchMove);
					_on(document, 'mouseup', _this._onDrop);
				}

				_this._loopId = setInterval(_this._emulateDragOver, 50);
			}
			else {
				if (dataTransfer) {
					dataTransfer.effectAllowed = 'move';
					options.setData && options.setData.call(_this, dataTransfer, dragEl);
				}

				_on(document, 'drop', _this);

				// #1143: Бывает элемент с IFrame внутри блокирует `drop`,
				// поэтому если вызвался `mouseover`, значит надо отменять весь d'n'd.
				// Breaking Chrome 62+
				// _on(document, 'mouseover', _this);

				_this._dragStartId = _nextTick(_this._dragStarted);
			}
		},

		_onDragOver: function (/**Event*/evt) {
			var el = this.el,
				target,
				dragRect,
				targetRect,
				revert,
				options = this.options,
				group = options.group,
				activeSortable = Sortable.active,
				isOwner = (activeGroup === group),
				isMovingBetweenSortable = false,
				canSort = options.sort;

			if (evt.preventDefault !== void 0) {
				evt.preventDefault();
				!options.dragoverBubble && evt.stopPropagation();
			}

			if (dragEl.animated) {
				return;
			}

			moved = true;

			if (activeSortable && !options.disabled &&
				(isOwner
					? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
					: (
						putSortable === this ||
						(
							(activeSortable.lastPullMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) &&
							group.checkPut(this, activeSortable, dragEl, evt)
						)
					)
				) &&
				(evt.rootEl === void 0 || evt.rootEl === this.el) // touch fallback
			) {
				// Smart auto-scrolling
				_autoScroll(evt, options, this.el);

				if (_silent) {
					return;
				}

				target = _closest(evt.target, options.draggable, el);
				dragRect = dragEl.getBoundingClientRect();

				if (putSortable !== this) {
					putSortable = this;
					isMovingBetweenSortable = true;
				}

				if (revert) {
					_cloneHide(activeSortable, true);
					parentEl = rootEl; // actualization

					if (cloneEl || nextEl) {
						rootEl.insertBefore(dragEl, cloneEl || nextEl);
					}
					else if (!canSort) {
						rootEl.appendChild(dragEl);
					}

					return;
				}


				if ((el.children.length === 0) || (el.children[0] === ghostEl) ||
					(el === evt.target) && (_ghostIsLast(el, evt))
				) {
					//assign target only if condition is true
					if (el.children.length !== 0 && el.children[0] !== ghostEl && el === evt.target) {
						target = el.lastElementChild;
					}

					if (target) {
						if (target.animated) {
							return;
						}

						targetRect = target.getBoundingClientRect();
					}

					_cloneHide(activeSortable, isOwner);

					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt) !== false) {
						if (!dragEl.contains(el)) {
							el.appendChild(dragEl);
							parentEl = el; // actualization
						}

						this._animate(dragRect, dragEl);
						target && this._animate(targetRect, target);
					}
				}
				else if (target && !target.animated && target !== dragEl && (target.parentNode[expando] !== void 0)) {
					if (lastEl !== target) {
						lastEl = target;
						lastCSS = _css(target);
						lastParentCSS = _css(target.parentNode);
					}

					targetRect = target.getBoundingClientRect();

					var width = targetRect.right - targetRect.left,
						height = targetRect.bottom - targetRect.top,
						floating = R_FLOAT.test(lastCSS.cssFloat + lastCSS.display)
							|| (lastParentCSS.display == 'flex' && lastParentCSS['flex-direction'].indexOf('row') === 0),
						isWide = (target.offsetWidth > dragEl.offsetWidth),
						isLong = (target.offsetHeight > dragEl.offsetHeight),
						halfway = (floating ? (evt.clientX - targetRect.left) / width : (evt.clientY - targetRect.top) / height) > 0.5,
						nextSibling = target.nextElementSibling,
						after = false
					;

					if (floating) {
						var elTop = dragEl.offsetTop,
							tgTop = target.offsetTop;

						if (elTop === tgTop) {
							after = (target.previousElementSibling === dragEl) && !isWide || halfway && isWide;
						}
						else if (target.previousElementSibling === dragEl || dragEl.previousElementSibling === target) {
							after = (evt.clientY - targetRect.top) / height > 0.5;
						} else {
							after = tgTop > elTop;
						}
						} else if (!isMovingBetweenSortable) {
						after = (nextSibling !== dragEl) && !isLong || halfway && isLong;
					}

					var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

					if (moveVector !== false) {
						if (moveVector === 1 || moveVector === -1) {
							after = (moveVector === 1);
						}

						_silent = true;
						setTimeout(_unsilent, 30);

						_cloneHide(activeSortable, isOwner);

						if (!dragEl.contains(el)) {
							if (after && !nextSibling) {
								el.appendChild(dragEl);
							} else {
								target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
							}
						}

						parentEl = dragEl.parentNode; // actualization

						this._animate(dragRect, dragEl);
						this._animate(targetRect, target);
					}
				}
			}
		},

		_animate: function (prevRect, target) {
			var ms = this.options.animation;

			if (ms) {
				var currentRect = target.getBoundingClientRect();

				if (prevRect.nodeType === 1) {
					prevRect = prevRect.getBoundingClientRect();
				}

				_css(target, 'transition', 'none');
				_css(target, 'transform', 'translate3d('
					+ (prevRect.left - currentRect.left) + 'px,'
					+ (prevRect.top - currentRect.top) + 'px,0)'
				);

				target.offsetWidth; // repaint

				_css(target, 'transition', 'all ' + ms + 'ms');
				_css(target, 'transform', 'translate3d(0,0,0)');

				clearTimeout(target.animated);
				target.animated = setTimeout(function () {
					_css(target, 'transition', '');
					_css(target, 'transform', '');
					target.animated = false;
				}, ms);
			}
		},

		_offUpEvents: function () {
			var ownerDocument = this.el.ownerDocument;

			_off(document, 'touchmove', this._onTouchMove);
			_off(document, 'pointermove', this._onTouchMove);
			_off(ownerDocument, 'mouseup', this._onDrop);
			_off(ownerDocument, 'touchend', this._onDrop);
			_off(ownerDocument, 'pointerup', this._onDrop);
			_off(ownerDocument, 'touchcancel', this._onDrop);
			_off(ownerDocument, 'pointercancel', this._onDrop);
			_off(ownerDocument, 'selectstart', this);
		},

		_onDrop: function (/**Event*/evt) {
			var el = this.el,
				options = this.options;

			clearInterval(this._loopId);
			clearInterval(autoScroll.pid);
			clearTimeout(this._dragStartTimer);

			_cancelNextTick(this._cloneId);
			_cancelNextTick(this._dragStartId);

			// Unbind events
			_off(document, 'mouseover', this);
			_off(document, 'mousemove', this._onTouchMove);

			if (this.nativeDraggable) {
				_off(document, 'drop', this);
				_off(el, 'dragstart', this._onDragStart);
			}

			this._offUpEvents();

			if (evt) {
				if (moved) {
					evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}

				ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

				if (rootEl === parentEl || Sortable.active.lastPullMode !== 'clone') {
					// Remove clone
					cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
				}

				if (dragEl) {
					if (this.nativeDraggable) {
						_off(dragEl, 'dragend', this);
					}

					_disableDraggable(dragEl);
					dragEl.style['will-change'] = '';

					// Remove class's
					_toggleClass(dragEl, this.options.ghostClass, false);
					_toggleClass(dragEl, this.options.chosenClass, false);

					// Drag stop event
					_dispatchEvent(this, rootEl, 'unchoose', dragEl, parentEl, rootEl, oldIndex);

					if (rootEl !== parentEl) {
						newIndex = _index(dragEl, options.draggable);

						if (newIndex >= 0) {
							// Add event
							_dispatchEvent(null, parentEl, 'add', dragEl, parentEl, rootEl, oldIndex, newIndex);

							// Remove event
							_dispatchEvent(this, rootEl, 'remove', dragEl, parentEl, rootEl, oldIndex, newIndex);

							// drag from one list and drop into another
							_dispatchEvent(null, parentEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex);
							_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex);
						}
					}
					else {
						if (dragEl.nextSibling !== nextEl) {
							// Get the index of the dragged element within its parent
							newIndex = _index(dragEl, options.draggable);

							if (newIndex >= 0) {
								// drag & drop within the same list
								_dispatchEvent(this, rootEl, 'update', dragEl, parentEl, rootEl, oldIndex, newIndex);
								_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex);
							}
						}
					}

					if (Sortable.active) {
						/* jshint eqnull:true */
						if (newIndex == null || newIndex === -1) {
							newIndex = oldIndex;
						}

						_dispatchEvent(this, rootEl, 'end', dragEl, parentEl, rootEl, oldIndex, newIndex);

						// Save sorting
						this.save();
					}
				}

			}

			this._nulling();
		},

		_nulling: function() {
			rootEl =
			dragEl =
			parentEl =
			ghostEl =
			nextEl =
			cloneEl =
			lastDownEl =

			scrollEl =
			scrollParentEl =

			tapEvt =
			touchEvt =

			moved =
			newIndex =

			lastEl =
			lastCSS =

			putSortable =
			activeGroup =
			Sortable.active = null;

			savedInputChecked.forEach(function (el) {
				el.checked = true;
			});
			savedInputChecked.length = 0;
		},

		handleEvent: function (/**Event*/evt) {
			switch (evt.type) {
				case 'drop':
				case 'dragend':
					this._onDrop(evt);
					break;

				case 'dragover':
				case 'dragenter':
					if (dragEl) {
						this._onDragOver(evt);
						_globalDragOver(evt);
					}
					break;

				case 'mouseover':
					this._onDrop(evt);
					break;

				case 'selectstart':
					evt.preventDefault();
					break;
			}
		},


		/**
		 * Serializes the item into an array of string.
		 * @returns {String[]}
		 */
		toArray: function () {
			var order = [],
				el,
				children = this.el.children,
				i = 0,
				n = children.length,
				options = this.options;

			for (; i < n; i++) {
				el = children[i];
				if (_closest(el, options.draggable, this.el)) {
					order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
				}
			}

			return order;
		},


		/**
		 * Sorts the elements according to the array.
		 * @param  {String[]}  order  order of the items
		 */
		sort: function (order) {
			var items = {}, rootEl = this.el;

			this.toArray().forEach(function (id, i) {
				var el = rootEl.children[i];

				if (_closest(el, this.options.draggable, rootEl)) {
					items[id] = el;
				}
			}, this);

			order.forEach(function (id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
		},


		/**
		 * Save the current sorting
		 */
		save: function () {
			var store = this.options.store;
			store && store.set(this);
		},


		/**
		 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
		 * @param   {HTMLElement}  el
		 * @param   {String}       [selector]  default: `options.draggable`
		 * @returns {HTMLElement|null}
		 */
		closest: function (el, selector) {
			return _closest(el, selector || this.options.draggable, this.el);
		},


		/**
		 * Set/get option
		 * @param   {string} name
		 * @param   {*}      [value]
		 * @returns {*}
		 */
		option: function (name, value) {
			var options = this.options;

			if (value === void 0) {
				return options[name];
			} else {
				options[name] = value;

				if (name === 'group') {
					_prepareGroup(options);
				}
			}
		},


		/**
		 * Destroy
		 */
		destroy: function () {
			var el = this.el;

			el[expando] = null;

			_off(el, 'mousedown', this._onTapStart);
			_off(el, 'touchstart', this._onTapStart);
			_off(el, 'pointerdown', this._onTapStart);

			if (this.nativeDraggable) {
				_off(el, 'dragover', this);
				_off(el, 'dragenter', this);
			}

			// Remove draggable attributes
			Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
				el.removeAttribute('draggable');
			});

			touchDragOverListeners.splice(touchDragOverListeners.indexOf(this._onDragOver), 1);

			this._onDrop();

			this.el = el = null;
		}
	};


	function _cloneHide(sortable, state) {
		if (sortable.lastPullMode !== 'clone') {
			state = true;
		}

		if (cloneEl && (cloneEl.state !== state)) {
			_css(cloneEl, 'display', state ? 'none' : '');

			if (!state) {
				if (cloneEl.state) {
					if (sortable.options.group.revertClone) {
						rootEl.insertBefore(cloneEl, nextEl);
						sortable._animate(dragEl, cloneEl);
					} else {
						rootEl.insertBefore(cloneEl, dragEl);
					}
				}
			}

			cloneEl.state = state;
		}
	}


	function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx) {
		if (el) {
			ctx = ctx || document;

			do {
				if ((selector === '>*' && el.parentNode === ctx) || _matches(el, selector)) {
					return el;
				}
				/* jshint boss:true */
			} while (el = _getParentOrHost(el));
		}

		return null;
	}


	function _getParentOrHost(el) {
		var parent = el.host;

		return (parent && parent.nodeType) ? parent : el.parentNode;
	}


	function _globalDragOver(/**Event*/evt) {
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}
		evt.preventDefault();
	}


	function _on(el, event, fn) {
		el.addEventListener(event, fn, captureMode);
	}


	function _off(el, event, fn) {
		el.removeEventListener(event, fn, captureMode);
	}


	function _toggleClass(el, name, state) {
		if (el) {
			if (el.classList) {
				el.classList[state ? 'add' : 'remove'](name);
			}
			else {
				var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
				el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
			}
		}
	}


	function _css(el, prop, val) {
		var style = el && el.style;

		if (style) {
			if (val === void 0) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					val = document.defaultView.getComputedStyle(el, '');
				}
				else if (el.currentStyle) {
					val = el.currentStyle;
				}

				return prop === void 0 ? val : val[prop];
			}
			else {
				if (!(prop in style)) {
					prop = '-webkit-' + prop;
				}

				style[prop] = val + (typeof val === 'string' ? '' : 'px');
			}
		}
	}


	function _find(ctx, tagName, iterator) {
		if (ctx) {
			var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

			if (iterator) {
				for (; i < n; i++) {
					iterator(list[i], i);
				}
			}

			return list;
		}

		return [];
	}



	function _dispatchEvent(sortable, rootEl, name, targetEl, toEl, fromEl, startIndex, newIndex) {
		sortable = (sortable || rootEl[expando]);

		var evt = document.createEvent('Event'),
			options = sortable.options,
			onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);

		evt.initEvent(name, true, true);

		evt.to = toEl || rootEl;
		evt.from = fromEl || rootEl;
		evt.item = targetEl || rootEl;
		evt.clone = cloneEl;

		evt.oldIndex = startIndex;
		evt.newIndex = newIndex;

		rootEl.dispatchEvent(evt);

		if (options[onName]) {
			options[onName].call(sortable, evt);
		}
	}


	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
		var evt,
			sortable = fromEl[expando],
			onMoveFn = sortable.options.onMove,
			retVal;

		evt = document.createEvent('Event');
		evt.initEvent('move', true, true);

		evt.to = toEl;
		evt.from = fromEl;
		evt.dragged = dragEl;
		evt.draggedRect = dragRect;
		evt.related = targetEl || toEl;
		evt.relatedRect = targetRect || toEl.getBoundingClientRect();
		evt.willInsertAfter = willInsertAfter;

		fromEl.dispatchEvent(evt);

		if (onMoveFn) {
			retVal = onMoveFn.call(sortable, evt, originalEvt);
		}

		return retVal;
	}


	function _disableDraggable(el) {
		el.draggable = false;
	}


	function _unsilent() {
		_silent = false;
	}


	/** @returns {HTMLElement|false} */
	function _ghostIsLast(el, evt) {
		var lastEl = el.lastElementChild,
			rect = lastEl.getBoundingClientRect();

		// 5 — min delta
		// abs — нельзя добавлять, а то глюки при наведении сверху
		return (evt.clientY - (rect.top + rect.height) > 5) ||
			(evt.clientX - (rect.left + rect.width) > 5);
	}


	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */
	function _generateId(el) {
		var str = el.tagName + el.className + el.src + el.href + el.textContent,
			i = str.length,
			sum = 0;

		while (i--) {
			sum += str.charCodeAt(i);
		}

		return sum.toString(36);
	}

	/**
	 * Returns the index of an element within its parent for a selected set of
	 * elements
	 * @param  {HTMLElement} el
	 * @param  {selector} selector
	 * @return {number}
	 */
	function _index(el, selector) {
		var index = 0;

		if (!el || !el.parentNode) {
			return -1;
		}

		while (el && (el = el.previousElementSibling)) {
			if ((el.nodeName.toUpperCase() !== 'TEMPLATE') && (selector === '>*' || _matches(el, selector))) {
				index++;
			}
		}

		return index;
	}

	function _matches(/**HTMLElement*/el, /**String*/selector) {
		if (el) {
			selector = selector.split('.');

			var tag = selector.shift().toUpperCase(),
				re = new RegExp('\\s(' + selector.join('|') + ')(?=\\s)', 'g');

			return (
				(tag === '' || el.nodeName.toUpperCase() == tag) &&
				(!selector.length || ((' ' + el.className + ' ').match(re) || []).length == selector.length)
			);
		}

		return false;
	}

	function _throttle(callback, ms) {
		var args, _this;

		return function () {
			if (args === void 0) {
				args = arguments;
				_this = this;

				setTimeout(function () {
					if (args.length === 1) {
						callback.call(_this, args[0]);
					} else {
						callback.apply(_this, args);
					}

					args = void 0;
				}, ms);
			}
		};
	}

	function _extend(dst, src) {
		if (dst && src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dst[key] = src[key];
				}
			}
		}

		return dst;
	}

	function _clone(el) {
		if (Polymer && Polymer.dom) {
			return Polymer.dom(el).cloneNode(true);
		}
		else if ($) {
			return $(el).clone(true)[0];
		}
		else {
			return el.cloneNode(true);
		}
	}

	function _saveInputCheckedState(root) {
		var inputs = root.getElementsByTagName('input');
		var idx = inputs.length;

		while (idx--) {
			var el = inputs[idx];
			el.checked && savedInputChecked.push(el);
		}
	}

	function _nextTick(fn) {
		return setTimeout(fn, 0);
	}

	function _cancelNextTick(id) {
		return clearTimeout(id);
	}

	// Fixed #973:
	_on(document, 'touchmove', function (evt) {
		if (Sortable.active) {
			evt.preventDefault();
		}
	});

	// Export utils
	Sortable.utils = {
		on: _on,
		off: _off,
		css: _css,
		find: _find,
		is: function (el, selector) {
			return !!_closest(el, selector, el);
		},
		extend: _extend,
		throttle: _throttle,
		closest: _closest,
		toggleClass: _toggleClass,
		clone: _clone,
		index: _index,
		nextTick: _nextTick,
		cancelNextTick: _cancelNextTick
	};


	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */
	Sortable.create = function (el, options) {
		return new Sortable(el, options);
	};


	// Export
	Sortable.version = '1.7.0';
	return Sortable;
});
;
"use strict";

System.register("flagrow/aqueduct/addsBoardToDiscussion", ["flarum/extend", "flarum/components/DiscussionPage", "flarum/components/Button", "flarum/components/SplitDropdown", "flarum/utils/ItemList", "flarum/helpers/avatar", "flarum/helpers/icon", "flarum/components/DiscussionHero", "./labels/assigneesLabel", "./modals/AddAssigneeModal"], function (_export, _context) {
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
        }, function (_labelsAssigneesLabel) {
            assigneesLabel = _labelsAssigneesLabel.default;
        }, function (_modalsAddAssigneeModal) {
            AddAssigneeModal = _modalsAddAssigneeModal.default;
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
                            className: 'Card' + (this.isUnread ? ' Unread' : ''),
                            discussion: this.discussion.id()
                        }, m('div', { className: 'Card--Handle' }, [m('div', { className: 'Card--Header' }, [
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

                        items.add('count', m('div', { className: 'Card--Replies-Count' }, [icon(this.isUnread ? 'commenting-o' : 'comment-o'), this.discussion[this.isUnread ? 'unreadCount' : 'repliesCount']()]));

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

System.register('flagrow/aqueduct/labels/assigneesLabel', ['flarum/utils/extract', './assigneeLabel'], function (_export, _context) {
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
        }, function (_assigneeLabel) {
            assigneeLabel = _assigneeLabel.default;
        }],
        execute: function () {}
    };
});;
'use strict';

System.register('flagrow/aqueduct/main', ['flarum/extend', './routes', './addsBoardToDiscussion', 'flarum/Model', 'flarum/tags/models/Tag', 'flarum/models/Discussion'], function (_export, _context) {
    "use strict";

    var extend, routes, addsBoardToDiscussion, Model, Tag, Discussion;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_routes) {
            routes = _routes.default;
        }, function (_addsBoardToDiscussion) {
            addsBoardToDiscussion = _addsBoardToDiscussion.default;
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
                Tag.prototype.boardSort = Model.attribute('boardSort') || null;
                Tag.prototype.boardMaxItems = Model.attribute('boardMaxItems') || null;

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

System.register("flagrow/aqueduct/modals/AddAssigneeModal", ["flarum/components/Modal", "flarum/components/DiscussionPage", "flarum/components/Button", "flarum/utils/ItemList", "../search/MultiSelectionInput", "flarum/models/User", "flarum/models/Group"], function (_export, _context) {
    "use strict";

    var Modal, DiscussionPage, Button, ItemList, MultiSelectionInput, User, Group, AddAssigneeModal;
    return {
        setters: [function (_flarumComponentsModal) {
            Modal = _flarumComponentsModal.default;
        }, function (_flarumComponentsDiscussionPage) {
            DiscussionPage = _flarumComponentsDiscussionPage.default;
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton.default;
        }, function (_flarumUtilsItemList) {
            ItemList = _flarumUtilsItemList.default;
        }, function (_searchMultiSelectionInput) {
            MultiSelectionInput = _searchMultiSelectionInput.default;
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

                        this.recipientSearch = MultiSelectionInput.component({
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

System.register('flagrow/aqueduct/modals/AddColumnModal', ['flarum/components/Modal', 'flarum/tags/helpers/tagLabel', 'flarum/tags/helpers/tagIcon', 'flarum/helpers/highlight', 'flarum/utils/classList', 'flarum/components/Button'], function (_export, _context) {
  "use strict";

  var Modal, tagLabel, tagIcon, highlight, classList, Button, AddColumnModal;
  return {
    setters: [function (_flarumComponentsModal) {
      Modal = _flarumComponentsModal.default;
    }, function (_flarumTagsHelpersTagLabel) {
      tagLabel = _flarumTagsHelpersTagLabel.default;
    }, function (_flarumTagsHelpersTagIcon) {
      tagIcon = _flarumTagsHelpersTagIcon.default;
    }, function (_flarumHelpersHighlight) {
      highlight = _flarumHelpersHighlight.default;
    }, function (_flarumUtilsClassList) {
      classList = _flarumUtilsClassList.default;
    }, function (_flarumComponentsButton) {
      Button = _flarumComponentsButton.default;
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

System.register("flagrow/aqueduct/pages/Board", ["flarum/extend", "flarum/components/Page", "flarum/components/SplitDropdown", "flarum/components/Button", "flarum/utils/ItemList", "flarum/components/Switch", "../modals/AddColumnModal", "../components/Card"], function (_export, _context) {
    "use strict";

    var extend, Page, SplitDropdown, Button, ItemList, Switch, AddColumnModal, Card, Board;
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
        }, function (_flarumComponentsSwitch) {
            Switch = _flarumComponentsSwitch.default;
        }, function (_modalsAddColumnModal) {
            AddColumnModal = _modalsAddColumnModal.default;
        }, function (_componentsCard) {
            Card = _componentsCard.default;
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

                        this.draggable = 'cards';
                        this.dragging = null;

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
                        }

                        this.tags.sort(function (a, b) {
                            return a.boardSort() - b.boardSort();
                        });

                        this.load().then(function (results) {
                            app.store.pushPayload(results);

                            _this4.discussions = {};
                            _this4.parseResults(results.data);

                            _this4.setDraggable();
                        }, function () {
                            _this4.loading = false;
                            m.redraw();

                            _this4.setDraggable();
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

                                _this6.updateColumnSorting(sorting);
                            });
                        }

                        this.dragging = true;
                    }
                }, {
                    key: "updateColumnSorting",
                    value: function updateColumnSorting(sorting) {
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

System.register("flagrow/aqueduct/search/MultiSelectionInput", ["flarum/components/Search", "flagrow/aqueduct/search/sources/UserSearchSource", "flagrow/aqueduct/search/sources/GroupSearchSource", "flarum/utils/ItemList", "flarum/utils/classList", "flarum/utils/extractText", "flarum/components/LoadingIndicator", "flagrow/aqueduct/helpers/assigneeLabel", "flarum/models/User", "flarum/models/Group"], function (_export, _context) {
    "use strict";

    var Search, UserSearchSource, GroupSearchSource, ItemList, classList, extractText, LoadingIndicator, assigneeLabel, User, Group, MultiSelectionInput;
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
            assigneeLabel = _flagrowAqueductHelpersAssigneeLabel.default;
        }, function (_flarumModelsUser) {
            User = _flarumModelsUser.default;
        }, function (_flarumModelsGroup) {
            Group = _flarumModelsGroup.default;
        }],
        execute: function () {
            MultiSelectionInput = function (_Search) {
                babelHelpers.inherits(MultiSelectionInput, _Search);

                function MultiSelectionInput() {
                    babelHelpers.classCallCheck(this, MultiSelectionInput);
                    return babelHelpers.possibleConstructorReturn(this, (MultiSelectionInput.__proto__ || Object.getPrototypeOf(MultiSelectionInput)).apply(this, arguments));
                }

                babelHelpers.createClass(MultiSelectionInput, [{
                    key: "config",
                    value: function config(isInitialized) {
                        var _this2 = this;

                        if (isInitialized) return;

                        var $search = this;

                        this.$('.Search-results').on('click', function (e) {
                            var target = _this2.$('.SearchResult.active');

                            $search.addSelection(target.data('index'));

                            $search.$('.MultiSelectionInput').focus();
                        });

                        this.$('.Search-results').on('touchstart', function (e) {
                            var target = _this2.$(e.target.parentNode);

                            $search.addSelection(target.data('index'));

                            $search.$('.MultiSelectionInput').focus();
                        });

                        babelHelpers.get(MultiSelectionInput.prototype.__proto__ || Object.getPrototypeOf(MultiSelectionInput.prototype), "config", this).call(this, isInitialized);
                    }
                }, {
                    key: "generateLabel",
                    value: function generateLabel(selection) {
                        // ..

                        var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    }
                }, {
                    key: "view",
                    value: function view() {
                        var _this3 = this;

                        if (typeof this.value() === 'undefined') {
                            this.value('');
                        }

                        return m('div', {
                            className: 'addSelectionModal-form-input'
                        }, [m('div', {
                            className: 'MultiSelectionInput-selected RecipientsLabel'
                        }, this.props.selected().toArray().map(function (selection) {
                            return _this3.generateLabel(selection, {
                                onclick: function onclick() {
                                    _this3.removeSelection(selection);
                                }
                            });
                        })), m('input', {
                            className: 'MultiSelectionInput FormControl ' + classList({
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
                    key: "addSelection",
                    value: function addSelection(value) {

                        var values = value.split(':'),
                            type = values[0],
                            id = values[1];

                        var recipient = this.findRecipient(type, id);

                        this.props.selected().add(value, recipient);

                        this.clear();
                    }
                }, {
                    key: "removeSelection",
                    value: function removeSelection(recipient) {
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
                return MultiSelectionInput;
            }(Search);

            _export("default", MultiSelectionInput);
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