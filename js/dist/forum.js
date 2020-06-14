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

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/yaml/browser/dist/Anchors.js":
/*!***************************************************!*\
  !*** ./node_modules/yaml/browser/dist/Anchors.js ***!
  \***************************************************/
/*! exports provided: Anchors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anchors", function() { return Anchors; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _schema_Alias__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schema/Alias */ "./node_modules/yaml/browser/dist/schema/Alias.js");
/* harmony import */ var _schema_Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schema/Map */ "./node_modules/yaml/browser/dist/schema/Map.js");
/* harmony import */ var _schema_Merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schema/Merge */ "./node_modules/yaml/browser/dist/schema/Merge.js");
/* harmony import */ var _schema_Scalar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js");
/* harmony import */ var _schema_Seq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schema/Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js");








var Anchors = /*#__PURE__*/function () {
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Anchors, null, [{
    key: "validAnchorNode",
    value: function validAnchorNode(node) {
      return node instanceof _schema_Scalar__WEBPACK_IMPORTED_MODULE_6__["Scalar"] || node instanceof _schema_Seq__WEBPACK_IMPORTED_MODULE_7__["YAMLSeq"] || node instanceof _schema_Map__WEBPACK_IMPORTED_MODULE_4__["YAMLMap"];
    }
  }]);

  function Anchors(prefix) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Anchors);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "map", {});

    this.prefix = prefix;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Anchors, [{
    key: "createAlias",
    value: function createAlias(node, name) {
      this.setAnchor(node, name);
      return new _schema_Alias__WEBPACK_IMPORTED_MODULE_3__["Alias"](node);
    }
  }, {
    key: "createMergePair",
    value: function createMergePair() {
      var _this = this;

      var merge = new _schema_Merge__WEBPACK_IMPORTED_MODULE_5__["Merge"]();

      for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      merge.value.items = sources.map(function (s) {
        if (s instanceof _schema_Alias__WEBPACK_IMPORTED_MODULE_3__["Alias"]) {
          if (s.source instanceof _schema_Map__WEBPACK_IMPORTED_MODULE_4__["YAMLMap"]) return s;
        } else if (s instanceof _schema_Map__WEBPACK_IMPORTED_MODULE_4__["YAMLMap"]) {
          return _this.createAlias(s);
        }

        throw new Error('Merge sources must be Map nodes or their Aliases');
      });
      return merge;
    }
  }, {
    key: "getName",
    value: function getName(node) {
      var map = this.map;
      return Object.keys(map).find(function (a) {
        return map[a] === node;
      });
    }
  }, {
    key: "getNode",
    value: function getNode(name) {
      return this.map[name];
    }
  }, {
    key: "newName",
    value: function newName(prefix) {
      if (!prefix) prefix = this.prefix;
      var names = Object.keys(this.map);

      for (var i = 1; true; ++i) {
        var name = "".concat(prefix).concat(i);
        if (!names.includes(name)) return name;
      }
    } // During parsing, map & aliases contain CST nodes

  }, {
    key: "resolveNodes",
    value: function resolveNodes() {
      var map = this.map,
          _cstAliases = this._cstAliases;
      Object.keys(map).forEach(function (a) {
        map[a] = map[a].resolved;
      });

      _cstAliases.forEach(function (a) {
        a.source = a.source.resolved;
      });

      delete this._cstAliases;
    }
  }, {
    key: "setAnchor",
    value: function setAnchor(node, name) {
      if (node != null && !Anchors.validAnchorNode(node)) {
        throw new Error('Anchors may only be set for Scalar, Seq and Map nodes');
      }

      if (name && /[\x00-\x19\s,[\]{}]/.test(name)) {
        throw new Error('Anchor names must not contain whitespace or control characters');
      }

      var map = this.map;
      var prev = node && Object.keys(map).find(function (a) {
        return map[a] === node;
      });

      if (prev) {
        if (!name) {
          return prev;
        } else if (prev !== name) {
          delete map[prev];
          map[name] = node;
        }
      } else {
        if (!name) {
          if (!node) return null;
          name = this.newName();
        }

        map[name] = node;
      }

      return name;
    }
  }]);

  return Anchors;
}();

/***/ }),

/***/ "./node_modules/yaml/browser/dist/Document.js":
/*!****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/Document.js ***!
  \****************************************************/
/*! exports provided: Document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _addComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addComment */ "./node_modules/yaml/browser/dist/addComment.js");
/* harmony import */ var _Anchors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Anchors */ "./node_modules/yaml/browser/dist/Anchors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _listTagNames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./listTagNames */ "./node_modules/yaml/browser/dist/listTagNames.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./schema */ "./node_modules/yaml/browser/dist/schema/index.js");
/* harmony import */ var _schema_Alias__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schema/Alias */ "./node_modules/yaml/browser/dist/schema/Alias.js");
/* harmony import */ var _schema_Collection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./schema/Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js");
/* harmony import */ var _schema_Node__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./schema/Node */ "./node_modules/yaml/browser/dist/schema/Node.js");
/* harmony import */ var _schema_Scalar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js");
/* harmony import */ var _toJSON__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./toJSON */ "./node_modules/yaml/browser/dist/toJSON.js");





function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }













var isCollectionItem = function isCollectionItem(node) {
  return node && [_constants__WEBPACK_IMPORTED_MODULE_6__["Type"].MAP_KEY, _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].MAP_VALUE, _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].SEQ_ITEM].includes(node.type);
};

var Document = /*#__PURE__*/function () {
  function Document(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Document);

    this.anchors = new _Anchors__WEBPACK_IMPORTED_MODULE_5__["Anchors"](options.anchorPrefix);
    this.commentBefore = null;
    this.comment = null;
    this.contents = null;
    this.directivesEndMarker = null;
    this.errors = [];
    this.options = options;
    this.schema = null;
    this.tagPrefixes = [];
    this.version = null;
    this.warnings = [];
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Document, [{
    key: "assertCollectionContents",
    value: function assertCollectionContents() {
      if (this.contents instanceof _schema_Collection__WEBPACK_IMPORTED_MODULE_11__["Collection"]) return true;
      throw new Error('Expected a YAML collection as document contents');
    }
  }, {
    key: "add",
    value: function add(value) {
      this.assertCollectionContents();
      return this.contents.add(value);
    }
  }, {
    key: "addIn",
    value: function addIn(path, value) {
      this.assertCollectionContents();
      this.contents.addIn(path, value);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this.assertCollectionContents();
      return this.contents.delete(key);
    }
  }, {
    key: "deleteIn",
    value: function deleteIn(path) {
      if (Object(_schema_Collection__WEBPACK_IMPORTED_MODULE_11__["isEmptyPath"])(path)) {
        if (this.contents == null) return false;
        this.contents = null;
        return true;
      }

      this.assertCollectionContents();
      return this.contents.deleteIn(path);
    }
  }, {
    key: "getDefaults",
    value: function getDefaults() {
      return Document.defaults[this.version] || Document.defaults[this.options.version] || {};
    }
  }, {
    key: "get",
    value: function get(key, keepScalar) {
      return this.contents instanceof _schema_Collection__WEBPACK_IMPORTED_MODULE_11__["Collection"] ? this.contents.get(key, keepScalar) : undefined;
    }
  }, {
    key: "getIn",
    value: function getIn(path, keepScalar) {
      if (Object(_schema_Collection__WEBPACK_IMPORTED_MODULE_11__["isEmptyPath"])(path)) return !keepScalar && this.contents instanceof _schema_Scalar__WEBPACK_IMPORTED_MODULE_13__["Scalar"] ? this.contents.value : this.contents;
      return this.contents instanceof _schema_Collection__WEBPACK_IMPORTED_MODULE_11__["Collection"] ? this.contents.getIn(path, keepScalar) : undefined;
    }
  }, {
    key: "has",
    value: function has(key) {
      return this.contents instanceof _schema_Collection__WEBPACK_IMPORTED_MODULE_11__["Collection"] ? this.contents.has(key) : false;
    }
  }, {
    key: "hasIn",
    value: function hasIn(path) {
      if (Object(_schema_Collection__WEBPACK_IMPORTED_MODULE_11__["isEmptyPath"])(path)) return this.contents !== undefined;
      return this.contents instanceof _schema_Collection__WEBPACK_IMPORTED_MODULE_11__["Collection"] ? this.contents.hasIn(path) : false;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.assertCollectionContents();
      this.contents.set(key, value);
    }
  }, {
    key: "setIn",
    value: function setIn(path, value) {
      if (Object(_schema_Collection__WEBPACK_IMPORTED_MODULE_11__["isEmptyPath"])(path)) this.contents = value;else {
        this.assertCollectionContents();
        this.contents.setIn(path, value);
      }
    }
  }, {
    key: "setSchema",
    value: function setSchema(id, customTags) {
      if (!id && !customTags && this.schema) return;
      if (typeof id === 'number') id = id.toFixed(1);

      if (id === '1.0' || id === '1.1' || id === '1.2') {
        if (this.version) this.version = id;else this.options.version = id;
        delete this.options.schema;
      } else if (id && typeof id === 'string') {
        this.options.schema = id;
      }

      if (Array.isArray(customTags)) this.options.customTags = customTags;
      var opt = Object.assign({}, this.getDefaults(), this.options);
      this.schema = new _schema__WEBPACK_IMPORTED_MODULE_9__["Schema"](opt);
    }
  }, {
    key: "parse",
    value: function parse(node, prevDoc) {
      if (this.options.keepCstNodes) this.cstNode = node;
      if (this.options.keepNodeTypes) this.type = 'DOCUMENT';
      var _node$directives = node.directives,
          directives = _node$directives === void 0 ? [] : _node$directives,
          _node$contents = node.contents,
          contents = _node$contents === void 0 ? [] : _node$contents,
          directivesEndMarker = node.directivesEndMarker,
          error = node.error,
          valueRange = node.valueRange;

      if (error) {
        if (!error.source) error.source = this;
        this.errors.push(error);
      }

      this.parseDirectives(directives, prevDoc);
      if (directivesEndMarker) this.directivesEndMarker = true;
      this.range = valueRange ? [valueRange.start, valueRange.end] : null;
      this.setSchema();
      this.anchors._cstAliases = [];
      this.parseContents(contents);
      this.anchors.resolveNodes();

      if (this.options.prettyErrors) {
        var _iterator = _createForOfIteratorHelper(this.errors),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _error = _step.value;
            if (_error instanceof _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLError"]) _error.makePretty();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = _createForOfIteratorHelper(this.warnings),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var warn = _step2.value;
            if (warn instanceof _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLError"]) warn.makePretty();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      return this;
    }
  }, {
    key: "parseDirectives",
    value: function parseDirectives(directives, prevDoc) {
      var _this = this;

      var directiveComments = [];
      var hasDirectives = false;
      directives.forEach(function (directive) {
        var comment = directive.comment,
            name = directive.name;

        switch (name) {
          case 'TAG':
            _this.resolveTagDirective(directive);

            hasDirectives = true;
            break;

          case 'YAML':
          case 'YAML:1.0':
            _this.resolveYamlDirective(directive);

            hasDirectives = true;
            break;

          default:
            if (name) {
              var msg = "YAML only supports %TAG and %YAML directives, and not %".concat(name);

              _this.warnings.push(new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLWarning"](directive, msg));
            }

        }

        if (comment) directiveComments.push(comment);
      });

      if (prevDoc && !hasDirectives && '1.1' === (this.version || prevDoc.version || this.options.version)) {
        var copyTagPrefix = function copyTagPrefix(_ref) {
          var handle = _ref.handle,
              prefix = _ref.prefix;
          return {
            handle: handle,
            prefix: prefix
          };
        };

        this.tagPrefixes = prevDoc.tagPrefixes.map(copyTagPrefix);
        this.version = prevDoc.version;
      }

      this.commentBefore = directiveComments.join('\n') || null;
    }
  }, {
    key: "parseContents",
    value: function parseContents(contents) {
      var _this2 = this;

      var comments = {
        before: [],
        after: []
      };
      var contentNodes = [];
      var spaceBefore = false;
      contents.forEach(function (node) {
        if (node.valueRange) {
          if (contentNodes.length === 1) {
            var msg = 'Document is not valid YAML (bad indentation?)';

            _this2.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSyntaxError"](node, msg));
          }

          var res = _this2.resolveNode(node);

          if (spaceBefore) {
            res.spaceBefore = true;
            spaceBefore = false;
          }

          contentNodes.push(res);
        } else if (node.comment !== null) {
          var cc = contentNodes.length === 0 ? comments.before : comments.after;
          cc.push(node.comment);
        } else if (node.type === _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].BLANK_LINE) {
          spaceBefore = true;

          if (contentNodes.length === 0 && comments.before.length > 0 && !_this2.commentBefore) {
            // space-separated comments at start are parsed as document comments
            _this2.commentBefore = comments.before.join('\n');
            comments.before = [];
          }
        }
      });

      switch (contentNodes.length) {
        case 0:
          this.contents = null;
          comments.after = comments.before;
          break;

        case 1:
          this.contents = contentNodes[0];

          if (this.contents) {
            var cb = comments.before.join('\n') || null;

            if (cb) {
              var cbNode = this.contents instanceof _schema_Collection__WEBPACK_IMPORTED_MODULE_11__["Collection"] && this.contents.items[0] ? this.contents.items[0] : this.contents;
              cbNode.commentBefore = cbNode.commentBefore ? "".concat(cb, "\n").concat(cbNode.commentBefore) : cb;
            }
          } else {
            comments.after = comments.before.concat(comments.after);
          }

          break;

        default:
          this.contents = contentNodes;

          if (this.contents[0]) {
            this.contents[0].commentBefore = comments.before.join('\n') || null;
          } else {
            comments.after = comments.before.concat(comments.after);
          }

      }

      this.comment = comments.after.join('\n') || null;
    }
  }, {
    key: "resolveTagDirective",
    value: function resolveTagDirective(directive) {
      var _directive$parameters = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(directive.parameters, 2),
          handle = _directive$parameters[0],
          prefix = _directive$parameters[1];

      if (handle && prefix) {
        if (this.tagPrefixes.every(function (p) {
          return p.handle !== handle;
        })) {
          this.tagPrefixes.push({
            handle: handle,
            prefix: prefix
          });
        } else {
          var msg = 'The %TAG directive must only be given at most once per handle in the same document.';
          this.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSemanticError"](directive, msg));
        }
      } else {
        var _msg = 'Insufficient parameters given for %TAG directive';
        this.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSemanticError"](directive, _msg));
      }
    }
  }, {
    key: "resolveYamlDirective",
    value: function resolveYamlDirective(directive) {
      var _directive$parameters2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(directive.parameters, 1),
          version = _directive$parameters2[0];

      if (directive.name === 'YAML:1.0') version = '1.0';

      if (this.version) {
        var msg = 'The %YAML directive must only be given at most once per document.';
        this.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSemanticError"](directive, msg));
      }

      if (!version) {
        var _msg2 = 'Insufficient parameters given for %YAML directive';
        this.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSemanticError"](directive, _msg2));
      } else {
        if (!Document.defaults[version]) {
          var v0 = this.version || this.options.version;

          var _msg3 = "Document will be parsed as YAML ".concat(v0, " rather than YAML ").concat(version);

          this.warnings.push(new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLWarning"](directive, _msg3));
        }

        this.version = version;
      }
    }
  }, {
    key: "resolveTagName",
    value: function resolveTagName(node) {
      var tag = node.tag,
          type = node.type;
      var nonSpecific = false;

      if (tag) {
        var handle = tag.handle,
            suffix = tag.suffix,
            verbatim = tag.verbatim;

        if (verbatim) {
          if (verbatim !== '!' && verbatim !== '!!') return verbatim;
          var msg = "Verbatim tags aren't resolved, so ".concat(verbatim, " is invalid.");
          this.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSemanticError"](node, msg));
        } else if (handle === '!' && !suffix) {
          nonSpecific = true;
        } else {
          var prefix = this.tagPrefixes.find(function (p) {
            return p.handle === handle;
          });

          if (!prefix) {
            var dtp = this.getDefaults().tagPrefixes;
            if (dtp) prefix = dtp.find(function (p) {
              return p.handle === handle;
            });
          }

          if (prefix) {
            if (suffix) {
              if (handle === '!' && (this.version || this.options.version) === '1.0') {
                if (suffix[0] === '^') return suffix;

                if (/[:/]/.test(suffix)) {
                  // word/foo -> tag:word.yaml.org,2002:foo
                  var vocab = suffix.match(/^([a-z0-9-]+)\/(.*)/i);
                  return vocab ? "tag:".concat(vocab[1], ".yaml.org,2002:").concat(vocab[2]) : "tag:".concat(suffix);
                }
              }

              return prefix.prefix + decodeURIComponent(suffix);
            }

            this.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSemanticError"](node, "The ".concat(handle, " tag has no suffix.")));
          } else {
            var _msg4 = "The ".concat(handle, " tag handle is non-default and was not declared.");

            this.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSemanticError"](node, _msg4));
          }
        }
      }

      switch (type) {
        case _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].BLOCK_FOLDED:
        case _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].BLOCK_LITERAL:
        case _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].QUOTE_DOUBLE:
        case _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].QUOTE_SINGLE:
          return _schema__WEBPACK_IMPORTED_MODULE_9__["Schema"].defaultTags.STR;

        case _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].FLOW_MAP:
        case _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].MAP:
          return _schema__WEBPACK_IMPORTED_MODULE_9__["Schema"].defaultTags.MAP;

        case _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].FLOW_SEQ:
        case _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].SEQ:
          return _schema__WEBPACK_IMPORTED_MODULE_9__["Schema"].defaultTags.SEQ;

        case _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].PLAIN:
          return nonSpecific ? _schema__WEBPACK_IMPORTED_MODULE_9__["Schema"].defaultTags.STR : null;

        default:
          return null;
      }
    }
  }, {
    key: "resolveNode",
    value: function resolveNode(node) {
      if (!node) return null;
      var anchors = this.anchors,
          errors = this.errors,
          schema = this.schema;
      var hasAnchor = false;
      var hasTag = false;
      var comments = {
        before: [],
        after: []
      };
      var props = isCollectionItem(node.context.parent) ? node.context.parent.props.concat(node.props) : node.props;

      var _iterator3 = _createForOfIteratorHelper(props),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _step3.value,
              start = _step3$value.start,
              end = _step3$value.end;

          switch (node.context.src[start]) {
            case _constants__WEBPACK_IMPORTED_MODULE_6__["Char"].COMMENT:
              {
                if (!node.commentHasRequiredWhitespace(start)) {
                  var _msg7 = 'Comments must be separated from other tokens by white space characters';
                  errors.push(new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSemanticError"](node, _msg7));
                }

                var c = node.context.src.slice(start + 1, end);
                var header = node.header,
                    valueRange = node.valueRange;

                if (valueRange && (start > valueRange.start || header && start > header.start)) {
                  comments.after.push(c);
                } else {
                  comments.before.push(c);
                }
              }
              break;

            case _constants__WEBPACK_IMPORTED_MODULE_6__["Char"].ANCHOR:
              if (hasAnchor) {
                var _msg8 = 'A node can have at most one anchor';
                errors.push(new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSemanticError"](node, _msg8));
              }

              hasAnchor = true;
              break;

            case _constants__WEBPACK_IMPORTED_MODULE_6__["Char"].TAG:
              if (hasTag) {
                var _msg9 = 'A node can have at most one tag';
                errors.push(new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSemanticError"](node, _msg9));
              }

              hasTag = true;
              break;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (hasAnchor) {
        var name = node.anchor;
        var prev = anchors.getNode(name); // At this point, aliases for any preceding node with the same anchor
        // name have already been resolved, so it may safely be renamed.

        if (prev) anchors.map[anchors.newName(name)] = prev; // During parsing, we need to store the CST node in anchors.map as
        // anchors need to be available during resolution to allow for
        // circular references.

        anchors.map[name] = node;
      }

      var res;

      if (node.type === _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].ALIAS) {
        if (hasAnchor || hasTag) {
          var msg = 'An alias node must not specify any properties';
          errors.push(new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSemanticError"](node, msg));
        }

        var _name = node.rawValue;
        var src = anchors.getNode(_name);

        if (!src) {
          var _msg5 = "Aliased anchor not found: ".concat(_name);

          errors.push(new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLReferenceError"](node, _msg5));
          return null;
        } // Lazy resolution for circular references


        res = new _schema_Alias__WEBPACK_IMPORTED_MODULE_10__["Alias"](src);

        anchors._cstAliases.push(res);
      } else {
        var tagName = this.resolveTagName(node);

        if (tagName) {
          res = schema.resolveNodeWithFallback(this, node, tagName);
        } else {
          if (node.type !== _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].PLAIN) {
            var _msg6 = "Failed to resolve ".concat(node.type, " node here");

            errors.push(new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSyntaxError"](node, _msg6));
            return null;
          }

          try {
            res = schema.resolveScalar(node.strValue || '');
          } catch (error) {
            if (!error.source) error.source = node;
            errors.push(error);
            return null;
          }
        }
      }

      if (res) {
        res.range = [node.range.start, node.range.end];
        if (this.options.keepCstNodes) res.cstNode = node;
        if (this.options.keepNodeTypes) res.type = node.type;
        var cb = comments.before.join('\n');

        if (cb) {
          res.commentBefore = res.commentBefore ? "".concat(res.commentBefore, "\n").concat(cb) : cb;
        }

        var ca = comments.after.join('\n');
        if (ca) res.comment = res.comment ? "".concat(res.comment, "\n").concat(ca) : ca;
      }

      return node.resolved = res;
    }
  }, {
    key: "listNonDefaultTags",
    value: function listNonDefaultTags() {
      return Object(_listTagNames__WEBPACK_IMPORTED_MODULE_8__["listTagNames"])(this.contents).filter(function (t) {
        return t.indexOf(_schema__WEBPACK_IMPORTED_MODULE_9__["Schema"].defaultPrefix) !== 0;
      });
    }
  }, {
    key: "setTagPrefix",
    value: function setTagPrefix(handle, prefix) {
      if (handle[0] !== '!' || handle[handle.length - 1] !== '!') throw new Error('Handle must start and end with !');

      if (prefix) {
        var prev = this.tagPrefixes.find(function (p) {
          return p.handle === handle;
        });
        if (prev) prev.prefix = prefix;else this.tagPrefixes.push({
          handle: handle,
          prefix: prefix
        });
      } else {
        this.tagPrefixes = this.tagPrefixes.filter(function (p) {
          return p.handle !== handle;
        });
      }
    }
  }, {
    key: "stringifyTag",
    value: function stringifyTag(tag) {
      if ((this.version || this.options.version) === '1.0') {
        var priv = tag.match(/^tag:private\.yaml\.org,2002:([^:/]+)$/);
        if (priv) return '!' + priv[1];
        var vocab = tag.match(/^tag:([a-zA-Z0-9-]+)\.yaml\.org,2002:(.*)/);
        return vocab ? "!".concat(vocab[1], "/").concat(vocab[2]) : "!".concat(tag.replace(/^tag:/, ''));
      } else {
        var p = this.tagPrefixes.find(function (p) {
          return tag.indexOf(p.prefix) === 0;
        });

        if (!p) {
          var dtp = this.getDefaults().tagPrefixes;
          p = dtp && dtp.find(function (p) {
            return tag.indexOf(p.prefix) === 0;
          });
        }

        if (!p) return tag[0] === '!' ? tag : "!<".concat(tag, ">");
        var suffix = tag.substr(p.prefix.length).replace(/[!,[\]{}]/g, function (ch) {
          return {
            '!': '%21',
            ',': '%2C',
            '[': '%5B',
            ']': '%5D',
            '{': '%7B',
            '}': '%7D'
          }[ch];
        });
        return p.handle + suffix;
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON(arg, onAnchor) {
      var _this3 = this;

      var _this$options = this.options,
          keepBlobsInJSON = _this$options.keepBlobsInJSON,
          mapAsMap = _this$options.mapAsMap,
          maxAliasCount = _this$options.maxAliasCount;
      var keep = keepBlobsInJSON && (typeof arg !== 'string' || !(this.contents instanceof _schema_Scalar__WEBPACK_IMPORTED_MODULE_13__["Scalar"]));
      var ctx = {
        doc: this,
        indentStep: '  ',
        keep: keep,
        mapAsMap: keep && !!mapAsMap,
        maxAliasCount: maxAliasCount
      };
      var anchorNames = Object.keys(this.anchors.map);
      if (anchorNames.length > 0) ctx.anchors = new Map(anchorNames.map(function (name) {
        return [_this3.anchors.map[name], {
          alias: [],
          aliasCount: 0,
          count: 1
        }];
      }));

      var res = Object(_toJSON__WEBPACK_IMPORTED_MODULE_14__["toJSON"])(this.contents, arg, ctx);

      if (typeof onAnchor === 'function' && ctx.anchors) {
        var _iterator4 = _createForOfIteratorHelper(ctx.anchors.values()),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _step4$value = _step4.value,
                count = _step4$value.count,
                _res = _step4$value.res;
            onAnchor(_res, count);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }

      return res;
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.errors.length > 0) throw new Error('Document with errors cannot be stringified');
      var indentSize = this.options.indent;

      if (!Number.isInteger(indentSize) || indentSize <= 0) {
        var s = JSON.stringify(indentSize);
        throw new Error("\"indent\" option must be a positive integer, not ".concat(s));
      }

      this.setSchema();
      var lines = [];
      var hasDirectives = false;

      if (this.version) {
        var vd = '%YAML 1.2';

        if (this.schema.name === 'yaml-1.1') {
          if (this.version === '1.0') vd = '%YAML:1.0';else if (this.version === '1.1') vd = '%YAML 1.1';
        }

        lines.push(vd);
        hasDirectives = true;
      }

      var tagNames = this.listNonDefaultTags();
      this.tagPrefixes.forEach(function (_ref2) {
        var handle = _ref2.handle,
            prefix = _ref2.prefix;

        if (tagNames.some(function (t) {
          return t.indexOf(prefix) === 0;
        })) {
          lines.push("%TAG ".concat(handle, " ").concat(prefix));
          hasDirectives = true;
        }
      });
      if (hasDirectives || this.directivesEndMarker) lines.push('---');

      if (this.commentBefore) {
        if (hasDirectives || !this.directivesEndMarker) lines.unshift('');
        lines.unshift(this.commentBefore.replace(/^/gm, '#'));
      }

      var ctx = {
        anchors: {},
        doc: this,
        indent: '',
        indentStep: ' '.repeat(indentSize)
      };
      var chompKeep = false;
      var contentComment = null;

      if (this.contents) {
        if (this.contents instanceof _schema_Node__WEBPACK_IMPORTED_MODULE_12__["Node"]) {
          if (this.contents.spaceBefore && (hasDirectives || this.directivesEndMarker)) lines.push('');
          if (this.contents.commentBefore) lines.push(this.contents.commentBefore.replace(/^/gm, '#')); // top-level block scalars need to be indented if followed by a comment

          ctx.forceBlockIndent = !!this.comment;
          contentComment = this.contents.comment;
        }

        var onChompKeep = contentComment ? null : function () {
          return chompKeep = true;
        };
        var body = this.schema.stringify(this.contents, ctx, function () {
          return contentComment = null;
        }, onChompKeep);
        lines.push(Object(_addComment__WEBPACK_IMPORTED_MODULE_4__["addComment"])(body, '', contentComment));
      } else if (this.contents !== undefined) {
        lines.push(this.schema.stringify(this.contents, ctx));
      }

      if (this.comment) {
        if ((!chompKeep || contentComment) && lines[lines.length - 1] !== '') lines.push('');
        lines.push(this.comment.replace(/^/gm, '#'));
      }

      return lines.join('\n') + '\n';
    }
  }]);

  return Document;
}();

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Document, "defaults", {
  '1.0': {
    schema: 'yaml-1.1',
    merge: true,
    tagPrefixes: [{
      handle: '!',
      prefix: _schema__WEBPACK_IMPORTED_MODULE_9__["Schema"].defaultPrefix
    }, {
      handle: '!!',
      prefix: 'tag:private.yaml.org,2002:'
    }]
  },
  '1.1': {
    schema: 'yaml-1.1',
    merge: true,
    tagPrefixes: [{
      handle: '!',
      prefix: '!'
    }, {
      handle: '!!',
      prefix: _schema__WEBPACK_IMPORTED_MODULE_9__["Schema"].defaultPrefix
    }]
  },
  '1.2': {
    schema: 'core',
    merge: false,
    tagPrefixes: [{
      handle: '!',
      prefix: '!'
    }, {
      handle: '!!',
      prefix: _schema__WEBPACK_IMPORTED_MODULE_9__["Schema"].defaultPrefix
    }]
  }
});

/***/ }),

/***/ "./node_modules/yaml/browser/dist/addComment.js":
/*!******************************************************!*\
  !*** ./node_modules/yaml/browser/dist/addComment.js ***!
  \******************************************************/
/*! exports provided: addCommentBefore, addComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentBefore", function() { return addCommentBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
function addCommentBefore(str, indent, comment) {
  if (!comment) return str;
  var cc = comment.replace(/[\s\S]^/gm, "$&".concat(indent, "#"));
  return "#".concat(cc, "\n").concat(indent).concat(str);
}
function addComment(str, indent, comment) {
  return !comment ? str : comment.indexOf('\n') === -1 ? "".concat(str, " #").concat(comment) : "".concat(str, "\n") + comment.replace(/^/gm, "".concat(indent || '', "#"));
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/constants.js ***!
  \*****************************************************/
/*! exports provided: Char, Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Char", function() { return Char; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
var Char = {
  ANCHOR: '&',
  COMMENT: '#',
  TAG: '!',
  DIRECTIVES_END: '-',
  DOCUMENT_END: '.'
};
var Type = {
  ALIAS: 'ALIAS',
  BLANK_LINE: 'BLANK_LINE',
  BLOCK_FOLDED: 'BLOCK_FOLDED',
  BLOCK_LITERAL: 'BLOCK_LITERAL',
  COMMENT: 'COMMENT',
  DIRECTIVE: 'DIRECTIVE',
  DOCUMENT: 'DOCUMENT',
  FLOW_MAP: 'FLOW_MAP',
  FLOW_SEQ: 'FLOW_SEQ',
  MAP: 'MAP',
  MAP_KEY: 'MAP_KEY',
  MAP_VALUE: 'MAP_VALUE',
  PLAIN: 'PLAIN',
  QUOTE_DOUBLE: 'QUOTE_DOUBLE',
  QUOTE_SINGLE: 'QUOTE_SINGLE',
  SEQ: 'SEQ',
  SEQ_ITEM: 'SEQ_ITEM'
};

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/Alias.js":
/*!*****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/Alias.js ***!
  \*****************************************************/
/*! exports provided: Alias */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alias", function() { return Alias; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js");






