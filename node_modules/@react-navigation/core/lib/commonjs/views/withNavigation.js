"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withNavigation;

var _react = _interopRequireDefault(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _invariant = _interopRequireDefault(require("../utils/invariant"));

var _NavigationContext = _interopRequireDefault(require("./NavigationContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function withNavigation(Component, config = {
  forwardRef: true
}) {
  class ComponentWithNavigation extends _react.default.Component {
    render() {
      const navigationProp = this.props.navigation;
      return /*#__PURE__*/_react.default.createElement(_NavigationContext.default.Consumer, null, navigationContext => {
        const navigation = navigationProp || navigationContext;
        (0, _invariant.default)(!!navigation, 'withNavigation can only be used on a view hierarchy of a navigator. The wrapped component is unable to get access to navigation from props or context.');
        return /*#__PURE__*/_react.default.createElement(Component, _extends({}, this.props, {
          navigation: navigation,
          ref: config.forwardRef ? this.props.onRef : undefined
        }));
      });
    }

  }

  _defineProperty(ComponentWithNavigation, "displayName", "withNavigation(".concat(Component.displayName || Component.name, ")"));

  return (0, _hoistNonReactStatics.default)(ComponentWithNavigation, Component);
}
//# sourceMappingURL=withNavigation.js.map