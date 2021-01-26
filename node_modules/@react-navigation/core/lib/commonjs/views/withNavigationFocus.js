"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withNavigationFocus;

var _react = _interopRequireDefault(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _withNavigation = _interopRequireDefault(require("./withNavigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function withNavigationFocus(Component) {
  class ComponentWithNavigationFocus extends _react.default.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        isFocused: this.props.navigation.isFocused()
      });
    }

    componentDidMount() {
      const {
        navigation
      } = this.props;
      this.subscriptions = [navigation.addListener('willFocus', () => this.setState({
        isFocused: true
      })), navigation.addListener('willBlur', () => this.setState({
        isFocused: false
      }))];
    }

    componentWillUnmount() {
      var _this$subscriptions;

      (_this$subscriptions = this.subscriptions) === null || _this$subscriptions === void 0 ? void 0 : _this$subscriptions.forEach(sub => sub.remove());
    }

    render() {
      return /*#__PURE__*/_react.default.createElement(Component, _extends({}, this.props, {
        isFocused: this.state.isFocused,
        ref: this.props.onRef
      }));
    }

  }

  _defineProperty(ComponentWithNavigationFocus, "displayName", "withNavigationFocus(".concat(Component.displayName || Component.name, ")"));

  return (0, _hoistNonReactStatics.default)((0, _withNavigation.default)(ComponentWithNavigationFocus, {
    forwardRef: false
  }), Component);
}
//# sourceMappingURL=withNavigationFocus.js.map