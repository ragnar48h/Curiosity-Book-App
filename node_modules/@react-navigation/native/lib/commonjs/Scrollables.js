"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionList = exports.FlatList = exports.ScrollView = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _createNavigationAwareScrollable = _interopRequireDefault(require("./createNavigationAwareScrollable"));

var _invariant = _interopRequireDefault(require("./utils/invariant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let WrappedScrollView;
exports.ScrollView = WrappedScrollView;

if (_reactNative.Platform.OS === 'android') {
  // @todo: use GHScrollView again when
  // https://github.com/kmagiera/react-native-gesture-handler/issues/560 has
  // been fixed.
  exports.ScrollView = WrappedScrollView = (0, _createNavigationAwareScrollable.default)(_reactNative.ScrollView);
} else {
  exports.ScrollView = WrappedScrollView = (0, _createNavigationAwareScrollable.default)(_reactNativeGestureHandler.ScrollView);
}

function propsMaybeWithRefreshControl(props) {
  const onRefresh = props.onRefresh;

  if (onRefresh) {
    (0, _invariant.default)(typeof props.refreshing === 'boolean', '`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `' + JSON.stringify(props.refreshing) + '`');
    return _objectSpread({}, props, {
      refreshControl: props.refreshControl == null ? /*#__PURE__*/_react.default.createElement(_reactNative.RefreshControl, {
        refreshing: props.refreshing,
        onRefresh: onRefresh,
        progressViewOffset: props.progressViewOffset
      }) : props.refreshControl
    });
  } else {
    return props;
  }
}

const WrappedFlatList = _react.default.forwardRef((props, ref) => /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, _extends({
  ref: ref
}, props, {
  renderScrollComponent: props => /*#__PURE__*/_react.default.createElement(WrappedScrollView, propsMaybeWithRefreshControl(props))
})));

exports.FlatList = WrappedFlatList;

const WrappedSectionList = _react.default.forwardRef((props, ref) => /*#__PURE__*/_react.default.createElement(_reactNative.SectionList, _extends({
  ref: ref
}, props, {
  renderScrollComponent: props => /*#__PURE__*/_react.default.createElement(WrappedScrollView, propsMaybeWithRefreshControl(props))
})));

exports.SectionList = WrappedSectionList;
//# sourceMappingURL=Scrollables.js.map