function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Alias = /*#__PURE__*/function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Alias, _Node);

  var _super = _createSuper(Alias);

  function Alias() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Alias);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Alias, [{
    key: "parse",

    /**
     * Parses an *alias from the source
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this scalar
     */
    value: function parse(context, start) {
      this.context = context;
      var src = context.src;
      var offset = _Node__WEBPACK_IMPORTED_MODULE_5__["Node"].endOfIdentifier(src, start + 1);
      this.valueRange = new _Range__WEBPACK_IMPORTED_MODULE_6__["Range"](start + 1, offset);
      offset = _Node__WEBPACK_IMPORTED_MODULE_5__["Node"].endOfWhiteSpace(src, offset);
      offset = this.parseComment(offset);
      return offset;
    }
  }]);

  return Alias;
}(_Node__WEBPACK_IMPORTED_MODULE_5__["Node"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/BlankLine.js":
/*!*********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/BlankLine.js ***!
  \*********************************************************/
/*! exports provided: BlankLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankLine", function() { return BlankLine; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js");






function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var BlankLine = /*#__PURE__*/function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(BlankLine, _Node);

  var _super = _createSuper(BlankLine);

  function BlankLine() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BlankLine);

    return _super.call(this, _constants__WEBPACK_IMPORTED_MODULE_5__["Type"].BLANK_LINE);
  }
  /* istanbul ignore next */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BlankLine, [{
    key: "parse",

    /**
     * Parses a blank line from the source
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first \n character
     * @returns {number} - Index of the character after this
     */
    value: function parse(context, start) {
      this.context = context;
      this.range = new _Range__WEBPACK_IMPORTED_MODULE_7__["Range"](start, start + 1);
      return start + 1;
    }
  }, {
    key: "includesTrailingLines",
    get: function get() {
      // This is never called from anywhere, but if it were,
      // this is the value it should return.
      return true;
    }
  }]);

  return BlankLine;
}(_Node__WEBPACK_IMPORTED_MODULE_6__["Node"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/BlockValue.js":
/*!**********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/BlockValue.js ***!
  \**********************************************************/
/*! exports provided: Chomp, BlockValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chomp", function() { return Chomp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockValue", function() { return BlockValue; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js");







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Chomp = {
  CLIP: 'CLIP',
  KEEP: 'KEEP',
  STRIP: 'STRIP'
};
var BlockValue = /*#__PURE__*/function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(BlockValue, _Node);

  var _super = _createSuper(BlockValue);

  function BlockValue(type, props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BlockValue);

    _this = _super.call(this, type, props);
    _this.blockIndent = null;
    _this.chomping = Chomp.CLIP;
    _this.header = null;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BlockValue, [{
    key: "parseBlockHeader",
    value: function parseBlockHeader(start) {
      var src = this.context.src;
      var offset = start + 1;
      var bi = '';

      while (true) {
        var ch = src[offset];

        switch (ch) {
          case '-':
            this.chomping = Chomp.STRIP;
            break;

          case '+':
            this.chomping = Chomp.KEEP;
            break;

          case '0':
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':
            bi += ch;
            break;

          default:
            this.blockIndent = Number(bi) || null;
            this.header = new _Range__WEBPACK_IMPORTED_MODULE_8__["Range"](start, offset);
            return offset;
        }

        offset += 1;
      }
    }
  }, {
    key: "parseBlockValue",
    value: function parseBlockValue(start) {
      var _this$context = this.context,
          indent = _this$context.indent,
          src = _this$context.src;
      var offset = start;
      var valueEnd = start;
      var bi = this.blockIndent ? indent + this.blockIndent - 1 : indent;
      var minBlockIndent = 1;

      for (var ch = src[offset]; ch === '\n'; ch = src[offset]) {
        offset += 1;
        if (_Node__WEBPACK_IMPORTED_MODULE_7__["Node"].atDocumentBoundary(src, offset)) break;
        var end = _Node__WEBPACK_IMPORTED_MODULE_7__["Node"].endOfBlockIndent(src, bi, offset); // should not include tab?

        if (end === null) break;

        if (!this.blockIndent) {
          // no explicit block indent, none yet detected
          var lineIndent = end - (offset + indent);

          if (src[end] !== '\n') {
            // first line with non-whitespace content
            if (lineIndent < minBlockIndent) {
              offset -= 1;
              break;
            }

            this.blockIndent = lineIndent;
            bi = indent + this.blockIndent - 1;
          } else if (lineIndent > minBlockIndent) {
            // empty line with more whitespace
            minBlockIndent = lineIndent;
          }
        }

        if (src[end] === '\n') {
          offset = end;
        } else {
          offset = valueEnd = _Node__WEBPACK_IMPORTED_MODULE_7__["Node"].endOfLine(src, end);
        }
      }

      if (this.chomping !== Chomp.KEEP) {
        offset = src[valueEnd] ? valueEnd + 1 : valueEnd;
      }

      this.valueRange = new _Range__WEBPACK_IMPORTED_MODULE_8__["Range"](start + 1, offset);
      return offset;
    }
    /**
     * Parses a block value from the source
     *
     * Accepted forms are:
     * ```
     * BS
     * block
     * lines
     *
     * BS #comment
     * block
     * lines
     * ```
     * where the block style BS matches the regexp `[|>][-+1-9]*` and block lines
     * are empty or have an indent level greater than `indent`.
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this block
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var src = context.src;
      var offset = this.parseBlockHeader(start);
      offset = _Node__WEBPACK_IMPORTED_MODULE_7__["Node"].endOfWhiteSpace(src, offset);
      offset = this.parseComment(offset);
      offset = this.parseBlockValue(offset);
      return offset;
    }
  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      offset = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(BlockValue.prototype), "setOrigRanges", this).call(this, cr, offset);
      return this.header ? this.header.setOrigRange(cr, offset) : offset;
    }
  }, {
    key: "includesTrailingLines",
    get: function get() {
      return this.chomping === Chomp.KEEP;
    }
  }, {
    key: "strValue",
    get: function get() {
      if (!this.valueRange || !this.context) return null;
      var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
      var _this$context2 = this.context,
          indent = _this$context2.indent,
          src = _this$context2.src;
      if (this.valueRange.isEmpty()) return '';
      var lastNewLine = null;
      var ch = src[end - 1];

      while (ch === '\n' || ch === '\t' || ch === ' ') {
        end -= 1;

        if (end <= start) {
          if (this.chomping === Chomp.KEEP) break;else return ''; // probably never happens
        }

        if (ch === '\n') lastNewLine = end;
        ch = src[end - 1];
      }

      var keepStart = end + 1;

      if (lastNewLine) {
        if (this.chomping === Chomp.KEEP) {
          keepStart = lastNewLine;
          end = this.valueRange.end;
        } else {
          end = lastNewLine;
        }
      }

      var bi = indent + this.blockIndent;
      var folded = this.type === _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].BLOCK_FOLDED;
      var atStart = true;
      var str = '';
      var sep = '';
      var prevMoreIndented = false;

      for (var i = start; i < end; ++i) {
        for (var j = 0; j < bi; ++j) {
          if (src[i] !== ' ') break;
          i += 1;
        }

        var _ch = src[i];

        if (_ch === '\n') {
          if (sep === '\n') str += '\n';else sep = '\n';
        } else {
          var lineEnd = _Node__WEBPACK_IMPORTED_MODULE_7__["Node"].endOfLine(src, i);
          var line = src.slice(i, lineEnd);
          i = lineEnd;

          if (folded && (_ch === ' ' || _ch === '\t') && i < keepStart) {
            if (sep === ' ') sep = '\n';else if (!prevMoreIndented && !atStart && sep === '\n') sep = '\n\n';
            str += sep + line; //+ ((lineEnd < end && src[lineEnd]) || '')

            sep = lineEnd < end && src[lineEnd] || '';
            prevMoreIndented = true;
          } else {
            str += sep + line;
            sep = folded && i < keepStart ? ' ' : '\n';
            prevMoreIndented = false;
          }

          if (atStart && line !== '') atStart = false;
        }
      }

      return this.chomping === Chomp.STRIP ? str : str + '\n';
    }
  }]);

  return BlockValue;
}(_Node__WEBPACK_IMPORTED_MODULE_7__["Node"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/Collection.js":
/*!**********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/Collection.js ***!
  \**********************************************************/
/*! exports provided: grabCollectionEndComments, Collection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grabCollectionEndComments", function() { return grabCollectionEndComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _BlankLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BlankLine */ "./node_modules/yaml/browser/dist/cst/BlankLine.js");
/* harmony import */ var _CollectionItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CollectionItem */ "./node_modules/yaml/browser/dist/cst/CollectionItem.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Comment */ "./node_modules/yaml/browser/dist/cst/Comment.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js");







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







function grabCollectionEndComments(node) {
  var cnode = node;

  while (cnode instanceof _CollectionItem__WEBPACK_IMPORTED_MODULE_8__["CollectionItem"]) {
    cnode = cnode.node;
  }

  if (!(cnode instanceof Collection)) return null;
  var len = cnode.items.length;
  var ci = -1;

  for (var i = len - 1; i >= 0; --i) {
    var n = cnode.items[i];

    if (n.type === _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].COMMENT) {
      // Keep sufficiently indented comments with preceding node
      var _n$context = n.context,
          indent = _n$context.indent,
          lineStart = _n$context.lineStart;
      if (indent > 0 && n.range.start >= lineStart + indent) break;
      ci = i;
    } else if (n.type === _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].BLANK_LINE) ci = i;else break;
  }

  if (ci === -1) return null;
  var ca = cnode.items.splice(ci, len - ci);
  var prevEnd = ca[0].range.start;

  while (true) {
    cnode.range.end = prevEnd;
    if (cnode.valueRange && cnode.valueRange.end > prevEnd) cnode.valueRange.end = prevEnd;
    if (cnode === node) break;
    cnode = cnode.context.parent;
  }

  return ca;
}
var Collection = /*#__PURE__*/function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Collection, _Node);

  var _super = _createSuper(Collection);

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Collection, null, [{
    key: "nextContentHasIndent",
    value: function nextContentHasIndent(src, offset, indent) {
      var lineStart = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfLine(src, offset) + 1;
      offset = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfWhiteSpace(src, lineStart);
      var ch = src[offset];
      if (!ch) return false;
      if (offset >= lineStart + indent) return true;
      if (ch !== '#' && ch !== '\n') return false;
      return Collection.nextContentHasIndent(src, offset, indent);
    }
  }]);

  function Collection(firstItem) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Collection);

    _this = _super.call(this, firstItem.type === _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].SEQ_ITEM ? _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].SEQ : _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].MAP);

    for (var i = firstItem.props.length - 1; i >= 0; --i) {
      if (firstItem.props[i].start < firstItem.context.lineStart) {
        // props on previous line are assumed by the collection
        _this.props = firstItem.props.slice(0, i + 1);
        firstItem.props = firstItem.props.slice(i + 1);
        var itemRange = firstItem.props[0] || firstItem.valueRange;
        firstItem.range.start = itemRange.start;
        break;
      }
    }

    _this.items = [firstItem];
    var ec = grabCollectionEndComments(firstItem);
    if (ec) Array.prototype.push.apply(_this.items, ec);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Collection, [{
    key: "parse",

    /**
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this
     */
    value: function parse(context, start) {
      this.context = context;
      var parseNode = context.parseNode,
          src = context.src; // It's easier to recalculate lineStart here rather than tracking down the
      // last context from which to read it -- eemeli/yaml#2

      var lineStart = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].startOfLine(src, start);
      var firstItem = this.items[0]; // First-item context needs to be correct for later comment handling
      // -- eemeli/yaml#17

      firstItem.context.parent = this;
      this.valueRange = _Range__WEBPACK_IMPORTED_MODULE_11__["Range"].copy(firstItem.valueRange);
      var indent = firstItem.range.start - firstItem.context.lineStart;
      var offset = start;
      offset = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].normalizeOffset(src, offset);
      var ch = src[offset];
      var atLineStart = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfWhiteSpace(src, lineStart) === offset;
      var prevIncludesTrailingLines = false;

      while (ch) {
        while (ch === '\n' || ch === '#') {
          if (atLineStart && ch === '\n' && !prevIncludesTrailingLines) {
            var blankLine = new _BlankLine__WEBPACK_IMPORTED_MODULE_7__["BlankLine"]();
            offset = blankLine.parse({
              src: src
            }, offset);
            this.valueRange.end = offset;

            if (offset >= src.length) {
              ch = null;
              break;
            }

            this.items.push(blankLine);
            offset -= 1; // blankLine.parse() consumes terminal newline
          } else if (ch === '#') {
            if (offset < lineStart + indent && !Collection.nextContentHasIndent(src, offset, indent)) {
              return offset;
            }

            var comment = new _Comment__WEBPACK_IMPORTED_MODULE_9__["Comment"]();
            offset = comment.parse({
              indent: indent,
              lineStart: lineStart,
              src: src
            }, offset);
            this.items.push(comment);
            this.valueRange.end = offset;

            if (offset >= src.length) {
              ch = null;
              break;
            }
          }

          lineStart = offset + 1;
          offset = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfIndent(src, lineStart);

          if (_Node__WEBPACK_IMPORTED_MODULE_10__["Node"].atBlank(src, offset)) {
            var wsEnd = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfWhiteSpace(src, offset);
            var next = src[wsEnd];

            if (!next || next === '\n' || next === '#') {
              offset = wsEnd;
            }
          }

          ch = src[offset];
          atLineStart = true;
        }

        if (!ch) {
          break;
        }

        if (offset !== lineStart + indent && (atLineStart || ch !== ':')) {
          if (lineStart > start) offset = lineStart;
          break;
        }

        if (firstItem.type === _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].SEQ_ITEM !== (ch === '-')) {
          var typeswitch = true;

          if (ch === '-') {
            // map key may start with -, as long as it's followed by a non-whitespace char
            var _next = src[offset + 1];
            typeswitch = !_next || _next === '\n' || _next === '\t' || _next === ' ';
          }

          if (typeswitch) {
            if (lineStart > start) offset = lineStart;
            break;
          }
        }

        var node = parseNode({
          atLineStart: atLineStart,
          inCollection: true,
          indent: indent,
          lineStart: lineStart,
          parent: this
        }, offset);
        if (!node) return offset; // at next document start

        this.items.push(node);
        this.valueRange.end = node.valueRange.end;
        offset = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].normalizeOffset(src, node.range.end);
        ch = src[offset];
        atLineStart = false;
        prevIncludesTrailingLines = node.includesTrailingLines; // Need to reset lineStart and atLineStart here if preceding node's range
        // has advanced to check the current line's indentation level
        // -- eemeli/yaml#10 & eemeli/yaml#38

        if (ch) {
          var ls = offset - 1;
          var prev = src[ls];

          while (prev === ' ' || prev === '\t') {
            prev = src[--ls];
          }

          if (prev === '\n') {
            lineStart = ls + 1;
            atLineStart = true;
          }
        }

        var ec = grabCollectionEndComments(node);
        if (ec) Array.prototype.push.apply(this.items, ec);
      }

      return offset;
    }
  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      offset = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Collection.prototype), "setOrigRanges", this).call(this, cr, offset);
      this.items.forEach(function (node) {
        offset = node.setOrigRanges(cr, offset);
      });
      return offset;
    }
  }, {
    key: "toString",
    value: function toString() {
      var src = this.context.src,
          items = this.items,
          range = this.range,
          value = this.value;
      if (value != null) return value;
      var str = src.slice(range.start, items[0].range.start) + String(items[0]);

      for (var i = 1; i < items.length; ++i) {
        var item = items[i];
        var _item$context = item.context,
            atLineStart = _item$context.atLineStart,
            indent = _item$context.indent;
        if (atLineStart) for (var _i = 0; _i < indent; ++_i) {
          str += ' ';
        }
        str += String(item);
      }

      return _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].addStringTerminator(src, range.end, str);
    }
  }, {
    key: "includesTrailingLines",
    get: function get() {
      return this.items.length > 0;
    }
  }]);

  return Collection;
}(_Node__WEBPACK_IMPORTED_MODULE_10__["Node"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/CollectionItem.js":
/*!**************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/CollectionItem.js ***!
  \**************************************************************/
/*! exports provided: CollectionItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionItem", function() { return CollectionItem; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _BlankLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BlankLine */ "./node_modules/yaml/browser/dist/cst/BlankLine.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js");







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var CollectionItem = /*#__PURE__*/function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(CollectionItem, _Node);

  var _super = _createSuper(CollectionItem);

  function CollectionItem(type, props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CollectionItem);

    _this = _super.call(this, type, props);
    _this.node = null;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CollectionItem, [{
    key: "parse",

    /**
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this
     */
    value: function parse(context, start) {
      this.context = context;
      var parseNode = context.parseNode,
          src = context.src;
      var atLineStart = context.atLineStart,
          lineStart = context.lineStart;
      if (!atLineStart && this.type === _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].SEQ_ITEM) this.error = new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSemanticError"](this, 'Sequence items must not have preceding content on the same line');
      var indent = atLineStart ? start - lineStart : context.indent;
      var offset = _Node__WEBPACK_IMPORTED_MODULE_9__["Node"].endOfWhiteSpace(src, start + 1);
      var ch = src[offset];
      var inlineComment = ch === '#';
      var comments = [];
      var blankLine = null;

      while (ch === '\n' || ch === '#') {
        if (ch === '#') {
          var _end = _Node__WEBPACK_IMPORTED_MODULE_9__["Node"].endOfLine(src, offset + 1);

          comments.push(new _Range__WEBPACK_IMPORTED_MODULE_10__["Range"](offset, _end));
          offset = _end;
        } else {
          atLineStart = true;
          lineStart = offset + 1;
          var wsEnd = _Node__WEBPACK_IMPORTED_MODULE_9__["Node"].endOfWhiteSpace(src, lineStart);

          if (src[wsEnd] === '\n' && comments.length === 0) {
            blankLine = new _BlankLine__WEBPACK_IMPORTED_MODULE_8__["BlankLine"]();
            lineStart = blankLine.parse({
              src: src
            }, lineStart);
          }

          offset = _Node__WEBPACK_IMPORTED_MODULE_9__["Node"].endOfIndent(src, lineStart);
        }

        ch = src[offset];
      }

      if (_Node__WEBPACK_IMPORTED_MODULE_9__["Node"].nextNodeIsIndented(ch, offset - (lineStart + indent), this.type !== _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].SEQ_ITEM)) {
        this.node = parseNode({
          atLineStart: atLineStart,
          inCollection: false,
          indent: indent,
          lineStart: lineStart,
          parent: this
        }, offset);
      } else if (ch && lineStart > start + 1) {
        offset = lineStart - 1;
      }

      if (this.node) {
        if (blankLine) {
          // Only blank lines preceding non-empty nodes are captured. Note that
          // this means that collection item range start indices do not always
          // increase monotonically. -- eemeli/yaml#126
          var items = context.parent.items || context.parent.contents;
          if (items) items.push(blankLine);
        }

        if (comments.length) Array.prototype.push.apply(this.props, comments);
        offset = this.node.range.end;
      } else {
        if (inlineComment) {
          var c = comments[0];
          this.props.push(c);
          offset = c.end;
        } else {
          offset = _Node__WEBPACK_IMPORTED_MODULE_9__["Node"].endOfLine(src, start + 1);
        }
      }

      var end = this.node ? this.node.valueRange.end : offset;
      this.valueRange = new _Range__WEBPACK_IMPORTED_MODULE_10__["Range"](start, end);
      return offset;
    }
  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      offset = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(CollectionItem.prototype), "setOrigRanges", this).call(this, cr, offset);
      return this.node ? this.node.setOrigRanges(cr, offset) : offset;
    }
  }, {
    key: "toString",
    value: function toString() {
      var src = this.context.src,
          node = this.node,
          range = this.range,
          value = this.value;
      if (value != null) return value;
      var str = node ? src.slice(range.start, node.range.start) + String(node) : src.slice(range.start, range.end);
      return _Node__WEBPACK_IMPORTED_MODULE_9__["Node"].addStringTerminator(src, range.end, str);
    }
  }, {
    key: "includesTrailingLines",
    get: function get() {
      return !!this.node && this.node.includesTrailingLines;
    }
  }]);

  return CollectionItem;
}(_Node__WEBPACK_IMPORTED_MODULE_9__["Node"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/Comment.js":
/*!*******************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/Comment.js ***!
  \*******************************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js");






function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Comment = /*#__PURE__*/function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Comment, _Node);

  var _super = _createSuper(Comment);

  function Comment() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Comment);

    return _super.call(this, _constants__WEBPACK_IMPORTED_MODULE_5__["Type"].COMMENT);
  }
  /**
   * Parses a comment line from the source
   *
   * @param {ParseContext} context
   * @param {number} start - Index of first character
   * @returns {number} - Index of the character after this scalar
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Comment, [{
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var offset = this.parseComment(start);
      this.range = new _Range__WEBPACK_IMPORTED_MODULE_7__["Range"](start, offset);
      return offset;
    }
  }]);

  return Comment;
}(_Node__WEBPACK_IMPORTED_MODULE_6__["Node"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/Directive.js":
/*!*********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/Directive.js ***!
  \*********************************************************/
