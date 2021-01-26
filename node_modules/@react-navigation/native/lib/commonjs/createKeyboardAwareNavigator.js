"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (Navigator, navigatorConfig) => {
  var _class, _temp;

  return _temp = _class = class KeyboardAwareNavigator extends _react.default.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "_previouslyFocusedTextInput", null);

      _defineProperty(this, "_handleGestureBegin", () => {
        this._previouslyFocusedTextInput = _reactNative.TextInput.State.currentlyFocusedField();

        if (this._previouslyFocusedTextInput) {
          _reactNative.TextInput.State.blurTextInput(this._previouslyFocusedTextInput);
        }

        this.props.onGestureBegin && this.props.onGestureBegin();
      });

      _defineProperty(this, "_handleGestureCanceled", () => {
        if (this._previouslyFocusedTextInput) {
          _reactNative.TextInput.State.focusTextInput(this._previouslyFocusedTextInput);
        }

        this.props.onGestureCanceled && this.props.onGestureCanceled();
      });

      _defineProperty(this, "_handleGestureEnd", () => {
        this._previouslyFocusedTextInput = null;
        this.props.onGestureFinish && this.props.onGestureFinish();
      });

      _defineProperty(this, "_handleTransitionStart", (transitionProps, prevTransitionProps) => {
        // TODO: We should not even have received the transition start event
        // in the case where the index did not change, I believe. We
        // should revisit this after 2.0 release.
        if (transitionProps.index !== prevTransitionProps.index) {
          const currentField = _reactNative.TextInput.State.currentlyFocusedField();

          if (currentField) {
            _reactNative.TextInput.State.blurTextInput(currentField);
          }
        }

        const onTransitionStart = this.props.onTransitionStart || navigatorConfig.onTransitionStart;
        onTransitionStart && onTransitionStart(transitionProps, prevTransitionProps);
      });
    }

    render() {
      return /*#__PURE__*/_react.default.createElement(Navigator, _extends({}, this.props, {
        onGestureBegin: this._handleGestureBegin,
        onGestureCanceled: this._handleGestureCanceled,
        onGestureEnd: this._handleGestureEnd,
        onTransitionStart: this._handleTransitionStart
      }));
    }

  }, _defineProperty(_class, "router", Navigator.router), _defineProperty(_class, "navigationOptions", Navigator.navigationOptions), _temp;
};

exports.default = _default;
//# sourceMappingURL=createKeyboardAwareNavigator.js.map