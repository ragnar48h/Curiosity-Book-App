"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.completeTransition = exports.replace = exports.reset = exports.push = exports.popToTop = exports.pop = exports.COMPLETE_TRANSITION = exports.REPLACE = exports.RESET = exports.PUSH = exports.POP_TO_TOP = exports.POP = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const POP = 'Navigation/POP';
exports.POP = POP;
const POP_TO_TOP = 'Navigation/POP_TO_TOP';
exports.POP_TO_TOP = POP_TO_TOP;
const PUSH = 'Navigation/PUSH';
exports.PUSH = PUSH;
const RESET = 'Navigation/RESET';
exports.RESET = RESET;
const REPLACE = 'Navigation/REPLACE';
exports.REPLACE = REPLACE;
const COMPLETE_TRANSITION = 'Navigation/COMPLETE_TRANSITION';
exports.COMPLETE_TRANSITION = COMPLETE_TRANSITION;

const pop = payload => _objectSpread({
  type: POP
}, payload);

exports.pop = pop;

const popToTop = payload => _objectSpread({
  type: POP_TO_TOP
}, payload);

exports.popToTop = popToTop;

const push = payload => _objectSpread({
  type: PUSH
}, payload);

exports.push = push;

const reset = payload => _objectSpread({
  type: RESET,
  key: null
}, payload);

exports.reset = reset;

const replace = payload => _objectSpread({
  type: REPLACE
}, payload);

exports.replace = replace;

const completeTransition = payload => _objectSpread({
  type: COMPLETE_TRANSITION,
  preserveFocus: true
}, payload);

exports.completeTransition = completeTransition;
//# sourceMappingURL=StackActions.js.map