/*! exports provided: Directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directive", function() { return Directive; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js");






function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Directive = /*#__PURE__*/function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Directive, _Node);

  var _super = _createSuper(Directive);

  function Directive() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Directive);

    _this = _super.call(this, _constants__WEBPACK_IMPORTED_MODULE_5__["Type"].DIRECTIVE);
    _this.name = null;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Directive, [{
    key: "parseName",
    value: function parseName(start) {
      var src = this.context.src;
      var offset = start;
      var ch = src[offset];

      while (ch && ch !== '\n' && ch !== '\t' && ch !== ' ') {
        ch = src[offset += 1];
      }

      this.name = src.slice(start, offset);
      return offset;
    }
  }, {
    key: "parseParameters",
    value: function parseParameters(start) {
      var src = this.context.src;
      var offset = start;
      var ch = src[offset];

      while (ch && ch !== '\n' && ch !== '#') {
        ch = src[offset += 1];
      }

      this.valueRange = new _Range__WEBPACK_IMPORTED_MODULE_7__["Range"](start, offset);
      return offset;
    }
  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var offset = this.parseName(start + 1);
      offset = this.parseParameters(offset);
      offset = this.parseComment(offset);
      this.range = new _Range__WEBPACK_IMPORTED_MODULE_7__["Range"](start, offset);
      return offset;
    }
  }, {
    key: "parameters",
    get: function get() {
      var raw = this.rawValue;
      return raw ? raw.trim().split(/[ \t]+/) : [];
    }
  }]);

  return Directive;
}(_Node__WEBPACK_IMPORTED_MODULE_6__["Node"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/Document.js":
/*!********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/Document.js ***!
  \********************************************************/
/*! exports provided: Document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _BlankLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BlankLine */ "./node_modules/yaml/browser/dist/cst/BlankLine.js");
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/cst/Collection.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Comment */ "./node_modules/yaml/browser/dist/cst/Comment.js");
/* harmony import */ var _Directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Directive */ "./node_modules/yaml/browser/dist/cst/Directive.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js");







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Document = /*#__PURE__*/function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Document, _Node);

  var _super = _createSuper(Document);

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Document, null, [{
    key: "startCommentOrEndBlankLine",
    value: function startCommentOrEndBlankLine(src, start) {
      var offset = _Node__WEBPACK_IMPORTED_MODULE_12__["Node"].endOfWhiteSpace(src, start);
      var ch = src[offset];
      return ch === '#' || ch === '\n' ? offset : start;
    }
  }]);

  function Document() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Document);

    _this = _super.call(this, _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].DOCUMENT);
    _this.directives = null;
    _this.contents = null;
    _this.directivesEndMarker = null;
    _this.documentEndMarker = null;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Document, [{
    key: "parseDirectives",
    value: function parseDirectives(start) {
      var src = this.context.src;
      this.directives = [];
      var atLineStart = true;
      var hasDirectives = false;
      var offset = start;

      while (!_Node__WEBPACK_IMPORTED_MODULE_12__["Node"].atDocumentBoundary(src, offset, _constants__WEBPACK_IMPORTED_MODULE_6__["Char"].DIRECTIVES_END)) {
        offset = Document.startCommentOrEndBlankLine(src, offset);

        switch (src[offset]) {
          case '\n':
            if (atLineStart) {
              var blankLine = new _BlankLine__WEBPACK_IMPORTED_MODULE_8__["BlankLine"]();
              offset = blankLine.parse({
                src: src
              }, offset);

              if (offset < src.length) {
                this.directives.push(blankLine);
              }
            } else {
              offset += 1;
              atLineStart = true;
            }

            break;

          case '#':
            {
              var comment = new _Comment__WEBPACK_IMPORTED_MODULE_10__["Comment"]();
              offset = comment.parse({
                src: src
              }, offset);
              this.directives.push(comment);
              atLineStart = false;
            }
            break;

          case '%':
            {
              var directive = new _Directive__WEBPACK_IMPORTED_MODULE_11__["Directive"]();
              offset = directive.parse({
                parent: this,
                src: src
              }, offset);
              this.directives.push(directive);
              hasDirectives = true;
              atLineStart = false;
            }
            break;

          default:
            if (hasDirectives) {
              this.error = new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSemanticError"](this, 'Missing directives-end indicator line');
            } else if (this.directives.length > 0) {
              this.contents = this.directives;
              this.directives = [];
            }

            return offset;
        }
      }

      if (src[offset]) {
        this.directivesEndMarker = new _Range__WEBPACK_IMPORTED_MODULE_13__["Range"](offset, offset + 3);
        return offset + 3;
      }

      if (hasDirectives) {
        this.error = new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSemanticError"](this, 'Missing directives-end indicator line');
      } else if (this.directives.length > 0) {
        this.contents = this.directives;
        this.directives = [];
      }

      return offset;
    }
  }, {
    key: "parseContents",
    value: function parseContents(start) {
      var _this$context = this.context,
          parseNode = _this$context.parseNode,
          src = _this$context.src;
      if (!this.contents) this.contents = [];
      var lineStart = start;

      while (src[lineStart - 1] === '-') {
        lineStart -= 1;
      }

      var offset = _Node__WEBPACK_IMPORTED_MODULE_12__["Node"].endOfWhiteSpace(src, start);
      var atLineStart = lineStart === start;
      this.valueRange = new _Range__WEBPACK_IMPORTED_MODULE_13__["Range"](offset);

      while (!_Node__WEBPACK_IMPORTED_MODULE_12__["Node"].atDocumentBoundary(src, offset, _constants__WEBPACK_IMPORTED_MODULE_6__["Char"].DOCUMENT_END)) {
        switch (src[offset]) {
          case '\n':
            if (atLineStart) {
              var blankLine = new _BlankLine__WEBPACK_IMPORTED_MODULE_8__["BlankLine"]();
              offset = blankLine.parse({
                src: src
              }, offset);

              if (offset < src.length) {
                this.contents.push(blankLine);
              }
            } else {
              offset += 1;
              atLineStart = true;
            }

            lineStart = offset;
            break;

          case '#':
            {
              var comment = new _Comment__WEBPACK_IMPORTED_MODULE_10__["Comment"]();
              offset = comment.parse({
                src: src
              }, offset);
              this.contents.push(comment);
              atLineStart = false;
            }
            break;

          default:
            {
              var iEnd = _Node__WEBPACK_IMPORTED_MODULE_12__["Node"].endOfIndent(src, offset);
              var context = {
                atLineStart: atLineStart,
                indent: -1,
                inFlow: false,
                inCollection: false,
                lineStart: lineStart,
                parent: this
              };
              var node = parseNode(context, iEnd);
              if (!node) return this.valueRange.end = iEnd; // at next document start

              this.contents.push(node);
              offset = node.range.end;
              atLineStart = false;
              var ec = Object(_Collection__WEBPACK_IMPORTED_MODULE_9__["grabCollectionEndComments"])(node);
              if (ec) Array.prototype.push.apply(this.contents, ec);
            }
        }

        offset = Document.startCommentOrEndBlankLine(src, offset);
      }

      this.valueRange.end = offset;

      if (src[offset]) {
        this.documentEndMarker = new _Range__WEBPACK_IMPORTED_MODULE_13__["Range"](offset, offset + 3);
        offset += 3;

        if (src[offset]) {
          offset = _Node__WEBPACK_IMPORTED_MODULE_12__["Node"].endOfWhiteSpace(src, offset);

          if (src[offset] === '#') {
            var _comment = new _Comment__WEBPACK_IMPORTED_MODULE_10__["Comment"]();

            offset = _comment.parse({
              src: src
            }, offset);
            this.contents.push(_comment);
          }

          switch (src[offset]) {
            case '\n':
              offset += 1;
              break;

            case undefined:
              break;

            default:
              this.error = new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSyntaxError"](this, 'Document end marker line cannot have a non-comment suffix');
          }
        }
      }

      return offset;
    }
    /**
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      context.root = this;
      this.context = context;
      var src = context.src;
      var offset = src.charCodeAt(start) === 0xfeff ? start + 1 : start; // skip BOM

      offset = this.parseDirectives(offset);
      offset = this.parseContents(offset);
      return offset;
    }
  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      offset = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Document.prototype), "setOrigRanges", this).call(this, cr, offset);
      this.directives.forEach(function (node) {
        offset = node.setOrigRanges(cr, offset);
      });
      if (this.directivesEndMarker) offset = this.directivesEndMarker.setOrigRange(cr, offset);
      this.contents.forEach(function (node) {
        offset = node.setOrigRanges(cr, offset);
      });
      if (this.documentEndMarker) offset = this.documentEndMarker.setOrigRange(cr, offset);
      return offset;
    }
  }, {
    key: "toString",
    value: function toString() {
      var contents = this.contents,
          directives = this.directives,
          value = this.value;
      if (value != null) return value;
      var str = directives.join('');

      if (contents.length > 0) {
        if (directives.length > 0 || contents[0].type === _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].COMMENT) str += '---\n';
        str += contents.join('');
      }

      if (str[str.length - 1] !== '\n') str += '\n';
      return str;
    }
  }]);

  return Document;
}(_Node__WEBPACK_IMPORTED_MODULE_12__["Node"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/FlowCollection.js":
/*!**************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/FlowCollection.js ***!
  \**************************************************************/
/*! exports provided: FlowCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowCollection", function() { return FlowCollection; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _BlankLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BlankLine */ "./node_modules/yaml/browser/dist/cst/BlankLine.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Comment */ "./node_modules/yaml/browser/dist/cst/Comment.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js");







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var FlowCollection = /*#__PURE__*/function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(FlowCollection, _Node);

  var _super = _createSuper(FlowCollection);

  function FlowCollection(type, props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FlowCollection);

    _this = _super.call(this, type, props);
    _this.items = null;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FlowCollection, [{
    key: "prevNodeIsJsonLike",
    value: function prevNodeIsJsonLike() {
      var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.items.length;
      var node = this.items[idx - 1];
      return !!node && (node.jsonLike || node.type === _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].COMMENT && this.prevNodeIsJsonLike(idx - 1));
    }
    /**
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var parseNode = context.parseNode,
          src = context.src;
      var indent = context.indent,
          lineStart = context.lineStart;
      var char = src[start]; // { or [

      this.items = [{
        char: char,
        offset: start
      }];
      var offset = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfWhiteSpace(src, start + 1);
      char = src[offset];

      while (char && char !== ']' && char !== '}') {
        switch (char) {
          case '\n':
            {
              lineStart = offset + 1;
              var wsEnd = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfWhiteSpace(src, lineStart);

              if (src[wsEnd] === '\n') {
                var blankLine = new _BlankLine__WEBPACK_IMPORTED_MODULE_8__["BlankLine"]();
                lineStart = blankLine.parse({
                  src: src
                }, lineStart);
                this.items.push(blankLine);
              }

              offset = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfIndent(src, lineStart);

              if (offset <= lineStart + indent) {
                char = src[offset];

                if (offset < lineStart + indent || char !== ']' && char !== '}') {
                  var msg = 'Insufficient indentation in flow collection';
                  this.error = new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSemanticError"](this, msg);
                }
              }
            }
            break;

          case ',':
            {
              this.items.push({
                char: char,
                offset: offset
              });
              offset += 1;
            }
            break;

          case '#':
            {
              var comment = new _Comment__WEBPACK_IMPORTED_MODULE_9__["Comment"]();
              offset = comment.parse({
                src: src
              }, offset);
              this.items.push(comment);
            }
            break;

          case '?':
          case ':':
            {
              var next = src[offset + 1];

              if (next === '\n' || next === '\t' || next === ' ' || next === ',' || // in-flow : after JSON-like key does not need to be followed by whitespace
              char === ':' && this.prevNodeIsJsonLike()) {
                this.items.push({
                  char: char,
                  offset: offset
                });
                offset += 1;
                break;
              }
            }
          // fallthrough

          default:
            {
              var node = parseNode({
                atLineStart: false,
                inCollection: false,
                inFlow: true,
                indent: -1,
                lineStart: lineStart,
                parent: this
              }, offset);

              if (!node) {
                // at next document start
                this.valueRange = new _Range__WEBPACK_IMPORTED_MODULE_11__["Range"](start, offset);
                return offset;
              }

              this.items.push(node);
              offset = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].normalizeOffset(src, node.range.end);
            }
        }

        offset = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfWhiteSpace(src, offset);
        char = src[offset];
      }

      this.valueRange = new _Range__WEBPACK_IMPORTED_MODULE_11__["Range"](start, offset + 1);

      if (char) {
        this.items.push({
          char: char,
          offset: offset
        });
        offset = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfWhiteSpace(src, offset + 1);
        offset = this.parseComment(offset);
      }

      return offset;
    }
  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      offset = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(FlowCollection.prototype), "setOrigRanges", this).call(this, cr, offset);
      this.items.forEach(function (node) {
        if (node instanceof _Node__WEBPACK_IMPORTED_MODULE_10__["Node"]) {
          offset = node.setOrigRanges(cr, offset);
        } else if (cr.length === 0) {
          node.origOffset = node.offset;
        } else {
          var i = offset;

          while (i < cr.length) {
            if (cr[i] > node.offset) break;else ++i;
          }

          node.origOffset = node.offset + i;
          offset = i;
        }
      });
      return offset;
    }
  }, {
    key: "toString",
    value: function toString() {
      var src = this.context.src,
          items = this.items,
          range = this.range,
          value = this.value;
      if (value != null) return value;
      var nodes = items.filter(function (item) {
        return item instanceof _Node__WEBPACK_IMPORTED_MODULE_10__["Node"];
      });
      var str = '';
      var prevEnd = range.start;
      nodes.forEach(function (node) {
        var prefix = src.slice(prevEnd, node.range.start);
        prevEnd = node.range.end;
        str += prefix + String(node);

        if (str[str.length - 1] === '\n' && src[prevEnd - 1] !== '\n' && src[prevEnd] === '\n') {
          // Comment range does not include the terminal newline, but its
          // stringified value does. Without this fix, newlines at comment ends
          // get duplicated.
          prevEnd += 1;
        }
      });
      str += src.slice(prevEnd, range.end);
      return _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].addStringTerminator(src, range.end, str);
    }
  }]);

  return FlowCollection;
}(_Node__WEBPACK_IMPORTED_MODULE_10__["Node"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/Node.js":
/*!****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/Node.js ***!
  \****************************************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _source_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./source-utils */ "./node_modules/yaml/browser/dist/cst/source-utils.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js");






/** Root class of all nodes */

var Node = /*#__PURE__*/function () {
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Node, null, [{
    key: "addStringTerminator",
    value: function addStringTerminator(src, offset, str) {
      if (str[str.length - 1] === '\n') return str;
      var next = Node.endOfWhiteSpace(src, offset);
      return next >= src.length || src[next] === '\n' ? str + '\n' : str;
    } // ^(---|...)

  }, {
    key: "atDocumentBoundary",
    value: function atDocumentBoundary(src, offset, sep) {
      var ch0 = src[offset];
      if (!ch0) return true;
      var prev = src[offset - 1];
      if (prev && prev !== '\n') return false;

      if (sep) {
        if (ch0 !== sep) return false;
      } else {
        if (ch0 !== _constants__WEBPACK_IMPORTED_MODULE_3__["Char"].DIRECTIVES_END && ch0 !== _constants__WEBPACK_IMPORTED_MODULE_3__["Char"].DOCUMENT_END) return false;
      }

      var ch1 = src[offset + 1];
      var ch2 = src[offset + 2];
      if (ch1 !== ch0 || ch2 !== ch0) return false;
      var ch3 = src[offset + 3];
      return !ch3 || ch3 === '\n' || ch3 === '\t' || ch3 === ' ';
    }
  }, {
    key: "endOfIdentifier",
    value: function endOfIdentifier(src, offset) {
      var ch = src[offset];
      var isVerbatim = ch === '<';
      var notOk = isVerbatim ? ['\n', '\t', ' ', '>'] : ['\n', '\t', ' ', '[', ']', '{', '}', ','];

      while (ch && notOk.indexOf(ch) === -1) {
        ch = src[offset += 1];
      }

      if (isVerbatim && ch === '>') offset += 1;
      return offset;
    }
  }, {
    key: "endOfIndent",
    value: function endOfIndent(src, offset) {
      var ch = src[offset];

      while (ch === ' ') {
        ch = src[offset += 1];
      }

      return offset;
    }
  }, {
    key: "endOfLine",
    value: function endOfLine(src, offset) {
      var ch = src[offset];

      while (ch && ch !== '\n') {
        ch = src[offset += 1];
      }

      return offset;
    }
  }, {
    key: "endOfWhiteSpace",
    value: function endOfWhiteSpace(src, offset) {
      var ch = src[offset];

      while (ch === '\t' || ch === ' ') {
        ch = src[offset += 1];
      }

      return offset;
    }
  }, {
    key: "startOfLine",
    value: function startOfLine(src, offset) {
      var ch = src[offset - 1];
      if (ch === '\n') return offset;

      while (ch && ch !== '\n') {
        ch = src[offset -= 1];
      }

      return offset + 1;
    }
    /**
     * End of indentation, or null if the line's indent level is not more
     * than `indent`
     *
     * @param {string} src
     * @param {number} indent
     * @param {number} lineStart
     * @returns {?number}
     */

  }, {
    key: "endOfBlockIndent",
    value: function endOfBlockIndent(src, indent, lineStart) {
      var inEnd = Node.endOfIndent(src, lineStart);

      if (inEnd > lineStart + indent) {
        return inEnd;
      } else {
        var wsEnd = Node.endOfWhiteSpace(src, inEnd);
        var ch = src[wsEnd];
        if (!ch || ch === '\n') return wsEnd;
      }

      return null;
    }
  }, {
    key: "atBlank",
    value: function atBlank(src, offset, endAsBlank) {
      var ch = src[offset];
      return ch === '\n' || ch === '\t' || ch === ' ' || endAsBlank && !ch;
    }
  }, {
    key: "nextNodeIsIndented",
    value: function nextNodeIsIndented(ch, indentDiff, indicatorAsIndent) {
      if (!ch || indentDiff < 0) return false;
      if (indentDiff > 0) return true;
      return indicatorAsIndent && ch === '-';
    } // should be at line or string end, or at next non-whitespace char

  }, {
    key: "normalizeOffset",
    value: function normalizeOffset(src, offset) {
      var ch = src[offset];
      return !ch ? offset : ch !== '\n' && src[offset - 1] === '\n' ? offset - 1 : Node.endOfWhiteSpace(src, offset);
    } // fold single newline into space, multiple newlines to N - 1 newlines
    // presumes src[offset] === '\n'

  }, {
    key: "foldNewline",
    value: function foldNewline(src, offset, indent) {
      var inCount = 0;
      var error = false;
      var fold = '';
      var ch = src[offset + 1];

      while (ch === ' ' || ch === '\t' || ch === '\n') {
        switch (ch) {
          case '\n':
            inCount = 0;
            offset += 1;
            fold += '\n';
            break;

          case '\t':
            if (inCount <= indent) error = true;
            offset = Node.endOfWhiteSpace(src, offset + 2) - 1;
            break;

          case ' ':
            inCount += 1;
            offset += 1;
            break;
        }

        ch = src[offset + 1];
      }

      if (!fold) fold = ' ';
      if (ch && inCount <= indent) error = true;
      return {
        fold: fold,
        offset: offset,
        error: error
      };
    }
  }]);

  function Node(type, props, context) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Node);

    Object.defineProperty(this, 'context', {
      value: context || null,
      writable: true
    });
    this.error = null;
    this.range = null;
    this.valueRange = null;
    this.props = props || [];
    this.type = type;
    this.value = null;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Node, [{
    key: "getPropValue",
    value: function getPropValue(idx, key, skipKey) {
      if (!this.context) return null;
      var src = this.context.src;
      var prop = this.props[idx];
      return prop && src[prop.start] === key ? src.slice(prop.start + (skipKey ? 1 : 0), prop.end) : null;
    }
  }, {
    key: "commentHasRequiredWhitespace",
    value: function commentHasRequiredWhitespace(start) {
      var src = this.context.src;
      if (this.header && start === this.header.end) return false;
      if (!this.valueRange) return false;
      var end = this.valueRange.end;
      return start !== end || Node.atBlank(src, end - 1);
    }
  }, {
    key: "parseComment",
    value: function parseComment(start) {
      var src = this.context.src;

      if (src[start] === _constants__WEBPACK_IMPORTED_MODULE_3__["Char"].COMMENT) {
        var end = Node.endOfLine(src, start + 1);
        var commentRange = new _Range__WEBPACK_IMPORTED_MODULE_5__["Range"](start, end);
        this.props.push(commentRange);
        return end;
      }

      return start;
    }
    /**
     * Populates the `origStart` and `origEnd` values of all ranges for this
     * node. Extended by child classes to handle descendant nodes.
     *
     * @param {number[]} cr - Positions of dropped CR characters
     * @param {number} offset - Starting index of `cr` from the last call
     * @returns {number} - The next offset, matching the one found for `origStart`
     */

  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      if (this.range) offset = this.range.setOrigRange(cr, offset);
      if (this.valueRange) this.valueRange.setOrigRange(cr, offset);
      this.props.forEach(function (prop) {
        return prop.setOrigRange(cr, offset);
      });
      return offset;
    }
  }, {
    key: "toString",
    value: function toString() {
      var src = this.context.src,
          range = this.range,
          value = this.value;
      if (value != null) return value;
      var str = src.slice(range.start, range.end);
      return Node.addStringTerminator(src, range.end, str);
    }
  }, {
    key: "anchor",
    get: function get() {
      for (var i = 0; i < this.props.length; ++i) {
        var anchor = this.getPropValue(i, _constants__WEBPACK_IMPORTED_MODULE_3__["Char"].ANCHOR, true);
        if (anchor != null) return anchor;
      }

      return null;
    }
  }, {
    key: "comment",
    get: function get() {
      var comments = [];

      for (var i = 0; i < this.props.length; ++i) {
        var comment = this.getPropValue(i, _constants__WEBPACK_IMPORTED_MODULE_3__["Char"].COMMENT, true);
        if (comment != null) comments.push(comment);
      }

      return comments.length > 0 ? comments.join('\n') : null;
    }
  }, {
    key: "hasComment",
    get: function get() {
      if (this.context) {
        var src = this.context.src;

        for (var i = 0; i < this.props.length; ++i) {
          if (src[this.props[i].start] === _constants__WEBPACK_IMPORTED_MODULE_3__["Char"].COMMENT) return true;
        }
      }

      return false;
    }
  }, {
    key: "hasProps",
    get: function get() {
      if (this.context) {
        var src = this.context.src;

        for (var i = 0; i < this.props.length; ++i) {
          if (src[this.props[i].start] !== _constants__WEBPACK_IMPORTED_MODULE_3__["Char"].COMMENT) return true;
        }
      }

      return false;
    }
  }, {
    key: "includesTrailingLines",
    get: function get() {
      return false;
    }
  }, {
    key: "jsonLike",
    get: function get() {
      var jsonLikeTypes = [_constants__WEBPACK_IMPORTED_MODULE_3__["Type"].FLOW_MAP, _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].FLOW_SEQ, _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].QUOTE_DOUBLE, _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].QUOTE_SINGLE];
      return jsonLikeTypes.indexOf(this.type) !== -1;
    }
  }, {
    key: "rangeAsLinePos",
    get: function get() {
      if (!this.range || !this.context) return undefined;
      var start = Object(_source_utils__WEBPACK_IMPORTED_MODULE_4__["getLinePos"])(this.range.start, this.context.root);
      if (!start) return undefined;
      var end = Object(_source_utils__WEBPACK_IMPORTED_MODULE_4__["getLinePos"])(this.range.end, this.context.root);
      return {
        start: start,
        end: end
      };
    }
  }, {
    key: "rawValue",
    get: function get() {
      if (!this.valueRange || !this.context) return null;
      var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
      return this.context.src.slice(start, end);
    }
  }, {
    key: "tag",
    get: function get() {
      for (var i = 0; i < this.props.length; ++i) {
        var tag = this.getPropValue(i, _constants__WEBPACK_IMPORTED_MODULE_3__["Char"].TAG, false);

        if (tag != null) {
          if (tag[1] === '<') {
            return {
              verbatim: tag.slice(2, -1)
            };
          } else {
            // eslint-disable-next-line no-unused-vars
            var _tag$match = tag.match(/^(.*!)([^!]*)$/),
                _tag$match2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_tag$match, 3),
                _ = _tag$match2[0],
                handle = _tag$match2[1],
                suffix = _tag$match2[2];

            return {
              handle: handle,
              suffix: suffix
            };
          }
        }
      }

      return null;
    }
  }, {
    key: "valueRangeContainsNewline",
    get: function get() {
      if (!this.valueRange || !this.context) return false;
      var _this$valueRange2 = this.valueRange,
          start = _this$valueRange2.start,
          end = _this$valueRange2.end;
      var src = this.context.src;

      for (var i = start; i < end; ++i) {
        if (src[i] === '\n') return true;
      }

      return false;
    }
  }]);

  return Node;
}();

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/ParseContext.js":
/*!************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/ParseContext.js ***!
  \************************************************************/
/*! exports provided: ParseContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseContext", function() { return ParseContext; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _Alias__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Alias */ "./node_modules/yaml/browser/dist/cst/Alias.js");
/* harmony import */ var _BlockValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BlockValue */ "./node_modules/yaml/browser/dist/cst/BlockValue.js");
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/cst/Collection.js");
/* harmony import */ var _CollectionItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CollectionItem */ "./node_modules/yaml/browser/dist/cst/CollectionItem.js");
/* harmony import */ var _FlowCollection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FlowCollection */ "./node_modules/yaml/browser/dist/cst/FlowCollection.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js");
/* harmony import */ var _PlainValue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PlainValue */ "./node_modules/yaml/browser/dist/cst/PlainValue.js");
/* harmony import */ var _QuoteDouble__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./QuoteDouble */ "./node_modules/yaml/browser/dist/cst/QuoteDouble.js");
/* harmony import */ var _QuoteSingle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./QuoteSingle */ "./node_modules/yaml/browser/dist/cst/QuoteSingle.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js");
















function createNewNode(type, props) {
  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].ALIAS:
      return new _Alias__WEBPACK_IMPORTED_MODULE_5__["Alias"](type, props);

    case _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].BLOCK_FOLDED:
    case _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].BLOCK_LITERAL:
      return new _BlockValue__WEBPACK_IMPORTED_MODULE_6__["BlockValue"](type, props);

    case _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].FLOW_MAP:
    case _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].FLOW_SEQ:
      return new _FlowCollection__WEBPACK_IMPORTED_MODULE_9__["FlowCollection"](type, props);

    case _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].MAP_KEY:
    case _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].MAP_VALUE:
    case _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].SEQ_ITEM:
      return new _CollectionItem__WEBPACK_IMPORTED_MODULE_8__["CollectionItem"](type, props);

    case _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].COMMENT:
    case _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].PLAIN:
      return new _PlainValue__WEBPACK_IMPORTED_MODULE_11__["PlainValue"](type, props);

    case _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].QUOTE_DOUBLE:
      return new _QuoteDouble__WEBPACK_IMPORTED_MODULE_12__["QuoteDouble"](type, props);

    case _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].QUOTE_SINGLE:
      return new _QuoteSingle__WEBPACK_IMPORTED_MODULE_13__["QuoteSingle"](type, props);

    /* istanbul ignore next */

    default:
      return null;
    // should never happen
  }
}
/**
 * @param {boolean} atLineStart - Node starts at beginning of line
 * @param {boolean} inFlow - true if currently in a flow context
 * @param {boolean} inCollection - true if currently in a collection context
 * @param {number} indent - Current level of indentation
 * @param {number} lineStart - Start of the current line
 * @param {Node} parent - The parent of the node
 * @param {string} src - Source of the YAML document
 */


var ParseContext = /*#__PURE__*/function () {
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ParseContext, null, [{
    key: "parseType",
    value: function parseType(src, offset, inFlow) {
      switch (src[offset]) {
        case '*':
          return _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].ALIAS;

        case '>':
          return _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].BLOCK_FOLDED;

        case '|':
          return _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].BLOCK_LITERAL;

        case '{':
          return _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].FLOW_MAP;

        case '[':
          return _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].FLOW_SEQ;

        case '?':
          return !inFlow && _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].atBlank(src, offset + 1, true) ? _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].MAP_KEY : _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].PLAIN;

        case ':':
          return !inFlow && _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].atBlank(src, offset + 1, true) ? _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].MAP_VALUE : _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].PLAIN;

        case '-':
          return !inFlow && _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].atBlank(src, offset + 1, true) ? _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].SEQ_ITEM : _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].PLAIN;

        case '"':
          return _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].QUOTE_DOUBLE;

        case "'":
          return _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].QUOTE_SINGLE;

        default:
          return _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].PLAIN;
      }
    }
  }]);

  function ParseContext() {
    var _this = this;

    var orig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        atLineStart = _ref.atLineStart,
        inCollection = _ref.inCollection,
        inFlow = _ref.inFlow,
        indent = _ref.indent,
        lineStart = _ref.lineStart,
        parent = _ref.parent;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ParseContext);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "parseNode", function (overlay, start) {
      if (_Node__WEBPACK_IMPORTED_MODULE_10__["Node"].atDocumentBoundary(_this.src, start)) return null;
      var context = new ParseContext(_this, overlay);

      var _context$parseProps = context.parseProps(start),
          props = _context$parseProps.props,
          type = _context$parseProps.type,
          valueStart = _context$parseProps.valueStart;

      var node = createNewNode(type, props);
      var offset = node.parse(context, valueStart);
      node.range = new _Range__WEBPACK_IMPORTED_MODULE_14__["Range"](start, offset);
      /* istanbul ignore if */

      if (offset <= start) {
        // This should never happen, but if it does, let's make sure to at least
        // step one character forward to avoid a busy loop.
        node.error = new Error("Node#parse consumed no characters");
        node.error.parseEnd = offset;
        node.error.source = node;
        node.range.end = start + 1;
      }

      if (context.nodeStartsCollection(node)) {
        if (!node.error && !context.atLineStart && context.parent.type === _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].DOCUMENT) {
          node.error = new _errors__WEBPACK_IMPORTED_MODULE_4__["YAMLSyntaxError"](node, 'Block collection must not have preceding content here (e.g. directives-end indicator)');
        }

        var collection = new _Collection__WEBPACK_IMPORTED_MODULE_7__["Collection"](node);
        offset = collection.parse(new ParseContext(context), offset);
        collection.range = new _Range__WEBPACK_IMPORTED_MODULE_14__["Range"](start, offset);
        return collection;
      }

      return node;
    });

    this.atLineStart = atLineStart != null ? atLineStart : orig.atLineStart || false;
    this.inCollection = inCollection != null ? inCollection : orig.inCollection || false;
    this.inFlow = inFlow != null ? inFlow : orig.inFlow || false;
    this.indent = indent != null ? indent : orig.indent;
    this.lineStart = lineStart != null ? lineStart : orig.lineStart;
    this.parent = parent != null ? parent : orig.parent || {};
    this.root = orig.root;
    this.src = orig.src;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ParseContext, [{
    key: "nodeStartsCollection",
    value: function nodeStartsCollection(node) {
      var inCollection = this.inCollection,
          inFlow = this.inFlow,
          src = this.src;
      if (inCollection || inFlow) return false;
      if (node instanceof _CollectionItem__WEBPACK_IMPORTED_MODULE_8__["CollectionItem"]) return true; // check for implicit key

      var offset = node.range.end;
      if (src[offset] === '\n' || src[offset - 1] === '\n') return false;
      offset = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfWhiteSpace(src, offset);
      return src[offset] === ':';
    } // Anchor and tag are before type, which determines the node implementation
    // class; hence this intermediate step.

  }, {
    key: "parseProps",
    value: function parseProps(offset) {
      var inFlow = this.inFlow,
          parent = this.parent,
          src = this.src;
      var props = [];
      var lineHasProps = false;
      offset = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfWhiteSpace(src, offset);
      var ch = src[offset];

      while (ch === _constants__WEBPACK_IMPORTED_MODULE_3__["Char"].ANCHOR || ch === _constants__WEBPACK_IMPORTED_MODULE_3__["Char"].COMMENT || ch === _constants__WEBPACK_IMPORTED_MODULE_3__["Char"].TAG || ch === '\n') {
        if (ch === '\n') {
          var lineStart = offset + 1;
          var inEnd = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfIndent(src, lineStart);
          var indentDiff = inEnd - (lineStart + this.indent);
          var noIndicatorAsIndent = parent.type === _constants__WEBPACK_IMPORTED_MODULE_3__["Type"].SEQ_ITEM && parent.context.atLineStart;
          if (!_Node__WEBPACK_IMPORTED_MODULE_10__["Node"].nextNodeIsIndented(src[inEnd], indentDiff, !noIndicatorAsIndent)) break;
          this.atLineStart = true;
          this.lineStart = lineStart;
          lineHasProps = false;
          offset = inEnd;
        } else if (ch === _constants__WEBPACK_IMPORTED_MODULE_3__["Char"].COMMENT) {
          var end = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfLine(src, offset + 1);
          props.push(new _Range__WEBPACK_IMPORTED_MODULE_14__["Range"](offset, end));
          offset = end;
        } else {
          var _end = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfIdentifier(src, offset + 1);

          if (ch === _constants__WEBPACK_IMPORTED_MODULE_3__["Char"].TAG && src[_end] === ',' && /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+,\d\d\d\d(-\d\d){0,2}\/\S/.test(src.slice(offset + 1, _end + 13))) {
            // Let's presume we're dealing with a YAML 1.0 domain tag here, rather
            // than an empty but 'foo.bar' private-tagged node in a flow collection
            // followed without whitespace by a plain string starting with a year
            // or date divided by something.
            _end = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfIdentifier(src, _end + 5);
          }

          props.push(new _Range__WEBPACK_IMPORTED_MODULE_14__["Range"](offset, _end));
          lineHasProps = true;
          offset = _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].endOfWhiteSpace(src, _end);
        }

        ch = src[offset];
      } // '- &a : b' has an anchor on an empty node


      if (lineHasProps && ch === ':' && _Node__WEBPACK_IMPORTED_MODULE_10__["Node"].atBlank(src, offset + 1, true)) offset -= 1;
      var type = ParseContext.parseType(src, offset, inFlow);
      return {
        props: props,
        type: type,
        valueStart: offset
      };
    }
    /**
     * Parses a node from the source
     * @param {ParseContext} overlay
     * @param {number} start - Index of first non-whitespace character for the node
     * @returns {?Node} - null if at a document boundary
     */

  }]);

  return ParseContext;
}();

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/PlainValue.js":
/*!**********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/PlainValue.js ***!
  \**********************************************************/
/*! exports provided: PlainValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlainValue", function() { return PlainValue; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js");






function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var PlainValue = /*#__PURE__*/function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(PlainValue, _Node);

  var _super = _createSuper(PlainValue);

  function PlainValue() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PlainValue);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PlainValue, [{
    key: "parseBlockValue",
    value: function parseBlockValue(start) {
      var _this$context = this.context,
          indent = _this$context.indent,
          inFlow = _this$context.inFlow,
          src = _this$context.src;
      var offset = start;
      var valueEnd = start;

      for (var ch = src[offset]; ch === '\n'; ch = src[offset]) {
        if (_Node__WEBPACK_IMPORTED_MODULE_5__["Node"].atDocumentBoundary(src, offset + 1)) break;
        var end = _Node__WEBPACK_IMPORTED_MODULE_5__["Node"].endOfBlockIndent(src, indent, offset + 1);
        if (end === null || src[end] === '#') break;

        if (src[end] === '\n') {
          offset = end;
        } else {
          valueEnd = PlainValue.endOfLine(src, end, inFlow);
          offset = valueEnd;
        }
      }

      if (this.valueRange.isEmpty()) this.valueRange.start = start;
      this.valueRange.end = valueEnd;
      return valueEnd;
    }
    /**
     * Parses a plain value from the source
     *
     * Accepted forms are:
     * ```
     * #comment
     *
     * first line
     *
     * first line #comment
     *
     * first line
     * block
     * lines
     *
     * #comment
     * block
     * lines
     * ```
     * where block lines are empty or have an indent level greater than `indent`.
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this scalar, may be `\n`
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var inFlow = context.inFlow,
          src = context.src;
      var offset = start;
      var ch = src[offset];

      if (ch && ch !== '#' && ch !== '\n') {
        offset = PlainValue.endOfLine(src, start, inFlow);
      }

      this.valueRange = new _Range__WEBPACK_IMPORTED_MODULE_6__["Range"](start, offset);
      offset = _Node__WEBPACK_IMPORTED_MODULE_5__["Node"].endOfWhiteSpace(src, offset);
      offset = this.parseComment(offset);

      if (!this.hasComment || this.valueRange.isEmpty()) {
        offset = this.parseBlockValue(offset);
      }

      return offset;
    }
  }, {
    key: "strValue",
    get: function get() {
      if (!this.valueRange || !this.context) return null;
      var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
      var src = this.context.src;
      var ch = src[end - 1];

      while (start < end && (ch === '\n' || ch === '\t' || ch === ' ')) {
        ch = src[--end - 1];
      }

      ch = src[start];

      while (start < end && (ch === '\n' || ch === '\t' || ch === ' ')) {
        ch = src[++start];
      }

      var str = '';

      for (var i = start; i < end; ++i) {
        var _ch = src[i];

        if (_ch === '\n') {
          var _Node$foldNewline = _Node__WEBPACK_IMPORTED_MODULE_5__["Node"].foldNewline(src, i, -1),
              fold = _Node$foldNewline.fold,
              offset = _Node$foldNewline.offset;

          str += fold;
          i = offset;
        } else if (_ch === ' ' || _ch === '\t') {
          // trim trailing whitespace
          var wsStart = i;
          var next = src[i + 1];

          while (i < end && (next === ' ' || next === '\t')) {
            i += 1;
            next = src[i + 1];
          }

          if (next !== '\n') str += i > wsStart ? src.slice(wsStart, i + 1) : _ch;
        } else {
          str += _ch;
        }
      }

      return str;
    }
  }], [{
    key: "endOfLine",
    value: function endOfLine(src, start, inFlow) {
      var ch = src[start];
      var offset = start;

      while (ch && ch !== '\n') {
        if (inFlow && (ch === '[' || ch === ']' || ch === '{' || ch === '}' || ch === ',')) break;
        var next = src[offset + 1];
        if (ch === ':' && (!next || next === '\n' || next === '\t' || next === ' ' || inFlow && next === ',')) break;
        if ((ch === ' ' || ch === '\t') && next === '#') break;
        offset += 1;
        ch = next;
      }

      return offset;
    }
  }]);

  return PlainValue;
}(_Node__WEBPACK_IMPORTED_MODULE_5__["Node"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/QuoteDouble.js":
/*!***********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/QuoteDouble.js ***!
  \***********************************************************/
/*! exports provided: QuoteDouble */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDouble", function() { return QuoteDouble; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js");






function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var QuoteDouble = /*#__PURE__*/function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(QuoteDouble, _Node);

  var _super = _createSuper(QuoteDouble);

  function QuoteDouble() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, QuoteDouble);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(QuoteDouble, [{
    key: "parseCharCode",
    value: function parseCharCode(offset, length, errors) {
      var src = this.context.src;
      var cc = src.substr(offset, length);
      var ok = cc.length === length && /^[0-9a-fA-F]+$/.test(cc);
      var code = ok ? parseInt(cc, 16) : NaN;

      if (isNaN(code)) {
        errors.push(new _errors__WEBPACK_IMPORTED_MODULE_5__["YAMLSyntaxError"](this, "Invalid escape sequence ".concat(src.substr(offset - 2, length + 2))));
        return src.substr(offset - 2, length + 2);
      }

      return String.fromCodePoint(code);
    }
    /**
     * Parses a "double quoted" value from the source
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this scalar
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var src = context.src;
      var offset = QuoteDouble.endOfQuote(src, start + 1);
      this.valueRange = new _Range__WEBPACK_IMPORTED_MODULE_7__["Range"](start, offset);
      offset = _Node__WEBPACK_IMPORTED_MODULE_6__["Node"].endOfWhiteSpace(src, offset);
      offset = this.parseComment(offset);
      return offset;
    }
  }, {
    key: "strValue",

    /**
     * @returns {string | { str: string, errors: YAMLSyntaxError[] }}
     */
    get: function get() {
      if (!this.valueRange || !this.context) return null;
      var errors = [];
      var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
      var _this$context = this.context,
          indent = _this$context.indent,
          src = _this$context.src;
      if (src[end - 1] !== '"') errors.push(new _errors__WEBPACK_IMPORTED_MODULE_5__["YAMLSyntaxError"](this, 'Missing closing "quote')); // Using String#replace is too painful with escaped newlines preceded by
      // escaped backslashes; also, this should be faster.

      var str = '';

      for (var i = start + 1; i < end - 1; ++i) {
        var ch = src[i];

        if (ch === '\n') {
          if (_Node__WEBPACK_IMPORTED_MODULE_6__["Node"].atDocumentBoundary(src, i + 1)) errors.push(new _errors__WEBPACK_IMPORTED_MODULE_5__["YAMLSemanticError"](this, 'Document boundary indicators are not allowed within string values'));

          var _Node$foldNewline = _Node__WEBPACK_IMPORTED_MODULE_6__["Node"].foldNewline(src, i, indent),
              fold = _Node$foldNewline.fold,
              offset = _Node$foldNewline.offset,
              error = _Node$foldNewline.error;

          str += fold;
          i = offset;
          if (error) errors.push(new _errors__WEBPACK_IMPORTED_MODULE_5__["YAMLSemanticError"](this, 'Multi-line double-quoted string needs to be sufficiently indented'));
        } else if (ch === '\\') {
          i += 1;

          switch (src[i]) {
            case '0':
              str += '\0';
              break;
            // null character

            case 'a':
              str += '\x07';
              break;
            // bell character

            case 'b':
              str += '\b';
              break;
            // backspace

            case 'e':
              str += '\x1b';
              break;
            // escape character

            case 'f':
              str += '\f';
              break;
            // form feed

            case 'n':
              str += '\n';
              break;
            // line feed

            case 'r':
              str += '\r';
              break;
            // carriage return

            case 't':
              str += '\t';
              break;
            // horizontal tab

            case 'v':
              str += '\v';
              break;
            // vertical tab

            case 'N':
              str += "\x85";
              break;
            // Unicode next line

            case '_':
              str += "\xA0";
              break;
            // Unicode non-breaking space

            case 'L':
              str += "\u2028";
              break;
            // Unicode line separator

            case 'P':
              str += "\u2029";
              break;
            // Unicode paragraph separator

            case ' ':
              str += ' ';
              break;

            case '"':
              str += '"';
              break;

            case '/':
              str += '/';
              break;

            case '\\':
              str += '\\';
              break;

            case '\t':
              str += '\t';
              break;

            case 'x':
              str += this.parseCharCode(i + 1, 2, errors);
              i += 2;
              break;

            case 'u':
              str += this.parseCharCode(i + 1, 4, errors);
              i += 4;
              break;

            case 'U':
              str += this.parseCharCode(i + 1, 8, errors);
              i += 8;
              break;

            case '\n':
              // skip escaped newlines, but still trim the following line
              while (src[i + 1] === ' ' || src[i + 1] === '\t') {
                i += 1;
              }

              break;

            default:
              errors.push(new _errors__WEBPACK_IMPORTED_MODULE_5__["YAMLSyntaxError"](this, "Invalid escape sequence ".concat(src.substr(i - 1, 2))));
              str += '\\' + src[i];
          }
        } else if (ch === ' ' || ch === '\t') {
          // trim trailing whitespace
          var wsStart = i;
          var next = src[i + 1];

          while (next === ' ' || next === '\t') {
            i += 1;
            next = src[i + 1];
          }

          if (next !== '\n') str += i > wsStart ? src.slice(wsStart, i + 1) : ch;
        } else {
          str += ch;
        }
      }

      return errors.length > 0 ? {
        errors: errors,
        str: str
      } : str;
    }
  }], [{
    key: "endOfQuote",
    value: function endOfQuote(src, offset) {
      var ch = src[offset];

      while (ch && ch !== '"') {
        offset += ch === '\\' ? 2 : 1;
        ch = src[offset];
      }

      return offset + 1;
    }
  }]);

  return QuoteDouble;
}(_Node__WEBPACK_IMPORTED_MODULE_6__["Node"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/QuoteSingle.js":
/*!***********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/QuoteSingle.js ***!
  \***********************************************************/
/*! exports provided: QuoteSingle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteSingle", function() { return QuoteSingle; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js");






function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var QuoteSingle = /*#__PURE__*/function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(QuoteSingle, _Node);

  var _super = _createSuper(QuoteSingle);

  function QuoteSingle() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, QuoteSingle);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(QuoteSingle, [{
    key: "parse",

    /**
     * Parses a 'single quoted' value from the source
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this scalar
     */
    value: function parse(context, start) {
      this.context = context;
      var src = context.src;
      var offset = QuoteSingle.endOfQuote(src, start + 1);
      this.valueRange = new _Range__WEBPACK_IMPORTED_MODULE_7__["Range"](start, offset);
      offset = _Node__WEBPACK_IMPORTED_MODULE_6__["Node"].endOfWhiteSpace(src, offset);
      offset = this.parseComment(offset);
      return offset;
    }
  }, {
    key: "strValue",

    /**
     * @returns {string | { str: string, errors: YAMLSyntaxError[] }}
     */
    get: function get() {
      if (!this.valueRange || !this.context) return null;
      var errors = [];
      var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
      var _this$context = this.context,
          indent = _this$context.indent,
          src = _this$context.src;
      if (src[end - 1] !== "'") errors.push(new _errors__WEBPACK_IMPORTED_MODULE_5__["YAMLSyntaxError"](this, "Missing closing 'quote"));
      var str = '';

      for (var i = start + 1; i < end - 1; ++i) {
        var ch = src[i];

        if (ch === '\n') {
          if (_Node__WEBPACK_IMPORTED_MODULE_6__["Node"].atDocumentBoundary(src, i + 1)) errors.push(new _errors__WEBPACK_IMPORTED_MODULE_5__["YAMLSemanticError"](this, 'Document boundary indicators are not allowed within string values'));

          var _Node$foldNewline = _Node__WEBPACK_IMPORTED_MODULE_6__["Node"].foldNewline(src, i, indent),
              fold = _Node$foldNewline.fold,
              offset = _Node$foldNewline.offset,
              error = _Node$foldNewline.error;

          str += fold;
          i = offset;
          if (error) errors.push(new _errors__WEBPACK_IMPORTED_MODULE_5__["YAMLSemanticError"](this, 'Multi-line single-quoted string needs to be sufficiently indented'));
        } else if (ch === "'") {
          str += ch;
          i += 1;
          if (src[i] !== "'") errors.push(new _errors__WEBPACK_IMPORTED_MODULE_5__["YAMLSyntaxError"](this, 'Unescaped single quote? This should not happen.'));
        } else if (ch === ' ' || ch === '\t') {
          // trim trailing whitespace
          var wsStart = i;
          var next = src[i + 1];

          while (next === ' ' || next === '\t') {
            i += 1;
            next = src[i + 1];
          }

          if (next !== '\n') str += i > wsStart ? src.slice(wsStart, i + 1) : ch;
        } else {
          str += ch;
        }
      }

      return errors.length > 0 ? {
        errors: errors,
        str: str
      } : str;
    }
  }], [{
    key: "endOfQuote",
    value: function endOfQuote(src, offset) {
      var ch = src[offset];

      while (ch) {
        if (ch === "'") {
          if (src[offset + 1] !== "'") break;
          ch = src[offset += 2];
        } else {
          ch = src[offset += 1];
        }
      }

      return offset + 1;
    }
  }]);

  return QuoteSingle;
}(_Node__WEBPACK_IMPORTED_MODULE_6__["Node"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/Range.js":
/*!*****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/Range.js ***!
  \*****************************************************/
/*! exports provided: Range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var Range = /*#__PURE__*/function () {
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Range, null, [{
    key: "copy",
    value: function copy(orig) {
      return new Range(orig.start, orig.end);
    }
  }]);

  function Range(start, end) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Range);

    this.start = start;
    this.end = end || start;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Range, [{
    key: "isEmpty",
    value: function isEmpty() {
      return typeof this.start !== 'number' || !this.end || this.end <= this.start;
    }
    /**
     * Set `origStart` and `origEnd` to point to the original source range for
     * this node, which may differ due to dropped CR characters.
     *
     * @param {number[]} cr - Positions of dropped CR characters
     * @param {number} offset - Starting index of `cr` from the last call
     * @returns {number} - The next offset, matching the one found for `origStart`
     */

  }, {
    key: "setOrigRange",
    value: function setOrigRange(cr, offset) {
      var start = this.start,
          end = this.end;

      if (cr.length === 0 || end <= cr[0]) {
        this.origStart = start;
        this.origEnd = end;
        return offset;
      }

      var i = offset;

      while (i < cr.length) {
        if (cr[i] > start) break;else ++i;
      }

      this.origStart = start + i;
      var nextOffset = i;

      while (i < cr.length) {
        // if end was at \n, it should now be at \r
        if (cr[i] >= end) break;else ++i;
      }

      this.origEnd = end + i;
      return nextOffset;
    }
  }]);

  return Range;
}();

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/parse.js ***!
  \*****************************************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var _Document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Document */ "./node_modules/yaml/browser/dist/cst/Document.js");
