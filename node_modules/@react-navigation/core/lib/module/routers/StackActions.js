function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export const POP = 'Navigation/POP';
export const POP_TO_TOP = 'Navigation/POP_TO_TOP';
export const PUSH = 'Navigation/PUSH';
export const RESET = 'Navigation/RESET';
export const REPLACE = 'Navigation/REPLACE';
export const COMPLETE_TRANSITION = 'Navigation/COMPLETE_TRANSITION';
export const pop = payload => _objectSpread({
  type: POP
}, payload);
export const popToTop = payload => _objectSpread({
  type: POP_TO_TOP
}, payload);
export const push = payload => _objectSpread({
  type: PUSH
}, payload);
export const reset = payload => _objectSpread({
  type: RESET,
  key: null
}, payload);
export const replace = payload => _objectSpread({
  type: REPLACE
}, payload);
export const completeTransition = payload => _objectSpread({
  type: COMPLETE_TRANSITION,
  preserveFocus: true
}, payload);
//# sourceMappingURL=StackActions.js.map