/* harmony import */ var _ParseContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParseContext */ "./node_modules/yaml/browser/dist/cst/ParseContext.js");
// Published as 'yaml/parse-cst'


function parse(src) {
  var cr = [];

  if (src.indexOf('\r') !== -1) {
    src = src.replace(/\r\n?/g, function (match, offset) {
      if (match.length > 1) cr.push(offset);
      return '\n';
    });
  }

  var documents = [];
  var offset = 0;

  do {
    var doc = new _Document__WEBPACK_IMPORTED_MODULE_0__["Document"]();
    var context = new _ParseContext__WEBPACK_IMPORTED_MODULE_1__["ParseContext"]({
      src: src
    });
    offset = doc.parse(context, offset);
    documents.push(doc);
  } while (offset < src.length);

  documents.setOrigRanges = function () {
    if (cr.length === 0) return false;

    for (var i = 1; i < cr.length; ++i) {
      cr[i] -= i;
    }

    var crOffset = 0;

    for (var _i = 0; _i < documents.length; ++_i) {
      crOffset = documents[_i].setOrigRanges(cr, crOffset);
    }

    cr.splice(0, cr.length);
    return true;
  };

  documents.toString = function () {
    return documents.join('...\n');
  };

  return documents;
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/source-utils.js":
/*!************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/source-utils.js ***!
  \************************************************************/
/*! exports provided: getLinePos, getLine, getPrettyContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLinePos", function() { return getLinePos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLine", function() { return getLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrettyContext", function() { return getPrettyContext; });
function findLineStarts(src) {
  var ls = [0];
  var offset = src.indexOf('\n');

  while (offset !== -1) {
    offset += 1;
    ls.push(offset);
    offset = src.indexOf('\n', offset);
  }

  return ls;
}

function getSrcInfo(cst) {
  var lineStarts, src;

  if (typeof cst === 'string') {
    lineStarts = findLineStarts(cst);
    src = cst;
  } else {
    if (Array.isArray(cst)) cst = cst[0];

    if (cst && cst.context) {
      if (!cst.lineStarts) cst.lineStarts = findLineStarts(cst.context.src);
      lineStarts = cst.lineStarts;
      src = cst.context.src;
    }
  }

  return {
    lineStarts: lineStarts,
    src: src
  };
}
/**
 * @typedef {Object} LinePos - One-indexed position in the source
 * @property {number} line
 * @property {number} col
 */

/**
 * Determine the line/col position matching a character offset.
 *
 * Accepts a source string or a CST document as the second parameter. With
 * the latter, starting indices for lines are cached in the document as
 * `lineStarts: number[]`.
 *
 * Returns a one-indexed `{ line, col }` location if found, or
 * `undefined` otherwise.
 *
 * @param {number} offset
 * @param {string|Document|Document[]} cst
 * @returns {?LinePos}
 */


function getLinePos(offset, cst) {
  if (typeof offset !== 'number' || offset < 0) return null;

  var _getSrcInfo = getSrcInfo(cst),
      lineStarts = _getSrcInfo.lineStarts,
      src = _getSrcInfo.src;

  if (!lineStarts || !src || offset > src.length) return null;

  for (var i = 0; i < lineStarts.length; ++i) {
    var start = lineStarts[i];

    if (offset < start) {
      return {
        line: i,
        col: offset - lineStarts[i - 1] + 1
      };
    }

    if (offset === start) return {
      line: i + 1,
      col: 1
    };
  }

  var line = lineStarts.length;
  return {
    line: line,
    col: offset - lineStarts[line - 1] + 1
  };
}
/**
 * Get a specified line from the source.
 *
 * Accepts a source string or a CST document as the second parameter. With
 * the latter, starting indices for lines are cached in the document as
 * `lineStarts: number[]`.
 *
 * Returns the line as a string if found, or `null` otherwise.
 *
 * @param {number} line One-indexed line number
 * @param {string|Document|Document[]} cst
 * @returns {?string}
 */

function getLine(line, cst) {
  var _getSrcInfo2 = getSrcInfo(cst),
      lineStarts = _getSrcInfo2.lineStarts,
      src = _getSrcInfo2.src;

  if (!lineStarts || !(line >= 1) || line > lineStarts.length) return null;
  var start = lineStarts[line - 1];
  var end = lineStarts[line]; // undefined for last line; that's ok for slice()

  while (end && end > start && src[end - 1] === '\n') {
    --end;
  }

  return src.slice(start, end);
}
/**
 * Pretty-print the starting line from the source indicated by the range `pos`
 *
 * Trims output to `maxWidth` chars while keeping the starting column visible,
 * using `…` at either end to indicate dropped characters.
 *
 * Returns a two-line string (or `null`) with `\n` as separator; the second line
 * will hold appropriately indented `^` marks indicating the column range.
 *
 * @param {Object} pos
 * @param {LinePos} pos.start
 * @param {LinePos} [pos.end]
 * @param {string|Document|Document[]*} cst
 * @param {number} [maxWidth=80]
 * @returns {?string}
 */

function getPrettyContext(_ref, cst) {
  var start = _ref.start,
      end = _ref.end;
  var maxWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 80;
  var src = getLine(start.line, cst);
  if (!src) return null;
  var col = start.col;

  if (src.length > maxWidth) {
    if (col <= maxWidth - 10) {
      src = src.substr(0, maxWidth - 1) + '…';
    } else {
      var halfWidth = Math.round(maxWidth / 2);
      if (src.length > col + halfWidth) src = src.substr(0, col + halfWidth - 1) + '…';
      col -= src.length - maxWidth;
      src = '…' + src.substr(1 - maxWidth);
    }
  }

  var errLen = 1;
  var errEnd = '';

  if (end) {
    if (end.line === start.line && col + (end.col - start.col) <= maxWidth + 1) {
      errLen = end.col - start.col;
    } else {
      errLen = Math.min(src.length + 1, maxWidth) - col;
      errEnd = '…';
    }
  }

  var offset = col > 1 ? ' '.repeat(col - 1) : '';
  var err = '^'.repeat(errLen);
  return "".concat(src, "\n").concat(offset).concat(err).concat(errEnd);
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/errors.js":
/*!**************************************************!*\
  !*** ./node_modules/yaml/browser/dist/errors.js ***!
  \**************************************************/
/*! exports provided: YAMLError, YAMLReferenceError, YAMLSemanticError, YAMLSyntaxError, YAMLWarning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YAMLError", function() { return YAMLError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YAMLReferenceError", function() { return YAMLReferenceError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YAMLSemanticError", function() { return YAMLSemanticError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YAMLSyntaxError", function() { return YAMLSyntaxError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YAMLWarning", function() { return YAMLWarning; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _cst_Node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cst/Node */ "./node_modules/yaml/browser/dist/cst/Node.js");
/* harmony import */ var _cst_source_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cst/source-utils */ "./node_modules/yaml/browser/dist/cst/source-utils.js");
/* harmony import */ var _cst_Range__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cst/Range */ "./node_modules/yaml/browser/dist/cst/Range.js");







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var YAMLError = /*#__PURE__*/function (_Error) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(YAMLError, _Error);

  var _super = _createSuper(YAMLError);

  function YAMLError(name, source, message) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, YAMLError);

    if (!message || !(source instanceof _cst_Node__WEBPACK_IMPORTED_MODULE_6__["Node"])) throw new Error("Invalid arguments for new ".concat(name));
    _this = _super.call(this);
    _this.name = name;
    _this.message = message;
    _this.source = source;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(YAMLError, [{
    key: "makePretty",
    value: function makePretty() {
      if (!this.source) return;
      this.nodeType = this.source.type;
      var cst = this.source.context && this.source.context.root;

      if (typeof this.offset === 'number') {
        this.range = new _cst_Range__WEBPACK_IMPORTED_MODULE_8__["Range"](this.offset, this.offset + 1);
        var start = cst && Object(_cst_source_utils__WEBPACK_IMPORTED_MODULE_7__["getLinePos"])(this.offset, cst);

        if (start) {
          var end = {
            line: start.line,
            col: start.col + 1
          };
          this.linePos = {
            start: start,
            end: end
          };
        }

        delete this.offset;
      } else {
        this.range = this.source.range;
        this.linePos = this.source.rangeAsLinePos;
      }

      if (this.linePos) {
        var _this$linePos$start = this.linePos.start,
            line = _this$linePos$start.line,
            col = _this$linePos$start.col;
        this.message += " at line ".concat(line, ", column ").concat(col);
        var ctx = cst && Object(_cst_source_utils__WEBPACK_IMPORTED_MODULE_7__["getPrettyContext"])(this.linePos, cst);
        if (ctx) this.message += ":\n\n".concat(ctx, "\n");
      }

      delete this.source;
    }
  }]);

  return YAMLError;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default()(Error));
var YAMLReferenceError = /*#__PURE__*/function (_YAMLError) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(YAMLReferenceError, _YAMLError);

  var _super2 = _createSuper(YAMLReferenceError);

  function YAMLReferenceError(source, message) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, YAMLReferenceError);

    return _super2.call(this, 'YAMLReferenceError', source, message);
  }

  return YAMLReferenceError;
}(YAMLError);
var YAMLSemanticError = /*#__PURE__*/function (_YAMLError2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(YAMLSemanticError, _YAMLError2);

  var _super3 = _createSuper(YAMLSemanticError);

  function YAMLSemanticError(source, message) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, YAMLSemanticError);

    return _super3.call(this, 'YAMLSemanticError', source, message);
  }

  return YAMLSemanticError;
}(YAMLError);
var YAMLSyntaxError = /*#__PURE__*/function (_YAMLError3) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(YAMLSyntaxError, _YAMLError3);

  var _super4 = _createSuper(YAMLSyntaxError);

  function YAMLSyntaxError(source, message) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, YAMLSyntaxError);

    return _super4.call(this, 'YAMLSyntaxError', source, message);
  }

  return YAMLSyntaxError;
}(YAMLError);
var YAMLWarning = /*#__PURE__*/function (_YAMLError4) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(YAMLWarning, _YAMLError4);

  var _super5 = _createSuper(YAMLWarning);

  function YAMLWarning(source, message) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, YAMLWarning);

    return _super5.call(this, 'YAMLWarning', source, message);
  }

  return YAMLWarning;
}(YAMLError);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/foldFlowLines.js":
/*!*********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/foldFlowLines.js ***!
  \*********************************************************/
/*! exports provided: FOLD_FLOW, FOLD_BLOCK, FOLD_QUOTED, foldFlowLines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLD_FLOW", function() { return FOLD_FLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLD_BLOCK", function() { return FOLD_BLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLD_QUOTED", function() { return FOLD_QUOTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldFlowLines", function() { return foldFlowLines; });
var FOLD_FLOW = 'flow';
var FOLD_BLOCK = 'block';
var FOLD_QUOTED = 'quoted'; // presumes i+1 is at the start of a line
// returns index of last newline in more-indented block

var consumeMoreIndentedLines = function consumeMoreIndentedLines(text, i) {
  var ch = text[i + 1];

  while (ch === ' ' || ch === '\t') {
    do {
      ch = text[i += 1];
    } while (ch && ch !== '\n');

    ch = text[i + 1];
  }

  return i;
};
/**
 * Tries to keep input at up to `lineWidth` characters, splitting only on spaces
 * not followed by newlines or spaces unless `mode` is `'quoted'`. Lines are
 * terminated with `\n` and started with `indent`.
 *
 * @param {string} text
 * @param {string} indent
 * @param {string} [mode='flow'] `'block'` prevents more-indented lines
 *   from being folded; `'quoted'` allows for `\` escapes, including escaped
 *   newlines
 * @param {Object} options
 * @param {number} [options.indentAtStart] Accounts for leading contents on
 *   the first line, defaulting to `indent.length`
 * @param {number} [options.lineWidth=80]
 * @param {number} [options.minContentWidth=20] Allow highly indented lines to
 *   stretch the line width
 * @param {function} options.onFold Called once if the text is folded
 * @param {function} options.onFold Called once if any line of text exceeds
 *   lineWidth characters
 */


function foldFlowLines(text, indent, mode, _ref) {
  var indentAtStart = _ref.indentAtStart,
      _ref$lineWidth = _ref.lineWidth,
      lineWidth = _ref$lineWidth === void 0 ? 80 : _ref$lineWidth,
      _ref$minContentWidth = _ref.minContentWidth,
      minContentWidth = _ref$minContentWidth === void 0 ? 20 : _ref$minContentWidth,
      onFold = _ref.onFold,
      onOverflow = _ref.onOverflow;
  if (!lineWidth || lineWidth < 0) return text;
  var endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
  if (text.length <= endStep) return text;
  var folds = [];
  var escapedFolds = {};
  var end = lineWidth - (typeof indentAtStart === 'number' ? indentAtStart : indent.length);
  var split = undefined;
  var prev = undefined;
  var overflow = false;
  var i = -1;

  if (mode === FOLD_BLOCK) {
    i = consumeMoreIndentedLines(text, i);
    if (i !== -1) end = i + endStep;
  }

  for (var ch; ch = text[i += 1];) {
    if (mode === FOLD_QUOTED && ch === '\\') {
      switch (text[i + 1]) {
        case 'x':
          i += 3;
          break;

        case 'u':
          i += 5;
          break;

        case 'U':
          i += 9;
          break;

        default:
          i += 1;
      }
    }

    if (ch === '\n') {
      if (mode === FOLD_BLOCK) i = consumeMoreIndentedLines(text, i);
      end = i + endStep;
      split = undefined;
    } else {
      if (ch === ' ' && prev && prev !== ' ' && prev !== '\n' && prev !== '\t') {
        // space surrounded by non-space can be replaced with newline + indent
        var next = text[i + 1];
        if (next && next !== ' ' && next !== '\n' && next !== '\t') split = i;
      }

      if (i >= end) {
        if (split) {
          folds.push(split);
          end = split + endStep;
          split = undefined;
        } else if (mode === FOLD_QUOTED) {
          // white-space collected at end may stretch past lineWidth
          while (prev === ' ' || prev === '\t') {
            prev = ch;
            ch = text[i += 1];
            overflow = true;
          } // i - 2 accounts for not-dropped last char + newline-escaping \


          folds.push(i - 2);
          escapedFolds[i - 2] = true;
          end = i - 2 + endStep;
          split = undefined;
        } else {
          overflow = true;
        }
      }
    }

    prev = ch;
  }

  if (overflow && onOverflow) onOverflow();
  if (folds.length === 0) return text;
  if (onFold) onFold();
  var res = text.slice(0, folds[0]);

  for (var _i = 0; _i < folds.length; ++_i) {
    var fold = folds[_i];

    var _end = folds[_i + 1] || text.length;

    if (mode === FOLD_QUOTED && escapedFolds[fold]) res += "".concat(text[fold], "\\");
    res += "\n".concat(indent).concat(text.slice(fold + 1, _end));
  }

  return res;
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/yaml/browser/dist/index.js ***!
  \*************************************************/
/*! exports provided: YAML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YAML", function() { return YAML; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cst_parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cst/parse */ "./node_modules/yaml/browser/dist/cst/parse.js");
/* harmony import */ var _Document__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Document */ "./node_modules/yaml/browser/dist/Document.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schema */ "./node_modules/yaml/browser/dist/schema/index.js");
/* harmony import */ var _tags_options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tags/options */ "./node_modules/yaml/browser/dist/tags/options.js");
/* harmony import */ var _warnings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./warnings */ "./node_modules/yaml/browser/dist/warnings.js");





function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var defaultOptions = {
  anchorPrefix: 'a',
  customTags: null,
  indent: 2,
  indentSeq: true,
  keepCstNodes: false,
  keepNodeTypes: true,
  keepBlobsInJSON: true,
  mapAsMap: false,
  maxAliasCount: 100,
  prettyErrors: false,
  // TODO Set true in v2
  simpleKeys: false,
  version: '1.2'
};
var scalarOptions = {
  get binary() {
    return _tags_options__WEBPACK_IMPORTED_MODULE_8__["binaryOptions"];
  },

  set binary(opt) {
    Object.assign(_tags_options__WEBPACK_IMPORTED_MODULE_8__["binaryOptions"], opt);
  },

  get bool() {
    return _tags_options__WEBPACK_IMPORTED_MODULE_8__["boolOptions"];
  },

  set bool(opt) {
    Object.assign(_tags_options__WEBPACK_IMPORTED_MODULE_8__["boolOptions"], opt);
  },

  get int() {
    return _tags_options__WEBPACK_IMPORTED_MODULE_8__["intOptions"];
  },

  set int(opt) {
    Object.assign(_tags_options__WEBPACK_IMPORTED_MODULE_8__["intOptions"], opt);
  },

  get null() {
    return _tags_options__WEBPACK_IMPORTED_MODULE_8__["nullOptions"];
  },

  set null(opt) {
    Object.assign(_tags_options__WEBPACK_IMPORTED_MODULE_8__["nullOptions"], opt);
  },

  get str() {
    return _tags_options__WEBPACK_IMPORTED_MODULE_8__["strOptions"];
  },

  set str(opt) {
    Object.assign(_tags_options__WEBPACK_IMPORTED_MODULE_8__["strOptions"], opt);
  }

};

function createNode(value) {
  var wrapScalars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var tag = arguments.length > 2 ? arguments[2] : undefined;

  if (tag === undefined && typeof wrapScalars === 'string') {
    tag = wrapScalars;
    wrapScalars = true;
  }

  var options = Object.assign({}, _Document__WEBPACK_IMPORTED_MODULE_5__["Document"].defaults[defaultOptions.version], defaultOptions);
  var schema = new _schema__WEBPACK_IMPORTED_MODULE_7__["Schema"](options);
  return schema.createNode(value, wrapScalars, tag);
}

var Document = /*#__PURE__*/function (_YAMLDocument) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(Document, _YAMLDocument);

  var _super = _createSuper(Document);

  function Document(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Document);

    return _super.call(this, Object.assign({}, defaultOptions, options));
  }

  return Document;
}(_Document__WEBPACK_IMPORTED_MODULE_5__["Document"]);

function parseAllDocuments(src, options) {
  var stream = [];
  var prev;

  var _iterator = _createForOfIteratorHelper(Object(_cst_parse__WEBPACK_IMPORTED_MODULE_4__["parse"])(src)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var cstDoc = _step.value;
      var doc = new Document(options);
      doc.parse(cstDoc, prev);
      stream.push(doc);
      prev = doc;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return stream;
}

function parseDocument(src, options) {
  var cst = Object(_cst_parse__WEBPACK_IMPORTED_MODULE_4__["parse"])(src);
  var doc = new Document(options).parse(cst[0]);

  if (cst.length > 1) {
    var errMsg = 'Source contains multiple documents; please use YAML.parseAllDocuments()';
    doc.errors.unshift(new _errors__WEBPACK_IMPORTED_MODULE_6__["YAMLSemanticError"](cst[1], errMsg));
  }

  return doc;
}

function parse(src, options) {
  var doc = parseDocument(src, options);
  doc.warnings.forEach(function (warning) {
    return Object(_warnings__WEBPACK_IMPORTED_MODULE_9__["warn"])(warning);
  });
  if (doc.errors.length > 0) throw doc.errors[0];
  return doc.toJSON();
}

function stringify(value, options) {
  var doc = new Document(options);
  doc.contents = value;
  return String(doc);
}

var YAML = {
  createNode: createNode,
  defaultOptions: defaultOptions,
  Document: Document,
  parse: parse,
  parseAllDocuments: parseAllDocuments,
  parseCST: _cst_parse__WEBPACK_IMPORTED_MODULE_4__["parse"],
  parseDocument: parseDocument,
  scalarOptions: scalarOptions,
  stringify: stringify
};

/***/ }),

/***/ "./node_modules/yaml/browser/dist/listTagNames.js":
/*!********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/listTagNames.js ***!
  \********************************************************/
/*! exports provided: listTagNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listTagNames", function() { return listTagNames; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema_Collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema/Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js");
/* harmony import */ var _schema_Pair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema/Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js");
/* harmony import */ var _schema_Scalar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js");





var visit = function visit(node, tags) {
  if (node && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(node) === 'object') {
    var tag = node.tag;

    if (node instanceof _schema_Collection__WEBPACK_IMPORTED_MODULE_1__["Collection"]) {
      if (tag) tags[tag] = true;
      node.items.forEach(function (n) {
        return visit(n, tags);
      });
    } else if (node instanceof _schema_Pair__WEBPACK_IMPORTED_MODULE_2__["Pair"]) {
      visit(node.key, tags);
      visit(node.value, tags);
    } else if (node instanceof _schema_Scalar__WEBPACK_IMPORTED_MODULE_3__["Scalar"]) {
      if (tag) tags[tag] = true;
    }
  }

  return tags;
};

var listTagNames = function listTagNames(node) {
  return Object.keys(visit(node, {}));
};

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/Alias.js":
/*!********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/Alias.js ***!
  \********************************************************/
/*! exports provided: Alias */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alias", function() { return Alias; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _toJSON__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../toJSON */ "./node_modules/yaml/browser/dist/toJSON.js");
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/schema/Node.js");
/* harmony import */ var _Pair__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js");







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var getAliasCount = function getAliasCount(node, anchors) {
  if (node instanceof Alias) {
    var anchor = anchors.get(node.source);
    return anchor.count * anchor.aliasCount;
  } else if (node instanceof _Collection__WEBPACK_IMPORTED_MODULE_9__["Collection"]) {
    var count = 0;

    var _iterator = _createForOfIteratorHelper(node.items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        var c = getAliasCount(item, anchors);
        if (c > count) count = c;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return count;
  } else if (node instanceof _Pair__WEBPACK_IMPORTED_MODULE_11__["Pair"]) {
    var kc = getAliasCount(node.key, anchors);
    var vc = getAliasCount(node.value, anchors);
    return Math.max(kc, vc);
  }

  return 1;
};

var Alias = /*#__PURE__*/function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Alias, _Node);

  var _super = _createSuper(Alias);

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Alias, null, [{
    key: "stringify",
    value: function stringify(_ref, _ref2) {
      var range = _ref.range,
          source = _ref.source;
      var anchors = _ref2.anchors,
          doc = _ref2.doc,
          implicitKey = _ref2.implicitKey,
          inStringifyKey = _ref2.inStringifyKey;
      var anchor = Object.keys(anchors).find(function (a) {
        return anchors[a] === source;
      });
      if (!anchor && inStringifyKey) anchor = doc.anchors.getName(source) || doc.anchors.newName();
      if (anchor) return "*".concat(anchor).concat(implicitKey ? ' ' : '');
      var msg = doc.anchors.getName(source) ? 'Alias node must be after source node' : 'Source node not found for alias node';
      throw new Error("".concat(msg, " [").concat(range, "]"));
    }
  }]);

  function Alias(source) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Alias);

    _this = _super.call(this);
    _this.source = source;
    _this.type = _constants__WEBPACK_IMPORTED_MODULE_6__["Type"].ALIAS;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Alias, [{
    key: "toJSON",
    value: function toJSON(arg, ctx) {
      if (!ctx) return Object(_toJSON__WEBPACK_IMPORTED_MODULE_8__["toJSON"])(this.source, arg, ctx);
      var anchors = ctx.anchors,
          maxAliasCount = ctx.maxAliasCount;
      var anchor = anchors.get(this.source);
      /* istanbul ignore if */

      if (!anchor || anchor.res === undefined) {
        var msg = 'This should not happen: Alias anchor was not resolved?';
        if (this.cstNode) throw new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLReferenceError"](this.cstNode, msg);else throw new ReferenceError(msg);
      }

      if (maxAliasCount >= 0) {
        anchor.count += 1;
        if (anchor.aliasCount === 0) anchor.aliasCount = getAliasCount(this.source, anchors);

        if (anchor.count * anchor.aliasCount > maxAliasCount) {
          var _msg = 'Excessive alias count indicates a resource exhaustion attack';
          if (this.cstNode) throw new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLReferenceError"](this.cstNode, _msg);else throw new ReferenceError(_msg);
        }
      }

      return anchor.res;
    } // Only called when stringifying an alias mapping key while constructing
    // Object output.

  }, {
    key: "toString",
    value: function toString(ctx) {
      return Alias.stringify(this, ctx);
    }
  }, {
    key: "tag",
    set: function set(t) {
      throw new Error('Alias nodes cannot have tags');
    }
  }]);

  return Alias;
}(_Node__WEBPACK_IMPORTED_MODULE_10__["Node"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(Alias, "default", true);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/Collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/Collection.js ***!
  \*************************************************************/
/*! exports provided: isEmptyPath, Collection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyPath", function() { return isEmptyPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toArray */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/toArray.js");
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _addComment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../addComment */ "./node_modules/yaml/browser/dist/addComment.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/schema/Node.js");
/* harmony import */ var _Scalar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js");










function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






function collectionFromPath(schema, path, value) {
  var v = value;

  for (var i = path.length - 1; i >= 0; --i) {
    var k = path[i];
    var o = Number.isInteger(k) && k >= 0 ? [] : {};
    o[k] = v;
    v = o;
  }

  return schema.createNode(v, false);
} // null, undefined, or an empty non-string iterable (e.g. [])


var isEmptyPath = function isEmptyPath(path) {
  return path == null || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8___default()(path) === 'object' && path[Symbol.iterator]().next().done;
};
var Collection = /*#__PURE__*/function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Collection, _Node);

  var _super = _createSuper(Collection);

  function Collection(schema) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Collection);

    _this = _super.call(this);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "items", []);

    _this.schema = schema;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Collection, [{
    key: "addIn",
    value: function addIn(path, value) {
      if (isEmptyPath(path)) this.add(value);else {
        var _path = _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default()(path),
            key = _path[0],
            rest = _path.slice(1);

        var node = this.get(key, true);
        if (node instanceof Collection) node.addIn(rest, value);else if (node === undefined && this.schema) this.set(key, collectionFromPath(this.schema, rest, value));else throw new Error("Expected YAML collection at ".concat(key, ". Remaining path: ").concat(rest));
      }
    }
  }, {
    key: "deleteIn",
    value: function deleteIn(_ref) {
      var _ref2 = _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref),
          key = _ref2[0],
          rest = _ref2.slice(1);

      if (rest.length === 0) return this.delete(key);
      var node = this.get(key, true);
      if (node instanceof Collection) return node.deleteIn(rest);else throw new Error("Expected YAML collection at ".concat(key, ". Remaining path: ").concat(rest));
    }
  }, {
    key: "getIn",
    value: function getIn(_ref3, keepScalar) {
      var _ref4 = _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref3),
          key = _ref4[0],
          rest = _ref4.slice(1);

      var node = this.get(key, true);
      if (rest.length === 0) return !keepScalar && node instanceof _Scalar__WEBPACK_IMPORTED_MODULE_12__["Scalar"] ? node.value : node;else return node instanceof Collection ? node.getIn(rest, keepScalar) : undefined;
    }
  }, {
    key: "hasAllNullValues",
    value: function hasAllNullValues() {
      return this.items.every(function (node) {
        if (!node || node.type !== 'PAIR') return false;
        var n = node.value;
        return n == null || n instanceof _Scalar__WEBPACK_IMPORTED_MODULE_12__["Scalar"] && n.value == null && !n.commentBefore && !n.comment && !n.tag;
      });
    }
  }, {
    key: "hasIn",
    value: function hasIn(_ref5) {
      var _ref6 = _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref5),
          key = _ref6[0],
          rest = _ref6.slice(1);

      if (rest.length === 0) return this.has(key);
      var node = this.get(key, true);
      return node instanceof Collection ? node.hasIn(rest) : false;
    }
  }, {
    key: "setIn",
    value: function setIn(_ref7, value) {
      var _ref8 = _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref7),
          key = _ref8[0],
          rest = _ref8.slice(1);

      if (rest.length === 0) {
        this.set(key, value);
      } else {
        var node = this.get(key, true);
        if (node instanceof Collection) node.setIn(rest, value);else if (node === undefined && this.schema) this.set(key, collectionFromPath(this.schema, rest, value));else throw new Error("Expected YAML collection at ".concat(key, ". Remaining path: ").concat(rest));
      }
    } // overridden in implementations

    /* istanbul ignore next */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return null;
    }
  }, {
    key: "toString",
    value: function toString(ctx, _ref9, onComment, onChompKeep) {
      var _this2 = this;

      var blockItem = _ref9.blockItem,
          flowChars = _ref9.flowChars,
          isMap = _ref9.isMap,
          itemIndent = _ref9.itemIndent;
      var _ctx = ctx,
          doc = _ctx.doc,
          indent = _ctx.indent,
          indentStep = _ctx.indentStep;
      var inFlow = this.type === _constants__WEBPACK_IMPORTED_MODULE_10__["Type"].FLOW_MAP || this.type === _constants__WEBPACK_IMPORTED_MODULE_10__["Type"].FLOW_SEQ || ctx.inFlow;
      if (inFlow) itemIndent += indentStep;
      var allNullValues = isMap && this.hasAllNullValues();
      ctx = Object.assign({}, ctx, {
        allNullValues: allNullValues,
        indent: itemIndent,
        inFlow: inFlow,
        type: null
      });
      var chompKeep = false;
      var hasItemWithNewLine = false;
      var nodes = this.items.reduce(function (nodes, item, i) {
        var comment;

        if (item) {
          if (!chompKeep && item.spaceBefore) nodes.push({
            type: 'comment',
            str: ''
          });
          if (item.commentBefore) item.commentBefore.match(/^.*$/gm).forEach(function (line) {
            nodes.push({
              type: 'comment',
              str: "#".concat(line)
            });
          });
          if (item.comment) comment = item.comment;
          if (inFlow && (!chompKeep && item.spaceBefore || item.commentBefore || item.comment || item.key && (item.key.commentBefore || item.key.comment) || item.value && (item.value.commentBefore || item.value.comment))) hasItemWithNewLine = true;
        }

        chompKeep = false;
        var str = doc.schema.stringify(item, ctx, function () {
          return comment = null;
        }, function () {
          return chompKeep = true;
        });
        if (inFlow && !hasItemWithNewLine && str.includes('\n')) hasItemWithNewLine = true;
        if (inFlow && i < _this2.items.length - 1) str += ',';
        str = Object(_addComment__WEBPACK_IMPORTED_MODULE_9__["addComment"])(str, itemIndent, comment);
        if (chompKeep && (comment || inFlow)) chompKeep = false;
        nodes.push({
          type: 'item',
          str: str
        });
        return nodes;
      }, []);
      var str;

      if (nodes.length === 0) {
        str = flowChars.start + flowChars.end;
      } else if (inFlow) {
        var start = flowChars.start,
            end = flowChars.end;
        var strings = nodes.map(function (n) {
          return n.str;
        });

        if (hasItemWithNewLine || strings.reduce(function (sum, str) {
          return sum + str.length + 2;
        }, 2) > Collection.maxFlowStringSingleLineLength) {
          str = start;

          var _iterator = _createForOfIteratorHelper(strings),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var s = _step.value;
              str += s ? "\n".concat(indentStep).concat(indent).concat(s) : '\n';
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          str += "\n".concat(indent).concat(end);
        } else {
          str = "".concat(start, " ").concat(strings.join(' '), " ").concat(end);
        }
      } else {
        var _strings = nodes.map(blockItem);

        str = _strings.shift();

        var _iterator2 = _createForOfIteratorHelper(_strings),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _s = _step2.value;
            str += _s ? "\n".concat(indent).concat(_s) : '\n';
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      if (this.comment) {
        str += '\n' + this.comment.replace(/^/gm, "".concat(indent, "#"));
        if (onComment) onComment();
      } else if (chompKeep && onChompKeep) onChompKeep();

      return str;
    }
  }]);

  return Collection;
}(_Node__WEBPACK_IMPORTED_MODULE_11__["Node"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Collection, "maxFlowStringSingleLineLength", 60);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/Map.js":
/*!******************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/Map.js ***!
  \******************************************************/
/*! exports provided: findPair, YAMLMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPair", function() { return findPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YAMLMap", function() { return YAMLMap; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js");
/* harmony import */ var _Pair__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js");
/* harmony import */ var _Scalar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js");







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function findPair(items, key) {
  var k = key instanceof _Scalar__WEBPACK_IMPORTED_MODULE_8__["Scalar"] ? key.value : key;

  var _iterator = _createForOfIteratorHelper(items),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var it = _step.value;

      if (it instanceof _Pair__WEBPACK_IMPORTED_MODULE_7__["Pair"]) {
        if (it.key === key || it.key === k) return it;
        if (it.key && it.key.value === k) return it;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return undefined;
}
var YAMLMap = /*#__PURE__*/function (_Collection) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(YAMLMap, _Collection);

  var _super = _createSuper(YAMLMap);

  function YAMLMap() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, YAMLMap);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(YAMLMap, [{
    key: "add",
    value: function add(pair, overwrite) {
      if (!pair) pair = new _Pair__WEBPACK_IMPORTED_MODULE_7__["Pair"](pair);else if (!(pair instanceof _Pair__WEBPACK_IMPORTED_MODULE_7__["Pair"])) pair = new _Pair__WEBPACK_IMPORTED_MODULE_7__["Pair"](pair.key || pair, pair.value);
      var prev = findPair(this.items, pair.key);
      var sortEntries = this.schema && this.schema.sortMapEntries;

      if (prev) {
        if (overwrite) prev.value = pair.value;else throw new Error("Key ".concat(pair.key, " already set"));
      } else if (sortEntries) {
        var i = this.items.findIndex(function (item) {
          return sortEntries(pair, item) < 0;
        });
        if (i === -1) this.items.push(pair);else this.items.splice(i, 0, pair);
      } else {
        this.items.push(pair);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      var it = findPair(this.items, key);
      if (!it) return false;
      var del = this.items.splice(this.items.indexOf(it), 1);
      return del.length > 0;
    }
  }, {
    key: "get",
    value: function get(key, keepScalar) {
      var it = findPair(this.items, key);
      var node = it && it.value;
      return !keepScalar && node instanceof _Scalar__WEBPACK_IMPORTED_MODULE_8__["Scalar"] ? node.value : node;
    }
  }, {
    key: "has",
    value: function has(key) {
      return !!findPair(this.items, key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.add(new _Pair__WEBPACK_IMPORTED_MODULE_7__["Pair"](key, value), true);
    }
    /**
     * @param {*} arg ignored
     * @param {*} ctx Conversion context, originally set in Document#toJSON()
     * @param {Class} Type If set, forces the returned collection type
     * @returns {*} Instance of Type, Map, or Object
     */

  }, {
    key: "toJSON",
    value: function toJSON(_, ctx, Type) {
      var map = Type ? new Type() : ctx && ctx.mapAsMap ? new Map() : {};
      if (ctx && ctx.onCreate) ctx.onCreate(map);

      var _iterator2 = _createForOfIteratorHelper(this.items),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          item.addToJSMap(ctx, map);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return map;
    }
  }, {
    key: "toString",
    value: function toString(ctx, onComment, onChompKeep) {
      if (!ctx) return JSON.stringify(this);

      var _iterator3 = _createForOfIteratorHelper(this.items),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var item = _step3.value;
          if (!(item instanceof _Pair__WEBPACK_IMPORTED_MODULE_7__["Pair"])) throw new Error("Map items must all be pairs; found ".concat(JSON.stringify(item), " instead"));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(YAMLMap.prototype), "toString", this).call(this, ctx, {
        blockItem: function blockItem(n) {
          return n.str;
        },
        flowChars: {
          start: '{',
          end: '}'
        },
        isMap: true,
        itemIndent: ctx.indent || ''
      }, onComment, onChompKeep);
    }
  }]);

  return YAMLMap;
}(_Collection__WEBPACK_IMPORTED_MODULE_6__["Collection"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/Merge.js":
/*!********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/Merge.js ***!
  \********************************************************/
/*! exports provided: MERGE_KEY, Merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MERGE_KEY", function() { return MERGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Merge", function() { return Merge; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Map */ "./node_modules/yaml/browser/dist/schema/Map.js");
/* harmony import */ var _Pair__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js");
/* harmony import */ var _Scalar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js");
/* harmony import */ var _Seq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js");








function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var MERGE_KEY = '<<';
var Merge = /*#__PURE__*/function (_Pair) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Merge, _Pair);

  var _super = _createSuper(Merge);

  function Merge(pair) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Merge);

    if (pair instanceof _Pair__WEBPACK_IMPORTED_MODULE_8__["Pair"]) {
      var seq = pair.value;

      if (!(seq instanceof _Seq__WEBPACK_IMPORTED_MODULE_10__["YAMLSeq"])) {
        seq = new _Seq__WEBPACK_IMPORTED_MODULE_10__["YAMLSeq"]();
        seq.items.push(pair.value);
        seq.range = pair.value.range;
      }

      _this = _super.call(this, pair.key, seq);
      _this.range = pair.range;
    } else {
      _this = _super.call(this, new _Scalar__WEBPACK_IMPORTED_MODULE_9__["Scalar"](MERGE_KEY), new _Seq__WEBPACK_IMPORTED_MODULE_10__["YAMLSeq"]());
    }

    _this.type = _Pair__WEBPACK_IMPORTED_MODULE_8__["Pair"].Type.MERGE_PAIR;
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(_this);
  } // If the value associated with a merge key is a single mapping node, each of
  // its key/value pairs is inserted into the current mapping, unless the key
  // already exists in it. If the value associated with the merge key is a
  // sequence, then this sequence is expected to contain mapping nodes and each
  // of these nodes is merged in turn according to its order in the sequence.
  // Keys in mapping nodes earlier in the sequence override keys specified in
  // later mapping nodes. -- http://yaml.org/type/merge.html


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Merge, [{
    key: "addToJSMap",
    value: function addToJSMap(ctx, map) {
      var _iterator = _createForOfIteratorHelper(this.value.items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var source = _step.value.source;
          if (!(source instanceof _Map__WEBPACK_IMPORTED_MODULE_7__["YAMLMap"])) throw new Error('Merge sources must be maps');
          var srcMap = source.toJSON(null, ctx, Map);

          var _iterator2 = _createForOfIteratorHelper(srcMap),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _step2$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step2.value, 2),
                  key = _step2$value[0],
                  value = _step2$value[1];

              if (map instanceof Map) {
                if (!map.has(key)) map.set(key, value);
              } else if (map instanceof Set) {
                map.add(key);
              } else {
                if (!Object.prototype.hasOwnProperty.call(map, key)) map[key] = value;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return map;
    }
  }, {
    key: "toString",
    value: function toString(ctx, onComment) {
      var seq = this.value;
      if (seq.items.length > 1) return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Merge.prototype), "toString", this).call(this, ctx, onComment);
      this.value = seq.items[0];

      var str = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Merge.prototype), "toString", this).call(this, ctx, onComment);

      this.value = seq;
      return str;
    }
  }]);

  return Merge;
}(_Pair__WEBPACK_IMPORTED_MODULE_8__["Pair"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/Node.js":
/*!*******************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/Node.js ***!
  \*******************************************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);

var Node = function Node() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Node);
};

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/Pair.js":
/*!*******************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/Pair.js ***!
  \*******************************************************/
/*! exports provided: Pair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pair", function() { return Pair; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _addComment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../addComment */ "./node_modules/yaml/browser/dist/addComment.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _toJSON__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../toJSON */ "./node_modules/yaml/browser/dist/toJSON.js");
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/schema/Node.js");
/* harmony import */ var _Scalar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js");
/* harmony import */ var _Seq__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js");








function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Published as 'yaml/pair'








var stringifyKey = function stringifyKey(key, jsKey, ctx) {
  if (jsKey === null) return '';
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default()(jsKey) !== 'object') return String(jsKey);
  if (key instanceof _Node__WEBPACK_IMPORTED_MODULE_11__["Node"] && ctx && ctx.doc) return key.toString({
    anchors: {},
    doc: ctx.doc,
    indent: '',
    indentStep: ctx.indentStep,
    inFlow: true,
    inStringifyKey: true
  });
  return JSON.stringify(jsKey);
};

var Pair = /*#__PURE__*/function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Pair, _Node);

  var _super = _createSuper(Pair);

  function Pair(key) {
    var _this;

    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Pair);

    _this = _super.call(this);
    _this.key = key;
    _this.value = value;
    _this.type = Pair.Type.PAIR;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Pair, [{
    key: "addToJSMap",
    value: function addToJSMap(ctx, map) {
      var key = Object(_toJSON__WEBPACK_IMPORTED_MODULE_9__["toJSON"])(this.key, '', ctx);

      if (map instanceof Map) {
        var value = Object(_toJSON__WEBPACK_IMPORTED_MODULE_9__["toJSON"])(this.value, key, ctx);
        map.set(key, value);
      } else if (map instanceof Set) {
        map.add(key);
      } else {
        var stringKey = stringifyKey(this.key, key, ctx);
        map[stringKey] = Object(_toJSON__WEBPACK_IMPORTED_MODULE_9__["toJSON"])(this.value, stringKey, ctx);
      }

      return map;
    }
  }, {
    key: "toJSON",
    value: function toJSON(_, ctx) {
      var pair = ctx && ctx.mapAsMap ? new Map() : {};
      return this.addToJSMap(ctx, pair);
    }
  }, {
    key: "toString",
    value: function toString(ctx, onComment, onChompKeep) {
      if (!ctx || !ctx.doc) return JSON.stringify(this);
      var _ctx$doc$options = ctx.doc.options,
          indentSize = _ctx$doc$options.indent,
          indentSeq = _ctx$doc$options.indentSeq,
          simpleKeys = _ctx$doc$options.simpleKeys;
      var key = this.key,
          value = this.value;
      var keyComment = key instanceof _Node__WEBPACK_IMPORTED_MODULE_11__["Node"] && key.comment;

      if (simpleKeys) {
        if (keyComment) {
          throw new Error('With simple keys, key nodes cannot have comments');
        }

        if (key instanceof _Collection__WEBPACK_IMPORTED_MODULE_10__["Collection"]) {
          var msg = 'With simple keys, collection cannot be used as a key value';
          throw new Error(msg);
        }
      }

      var explicitKey = !simpleKeys && (!key || keyComment || key instanceof _Collection__WEBPACK_IMPORTED_MODULE_10__["Collection"] || key.type === _constants__WEBPACK_IMPORTED_MODULE_8__["Type"].BLOCK_FOLDED || key.type === _constants__WEBPACK_IMPORTED_MODULE_8__["Type"].BLOCK_LITERAL);
      var _ctx = ctx,
          doc = _ctx.doc,
          indent = _ctx.indent,
          indentStep = _ctx.indentStep;
      ctx = Object.assign({}, ctx, {
        implicitKey: !explicitKey,
        indent: indent + indentStep
      });
      var chompKeep = false;
      var str = doc.schema.stringify(key, ctx, function () {
        return keyComment = null;
      }, function () {
        return chompKeep = true;
      });
      str = Object(_addComment__WEBPACK_IMPORTED_MODULE_7__["addComment"])(str, ctx.indent, keyComment);

      if (ctx.allNullValues && !simpleKeys) {
        if (this.comment) {
          str = Object(_addComment__WEBPACK_IMPORTED_MODULE_7__["addComment"])(str, ctx.indent, this.comment);
          if (onComment) onComment();
        } else if (chompKeep && !keyComment && onChompKeep) onChompKeep();

        return ctx.inFlow ? str : "? ".concat(str);
      }

      str = explicitKey ? "? ".concat(str, "\n").concat(indent, ":") : "".concat(str, ":");

      if (this.comment) {
        // expected (but not strictly required) to be a single-line comment
        str = Object(_addComment__WEBPACK_IMPORTED_MODULE_7__["addComment"])(str, ctx.indent, this.comment);
        if (onComment) onComment();
      }

      var vcb = '';
      var valueComment = null;

      if (value instanceof _Node__WEBPACK_IMPORTED_MODULE_11__["Node"]) {
        if (value.spaceBefore) vcb = '\n';

        if (value.commentBefore) {
          var cs = value.commentBefore.replace(/^/gm, "".concat(ctx.indent, "#"));
          vcb += "\n".concat(cs);
        }

        valueComment = value.comment;
      } else if (value && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default()(value) === 'object') {
        value = doc.schema.createNode(value, true);
      }

      ctx.implicitKey = false;
      if (!explicitKey && !this.comment && value instanceof _Scalar__WEBPACK_IMPORTED_MODULE_12__["Scalar"]) ctx.indentAtStart = str.length + 1;
      chompKeep = false;

      if (!indentSeq && indentSize >= 2 && !ctx.inFlow && !explicitKey && value instanceof _Seq__WEBPACK_IMPORTED_MODULE_13__["YAMLSeq"] && value.type !== _constants__WEBPACK_IMPORTED_MODULE_8__["Type"].FLOW_SEQ && !value.tag && !doc.anchors.getName(value)) {
        // If indentSeq === false, consider '- ' as part of indentation where possible
        ctx.indent = ctx.indent.substr(2);
      }

      var valueStr = doc.schema.stringify(value, ctx, function () {
        return valueComment = null;
      }, function () {
        return chompKeep = true;
      });
      var ws = ' ';

      if (vcb || this.comment) {
        ws = "".concat(vcb, "\n").concat(ctx.indent);
      } else if (!explicitKey && value instanceof _Collection__WEBPACK_IMPORTED_MODULE_10__["Collection"]) {
        var flow = valueStr[0] === '[' || valueStr[0] === '{';
        if (!flow || valueStr.includes('\n')) ws = "\n".concat(ctx.indent);
      }

      if (chompKeep && !valueComment && onChompKeep) onChompKeep();
      return Object(_addComment__WEBPACK_IMPORTED_MODULE_7__["addComment"])(str + ws + valueStr, ctx.indent, valueComment);
    }
  }, {
    key: "commentBefore",
    get: function get() {
      return this.key && this.key.commentBefore;
    },
    set: function set(cb) {
      if (this.key == null) this.key = new _Scalar__WEBPACK_IMPORTED_MODULE_12__["Scalar"](null);
      this.key.commentBefore = cb;
    }
  }]);

  return Pair;
}(_Node__WEBPACK_IMPORTED_MODULE_11__["Node"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(Pair, "Type", {
  PAIR: 'PAIR',
  MERGE_PAIR: 'MERGE_PAIR'
});

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/Scalar.js":
/*!*********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/Scalar.js ***!
  \*********************************************************/
/*! exports provided: Scalar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scalar", function() { return Scalar; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _toJSON__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toJSON */ "./node_modules/yaml/browser/dist/toJSON.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/schema/Node.js");






function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Published as 'yaml/scalar'


var Scalar = /*#__PURE__*/function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Scalar, _Node);

  var _super = _createSuper(Scalar);

  function Scalar(value) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Scalar);

    _this = _super.call(this);
    _this.value = value;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Scalar, [{
    key: "toJSON",
    value: function toJSON(arg, ctx) {
      return ctx && ctx.keep ? this.value : Object(_toJSON__WEBPACK_IMPORTED_MODULE_5__["toJSON"])(this.value, arg, ctx);
    }
  }, {
    key: "toString",
    value: function toString() {
      return String(this.value);
    }
  }]);

  return Scalar;
}(_Node__WEBPACK_IMPORTED_MODULE_6__["Node"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/Seq.js":
/*!******************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/Seq.js ***!
  \******************************************************/
/*! exports provided: YAMLSeq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YAMLSeq", function() { return YAMLSeq; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _toJSON__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toJSON */ "./node_modules/yaml/browser/dist/toJSON.js");
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js");
/* harmony import */ var _Scalar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js");







function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Published as 'yaml/seq'




function asItemIndex(key) {
  var idx = key instanceof _Scalar__WEBPACK_IMPORTED_MODULE_8__["Scalar"] ? key.value : key;
  if (idx && typeof idx === 'string') idx = Number(idx);
  return Number.isInteger(idx) && idx >= 0 ? idx : null;
}

var YAMLSeq = /*#__PURE__*/function (_Collection) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(YAMLSeq, _Collection);

  var _super = _createSuper(YAMLSeq);

  function YAMLSeq() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, YAMLSeq);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(YAMLSeq, [{
    key: "add",
    value: function add(value) {
      this.items.push(value);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      var idx = asItemIndex(key);
      if (typeof idx !== 'number') return false;
      var del = this.items.splice(idx, 1);
      return del.length > 0;
    }
  }, {
    key: "get",
    value: function get(key, keepScalar) {
      var idx = asItemIndex(key);
      if (typeof idx !== 'number') return undefined;
      var it = this.items[idx];
      return !keepScalar && it instanceof _Scalar__WEBPACK_IMPORTED_MODULE_8__["Scalar"] ? it.value : it;
    }
  }, {
    key: "has",
    value: function has(key) {
      var idx = asItemIndex(key);
      return typeof idx === 'number' && idx < this.items.length;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var idx = asItemIndex(key);
      if (typeof idx !== 'number') throw new Error("Expected a valid index, not ".concat(key, "."));
      this.items[idx] = value;
    }
  }, {
    key: "toJSON",
    value: function toJSON(_, ctx) {
      var seq = [];
      if (ctx && ctx.onCreate) ctx.onCreate(seq);
      var i = 0;

      var _iterator = _createForOfIteratorHelper(this.items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          seq.push(Object(_toJSON__WEBPACK_IMPORTED_MODULE_6__["toJSON"])(item, String(i++), ctx));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return seq;
    }
  }, {
    key: "toString",
    value: function toString(ctx, onComment, onChompKeep) {
      if (!ctx) return JSON.stringify(this);
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(YAMLSeq.prototype), "toString", this).call(this, ctx, {
        blockItem: function blockItem(n) {
          return n.type === 'comment' ? n.str : "- ".concat(n.str);
        },
        flowChars: {
          start: '[',
          end: ']'
        },
        isMap: false,
        itemIndent: (ctx.indent || '') + '  '
      }, onComment, onChompKeep);
    }
  }]);

  return YAMLSeq;
}(_Collection__WEBPACK_IMPORTED_MODULE_7__["Collection"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/index.js":
/*!********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/index.js ***!
  \********************************************************/
/*! exports provided: Schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schema", function() { return Schema; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _warnings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../warnings */ "./node_modules/yaml/browser/dist/warnings.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stringify */ "./node_modules/yaml/browser/dist/stringify.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tags */ "./node_modules/yaml/browser/dist/tags/index.js");
/* harmony import */ var _tags_failsafe_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tags/failsafe/string */ "./node_modules/yaml/browser/dist/tags/failsafe/string.js");
/* harmony import */ var _Alias__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Alias */ "./node_modules/yaml/browser/dist/schema/Alias.js");
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/schema/Node.js");
/* harmony import */ var _Pair__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js");
/* harmony import */ var _Scalar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js");





function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }













var isMap = function isMap(_ref) {
  var type = _ref.type;
  return type === _constants__WEBPACK_IMPORTED_MODULE_5__["Type"].FLOW_MAP || type === _constants__WEBPACK_IMPORTED_MODULE_5__["Type"].MAP;
};

var isSeq = function isSeq(_ref2) {
  var type = _ref2.type;
  return type === _constants__WEBPACK_IMPORTED_MODULE_5__["Type"].FLOW_SEQ || type === _constants__WEBPACK_IMPORTED_MODULE_5__["Type"].SEQ;
};

var Schema = /*#__PURE__*/function () {
  function Schema(_ref3) {
    var customTags = _ref3.customTags,
        merge = _ref3.merge,
        schema = _ref3.schema,
        sortMapEntries = _ref3.sortMapEntries,
        deprecatedCustomTags = _ref3.tags;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Schema);

    this.merge = !!merge;
    this.name = schema;
    this.sortMapEntries = sortMapEntries === true ? function (a, b) {
      return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
    } : sortMapEntries || null;
    this.tags = _tags__WEBPACK_IMPORTED_MODULE_8__["schemas"][schema.replace(/\W/g, '')]; // 'yaml-1.1' -> 'yaml11'

    if (!this.tags) {
      var keys = Object.keys(_tags__WEBPACK_IMPORTED_MODULE_8__["schemas"]).map(function (key) {
        return JSON.stringify(key);
      }).join(', ');
      throw new Error("Unknown schema \"".concat(schema, "\"; use one of ").concat(keys));
    }

    if (!customTags && deprecatedCustomTags) {
      customTags = deprecatedCustomTags;
      Object(_warnings__WEBPACK_IMPORTED_MODULE_4__["warnOptionDeprecation"])('tags', 'customTags');
    }

    if (Array.isArray(customTags)) {
      var _iterator = _createForOfIteratorHelper(customTags),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tag = _step.value;
          this.tags = this.tags.concat(tag);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else if (typeof customTags === 'function') {
      this.tags = customTags(this.tags.slice());
    }

    for (var i = 0; i < this.tags.length; ++i) {
      var _tag = this.tags[i];

      if (typeof _tag === 'string') {
        var tagObj = _tags__WEBPACK_IMPORTED_MODULE_8__["tags"][_tag];

        if (!tagObj) {
          var _keys = Object.keys(_tags__WEBPACK_IMPORTED_MODULE_8__["tags"]).map(function (key) {
            return JSON.stringify(key);
          }).join(', ');

          throw new Error("Unknown custom tag \"".concat(_tag, "\"; use one of ").concat(_keys));
        }

        this.tags[i] = tagObj;
      }
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Schema, [{
    key: "createNode",
    value: function createNode(value, wrapScalars, tag, ctx) {
      if (value instanceof _Node__WEBPACK_IMPORTED_MODULE_12__["Node"]) return value;
      var tagObj;

      if (tag) {
        if (tag.startsWith('!!')) tag = Schema.defaultPrefix + tag.slice(2);
        var match = this.tags.filter(function (t) {
          return t.tag === tag;
        });
        tagObj = match.find(function (t) {
          return !t.format;
        }) || match[0];
        if (!tagObj) throw new Error("Tag ".concat(tag, " not found"));
      } else {
        // TODO: deprecate/remove class check
        tagObj = this.tags.find(function (t) {
          return (t.identify && t.identify(value) || t.class && value instanceof t.class) && !t.format;
        });

        if (!tagObj) {
          if (typeof value.toJSON === 'function') value = value.toJSON();
          if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) !== 'object') return wrapScalars ? new _Scalar__WEBPACK_IMPORTED_MODULE_14__["Scalar"](value) : value;
          tagObj = value instanceof Map ? _tags__WEBPACK_IMPORTED_MODULE_8__["tags"].map : value[Symbol.iterator] ? _tags__WEBPACK_IMPORTED_MODULE_8__["tags"].seq : _tags__WEBPACK_IMPORTED_MODULE_8__["tags"].map;
        }
      }

      if (!ctx) ctx = {
        wrapScalars: wrapScalars
      };else ctx.wrapScalars = wrapScalars;

      if (ctx.onTagObj) {
        ctx.onTagObj(tagObj);
        delete ctx.onTagObj;
      }

      var obj = {};

      if (value && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object' && ctx.prevObjects) {
        var prev = ctx.prevObjects.get(value);

        if (prev) {
          var alias = new _Alias__WEBPACK_IMPORTED_MODULE_10__["Alias"](prev); // leaves source dirty; must be cleaned by caller

          ctx.aliasNodes.push(alias);
          return alias;
        }

        obj.value = value;
        ctx.prevObjects.set(value, obj);
      }

      obj.node = tagObj.createNode ? tagObj.createNode(this, value, ctx) : wrapScalars ? new _Scalar__WEBPACK_IMPORTED_MODULE_14__["Scalar"](value) : value;
      if (tag && obj.node instanceof _Node__WEBPACK_IMPORTED_MODULE_12__["Node"]) obj.node.tag = tag;
      return obj.node;
    }
  }, {
    key: "createPair",
    value: function createPair(key, value, ctx) {
      var k = this.createNode(key, ctx.wrapScalars, null, ctx);
      var v = this.createNode(value, ctx.wrapScalars, null, ctx);
      return new _Pair__WEBPACK_IMPORTED_MODULE_13__["Pair"](k, v);
    } // falls back to string on no match

  }, {
    key: "resolveScalar",
    value: function resolveScalar(str, tags) {
      if (!tags) tags = this.tags;

      for (var i = 0; i < tags.length; ++i) {
        var _tags$i = tags[i],
            format = _tags$i.format,
            test = _tags$i.test,
            resolve = _tags$i.resolve;

        if (test) {
          var match = str.match(test);

          if (match) {
            var res = resolve.apply(null, match);
            if (!(res instanceof _Scalar__WEBPACK_IMPORTED_MODULE_14__["Scalar"])) res = new _Scalar__WEBPACK_IMPORTED_MODULE_14__["Scalar"](res);
            if (format) res.format = format;
            return res;
          }
        }
      }

      if (this.tags.scalarFallback) str = this.tags.scalarFallback(str);
      return new _Scalar__WEBPACK_IMPORTED_MODULE_14__["Scalar"](str);
    } // sets node.resolved on success

  }, {
    key: "resolveNode",
    value: function resolveNode(doc, node, tagName) {
      var tags = this.tags.filter(function (_ref4) {
        var tag = _ref4.tag;
        return tag === tagName;
      });
      var generic = tags.find(function (_ref5) {
        var test = _ref5.test;
        return !test;
      });
      if (node.error) doc.errors.push(node.error);

      try {
        if (generic) {
          var res = generic.resolve(doc, node);
          if (!(res instanceof _Collection__WEBPACK_IMPORTED_MODULE_11__["Collection"])) res = new _Scalar__WEBPACK_IMPORTED_MODULE_14__["Scalar"](res);
          node.resolved = res;
        } else {
          var str = Object(_tags_failsafe_string__WEBPACK_IMPORTED_MODULE_9__["resolveString"])(doc, node);

          if (typeof str === 'string' && tags.length > 0) {
            node.resolved = this.resolveScalar(str, tags);
          }
        }
      } catch (error) {
        /* istanbul ignore if */
        if (!error.source) error.source = node;
        doc.errors.push(error);
        node.resolved = null;
      }

      if (!node.resolved) return null;
      if (tagName && node.tag) node.resolved.tag = tagName;
      return node.resolved;
    }
  }, {
    key: "resolveNodeWithFallback",
    value: function resolveNodeWithFallback(doc, node, tagName) {
      var res = this.resolveNode(doc, node, tagName);
      if (Object.prototype.hasOwnProperty.call(node, 'resolved')) return res;
      var fallback = isMap(node) ? Schema.defaultTags.MAP : isSeq(node) ? Schema.defaultTags.SEQ : Schema.defaultTags.STR;
      /* istanbul ignore else */

      if (fallback) {
        doc.warnings.push(new _errors__WEBPACK_IMPORTED_MODULE_6__["YAMLWarning"](node, "The tag ".concat(tagName, " is unavailable, falling back to ").concat(fallback)));

        var _res = this.resolveNode(doc, node, fallback);

        _res.tag = tagName;
        return _res;
      } else {
        doc.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_6__["YAMLReferenceError"](node, "The tag ".concat(tagName, " is unavailable")));
        return null;
      }
    }
  }, {
    key: "getTagObject",
    value: function getTagObject(item) {
      if (item instanceof _Alias__WEBPACK_IMPORTED_MODULE_10__["Alias"]) return _Alias__WEBPACK_IMPORTED_MODULE_10__["Alias"];

      if (item.tag) {
        var match = this.tags.filter(function (t) {
          return t.tag === item.tag;
        });
        if (match.length > 0) return match.find(function (t) {
          return t.format === item.format;
        }) || match[0];
      }

      var tagObj, obj;

      if (item instanceof _Scalar__WEBPACK_IMPORTED_MODULE_14__["Scalar"]) {
        obj = item.value; // TODO: deprecate/remove class check

        var _match = this.tags.filter(function (t) {
          return t.identify && t.identify(obj) || t.class && obj instanceof t.class;
        });

        tagObj = _match.find(function (t) {
          return t.format === item.format;
        }) || _match.find(function (t) {
          return !t.format;
        });
      } else {
        obj = item;
        tagObj = this.tags.find(function (t) {
          return t.nodeClass && obj instanceof t.nodeClass;
        });
      }

      if (!tagObj) {
        var name = obj && obj.constructor ? obj.constructor.name : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
        throw new Error("Tag not resolved for ".concat(name, " value"));
      }

      return tagObj;
    } // needs to be called before stringifier to allow for circular anchor refs

  }, {
    key: "stringifyProps",
    value: function stringifyProps(node, tagObj, _ref6) {
      var anchors = _ref6.anchors,
          doc = _ref6.doc;
      var props = [];
      var anchor = doc.anchors.getName(node);

      if (anchor) {
        anchors[anchor] = node;
        props.push("&".concat(anchor));
      }

      if (node.tag) {
        props.push(doc.stringifyTag(node.tag));
      } else if (!tagObj.default) {
        props.push(doc.stringifyTag(tagObj.tag));
      }

      return props.join(' ');
    }
  }, {
    key: "stringify",
    value: function stringify(item, ctx, onComment, onChompKeep) {
      var tagObj;

      if (!(item instanceof _Node__WEBPACK_IMPORTED_MODULE_12__["Node"])) {
        var createCtx = {
          aliasNodes: [],
          onTagObj: function onTagObj(o) {
            return tagObj = o;
          },
          prevObjects: new Map()
        };
        item = this.createNode(item, true, null, createCtx);
        var anchors = ctx.doc.anchors;

        var _iterator2 = _createForOfIteratorHelper(createCtx.aliasNodes),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var alias = _step2.value;
            alias.source = alias.source.node;
            var name = anchors.getName(alias.source);

            if (!name) {
              name = anchors.newName();
              anchors.map[name] = alias.source;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      ctx.tags = this;
      if (item instanceof _Pair__WEBPACK_IMPORTED_MODULE_13__["Pair"]) return item.toString(ctx, onComment, onChompKeep);
      if (!tagObj) tagObj = this.getTagObject(item);
      var props = this.stringifyProps(item, tagObj, ctx);
      if (props.length > 0) ctx.indentAtStart = (ctx.indentAtStart || 0) + props.length + 1;
      var str = typeof tagObj.stringify === 'function' ? tagObj.stringify(item, ctx, onComment, onChompKeep) : item instanceof _Collection__WEBPACK_IMPORTED_MODULE_11__["Collection"] ? item.toString(ctx, onComment, onChompKeep) : Object(_stringify__WEBPACK_IMPORTED_MODULE_7__["stringifyString"])(item, ctx, onComment, onChompKeep);
      return props ? item instanceof _Collection__WEBPACK_IMPORTED_MODULE_11__["Collection"] && str[0] !== '{' && str[0] !== '[' ? "".concat(props, "\n").concat(ctx.indent).concat(str) : "".concat(props, " ").concat(str) : str;
    }
  }]);

  return Schema;
}();

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Schema, "defaultPrefix", 'tag:yaml.org,2002:');

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Schema, "defaultTags", {
  MAP: 'tag:yaml.org,2002:map',
  SEQ: 'tag:yaml.org,2002:seq',
  STR: 'tag:yaml.org,2002:str'
});

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/parseMap.js":
/*!***********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/parseMap.js ***!
  \***********************************************************/
/*! exports provided: parseMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMap", function() { return parseMap; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _cst_PlainValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cst/PlainValue */ "./node_modules/yaml/browser/dist/cst/PlainValue.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Map */ "./node_modules/yaml/browser/dist/schema/Map.js");
/* harmony import */ var _Merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Merge */ "./node_modules/yaml/browser/dist/schema/Merge.js");
/* harmony import */ var _Pair__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js");
/* harmony import */ var _parseUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parseUtils */ "./node_modules/yaml/browser/dist/schema/parseUtils.js");
/* harmony import */ var _Alias__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Alias */ "./node_modules/yaml/browser/dist/schema/Alias.js");
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js");









function parseMap(doc, cst) {
  if (cst.type !== _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].MAP && cst.type !== _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].FLOW_MAP) {
    var msg = "A ".concat(cst.type, " node cannot be resolved as a mapping");
    doc.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_2__["YAMLSyntaxError"](cst, msg));
    return null;
  }

  var _ref = cst.type === _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].FLOW_MAP ? resolveFlowMapItems(doc, cst) : resolveBlockMapItems(doc, cst),
      comments = _ref.comments,
      items = _ref.items;

  var map = new _Map__WEBPACK_IMPORTED_MODULE_3__["YAMLMap"]();
  map.items = items;
  Object(_parseUtils__WEBPACK_IMPORTED_MODULE_6__["resolveComments"])(map, comments);
  var hasCollectionKey = false;

  for (var i = 0; i < items.length; ++i) {
    var iKey = items[i].key;
    if (iKey instanceof _Collection__WEBPACK_IMPORTED_MODULE_8__["Collection"]) hasCollectionKey = true;

    if (doc.schema.merge && iKey && iKey.value === _Merge__WEBPACK_IMPORTED_MODULE_4__["MERGE_KEY"]) {
      items[i] = new _Merge__WEBPACK_IMPORTED_MODULE_4__["Merge"](items[i]);
      var sources = items[i].value.items;
      var error = null;
      sources.some(function (node) {
        if (node instanceof _Alias__WEBPACK_IMPORTED_MODULE_7__["Alias"]) {
          // During parsing, alias sources are CST nodes; to account for
          // circular references their resolved values can't be used here.
          var type = node.source.type;
          if (type === _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].MAP || type === _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].FLOW_MAP) return false;
          return error = 'Merge nodes aliases can only point to maps';
        }

        return error = 'Merge nodes can only have Alias nodes as values';
      });
      if (error) doc.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_2__["YAMLSemanticError"](cst, error));
    } else {
      for (var j = i + 1; j < items.length; ++j) {
        var jKey = items[j].key;

        if (iKey === jKey || iKey && jKey && Object.prototype.hasOwnProperty.call(iKey, 'value') && iKey.value === jKey.value) {
          var _msg = "Map keys must be unique; \"".concat(iKey, "\" is repeated");

          doc.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_2__["YAMLSemanticError"](cst, _msg));
          break;
        }
      }
    }
  }

  if (hasCollectionKey && !doc.options.mapAsMap) {
    var warn = 'Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.';
    doc.warnings.push(new _errors__WEBPACK_IMPORTED_MODULE_2__["YAMLWarning"](cst, warn));
  }

  cst.resolved = map;
  return map;
}

var valueHasPairComment = function valueHasPairComment(_ref2) {
  var _ref2$context = _ref2.context,
      lineStart = _ref2$context.lineStart,
      node = _ref2$context.node,
      src = _ref2$context.src,
      props = _ref2.props;
  if (props.length === 0) return false;
  var start = props[0].start;
  if (node && start > node.valueRange.start) return false;
  if (src[start] !== _constants__WEBPACK_IMPORTED_MODULE_0__["Char"].COMMENT) return false;

  for (var i = lineStart; i < start; ++i) {
    if (src[i] === '\n') return false;
  }

  return true;
};

function resolvePairComment(item, pair) {
  if (!valueHasPairComment(item)) return;
  var comment = item.getPropValue(0, _constants__WEBPACK_IMPORTED_MODULE_0__["Char"].COMMENT, true);
  var found = false;
  var cb = pair.value.commentBefore;

  if (cb && cb.startsWith(comment)) {
    pair.value.commentBefore = cb.substr(comment.length + 1);
    found = true;
  } else {
    var cc = pair.value.comment;

    if (!item.node && cc && cc.startsWith(comment)) {
      pair.value.comment = cc.substr(comment.length + 1);
      found = true;
    }
  }

  if (found) pair.comment = comment;
}

function resolveBlockMapItems(doc, cst) {
  var comments = [];
  var items = [];
  var key = undefined;
  var keyStart = null;

  for (var i = 0; i < cst.items.length; ++i) {
    var item = cst.items[i];

    switch (item.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].BLANK_LINE:
        comments.push({
          afterKey: !!key,
          before: items.length
        });
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].COMMENT:
        comments.push({
          afterKey: !!key,
          before: items.length,
          comment: item.comment
        });
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].MAP_KEY:
        if (key !== undefined) items.push(new _Pair__WEBPACK_IMPORTED_MODULE_5__["Pair"](key));
        if (item.error) doc.errors.push(item.error);
        key = doc.resolveNode(item.node);
        keyStart = null;
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].MAP_VALUE:
        {
          if (key === undefined) key = null;
          if (item.error) doc.errors.push(item.error);

          if (!item.context.atLineStart && item.node && item.node.type === _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].MAP && !item.node.context.atLineStart) {
            var msg = 'Nested mappings are not allowed in compact mappings';
            doc.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_2__["YAMLSemanticError"](item.node, msg));
          }

          var valueNode = item.node;

          if (!valueNode && item.props.length > 0) {
            // Comments on an empty mapping value need to be preserved, so we
            // need to construct a minimal empty node here to use instead of the
            // missing `item.node`. -- eemeli/yaml#19
            valueNode = new _cst_PlainValue__WEBPACK_IMPORTED_MODULE_1__["PlainValue"](_constants__WEBPACK_IMPORTED_MODULE_0__["Type"].PLAIN, []);
            valueNode.context = {
              parent: item,
              src: item.context.src
            };
            var pos = item.range.start + 1;
            valueNode.range = {
              start: pos,
              end: pos
            };
            valueNode.valueRange = {
              start: pos,
              end: pos
            };

            if (typeof item.range.origStart === 'number') {
              var origPos = item.range.origStart + 1;
              valueNode.range.origStart = valueNode.range.origEnd = origPos;
              valueNode.valueRange.origStart = valueNode.valueRange.origEnd = origPos;
            }
          }

          var pair = new _Pair__WEBPACK_IMPORTED_MODULE_5__["Pair"](key, doc.resolveNode(valueNode));
          resolvePairComment(item, pair);
          items.push(pair);
          Object(_parseUtils__WEBPACK_IMPORTED_MODULE_6__["checkKeyLength"])(doc.errors, cst, i, key, keyStart);
          key = undefined;
          keyStart = null;
        }
        break;

      default:
        if (key !== undefined) items.push(new _Pair__WEBPACK_IMPORTED_MODULE_5__["Pair"](key));
        key = doc.resolveNode(item);
        keyStart = item.range.start;
        if (item.error) doc.errors.push(item.error);

        next: for (var j = i + 1;; ++j) {
          var nextItem = cst.items[j];

          switch (nextItem && nextItem.type) {
            case _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].BLANK_LINE:
            case _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].COMMENT:
              continue next;

            case _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].MAP_VALUE:
              break next;

            default:
              doc.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_2__["YAMLSemanticError"](item, 'Implicit map keys need to be followed by map values'));
              break next;
          }
        }

        if (item.valueRangeContainsNewline) {
          var _msg2 = 'Implicit map keys need to be on a single line';
          doc.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_2__["YAMLSemanticError"](item, _msg2));
        }

    }
  }

  if (key !== undefined) items.push(new _Pair__WEBPACK_IMPORTED_MODULE_5__["Pair"](key));
  return {
    comments: comments,
    items: items
  };
}

function resolveFlowMapItems(doc, cst) {
  var comments = [];
  var items = [];
  var key = undefined;
  var keyStart = null;
  var explicitKey = false;
  var next = '{';

  for (var i = 0; i < cst.items.length; ++i) {
    Object(_parseUtils__WEBPACK_IMPORTED_MODULE_6__["checkKeyLength"])(doc.errors, cst, i, key, keyStart);
    var item = cst.items[i];

    if (typeof item.char === 'string') {
      var char = item.char,
          offset = item.offset;

      if (char === '?' && key === undefined && !explicitKey) {
        explicitKey = true;
        next = ':';
        continue;
      }

      if (char === ':') {
        if (key === undefined) key = null;

        if (next === ':') {
          next = ',';
          continue;
        }
      } else {
        if (explicitKey) {
          if (key === undefined && char !== ',') key = null;
          explicitKey = false;
        }

        if (key !== undefined) {
          items.push(new _Pair__WEBPACK_IMPORTED_MODULE_5__["Pair"](key));
          key = undefined;
          keyStart = null;

          if (char === ',') {
            next = ':';
            continue;
          }
        }
      }

      if (char === '}') {
        if (i === cst.items.length - 1) continue;
      } else if (char === next) {
        next = ':';
        continue;
      }

      var msg = "Flow map contains an unexpected ".concat(char);
      var err = new _errors__WEBPACK_IMPORTED_MODULE_2__["YAMLSyntaxError"](cst, msg);
      err.offset = offset;
      doc.errors.push(err);
    } else if (item.type === _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].BLANK_LINE) {
      comments.push({
        afterKey: !!key,
        before: items.length
      });
    } else if (item.type === _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].COMMENT) {
      comments.push({
        afterKey: !!key,
        before: items.length,
        comment: item.comment
      });
    } else if (key === undefined) {
      if (next === ',') doc.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_2__["YAMLSemanticError"](item, 'Separator , missing in flow map'));
      key = doc.resolveNode(item);
      keyStart = explicitKey ? null : item.range.start; // TODO: add error for non-explicit multiline plain key
    } else {
      if (next !== ',') doc.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_2__["YAMLSemanticError"](item, 'Indicator : missing in flow map entry'));
      items.push(new _Pair__WEBPACK_IMPORTED_MODULE_5__["Pair"](key, doc.resolveNode(item)));
      key = undefined;
      explicitKey = false;
    }
  }

  Object(_parseUtils__WEBPACK_IMPORTED_MODULE_6__["checkFlowCollectionEnd"])(doc.errors, cst);
  if (key !== undefined) items.push(new _Pair__WEBPACK_IMPORTED_MODULE_5__["Pair"](key));
  return {
    comments: comments,
    items: items
  };
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/parseSeq.js":
/*!***********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/parseSeq.js ***!
  \***********************************************************/
/*! exports provided: parseSeq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSeq", function() { return parseSeq; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _Pair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js");
/* harmony import */ var _parseUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseUtils */ "./node_modules/yaml/browser/dist/schema/parseUtils.js");
/* harmony import */ var _Seq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js");
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js");






function parseSeq(doc, cst) {
  if (cst.type !== _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].SEQ && cst.type !== _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].FLOW_SEQ) {
    var msg = "A ".concat(cst.type, " node cannot be resolved as a sequence");
    doc.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_1__["YAMLSyntaxError"](cst, msg));
    return null;
  }

  var _ref = cst.type === _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].FLOW_SEQ ? resolveFlowSeqItems(doc, cst) : resolveBlockSeqItems(doc, cst),
      comments = _ref.comments,
      items = _ref.items;

  var seq = new _Seq__WEBPACK_IMPORTED_MODULE_4__["YAMLSeq"]();
  seq.items = items;
  Object(_parseUtils__WEBPACK_IMPORTED_MODULE_3__["resolveComments"])(seq, comments);

  if (!doc.options.mapAsMap && items.some(function (it) {
    return it instanceof _Pair__WEBPACK_IMPORTED_MODULE_2__["Pair"] && it.key instanceof _Collection__WEBPACK_IMPORTED_MODULE_5__["Collection"];
  })) {
    var warn = 'Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.';
    doc.warnings.push(new _errors__WEBPACK_IMPORTED_MODULE_1__["YAMLWarning"](cst, warn));
  }

  cst.resolved = seq;
  return seq;
}

function resolveBlockSeqItems(doc, cst) {
  var comments = [];
  var items = [];

  for (var i = 0; i < cst.items.length; ++i) {
    var item = cst.items[i];

    switch (item.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].BLANK_LINE:
        comments.push({
          before: items.length
        });
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].COMMENT:
        comments.push({
          comment: item.comment,
          before: items.length
        });
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].SEQ_ITEM:
        if (item.error) doc.errors.push(item.error);
        items.push(doc.resolveNode(item.node));

        if (item.hasProps) {
          var msg = 'Sequence items cannot have tags or anchors before the - indicator';
          doc.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_1__["YAMLSemanticError"](item, msg));
        }

        break;

      default:
        if (item.error) doc.errors.push(item.error);
        doc.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_1__["YAMLSyntaxError"](item, "Unexpected ".concat(item.type, " node in sequence")));
    }
  }

  return {
    comments: comments,
    items: items
  };
}

function resolveFlowSeqItems(doc, cst) {
  var comments = [];
  var items = [];
  var explicitKey = false;
  var key = undefined;
  var keyStart = null;
  var next = '[';

  for (var i = 0; i < cst.items.length; ++i) {
    var item = cst.items[i];

    if (typeof item.char === 'string') {
      var char = item.char,
          offset = item.offset;

      if (char !== ':' && (explicitKey || key !== undefined)) {
        if (explicitKey && key === undefined) key = next ? items.pop() : null;
        items.push(new _Pair__WEBPACK_IMPORTED_MODULE_2__["Pair"](key));
        explicitKey = false;
        key = undefined;
        keyStart = null;
      }

      if (char === next) {
        next = null;
      } else if (!next && char === '?') {
        explicitKey = true;
      } else if (next !== '[' && char === ':' && key === undefined) {
        if (next === ',') {
          key = items.pop();

          if (key instanceof _Pair__WEBPACK_IMPORTED_MODULE_2__["Pair"]) {
            var msg = 'Chaining flow sequence pairs is invalid';
            var err = new _errors__WEBPACK_IMPORTED_MODULE_1__["YAMLSemanticError"](cst, msg);
            err.offset = offset;
            doc.errors.push(err);
          }

          if (!explicitKey) Object(_parseUtils__WEBPACK_IMPORTED_MODULE_3__["checkKeyLength"])(doc.errors, cst, i, key, keyStart);
        } else {
          key = null;
        }

        keyStart = null;
        explicitKey = false; // TODO: add error for non-explicit multiline plain key

        next = null;
      } else if (next === '[' || char !== ']' || i < cst.items.length - 1) {
        var _msg = "Flow sequence contains an unexpected ".concat(char);

        var _err = new _errors__WEBPACK_IMPORTED_MODULE_1__["YAMLSyntaxError"](cst, _msg);

        _err.offset = offset;
        doc.errors.push(_err);
      }
    } else if (item.type === _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].BLANK_LINE) {
      comments.push({
        before: items.length
      });
    } else if (item.type === _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].COMMENT) {
      comments.push({
        comment: item.comment,
        before: items.length
      });
    } else {
      if (next) {
        var _msg2 = "Expected a ".concat(next, " in flow sequence");

        doc.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_1__["YAMLSemanticError"](item, _msg2));
      }

      var value = doc.resolveNode(item);

      if (key === undefined) {
        items.push(value);
      } else {
        items.push(new _Pair__WEBPACK_IMPORTED_MODULE_2__["Pair"](key, value));
        key = undefined;
      }

      keyStart = item.range.start;
      next = ',';
    }
  }

  Object(_parseUtils__WEBPACK_IMPORTED_MODULE_3__["checkFlowCollectionEnd"])(doc.errors, cst);
  if (key !== undefined) items.push(new _Pair__WEBPACK_IMPORTED_MODULE_2__["Pair"](key));
  return {
    comments: comments,
    items: items
  };
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/parseUtils.js":
/*!*************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/parseUtils.js ***!
  \*************************************************************/
/*! exports provided: checkFlowCollectionEnd, checkKeyLength, resolveComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFlowCollectionEnd", function() { return checkFlowCollectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkKeyLength", function() { return checkKeyLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveComments", function() { return resolveComments; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function checkFlowCollectionEnd(errors, cst) {
  var char, name;

  switch (cst.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["Type"].FLOW_MAP:
      char = '}';
      name = 'flow map';
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__["Type"].FLOW_SEQ:
      char = ']';
      name = 'flow sequence';
      break;

    default:
      errors.push(new _errors__WEBPACK_IMPORTED_MODULE_0__["YAMLSemanticError"](cst, 'Not a flow collection!?'));
      return;
  }

  var lastItem;

  for (var i = cst.items.length - 1; i >= 0; --i) {
    var item = cst.items[i];

    if (!item || item.type !== _constants__WEBPACK_IMPORTED_MODULE_1__["Type"].COMMENT) {
      lastItem = item;
      break;
    }
  }

  if (lastItem && lastItem.char !== char) {
    var msg = "Expected ".concat(name, " to end with ").concat(char);
    var err;

    if (typeof lastItem.offset === 'number') {
      err = new _errors__WEBPACK_IMPORTED_MODULE_0__["YAMLSemanticError"](cst, msg);
      err.offset = lastItem.offset + 1;
    } else {
      err = new _errors__WEBPACK_IMPORTED_MODULE_0__["YAMLSemanticError"](lastItem, msg);
      if (lastItem.range && lastItem.range.end) err.offset = lastItem.range.end - lastItem.range.start;
    }

    errors.push(err);
  }
}
function checkKeyLength(errors, node, itemIdx, key, keyStart) {
  if (!key || typeof keyStart !== 'number') return;
  var item = node.items[itemIdx];
  var keyEnd = item && item.range && item.range.start;

  if (!keyEnd) {
    for (var i = itemIdx - 1; i >= 0; --i) {
      var it = node.items[i];

      if (it && it.range) {
        keyEnd = it.range.end + 2 * (itemIdx - i);
        break;
      }
    }
  }

  if (keyEnd > keyStart + 1024) {
    var k = String(key).substr(0, 8) + '...' + String(key).substr(-8);
    errors.push(new _errors__WEBPACK_IMPORTED_MODULE_0__["YAMLSemanticError"](node, "The \"".concat(k, "\" key is too long")));
  }
}
function resolveComments(collection, comments) {
  var _iterator = _createForOfIteratorHelper(comments),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
          afterKey = _step$value.afterKey,
          before = _step$value.before,
          comment = _step$value.comment;
      var item = collection.items[before];

      if (!item) {
        if (comment !== undefined) {
          if (collection.comment) collection.comment += '\n' + comment;else collection.comment = comment;
        }
      } else {
        if (afterKey && item.value) item = item.value;

        if (comment === undefined) {
          if (afterKey || !item.commentBefore) item.spaceBefore = true;
        } else {
          if (item.commentBefore) item.commentBefore += '\n' + comment;else item.commentBefore = comment;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/stringify.js":
/*!*****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/stringify.js ***!
  \*****************************************************/
/*! exports provided: stringifyNumber, stringifyString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyNumber", function() { return stringifyNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyString", function() { return stringifyString; });
/* harmony import */ var _addComment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addComment */ "./node_modules/yaml/browser/dist/addComment.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _foldFlowLines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foldFlowLines */ "./node_modules/yaml/browser/dist/foldFlowLines.js");
/* harmony import */ var _tags_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags/options */ "./node_modules/yaml/browser/dist/tags/options.js");





var getFoldOptions = function getFoldOptions(_ref) {
  var indentAtStart = _ref.indentAtStart;
  return indentAtStart ? Object.assign({
    indentAtStart: indentAtStart
  }, _tags_options__WEBPACK_IMPORTED_MODULE_3__["strOptions"].fold) : _tags_options__WEBPACK_IMPORTED_MODULE_3__["strOptions"].fold;
};

function stringifyNumber(_ref2) {
  var format = _ref2.format,
      minFractionDigits = _ref2.minFractionDigits,
      tag = _ref2.tag,
      value = _ref2.value;
  if (typeof value === 'bigint') return String(value);
  if (!isFinite(value)) return isNaN(value) ? '.nan' : value < 0 ? '-.inf' : '.inf';
  var n = JSON.stringify(value);

  if (!format && minFractionDigits && (!tag || tag === 'tag:yaml.org,2002:float') && /^\d/.test(n)) {
    var i = n.indexOf('.');

    if (i < 0) {
      i = n.length;
      n += '.';
    }

    var d = minFractionDigits - (n.length - i - 1);

    while (d-- > 0) {
      n += '0';
    }
  }

  return n;
}

function lineLengthOverLimit(str, limit) {
  var strLen = str.length;
  if (strLen <= limit) return false;

  for (var i = 0, start = 0; i < strLen; ++i) {
    if (str[i] === '\n') {
      if (i - start > limit) return true;
      start = i + 1;
      if (strLen - start <= limit) return false;
    }
  }

  return true;
}

function doubleQuotedString(value, ctx) {
  var implicitKey = ctx.implicitKey,
      indent = ctx.indent;
  var _strOptions$doubleQuo = _tags_options__WEBPACK_IMPORTED_MODULE_3__["strOptions"].doubleQuoted,
      jsonEncoding = _strOptions$doubleQuo.jsonEncoding,
      minMultiLineLength = _strOptions$doubleQuo.minMultiLineLength;
  var json = JSON.stringify(value);
  if (jsonEncoding) return json;
  var str = '';
  var start = 0;

  for (var i = 0, ch = json[i]; ch; ch = json[++i]) {
    if (ch === ' ' && json[i + 1] === '\\' && json[i + 2] === 'n') {
      // space before newline needs to be escaped to not be folded
      str += json.slice(start, i) + '\\ ';
      i += 1;
      start = i;
      ch = '\\';
    }

    if (ch === '\\') switch (json[i + 1]) {
      case 'u':
        {
          str += json.slice(start, i);
          var code = json.substr(i + 2, 4);

          switch (code) {
            case '0000':
              str += '\\0';
              break;

            case '0007':
              str += '\\a';
              break;

            case '000b':
              str += '\\v';
              break;

            case '001b':
              str += '\\e';
              break;

            case '0085':
              str += '\\N';
              break;

            case '00a0':
              str += '\\_';
              break;

            case '2028':
              str += '\\L';
              break;

            case '2029':
              str += '\\P';
              break;

            default:
              if (code.substr(0, 2) === '00') str += '\\x' + code.substr(2);else str += json.substr(i, 6);
          }

          i += 5;
          start = i + 1;
        }
        break;

      case 'n':
        if (implicitKey || json[i + 2] === '"' || json.length < minMultiLineLength) {
          i += 1;
        } else {
          // folding will eat first newline
          str += json.slice(start, i) + '\n\n';

          while (json[i + 2] === '\\' && json[i + 3] === 'n' && json[i + 4] !== '"') {
            str += '\n';
            i += 2;
          }

          str += indent; // space after newline needs to be escaped to not be folded

          if (json[i + 2] === ' ') str += '\\';
          i += 1;
          start = i + 1;
        }

        break;

      default:
        i += 1;
    }
  }

  str = start ? str + json.slice(start) : json;
  return implicitKey ? str : Object(_foldFlowLines__WEBPACK_IMPORTED_MODULE_2__["foldFlowLines"])(str, indent, _foldFlowLines__WEBPACK_IMPORTED_MODULE_2__["FOLD_QUOTED"], getFoldOptions(ctx));
}

function singleQuotedString(value, ctx) {
  var indent = ctx.indent,
      implicitKey = ctx.implicitKey;

  if (implicitKey) {
    if (/\n/.test(value)) return doubleQuotedString(value, ctx);
  } else {
    // single quoted string can't have leading or trailing whitespace around newline
    if (/[ \t]\n|\n[ \t]/.test(value)) return doubleQuotedString(value, ctx);
  }

  var res = "'" + value.replace(/'/g, "''").replace(/\n+/g, "$&\n".concat(indent)) + "'";
  return implicitKey ? res : Object(_foldFlowLines__WEBPACK_IMPORTED_MODULE_2__["foldFlowLines"])(res, indent, _foldFlowLines__WEBPACK_IMPORTED_MODULE_2__["FOLD_FLOW"], getFoldOptions(ctx));
}

function blockString(_ref3, ctx, onComment, onChompKeep) {
  var comment = _ref3.comment,
      type = _ref3.type,
      value = _ref3.value;

  // 1. Block can't end in whitespace unless the last line is non-empty.
  // 2. Strings consisting of only whitespace are best rendered explicitly.
  if (/\n[\t ]+$/.test(value) || /^\s*$/.test(value)) {
    return doubleQuotedString(value, ctx);
  }

  var indent = ctx.indent || (ctx.forceBlockIndent ? ' ' : '');
  var indentSize = indent ? '2' : '1'; // root is at -1

  var literal = type === _constants__WEBPACK_IMPORTED_MODULE_1__["Type"].BLOCK_FOLDED ? false : type === _constants__WEBPACK_IMPORTED_MODULE_1__["Type"].BLOCK_LITERAL ? true : !lineLengthOverLimit(value, _tags_options__WEBPACK_IMPORTED_MODULE_3__["strOptions"].fold.lineWidth - indent.length);
  var header = literal ? '|' : '>';
  if (!value) return header + '\n';
  var wsStart = '';
  var wsEnd = '';
  value = value.replace(/[\n\t ]*$/, function (ws) {
    var n = ws.indexOf('\n');

    if (n === -1) {
      header += '-'; // strip
    } else if (value === ws || n !== ws.length - 1) {
      header += '+'; // keep

      if (onChompKeep) onChompKeep();
    }

    wsEnd = ws.replace(/\n$/, '');
    return '';
  }).replace(/^[\n ]*/, function (ws) {
    if (ws.indexOf(' ') !== -1) header += indentSize;
    var m = ws.match(/ +$/);

    if (m) {
      wsStart = ws.slice(0, -m[0].length);
      return m[0];
    } else {
      wsStart = ws;
      return '';
    }
  });
  if (wsEnd) wsEnd = wsEnd.replace(/\n+(?!\n|$)/g, "$&".concat(indent));
  if (wsStart) wsStart = wsStart.replace(/\n+/g, "$&".concat(indent));

  if (comment) {
    header += ' #' + comment.replace(/ ?[\r\n]+/g, ' ');
    if (onComment) onComment();
  }

  if (!value) return "".concat(header).concat(indentSize, "\n").concat(indent).concat(wsEnd);

  if (literal) {
    value = value.replace(/\n+/g, "$&".concat(indent));
    return "".concat(header, "\n").concat(indent).concat(wsStart).concat(value).concat(wsEnd);
  }

  value = value.replace(/\n+/g, '\n$&').replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, '$1$2') // more-indented lines aren't folded
  //         ^ ind.line  ^ empty     ^ capture next empty lines only at end of indent
  .replace(/\n+/g, "$&".concat(indent));
  var body = Object(_foldFlowLines__WEBPACK_IMPORTED_MODULE_2__["foldFlowLines"])("".concat(wsStart).concat(value).concat(wsEnd), indent, _foldFlowLines__WEBPACK_IMPORTED_MODULE_2__["FOLD_BLOCK"], _tags_options__WEBPACK_IMPORTED_MODULE_3__["strOptions"].fold);
  return "".concat(header, "\n").concat(indent).concat(body);
}

function plainString(item, ctx, onComment, onChompKeep) {
  var comment = item.comment,
      type = item.type,
      value = item.value;
  var actualString = ctx.actualString,
      implicitKey = ctx.implicitKey,
      indent = ctx.indent,
      inFlow = ctx.inFlow,
      tags = ctx.tags;

  if (implicitKey && /[\n[\]{},]/.test(value) || inFlow && /[[\]{},]/.test(value)) {
    return doubleQuotedString(value, ctx);
  }

  if (!value || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) {
    // not allowed:
    // - empty string, '-' or '?'
    // - start with an indicator character (except [?:-]) or /[?-] /
    // - '\n ', ': ' or ' \n' anywhere
    // - '#' not preceded by a non-space char
    // - end with ' ' or ':'
    return implicitKey || inFlow || value.indexOf('\n') === -1 ? value.indexOf('"') !== -1 && value.indexOf("'") === -1 ? singleQuotedString(value, ctx) : doubleQuotedString(value, ctx) : blockString(item, ctx, onComment, onChompKeep);
  }

  if (!implicitKey && !inFlow && type !== _constants__WEBPACK_IMPORTED_MODULE_1__["Type"].PLAIN && value.indexOf('\n') !== -1) {
    // Where allowed & type not set explicitly, prefer block style for multiline strings
    return blockString(item, ctx, onComment, onChompKeep);
  }

  var str = value.replace(/\n+/g, "$&\n".concat(indent)); // Verify that output will be parsed as a string, as e.g. plain numbers and
  // booleans get parsed with those types in v1.2 (e.g. '42', 'true' & '0.9e-3'),
  // and others in v1.1.

  if (actualString && typeof tags.resolveScalar(str).value !== 'string') {
    return doubleQuotedString(value, ctx);
  }

  var body = implicitKey ? str : Object(_foldFlowLines__WEBPACK_IMPORTED_MODULE_2__["foldFlowLines"])(str, indent, _foldFlowLines__WEBPACK_IMPORTED_MODULE_2__["FOLD_FLOW"], getFoldOptions(ctx));

  if (comment && !inFlow && (body.indexOf('\n') !== -1 || comment.indexOf('\n') !== -1)) {
    if (onComment) onComment();
    return Object(_addComment__WEBPACK_IMPORTED_MODULE_0__["addCommentBefore"])(body, indent, comment);
  }

  return body;
}

function stringifyString(item, ctx, onComment, onChompKeep) {
  var defaultType = _tags_options__WEBPACK_IMPORTED_MODULE_3__["strOptions"].defaultType;
  var implicitKey = ctx.implicitKey,
      inFlow = ctx.inFlow;
  var _item = item,
      type = _item.type,
      value = _item.value;

  if (typeof value !== 'string') {
    value = String(value);
    item = Object.assign({}, item, {
      value: value
    });
  }

  var _stringify = function _stringify(_type) {
    switch (_type) {
      case _constants__WEBPACK_IMPORTED_MODULE_1__["Type"].BLOCK_FOLDED:
      case _constants__WEBPACK_IMPORTED_MODULE_1__["Type"].BLOCK_LITERAL:
        return blockString(item, ctx, onComment, onChompKeep);

      case _constants__WEBPACK_IMPORTED_MODULE_1__["Type"].QUOTE_DOUBLE:
        return doubleQuotedString(value, ctx);

      case _constants__WEBPACK_IMPORTED_MODULE_1__["Type"].QUOTE_SINGLE:
        return singleQuotedString(value, ctx);

      case _constants__WEBPACK_IMPORTED_MODULE_1__["Type"].PLAIN:
        return plainString(item, ctx, onComment, onChompKeep);

      default:
        return null;
    }
  };

  if (type !== _constants__WEBPACK_IMPORTED_MODULE_1__["Type"].QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f]/.test(value)) {
    // force double quotes on control characters
    type = _constants__WEBPACK_IMPORTED_MODULE_1__["Type"].QUOTE_DOUBLE;
  } else if ((implicitKey || inFlow) && (type === _constants__WEBPACK_IMPORTED_MODULE_1__["Type"].BLOCK_FOLDED || type === _constants__WEBPACK_IMPORTED_MODULE_1__["Type"].BLOCK_LITERAL)) {
    // should not happen; blocks are not valid inside flow containers
    type = _constants__WEBPACK_IMPORTED_MODULE_1__["Type"].QUOTE_DOUBLE;
  }

  var res = _stringify(type);

  if (res === null) {
    res = _stringify(defaultType);
    if (res === null) throw new Error("Unsupported default string type ".concat(defaultType));
  }

  return res;
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/core.js":
/*!*****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/core.js ***!
  \*****************************************************/
/*! exports provided: nullObj, boolObj, octObj, intObj, hexObj, nanObj, expObj, floatObj, core */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullObj", function() { return nullObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boolObj", function() { return boolObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "octObj", function() { return octObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intObj", function() { return intObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexObj", function() { return hexObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanObj", function() { return nanObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expObj", function() { return expObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floatObj", function() { return floatObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "core", function() { return core; });
/* harmony import */ var _schema_Scalar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js");
/* harmony import */ var _stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stringify */ "./node_modules/yaml/browser/dist/stringify.js");
/* harmony import */ var _failsafe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./failsafe */ "./node_modules/yaml/browser/dist/tags/failsafe/index.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options */ "./node_modules/yaml/browser/dist/tags/options.js");
/* global BigInt */





var intIdentify = function intIdentify(value) {
  return typeof value === 'bigint' || Number.isInteger(value);
};

var intResolve = function intResolve(src, part, radix) {
  return _options__WEBPACK_IMPORTED_MODULE_3__["intOptions"].asBigInt ? BigInt(src) : parseInt(part, radix);
};

function intStringify(node, radix, prefix) {
  var value = node.value;
  if (intIdentify(value) && value >= 0) return prefix + value.toString(radix);
  return Object(_stringify__WEBPACK_IMPORTED_MODULE_1__["stringifyNumber"])(node);
}

var nullObj = {
  identify: function identify(value) {
    return value == null;
  },
  createNode: function createNode(schema, value, ctx) {
    return ctx.wrapScalars ? new _schema_Scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"](null) : null;
  },
  default: true,
  tag: 'tag:yaml.org,2002:null',
  test: /^(?:~|[Nn]ull|NULL)?$/,
  resolve: function resolve() {
    return null;
  },
  options: _options__WEBPACK_IMPORTED_MODULE_3__["nullOptions"],
  stringify: function stringify() {
    return _options__WEBPACK_IMPORTED_MODULE_3__["nullOptions"].nullStr;
  }
};
var boolObj = {
  identify: function identify(value) {
    return typeof value === 'boolean';
  },
  default: true,
  tag: 'tag:yaml.org,2002:bool',
  test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
  resolve: function resolve(str) {
    return str[0] === 't' || str[0] === 'T';
  },
  options: _options__WEBPACK_IMPORTED_MODULE_3__["boolOptions"],
  stringify: function stringify(_ref) {
    var value = _ref.value;
    return value ? _options__WEBPACK_IMPORTED_MODULE_3__["boolOptions"].trueStr : _options__WEBPACK_IMPORTED_MODULE_3__["boolOptions"].falseStr;
  }
};
var octObj = {
  identify: function identify(value) {
    return intIdentify(value) && value >= 0;
  },
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'OCT',
  test: /^0o([0-7]+)$/,
  resolve: function resolve(str, oct) {
    return intResolve(str, oct, 8);
  },
  options: _options__WEBPACK_IMPORTED_MODULE_3__["intOptions"],
  stringify: function stringify(node) {
    return intStringify(node, 8, '0o');
  }
};
var intObj = {
  identify: intIdentify,
  default: true,
  tag: 'tag:yaml.org,2002:int',
  test: /^[-+]?[0-9]+$/,
  resolve: function resolve(str) {
    return intResolve(str, str, 10);
  },
  options: _options__WEBPACK_IMPORTED_MODULE_3__["intOptions"],
  stringify: _stringify__WEBPACK_IMPORTED_MODULE_1__["stringifyNumber"]
};
var hexObj = {
  identify: function identify(value) {
    return intIdentify(value) && value >= 0;
  },
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'HEX',
  test: /^0x([0-9a-fA-F]+)$/,
  resolve: function resolve(str, hex) {
    return intResolve(str, hex, 16);
  },
  options: _options__WEBPACK_IMPORTED_MODULE_3__["intOptions"],
  stringify: function stringify(node) {
    return intStringify(node, 16, '0x');
  }
};
var nanObj = {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  test: /^(?:[-+]?\.inf|(\.nan))$/i,
  resolve: function resolve(str, nan) {
    return nan ? NaN : str[0] === '-' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
  },
  stringify: _stringify__WEBPACK_IMPORTED_MODULE_1__["stringifyNumber"]
};
var expObj = {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  format: 'EXP',
  test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
  resolve: function resolve(str) {
    return parseFloat(str);
  },
  stringify: function stringify(_ref2) {
    var value = _ref2.value;
    return Number(value).toExponential();
  }
};
var floatObj = {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  test: /^[-+]?(?:\.([0-9]+)|[0-9]+\.([0-9]*))$/,
  resolve: function resolve(str, frac1, frac2) {
    var frac = frac1 || frac2;
    var node = new _schema_Scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"](parseFloat(str));
    if (frac && frac[frac.length - 1] === '0') node.minFractionDigits = frac.length;
    return node;
  },
  stringify: _stringify__WEBPACK_IMPORTED_MODULE_1__["stringifyNumber"]
};
var core = _failsafe__WEBPACK_IMPORTED_MODULE_2__["failsafe"].concat([nullObj, boolObj, octObj, intObj, hexObj, nanObj, expObj, floatObj]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/failsafe/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/failsafe/index.js ***!
  \***************************************************************/
/*! exports provided: failsafe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failsafe", function() { return failsafe; });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./node_modules/yaml/browser/dist/tags/failsafe/map.js");
/* harmony import */ var _seq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seq */ "./node_modules/yaml/browser/dist/tags/failsafe/seq.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string */ "./node_modules/yaml/browser/dist/tags/failsafe/string.js");



var failsafe = [_map__WEBPACK_IMPORTED_MODULE_0__["map"], _seq__WEBPACK_IMPORTED_MODULE_1__["seq"], _string__WEBPACK_IMPORTED_MODULE_2__["string"]];

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/failsafe/map.js":
/*!*************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/failsafe/map.js ***!
  \*************************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _schema_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../schema/Map */ "./node_modules/yaml/browser/dist/schema/Map.js");
/* harmony import */ var _schema_parseMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../schema/parseMap */ "./node_modules/yaml/browser/dist/schema/parseMap.js");



function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function createMap(schema, obj, ctx) {
  var map = new _schema_Map__WEBPACK_IMPORTED_MODULE_2__["YAMLMap"](schema);

  if (obj instanceof Map) {
    var _iterator = _createForOfIteratorHelper(obj),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];

        map.items.push(schema.createPair(key, value, ctx));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (obj && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj) === 'object') {
    for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
      var _key = _Object$keys[_i];
      map.items.push(schema.createPair(_key, obj[_key], ctx));
    }
  }

  if (typeof schema.sortMapEntries === 'function') {
    map.items.sort(schema.sortMapEntries);
  }

  return map;
}

var map = {
  createNode: createMap,
  default: true,
  nodeClass: _schema_Map__WEBPACK_IMPORTED_MODULE_2__["YAMLMap"],
  tag: 'tag:yaml.org,2002:map',
  resolve: _schema_parseMap__WEBPACK_IMPORTED_MODULE_3__["parseMap"]
};

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/failsafe/seq.js":
/*!*************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/failsafe/seq.js ***!
  \*************************************************************/
/*! exports provided: seq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seq", function() { return seq; });
/* harmony import */ var _schema_parseSeq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../schema/parseSeq */ "./node_modules/yaml/browser/dist/schema/parseSeq.js");
/* harmony import */ var _schema_Seq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../schema/Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function createSeq(schema, obj, ctx) {
  var seq = new _schema_Seq__WEBPACK_IMPORTED_MODULE_1__["YAMLSeq"](schema);

  if (obj && obj[Symbol.iterator]) {
    var _iterator = _createForOfIteratorHelper(obj),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var it = _step.value;
        var v = schema.createNode(it, ctx.wrapScalars, null, ctx);
        seq.items.push(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return seq;
}

var seq = {
  createNode: createSeq,
  default: true,
  nodeClass: _schema_Seq__WEBPACK_IMPORTED_MODULE_1__["YAMLSeq"],
  tag: 'tag:yaml.org,2002:seq',
  resolve: _schema_parseSeq__WEBPACK_IMPORTED_MODULE_0__["parseSeq"]
};

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/failsafe/string.js":
/*!****************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/failsafe/string.js ***!
  \****************************************************************/
/*! exports provided: resolveString, string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveString", function() { return resolveString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony import */ var _stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stringify */ "./node_modules/yaml/browser/dist/stringify.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options */ "./node_modules/yaml/browser/dist/tags/options.js");


var resolveString = function resolveString(doc, node) {
  // on error, will return { str: string, errors: Error[] }
  var res = node.strValue;
  if (!res) return '';
  if (typeof res === 'string') return res;
  res.errors.forEach(function (error) {
    if (!error.source) error.source = node;
    doc.errors.push(error);
  });
  return res.str;
};
var string = {
  identify: function identify(value) {
    return typeof value === 'string';
  },
  default: true,
  tag: 'tag:yaml.org,2002:str',
  resolve: resolveString,
  stringify: function stringify(item, ctx, onComment, onChompKeep) {
    ctx = Object.assign({
      actualString: true
    }, ctx);
    return Object(_stringify__WEBPACK_IMPORTED_MODULE_0__["stringifyString"])(item, ctx, onComment, onChompKeep);
  },
  options: _options__WEBPACK_IMPORTED_MODULE_1__["strOptions"]
};

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/index.js":
/*!******************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/index.js ***!
  \******************************************************/
/*! exports provided: schemas, tags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schemas", function() { return schemas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tags", function() { return tags; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./node_modules/yaml/browser/dist/tags/core.js");
/* harmony import */ var _failsafe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./failsafe */ "./node_modules/yaml/browser/dist/tags/failsafe/index.js");
/* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json */ "./node_modules/yaml/browser/dist/tags/json.js");
/* harmony import */ var _yaml_1_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yaml-1.1 */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/index.js");
/* harmony import */ var _failsafe_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./failsafe/map */ "./node_modules/yaml/browser/dist/tags/failsafe/map.js");
/* harmony import */ var _failsafe_seq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./failsafe/seq */ "./node_modules/yaml/browser/dist/tags/failsafe/seq.js");
/* harmony import */ var _yaml_1_1_binary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./yaml-1.1/binary */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/binary.js");
/* harmony import */ var _yaml_1_1_omap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./yaml-1.1/omap */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/omap.js");
/* harmony import */ var _yaml_1_1_pairs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./yaml-1.1/pairs */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/pairs.js");
/* harmony import */ var _yaml_1_1_set__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./yaml-1.1/set */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/set.js");
/* harmony import */ var _yaml_1_1_timestamp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./yaml-1.1/timestamp */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/timestamp.js");











var schemas = {
  core: _core__WEBPACK_IMPORTED_MODULE_0__["core"],
  failsafe: _failsafe__WEBPACK_IMPORTED_MODULE_1__["failsafe"],
  json: _json__WEBPACK_IMPORTED_MODULE_2__["json"],
  yaml11: _yaml_1_1__WEBPACK_IMPORTED_MODULE_3__["yaml11"]
};
var tags = {
  binary: _yaml_1_1_binary__WEBPACK_IMPORTED_MODULE_6__["binary"],
  bool: _core__WEBPACK_IMPORTED_MODULE_0__["boolObj"],
  float: _core__WEBPACK_IMPORTED_MODULE_0__["floatObj"],
  floatExp: _core__WEBPACK_IMPORTED_MODULE_0__["expObj"],
  floatNaN: _core__WEBPACK_IMPORTED_MODULE_0__["nanObj"],
  floatTime: _yaml_1_1_timestamp__WEBPACK_IMPORTED_MODULE_10__["floatTime"],
  int: _core__WEBPACK_IMPORTED_MODULE_0__["intObj"],
  intHex: _core__WEBPACK_IMPORTED_MODULE_0__["hexObj"],
  intOct: _core__WEBPACK_IMPORTED_MODULE_0__["octObj"],
  intTime: _yaml_1_1_timestamp__WEBPACK_IMPORTED_MODULE_10__["intTime"],
  map: _failsafe_map__WEBPACK_IMPORTED_MODULE_4__["map"],
  null: _core__WEBPACK_IMPORTED_MODULE_0__["nullObj"],
  omap: _yaml_1_1_omap__WEBPACK_IMPORTED_MODULE_7__["omap"],
  pairs: _yaml_1_1_pairs__WEBPACK_IMPORTED_MODULE_8__["pairs"],
  seq: _failsafe_seq__WEBPACK_IMPORTED_MODULE_5__["seq"],
  set: _yaml_1_1_set__WEBPACK_IMPORTED_MODULE_9__["set"],
  timestamp: _yaml_1_1_timestamp__WEBPACK_IMPORTED_MODULE_10__["timestamp"]
};

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/json.js":
/*!*****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/json.js ***!
  \*****************************************************/
/*! exports provided: json */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "json", function() { return json; });
/* harmony import */ var _failsafe_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./failsafe/map */ "./node_modules/yaml/browser/dist/tags/failsafe/map.js");
/* harmony import */ var _failsafe_seq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./failsafe/seq */ "./node_modules/yaml/browser/dist/tags/failsafe/seq.js");
/* harmony import */ var _schema_Scalar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js");
/* harmony import */ var _failsafe_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./failsafe/string */ "./node_modules/yaml/browser/dist/tags/failsafe/string.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options */ "./node_modules/yaml/browser/dist/tags/options.js");
/* global BigInt */






var intIdentify = function intIdentify(value) {
  return typeof value === 'bigint' || Number.isInteger(value);
};

var stringifyJSON = function stringifyJSON(_ref) {
  var value = _ref.value;
  return JSON.stringify(value);
};

var json = [_failsafe_map__WEBPACK_IMPORTED_MODULE_0__["map"], _failsafe_seq__WEBPACK_IMPORTED_MODULE_1__["seq"], {
  identify: function identify(value) {
    return typeof value === 'string';
  },
  default: true,
  tag: 'tag:yaml.org,2002:str',
  resolve: _failsafe_string__WEBPACK_IMPORTED_MODULE_3__["resolveString"],
  stringify: stringifyJSON
}, {
  identify: function identify(value) {
    return value == null;
  },
  createNode: function createNode(schema, value, ctx) {
    return ctx.wrapScalars ? new _schema_Scalar__WEBPACK_IMPORTED_MODULE_2__["Scalar"](null) : null;
  },
  default: true,
  tag: 'tag:yaml.org,2002:null',
  test: /^null$/,
  resolve: function resolve() {
    return null;
  },
  stringify: stringifyJSON
}, {
  identify: function identify(value) {
    return typeof value === 'boolean';
  },
  default: true,
  tag: 'tag:yaml.org,2002:bool',
  test: /^true|false$/,
  resolve: function resolve(str) {
    return str === 'true';
  },
  stringify: stringifyJSON
}, {
  identify: intIdentify,
  default: true,
  tag: 'tag:yaml.org,2002:int',
  test: /^-?(?:0|[1-9][0-9]*)$/,
  resolve: function resolve(str) {
    return _options__WEBPACK_IMPORTED_MODULE_4__["intOptions"].asBigInt ? BigInt(str) : parseInt(str, 10);
  },
  stringify: function stringify(_ref2) {
    var value = _ref2.value;
    return intIdentify(value) ? value.toString() : JSON.stringify(value);
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
  resolve: function resolve(str) {
    return parseFloat(str);
  },
  stringify: stringifyJSON
}];

json.scalarFallback = function (str) {
  throw new SyntaxError("Unresolved plain scalar ".concat(JSON.stringify(str)));
};

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/options.js":
/*!********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/options.js ***!
  \********************************************************/
/*! exports provided: binaryOptions, boolOptions, intOptions, nullOptions, strOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binaryOptions", function() { return binaryOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boolOptions", function() { return boolOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intOptions", function() { return intOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullOptions", function() { return nullOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strOptions", function() { return strOptions; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var binaryOptions = {
  defaultType: _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].BLOCK_LITERAL,
  lineWidth: 76
};
var boolOptions = {
  trueStr: 'true',
  falseStr: 'false'
};
var intOptions = {
  asBigInt: false
};
var nullOptions = {
  nullStr: 'null'
};
var strOptions = {
  defaultType: _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].PLAIN,
  doubleQuoted: {
    jsonEncoding: false,
    minMultiLineLength: 40
  },
  fold: {
    lineWidth: 80,
    minContentWidth: 20
  }
};

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/binary.js":
/*!****************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/binary.js ***!
  \****************************************************************/
/*! exports provided: binary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binary", function() { return binary; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./node_modules/yaml/browser/dist/constants.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stringify */ "./node_modules/yaml/browser/dist/stringify.js");
/* harmony import */ var _failsafe_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../failsafe/string */ "./node_modules/yaml/browser/dist/tags/failsafe/string.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../options */ "./node_modules/yaml/browser/dist/tags/options.js");
/* global atob, btoa, Buffer */





var binary = {
  identify: function identify(value) {
    return value instanceof Uint8Array;
  },
  // Buffer inherits from Uint8Array
  default: false,
  tag: 'tag:yaml.org,2002:binary',

  /**
   * Returns a Buffer in node and an Uint8Array in browsers
   *
   * To use the resulting buffer as an image, you'll want to do something like:
   *
   *   const blob = new Blob([buffer], { type: 'image/jpeg' })
   *   document.querySelector('#photo').src = URL.createObjectURL(blob)
   */
  resolve: function resolve(doc, node) {
    var src = Object(_failsafe_string__WEBPACK_IMPORTED_MODULE_3__["resolveString"])(doc, node);

    if (typeof Buffer === 'function') {
      return Buffer.from(src, 'base64');
    } else if (typeof atob === 'function') {
      // On IE 11, atob() can't handle newlines
      var str = atob(src.replace(/[\n\r]/g, ''));
      var buffer = new Uint8Array(str.length);

      for (var i = 0; i < str.length; ++i) {
        buffer[i] = str.charCodeAt(i);
      }

      return buffer;
    } else {
      var msg = 'This environment does not support reading binary tags; either Buffer or atob is required';
      doc.errors.push(new _errors__WEBPACK_IMPORTED_MODULE_1__["YAMLReferenceError"](node, msg));
      return null;
    }
  },
  options: _options__WEBPACK_IMPORTED_MODULE_4__["binaryOptions"],
  stringify: function stringify(_ref, ctx, onComment, onChompKeep) {
    var comment = _ref.comment,
        type = _ref.type,
        value = _ref.value;
    var src;

    if (typeof Buffer === 'function') {
      src = value instanceof Buffer ? value.toString('base64') : Buffer.from(value.buffer).toString('base64');
    } else if (typeof btoa === 'function') {
      var s = '';

      for (var i = 0; i < value.length; ++i) {
        s += String.fromCharCode(value[i]);
      }

      src = btoa(s);
    } else {
      throw new Error('This environment does not support writing binary tags; either Buffer or btoa is required');
    }

    if (!type) type = _options__WEBPACK_IMPORTED_MODULE_4__["binaryOptions"].defaultType;

    if (type === _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].QUOTE_DOUBLE) {
      value = src;
    } else {
      var lineWidth = _options__WEBPACK_IMPORTED_MODULE_4__["binaryOptions"].lineWidth;
      var n = Math.ceil(src.length / lineWidth);
      var lines = new Array(n);

      for (var _i = 0, o = 0; _i < n; ++_i, o += lineWidth) {
        lines[_i] = src.substr(o, lineWidth);
      }

      value = lines.join(type === _constants__WEBPACK_IMPORTED_MODULE_0__["Type"].BLOCK_LITERAL ? '\n' : ' ');
    }

    return Object(_stringify__WEBPACK_IMPORTED_MODULE_2__["stringifyString"])({
      comment: comment,
      type: type,
      value: value
    }, ctx, onComment, onChompKeep);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/index.js ***!
  \***************************************************************/
/*! exports provided: yaml11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yaml11", function() { return yaml11; });
/* harmony import */ var _schema_Scalar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js");
/* harmony import */ var _stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stringify */ "./node_modules/yaml/browser/dist/stringify.js");
/* harmony import */ var _failsafe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../failsafe */ "./node_modules/yaml/browser/dist/tags/failsafe/index.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../options */ "./node_modules/yaml/browser/dist/tags/options.js");
/* harmony import */ var _binary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binary */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/binary.js");
/* harmony import */ var _omap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./omap */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/omap.js");
/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pairs */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/pairs.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./set */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/set.js");
/* harmony import */ var _timestamp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timestamp */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/timestamp.js");
/* global BigInt */










var boolStringify = function boolStringify(_ref) {
  var value = _ref.value;
  return value ? _options__WEBPACK_IMPORTED_MODULE_3__["boolOptions"].trueStr : _options__WEBPACK_IMPORTED_MODULE_3__["boolOptions"].falseStr;
};

var intIdentify = function intIdentify(value) {
  return typeof value === 'bigint' || Number.isInteger(value);
};

function intResolve(sign, src, radix) {
  var str = src.replace(/_/g, '');

  if (_options__WEBPACK_IMPORTED_MODULE_3__["intOptions"].asBigInt) {
    switch (radix) {
      case 2:
        str = "0b".concat(str);
        break;

      case 8:
        str = "0o".concat(str);
        break;

      case 16:
        str = "0x".concat(str);
        break;
    }

    var _n = BigInt(str);

    return sign === '-' ? BigInt(-1) * _n : _n;
  }

  var n = parseInt(str, radix);
  return sign === '-' ? -1 * n : n;
}

function intStringify(node, radix, prefix) {
  var value = node.value;

  if (intIdentify(value)) {
    var str = value.toString(radix);
    return value < 0 ? '-' + prefix + str.substr(1) : prefix + str;
  }

  return Object(_stringify__WEBPACK_IMPORTED_MODULE_1__["stringifyNumber"])(node);
}

var yaml11 = _failsafe__WEBPACK_IMPORTED_MODULE_2__["failsafe"].concat([{
  identify: function identify(value) {
    return value == null;
  },
  createNode: function createNode(schema, value, ctx) {
    return ctx.wrapScalars ? new _schema_Scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"](null) : null;
  },
  default: true,
  tag: 'tag:yaml.org,2002:null',
  test: /^(?:~|[Nn]ull|NULL)?$/,
  resolve: function resolve() {
    return null;
  },
  options: _options__WEBPACK_IMPORTED_MODULE_3__["nullOptions"],
  stringify: function stringify() {
    return _options__WEBPACK_IMPORTED_MODULE_3__["nullOptions"].nullStr;
  }
}, {
  identify: function identify(value) {
    return typeof value === 'boolean';
  },
  default: true,
  tag: 'tag:yaml.org,2002:bool',
  test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
  resolve: function resolve() {
    return true;
  },
  options: _options__WEBPACK_IMPORTED_MODULE_3__["boolOptions"],
  stringify: boolStringify
}, {
  identify: function identify(value) {
    return typeof value === 'boolean';
  },
  default: true,
  tag: 'tag:yaml.org,2002:bool',
  test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,
  resolve: function resolve() {
    return false;
  },
  options: _options__WEBPACK_IMPORTED_MODULE_3__["boolOptions"],
  stringify: boolStringify
}, {
  identify: intIdentify,
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'BIN',
  test: /^([-+]?)0b([0-1_]+)$/,
  resolve: function resolve(str, sign, bin) {
    return intResolve(sign, bin, 2);
  },
  stringify: function stringify(node) {
    return intStringify(node, 2, '0b');
  }
}, {
  identify: intIdentify,
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'OCT',
  test: /^([-+]?)0([0-7_]+)$/,
  resolve: function resolve(str, sign, oct) {
    return intResolve(sign, oct, 8);
  },
  stringify: function stringify(node) {
    return intStringify(node, 8, '0');
  }
}, {
  identify: intIdentify,
  default: true,
  tag: 'tag:yaml.org,2002:int',
  test: /^([-+]?)([0-9][0-9_]*)$/,
  resolve: function resolve(str, sign, abs) {
    return intResolve(sign, abs, 10);
  },
  stringify: _stringify__WEBPACK_IMPORTED_MODULE_1__["stringifyNumber"]
}, {
  identify: intIdentify,
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'HEX',
  test: /^([-+]?)0x([0-9a-fA-F_]+)$/,
  resolve: function resolve(str, sign, hex) {
    return intResolve(sign, hex, 16);
  },
  stringify: function stringify(node) {
    return intStringify(node, 16, '0x');
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  test: /^(?:[-+]?\.inf|(\.nan))$/i,
  resolve: function resolve(str, nan) {
    return nan ? NaN : str[0] === '-' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
  },
  stringify: _stringify__WEBPACK_IMPORTED_MODULE_1__["stringifyNumber"]
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  format: 'EXP',
  test: /^[-+]?([0-9][0-9_]*)?(\.[0-9_]*)?[eE][-+]?[0-9]+$/,
  resolve: function resolve(str) {
    return parseFloat(str.replace(/_/g, ''));
  },
  stringify: function stringify(_ref2) {
    var value = _ref2.value;
    return Number(value).toExponential();
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  test: /^[-+]?(?:[0-9][0-9_]*)?\.([0-9_]*)$/,
  resolve: function resolve(str, frac) {
    var node = new _schema_Scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"](parseFloat(str.replace(/_/g, '')));

    if (frac) {
      var f = frac.replace(/_/g, '');
      if (f[f.length - 1] === '0') node.minFractionDigits = f.length;
    }

    return node;
  },
  stringify: _stringify__WEBPACK_IMPORTED_MODULE_1__["stringifyNumber"]
}], _binary__WEBPACK_IMPORTED_MODULE_4__["binary"], _omap__WEBPACK_IMPORTED_MODULE_5__["omap"], _pairs__WEBPACK_IMPORTED_MODULE_6__["pairs"], _set__WEBPACK_IMPORTED_MODULE_7__["set"], _timestamp__WEBPACK_IMPORTED_MODULE_8__["intTime"], _timestamp__WEBPACK_IMPORTED_MODULE_8__["floatTime"], _timestamp__WEBPACK_IMPORTED_MODULE_8__["timestamp"]);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/omap.js":
/*!**************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/omap.js ***!
  \**************************************************************/
/*! exports provided: YAMLOMap, omap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YAMLOMap", function() { return YAMLOMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omap", function() { return omap; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _toJSON__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../toJSON */ "./node_modules/yaml/browser/dist/toJSON.js");
/* harmony import */ var _schema_Map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../schema/Map */ "./node_modules/yaml/browser/dist/schema/Map.js");
/* harmony import */ var _schema_Pair__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../schema/Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js");
/* harmony import */ var _schema_Scalar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js");
/* harmony import */ var _schema_Seq__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../schema/Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js");
/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pairs */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/pairs.js");








function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var YAMLOMap = /*#__PURE__*/function (_YAMLSeq) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(YAMLOMap, _YAMLSeq);

  var _super = _createSuper(YAMLOMap);

  function YAMLOMap() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, YAMLOMap);

    _this = _super.call(this);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "add", _schema_Map__WEBPACK_IMPORTED_MODULE_9__["YAMLMap"].prototype.add.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "delete", _schema_Map__WEBPACK_IMPORTED_MODULE_9__["YAMLMap"].prototype.delete.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "get", _schema_Map__WEBPACK_IMPORTED_MODULE_9__["YAMLMap"].prototype.get.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "has", _schema_Map__WEBPACK_IMPORTED_MODULE_9__["YAMLMap"].prototype.has.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "set", _schema_Map__WEBPACK_IMPORTED_MODULE_9__["YAMLMap"].prototype.set.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)));

    _this.tag = YAMLOMap.tag;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(YAMLOMap, [{
    key: "toJSON",
    value: function toJSON(_, ctx) {
      var map = new Map();
      if (ctx && ctx.onCreate) ctx.onCreate(map);

      var _iterator = _createForOfIteratorHelper(this.items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pair = _step.value;
          var key = void 0,
              value = void 0;

          if (pair instanceof _schema_Pair__WEBPACK_IMPORTED_MODULE_10__["Pair"]) {
            key = Object(_toJSON__WEBPACK_IMPORTED_MODULE_8__["toJSON"])(pair.key, '', ctx);
            value = Object(_toJSON__WEBPACK_IMPORTED_MODULE_8__["toJSON"])(pair.value, key, ctx);
          } else {
            key = Object(_toJSON__WEBPACK_IMPORTED_MODULE_8__["toJSON"])(pair, '', ctx);
          }

          if (map.has(key)) throw new Error('Ordered maps must not include duplicate keys');
          map.set(key, value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return map;
    }
  }]);

  return YAMLOMap;
}(_schema_Seq__WEBPACK_IMPORTED_MODULE_12__["YAMLSeq"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(YAMLOMap, "tag", 'tag:yaml.org,2002:omap');

function parseOMap(doc, cst) {
  var pairs = Object(_pairs__WEBPACK_IMPORTED_MODULE_13__["parsePairs"])(doc, cst);
  var seenKeys = [];

  var _iterator2 = _createForOfIteratorHelper(pairs.items),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var key = _step2.value.key;

      if (key instanceof _schema_Scalar__WEBPACK_IMPORTED_MODULE_11__["Scalar"]) {
        if (seenKeys.includes(key.value)) {
          var msg = 'Ordered maps must not include duplicate keys';
          throw new _errors__WEBPACK_IMPORTED_MODULE_7__["YAMLSemanticError"](cst, msg);
        } else {
          seenKeys.push(key.value);
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return Object.assign(new YAMLOMap(), pairs);
}

function createOMap(schema, iterable, ctx) {
  var pairs = Object(_pairs__WEBPACK_IMPORTED_MODULE_13__["createPairs"])(schema, iterable, ctx);
  var omap = new YAMLOMap();
  omap.items = pairs.items;
  return omap;
}

var omap = {
  identify: function identify(value) {
    return value instanceof Map;
  },
  nodeClass: YAMLOMap,
  default: false,
  tag: 'tag:yaml.org,2002:omap',
  resolve: parseOMap,
  createNode: createOMap
};

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/pairs.js":
/*!***************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/pairs.js ***!
  \***************************************************************/
/*! exports provided: parsePairs, createPairs, pairs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePairs", function() { return parsePairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPairs", function() { return createPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _schema_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../schema/Map */ "./node_modules/yaml/browser/dist/schema/Map.js");
/* harmony import */ var _schema_Pair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../schema/Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js");
/* harmony import */ var _schema_parseSeq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../schema/parseSeq */ "./node_modules/yaml/browser/dist/schema/parseSeq.js");
/* harmony import */ var _schema_Seq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../schema/Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






function parsePairs(doc, cst) {
  var seq = Object(_schema_parseSeq__WEBPACK_IMPORTED_MODULE_3__["parseSeq"])(doc, cst);

  for (var i = 0; i < seq.items.length; ++i) {
    var item = seq.items[i];
    if (item instanceof _schema_Pair__WEBPACK_IMPORTED_MODULE_2__["Pair"]) continue;else if (item instanceof _schema_Map__WEBPACK_IMPORTED_MODULE_1__["YAMLMap"]) {
      if (item.items.length > 1) {
        var msg = 'Each pair must have its own sequence indicator';
        throw new _errors__WEBPACK_IMPORTED_MODULE_0__["YAMLSemanticError"](cst, msg);
      }

      var pair = item.items[0] || new _schema_Pair__WEBPACK_IMPORTED_MODULE_2__["Pair"]();
      if (item.commentBefore) pair.commentBefore = pair.commentBefore ? "".concat(item.commentBefore, "\n").concat(pair.commentBefore) : item.commentBefore;
      if (item.comment) pair.comment = pair.comment ? "".concat(item.comment, "\n").concat(pair.comment) : item.comment;
      item = pair;
    }
    seq.items[i] = item instanceof _schema_Pair__WEBPACK_IMPORTED_MODULE_2__["Pair"] ? item : new _schema_Pair__WEBPACK_IMPORTED_MODULE_2__["Pair"](item);
  }

  return seq;
}
function createPairs(schema, iterable, ctx) {
  var pairs = new _schema_Seq__WEBPACK_IMPORTED_MODULE_4__["YAMLSeq"](schema);
  pairs.tag = 'tag:yaml.org,2002:pairs';

  var _iterator = _createForOfIteratorHelper(iterable),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var it = _step.value;
      var key = void 0,
          value = void 0;

      if (Array.isArray(it)) {
        if (it.length === 2) {
          key = it[0];
          value = it[1];
        } else throw new TypeError("Expected [key, value] tuple: ".concat(it));
      } else if (it && it instanceof Object) {
        var keys = Object.keys(it);

        if (keys.length === 1) {
          key = keys[0];
          value = it[key];
        } else throw new TypeError("Expected { key: value } tuple: ".concat(it));
      } else {
        key = it;
      }

      var pair = schema.createPair(key, value, ctx);
      pairs.items.push(pair);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return pairs;
}
var pairs = {
  default: false,
  tag: 'tag:yaml.org,2002:pairs',
  resolve: parsePairs,
  createNode: createPairs
};

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/set.js":
/*!*************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/set.js ***!
  \*************************************************************/
/*! exports provided: YAMLSet, set */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YAMLSet", function() { return YAMLSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors */ "./node_modules/yaml/browser/dist/errors.js");
/* harmony import */ var _schema_Map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../schema/Map */ "./node_modules/yaml/browser/dist/schema/Map.js");
/* harmony import */ var _schema_Pair__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../schema/Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js");
/* harmony import */ var _schema_parseMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../schema/parseMap */ "./node_modules/yaml/browser/dist/schema/parseMap.js");
/* harmony import */ var _schema_Scalar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js");









function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var YAMLSet = /*#__PURE__*/function (_YAMLMap) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(YAMLSet, _YAMLMap);

  var _super = _createSuper(YAMLSet);

  function YAMLSet() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, YAMLSet);

    _this = _super.call(this);
    _this.tag = YAMLSet.tag;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(YAMLSet, [{
    key: "add",
    value: function add(key) {
      var pair = key instanceof _schema_Pair__WEBPACK_IMPORTED_MODULE_10__["Pair"] ? key : new _schema_Pair__WEBPACK_IMPORTED_MODULE_10__["Pair"](key);
      var prev = Object(_schema_Map__WEBPACK_IMPORTED_MODULE_9__["findPair"])(this.items, pair.key);
      if (!prev) this.items.push(pair);
    }
  }, {
    key: "get",
    value: function get(key, keepPair) {
      var pair = Object(_schema_Map__WEBPACK_IMPORTED_MODULE_9__["findPair"])(this.items, key);
      return !keepPair && pair instanceof _schema_Pair__WEBPACK_IMPORTED_MODULE_10__["Pair"] ? pair.key instanceof _schema_Scalar__WEBPACK_IMPORTED_MODULE_12__["Scalar"] ? pair.key.value : pair.key : pair;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      if (typeof value !== 'boolean') throw new Error("Expected boolean value for set(key, value) in a YAML set, not ".concat(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value)));
      var prev = Object(_schema_Map__WEBPACK_IMPORTED_MODULE_9__["findPair"])(this.items, key);

      if (prev && !value) {
        this.items.splice(this.items.indexOf(prev), 1);
      } else if (!prev && value) {
        this.items.push(new _schema_Pair__WEBPACK_IMPORTED_MODULE_10__["Pair"](key));
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON(_, ctx) {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(YAMLSet.prototype), "toJSON", this).call(this, _, ctx, Set);
    }
  }, {
    key: "toString",
    value: function toString(ctx, onComment, onChompKeep) {
      if (!ctx) return JSON.stringify(this);
      if (this.hasAllNullValues()) return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(YAMLSet.prototype), "toString", this).call(this, ctx, onComment, onChompKeep);else throw new Error('Set items must all have null values');
    }
  }]);

  return YAMLSet;
}(_schema_Map__WEBPACK_IMPORTED_MODULE_9__["YAMLMap"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(YAMLSet, "tag", 'tag:yaml.org,2002:set');

function parseSet(doc, cst) {
  var map = Object(_schema_parseMap__WEBPACK_IMPORTED_MODULE_11__["parseMap"])(doc, cst);
  if (!map.hasAllNullValues()) throw new _errors__WEBPACK_IMPORTED_MODULE_8__["YAMLSemanticError"](cst, 'Set items must all have null values');
  return Object.assign(new YAMLSet(), map);
}

function createSet(schema, iterable, ctx) {
  var set = new YAMLSet();

  var _iterator = _createForOfIteratorHelper(iterable),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      set.items.push(schema.createPair(value, null, ctx));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return set;
}

var set = {
  identify: function identify(value) {
    return value instanceof Set;
  },
  nodeClass: YAMLSet,
  default: false,
  tag: 'tag:yaml.org,2002:set',
  resolve: parseSet,
  createNode: createSet
};

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/timestamp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/timestamp.js ***!
  \*******************************************************************/
/*! exports provided: intTime, floatTime, timestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intTime", function() { return intTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floatTime", function() { return floatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return timestamp; });
/* harmony import */ var _stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stringify */ "./node_modules/yaml/browser/dist/stringify.js");


var parseSexagesimal = function parseSexagesimal(sign, parts) {
  var n = parts.split(':').reduce(function (n, p) {
    return n * 60 + Number(p);
  }, 0);
  return sign === '-' ? -n : n;
}; // hhhh:mm:ss.sss


var stringifySexagesimal = function stringifySexagesimal(_ref) {
  var value = _ref.value;
  if (isNaN(value) || !isFinite(value)) return Object(_stringify__WEBPACK_IMPORTED_MODULE_0__["stringifyNumber"])(value);
  var sign = '';

  if (value < 0) {
    sign = '-';
    value = Math.abs(value);
  }

  var parts = [value % 60]; // seconds, including ms

  if (value < 60) {
    parts.unshift(0); // at least one : is required
  } else {
    value = Math.round((value - parts[0]) / 60);
    parts.unshift(value % 60); // minutes

    if (value >= 60) {
      value = Math.round((value - parts[0]) / 60);
      parts.unshift(value); // hours
    }
  }

  return sign + parts.map(function (n) {
    return n < 10 ? '0' + String(n) : String(n);
  }).join(':').replace(/000000\d*$/, '') // % 60 may introduce error
  ;
};

var intTime = {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'TIME',
  test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+)$/,
  resolve: function resolve(str, sign, parts) {
    return parseSexagesimal(sign, parts.replace(/_/g, ''));
  },
  stringify: stringifySexagesimal
};
var floatTime = {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  format: 'TIME',
  test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*)$/,
  resolve: function resolve(str, sign, parts) {
    return parseSexagesimal(sign, parts.replace(/_/g, ''));
  },
  stringify: stringifySexagesimal
};
var timestamp = {
  identify: function identify(value) {
    return value instanceof Date;
  },
  default: true,
  tag: 'tag:yaml.org,2002:timestamp',
  // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
  // may be omitted altogether, resulting in a date format. In such a case, the time part is
  // assumed to be 00:00:00Z (start of day, UTC).
  test: RegExp('^(?:' + '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})' + // YYYY-Mm-Dd
  '(?:(?:t|T|[ \\t]+)' + // t | T | whitespace
  '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)' + // Hh:Mm:Ss(.ss)?
  '(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?' + // Z | +5 | -03:30
  ')?' + ')$'),
  resolve: function resolve(str, year, month, day, hour, minute, second, millisec, tz) {
    if (millisec) millisec = (millisec + '00').substr(1, 3);
    var date = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec || 0);

    if (tz && tz !== 'Z') {
      var d = parseSexagesimal(tz[0], tz.slice(1));
      if (Math.abs(d) < 30) d *= 60;
      date -= 60000 * d;
    }

    return new Date(date);
  },
  stringify: function stringify(_ref2) {
    var value = _ref2.value;
    return value.toISOString().replace(/((T00:00)?:00)?\.000Z$/, '');
  }
};

/***/ }),

/***/ "./node_modules/yaml/browser/dist/toJSON.js":
/*!**************************************************!*\
  !*** ./node_modules/yaml/browser/dist/toJSON.js ***!
  \**************************************************/
/*! exports provided: toJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSON", function() { return toJSON; });
function toJSON(value, arg, ctx) {
  if (Array.isArray(value)) return value.map(function (v, i) {
    return toJSON(v, String(i), ctx);
  });

  if (value && typeof value.toJSON === 'function') {
    var anchor = ctx && ctx.anchors && ctx.anchors.get(value);
    if (anchor) ctx.onCreate = function (res) {
      anchor.res = res;
      delete ctx.onCreate;
    };
    var res = value.toJSON(arg, ctx);
    if (anchor && ctx.onCreate) ctx.onCreate(res);
    return res;
  }

  if ((!ctx || !ctx.keep) && typeof value === 'bigint') return Number(value);
  return value;
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/warnings.js":
/*!****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/warnings.js ***!
  \****************************************************/
/*! exports provided: warn, warnFileDeprecation, warnOptionDeprecation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnFileDeprecation", function() { return warnFileDeprecation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOptionDeprecation", function() { return warnOptionDeprecation; });
/* global console, process, YAML_SILENCE_DEPRECATION_WARNINGS, YAML_SILENCE_WARNINGS */
function shouldWarn(deprecation) {
  var env = typeof process !== 'undefined' && process.env || {};

  if (deprecation) {
    if (typeof YAML_SILENCE_DEPRECATION_WARNINGS !== 'undefined') return !YAML_SILENCE_DEPRECATION_WARNINGS;
    return !env.YAML_SILENCE_DEPRECATION_WARNINGS;
  }

  if (typeof YAML_SILENCE_WARNINGS !== 'undefined') return !YAML_SILENCE_WARNINGS;
  return !env.YAML_SILENCE_WARNINGS;
}

function warn(warning, type) {
  if (shouldWarn(false)) {
    var emit = typeof process !== 'undefined' && process.emitWarning; // This will throw in Jest if `warning` is an Error instance due to
    // https://github.com/facebook/jest/issues/2549

    if (emit) emit(warning, type);else {
      // eslint-disable-next-line no-console
      console.warn(type ? "".concat(type, ": ").concat(warning) : warning);
    }
  }
}
function warnFileDeprecation(filename) {
  if (shouldWarn(true)) {
    var path = filename.replace(/.*yaml[/\\]/i, '').replace(/\.js$/, '').replace(/\\/g, '/');
    warn("The endpoint 'yaml/".concat(path, "' will be removed in a future release."), 'DeprecationWarning');
  }
}
var warned = {};
function warnOptionDeprecation(name, alternative) {
  if (!warned[name] && shouldWarn(true)) {
    warned[name] = true;
    var msg = "The option '".concat(name, "' will be removed in a future release");
    msg += alternative ? ", use '".concat(alternative, "' instead.") : '.';
    warn(msg, 'DeprecationWarning');
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/yaml/browser/index.js":
/*!********************************************!*\
  !*** ./node_modules/yaml/browser/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dist */ "./node_modules/yaml/browser/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _dist__WEBPACK_IMPORTED_MODULE_0__["YAML"]; });




/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/construct.js":
/*!****************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/construct.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js":
/*!******************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/createClass.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/get.js":
/*!**********************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/get.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js":
/*!***************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/inherits.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/isNativeFunction.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!********************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/superPropBase.js":
/*!********************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/toArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/toArray.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/yaml/node_modules/@babel/runtime/helpers/wrapNativeSuper.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/yaml/node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeFunction = __webpack_require__(/*! ./isNativeFunction */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/isNativeFunction.js");

var construct = __webpack_require__(/*! ./construct */ "./node_modules/yaml/node_modules/@babel/runtime/helpers/construct.js");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),

/***/ "./src/forum/components/Board.js":
/*!***************************************!*\
  !*** ./src/forum/components/Board.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var html5sortable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html5sortable */ "./node_modules/html5sortable/dist/html.sortable.js");
/* harmony import */ var html5sortable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html5sortable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yaml */ "./node_modules/yaml/browser/index.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/SplitDropdown */ "flarum/components/SplitDropdown");
/* harmony import */ var flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modals_AddColumnModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/AddColumnModal */ "./src/forum/modals/AddColumnModal.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Card */ "./src/forum/components/Card.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Column */ "./src/forum/components/Column.js");











var Board =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Board, _Component);

  function Board() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Board.prototype;

  _proto.init = function init() {
    this.post = this.props.discussion.posts()[0];
    this.boardConfig = {};
    this.loadConfig();
    this.name = this.boardConfig.name || "Board";
    this.columns = this.boardConfig.columns || [];
    this.draggable = 'cards';
    this.dragging = null;
    this.setDraggable();
  };

  _proto.loadConfig = function loadConfig() {
    var yaml = this.post.content();
    var data = {};

    try {
      data = yaml__WEBPACK_IMPORTED_MODULE_2__["default"].parse(yaml); // TODO check version
    } catch (e) {
      data.description = yaml__WEBPACK_IMPORTED_MODULE_2__["default"].stringify(yaml);
    }

    this.boardConfig = {
      name: data.name || "",
      description: data.description || "",
      columns: data.columns || []
    };
  };

  _proto.saveConfig = function saveConfig() {
    var header = "# Aqueduct Kamban Board\n";
    var yaml = yaml__WEBPACK_IMPORTED_MODULE_2__["default"].stringify({
      version: "1.0",
      // TODO find a way to retrieve version
      name: this.boardConfig.name,
      description: this.boardConfig.description,
      columns: this.boardConfig.columns
    });
    this.post.save({
      content: header + yaml
    }).catch(console.error);
  };

  _proto.view = function view() {
    var _this = this;

    return m('div', {
      className: 'Kanban--Board'
    }, [m('div', {
      className: 'Board--Controls'
    }, m('div', {
      className: 'container'
    }, [this.controls().isEmpty() ? [] : flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      children: this.controls().toArray(),
      icon: 'ellipsis-v',
      className: 'App-primaryControl',
      buttonClassName: 'Button--primary'
    }), this.dragging && this.draggable === 'columns' ? [flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      icon: 'fas fa-lock',
      className: 'Button Button--danger',
      children: app.translator.trans('aqueduct.forum.board.buttons.fix-columns'),
      onclick: function onclick() {
        _this.updateColumnSorting();

        _this.draggable = 'cards';

        _this.setDraggable();
      }
    })] : []])), m('div', {
      className: 'Board--List'
    }, this.columns.map(function (col, id) {
      return _Column__WEBPACK_IMPORTED_MODULE_9__["default"].component({
        name: col.name,
        slug: col.slug,
        description: col.description,
        discussions: col.discussions,
        dragging: _this.dragging,
        draggable: _this.draggable,
        update: function update(discussions) {
          _this.boardConfig.columns[id].discussions = discussions;

          _this.saveConfig();

          m.redraw();
        },
        delete: function _delete() {
          _this.boardConfig.columns.splice(id, 1);

          _this.saveConfig();

          m.redraw();
        }
      });
    }))]);
  };

  _proto.controls = function controls() {
    var _this2 = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default.a();

    if (this.post.canEdit()) {
      items.add('add-column', flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        icon: 'fas fa-cog',
        children: app.translator.trans('aqueduct.forum.board.buttons.add-column'),
        onclick: function onclick() {
          return app.modal.show(new _modals_AddColumnModal__WEBPACK_IMPORTED_MODULE_7__["default"]({
            existingColumns: _this2.boardConfig.columns,
            onsubmit: function onsubmit(name, slug, description) {
              _this2.boardConfig.columns.push({
                name: name,
                slug: slug,
                description: description
              });

              _this2.saveConfig();
            }
          }));
        }
      }));

      if (this.draggable === 'cards') {
        items.add('drag-columns', flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
          icon: 'fas fa-lock-open',
          children: app.translator.trans('aqueduct.forum.board.buttons.drag-columns'),
          onclick: function onclick() {
            _this2.draggable = 'columns';

            _this2.setDraggable();
          }
        }));
      }
    }

    return items;
  };
  /**
   * Listens to dragging event and updates the sorting of the columns.
   */


  _proto.setDraggable = function setDraggable() {
    if (!this.post.canEdit()) {
      return;
    }

    var sorted = [];

    if (!this.dragging && this.draggable === 'columns') {
      sorted = html5sortable__WEBPACK_IMPORTED_MODULE_1___default()('.Board--List', {
        items: '.Board--Column',
        handle: '.Board--Header',
        placeholder: '<div class="Board--Column Placeholder"></div>',
        forcePlaceholderSize: true
      });
    } else if (this.draggable === 'columns') {
      html5sortable__WEBPACK_IMPORTED_MODULE_1___default()('.Board--List');
    } else {
      html5sortable__WEBPACK_IMPORTED_MODULE_1___default()('.Board--List', 'destroy');
    }

    this.dragging = this.dragging === null && sorted.length > 0 || this.dragging !== null;
  };

  _proto.updateColumnSorting = function updateColumnSorting() {
    var sorting = this.$().find('.Board--Column').map(function () {
      return $(this).attr('slug');
    }).get(); // TODO
  };

  return Board;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_3___default.a);



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
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__);







var Card =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Card, _Component);

  function Card() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Card.prototype;

  _proto.init = function init() {
    this.discussion = app.store.getById('discussions', this.props.discussionId);

    if (this.discussion) {
      this.isUnread = this.discussion.isUnread();
    }

    this.delete = this.props.delete;
  };

  _proto.view = function view() {
    if (!this.discussion) {
      return m('div', {
        className: 'Card',
        discussion: ''
      }, m('div', {
        className: 'Card--Handle'
      }, [m('div', {
        className: 'Card--Header'
      }, [m('div', {
        className: 'Card--Title'
      }, m("span", null, "Discussion not found"))]), m('div', {
        className: 'Card--Footer'
      }, this.footerControls().toArray())]));
    }

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
    var _this = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();
    items.add('delete', flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      icon: 'fas fa-cog',
      children: app.translator.trans('aqueduct.forum.board.buttons.remove-card'),
      onclick: function onclick() {
        _this.delete();
      }
    }));

    if (this.discussion) {
      var user = this.discussion.user();

      if (user) {
        items.add('user', m("a", {
          href: user ? app.route.user(user) : '#',
          className: "Card--Author",
          config: function config(element) {
            $(element).tooltip({
              placement: 'right'
            });
            m.route.apply(this, arguments);
          }
        }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default()(user, {
          title: user.username()
        }), m("span", {
          className: "Username"
        }, user.username())));
      }

      items.add('count', m('div', {
        className: 'Card--Replies-Count'
      }, [flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(this.isUnread ? 'fas fa-comments' : 'fas fa-comment-slash'), this.discussion[this.isUnread ? 'unreadCount' : 'replyCount']()]));
    }

    return items;
  };

  return Card;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/Column.js":
/*!****************************************!*\
  !*** ./src/forum/components/Column.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Column; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/SplitDropdown */ "flarum/components/SplitDropdown");
/* harmony import */ var flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Card */ "./src/forum/components/Card.js");
/* harmony import */ var _modals_AddCardModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/AddCardModal */ "./src/forum/modals/AddCardModal.js");
/* harmony import */ var html5sortable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! html5sortable */ "./node_modules/html5sortable/dist/html.sortable.js");
/* harmony import */ var html5sortable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(html5sortable__WEBPACK_IMPORTED_MODULE_7__);









var Column =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Column, _Component);

  function Column() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Column.prototype;

  _proto.init = function init() {
    var _this = this;

    this.name = this.props.name;
    this.slug = this.props.slug;
    this.description = this.props.description || "";
    this.discussions = this.props.discussions || [];
    this.dragging = this.props.dragging;
    this.draggingEnabled = this.props.draggable === 'cards';

    this.update = this.props.update || function () {};

    this.delete = this.props.delete || function () {};

    this.sorted = [];
    this.$().ready(function () {
      _this.sortable();
    });
  };

  _proto.view = function view() {
    var _this2 = this;

    return m('div', {
      className: 'Board--Column ' + this.name,
      slug: this.slug
    }, [m('div', {
      className: 'Board--Inner'
    }, [m('header', {
      className: 'Board--Header',
      slug: this.slug
    }, m('h4', [this.name, m('span', this.description), this.controls().isEmpty() ? [] : flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      children: this.controls().toArray(),
      icon: 'ellipsis-v',
      buttonClassName: 'Button'
    })])), m('div', {
      className: 'Board--Item-List',
      slug: this.slug
    }, this.discussions.map(function (dis, i) {
      if (!dis) return;
      return _components_Card__WEBPACK_IMPORTED_MODULE_5__["default"].component({
        discussionId: dis.id,
        delete: function _delete() {
          _this2.discussions.splice(i, 1);

          _this2.update(_this2.discussions);
        }
      });
    }))])]);
  };

  _proto.controls = function controls() {
    var _this3 = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a();

    if (this.props.draggable === 'columns' && true) {
      // this.board.canManageBoard()) {
      items.add('remove-column', flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        icon: 'fas fa-cog',
        children: app.translator.trans('aqueduct.forum.board.buttons.remove-column'),
        onclick: function onclick() {
          if (confirm(app.translator.trans('aqueduct.forum.board.buttons.remove-column-confirmation', {
            name: _this3.name
          }))) {
            _this3.delete();
          }
        }
      }));
    }

    items.add('add-card', flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      icon: 'fas fa-cog',
      children: app.translator.trans('aqueduct.forum.board.buttons.add-card'),
      onclick: function onclick() {
        return app.modal.show(new _modals_AddCardModal__WEBPACK_IMPORTED_MODULE_6__["default"]({
          onsubmit: function onsubmit(postId) {
            _this3.discussions.push({
              id: postId
            });

            _this3.update(_this3.discussions);
          }
        }));
      }
    }));
    return items;
  };

  _proto.sortable = function sortable() {
    var _this4 = this;

    if (false) {}

    var selector = '.Board--Item-List[slug=' + this.slug + ']';

    if (!this.dragging && this.draggingEnabled && this.sorted.length === 0) {
      this.sorted = html5sortable__WEBPACK_IMPORTED_MODULE_7___default()(selector, {
        connectWith: '.Board--Item-List',
        items: '.Card',
        // handle: '.Card--Header',
        placeholder: '<div class="Card Placeholder"></div>',
        forcePlaceholderSize: true
      });
      this.sorted[0].addEventListener('sortupdate', function (e) {
        _this4.update($(e.target).find('.Card').map(function () {
          return {
            id: $(this).attr('discussion')
          };
        }).get());
      });
    } else if (this.draggingEnabled) {
      html5sortable__WEBPACK_IMPORTED_MODULE_7___default()(selector);
    }

    this.dragging = this.dragging === null && this.sorted.length > 0 || this.dragging !== null;
  };

  return Column;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/createDiscussionBoard.js":
/*!********************************************!*\
  !*** ./src/forum/createDiscussionBoard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/SplitDropdown */ "flarum/components/SplitDropdown");
/* harmony import */ var flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SplitDropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/DiscussionPage */ "flarum/components/DiscussionPage");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Board */ "./src/forum/components/Board.js");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'view', function (original) {
    if (this.discussion && this.discussion.posts().length > 0 && this.discussion.tags().some(function (t) {
      return t.name() === app.forum.attribute('boardTag');
    })) {
      try {
        return _components_Board__WEBPACK_IMPORTED_MODULE_5__["default"].component({
          discussion: this.discussion
        });
      } catch (e) {
        console.warn(e);
      }
    }

    return original();
  });
});

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createDiscussionBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDiscussionBoard */ "./src/forum/createDiscussionBoard.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/tags/models/Tag */ "flarum/tags/models/Tag");
/* harmony import */ var flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/models/Discussion */ "flarum/models/Discussion");
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_3__);




app.initializers.add('hyn-aqueduct', function (app) {
  Object(_createDiscussionBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "./src/forum/modals/AddCardModal.js":
/*!******************************************!*\
  !*** ./src/forum/modals/AddCardModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddColumnModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_DiscussionsSearchSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/DiscussionsSearchSource */ "flarum/components/DiscussionsSearchSource");
/* harmony import */ var flarum_components_DiscussionsSearchSource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionsSearchSource__WEBPACK_IMPORTED_MODULE_3__);





var AddColumnModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AddColumnModal, _Modal);

  function AddColumnModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = AddColumnModal.prototype;

  _proto.title = function title() {
    return app.translator.trans('aqueduct.forum.board.modals.add-card.title');
  };

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.query = m.prop('');
    this.error = null;
    this.focused = true;
    this.search = new flarum_components_DiscussionsSearchSource__WEBPACK_IMPORTED_MODULE_3___default.a();
    this.searchResult = [];
    this.updateSearch = this.updateSearch.bind(this);
    this.updateSearch('');
  };

  _proto.updateSearch = function updateSearch(query) {
    var _this = this;

    this.query(query);
    this.search.search(query).then(function (rst) {
      _this.searchResult = rst;
      m.redraw();
    });
  };

  _proto.content = function content() {
    var _this2 = this;

    return [m("div", {
      className: "Modal-body"
    }, this.error ? m("div", {
      className: "Alert Alert--error"
    }, this.error) : '', m("div", {
      className: "Form"
    }, m("input", {
      className: 'FormControl ' + (this.focused ? 'focus' : ''),
      placeholder: app.translator.trans('aqueduct.forum.board.modals.add-card.query'),
      value: this.query(),
      oninput: m.withAttr('value', this.updateSearch),
      onfocus: function onfocus() {
        return _this2.focused = true;
      },
      onblur: function onblur() {
        return _this2.focused = false;
      }
    })), m("ul", {
      className: "SearchResults"
    }, this.searchResult.map(function (r) {
      return m("li", {
        className: "SearchResult",
        onclick: function onclick() {
          return _this2.onsubmit(r);
        }
      }, r.title());
    })))];
  };

  _proto.className = function className() {
    return 'AddCardModal';
  };

  _proto.onsubmit = function onsubmit(post) {
    if (this.props.onsubmit) {
      this.props.onsubmit(post.id());
    }

    app.modal.close();
    m.redraw.strategy('none');
  };

  return AddColumnModal;
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
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);





var AddColumnModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AddColumnModal, _Modal);

  function AddColumnModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = AddColumnModal.prototype;

  _proto.title = function title() {
    return app.translator.trans('aqueduct.forum.board.modals.add-column.title');
  };

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.name = m.prop('');
    this.slug = m.prop('');
    this.description = m.prop('');
    this.existingColumns = this.props.existingColumns || [];
    this.error = null;
    this.focused = null;
  };

  _proto.content = function content() {
    var _this = this;

    return [m("div", {
      className: "Modal-body"
    }, this.error ? m("div", {
      className: "Alert Alert--error"
    }, this.error) : '', m("div", {
      className: "Form"
    }, m("input", {
      className: 'FormControl ' + (this.focused === 'name' ? 'focus' : ''),
      placeholder: app.translator.trans('aqueduct.forum.board.modals.add-column.name'),
      value: this.name(),
      oninput: m.withAttr('value', function (value) {
        _this.name(value);

        _this.slug(Object(flarum_utils_string__WEBPACK_IMPORTED_MODULE_1__["slug"])(value));
      }),
      onfocus: function onfocus() {
        return _this.focused = 'name';
      },
      onblur: function onblur() {
        return _this.focused = null;
      }
    }), m("input", {
      className: 'FormControl ' + (this.focused === 'slug' ? 'focus' : ''),
      placeholder: app.translator.trans('aqueduct.forum.board.modals.add-column.slug'),
      value: this.slug(),
      oninput: m.withAttr('value', this.slug),
      onfocus: function onfocus() {
        return _this.focused = 'slug';
      },
      onblur: function onblur() {
        return _this.focused = null;
      }
    }), m("input", {
      className: 'FormControl ' + (this.focused === 'description' ? 'focus' : ''),
      placeholder: app.translator.trans('aqueduct.forum.board.modals.add-column.description'),
      value: this.description(),
      oninput: m.withAttr('value', this.description),
      onfocus: function onfocus() {
        return _this.focused = 'description';
      },
      onblur: function onblur() {
        return _this.focused = null;
      }
    })), m("div", {
      className: "App-primaryControl"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      type: 'submit',
      className: 'Button Button--primary',
      icon: 'check',
      children: app.translator.trans('flarum-tags.forum.choose_tags.submit_button')
    })))];
  };

  _proto.className = function className() {
    return 'AddColumnModal';
  };

  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();

    if (!this.slug()) {
      this.error = app.translator.trans('aqueduct.forum.board.modals.add-column.error-empty');
      return;
    }

    if (this.existingColumns.map(function (c) {
      return c.slug;
    }).includes(this.slug())) {
      this.error = app.translator.trans('aqueduct.forum.board.modals.add-column.error-exists');
      return;
    }

    if (this.props.onsubmit) {
      this.props.onsubmit(this.name(), this.slug(), this.description());
    }

    app.modal.close();
    m.redraw.strategy('none');
  };

  return AddColumnModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);



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

/***/ "flarum/components/DiscussionsSearchSource":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionsSearchSource']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionsSearchSource'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

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

/***/ "flarum/utils/string":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/string']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/string'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map