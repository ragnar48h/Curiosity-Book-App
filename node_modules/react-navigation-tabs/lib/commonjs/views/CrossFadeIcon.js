"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TabBarIcon extends _react.default.Component {
  render() {
    const {
      route,
      activeOpacity,
      inactiveOpacity,
      activeTintColor,
      inactiveTintColor,
      renderIcon,
      horizontal,
      style
    } = this.props; // We render the icon twice at the same position on top of each other:
    // active and inactive one, so we can fade between them.

    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: style
    }, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
      style: [styles.icon, {
        opacity: activeOpacity
      }]
    }, renderIcon({
      route,
      focused: true,
      horizontal,
      tintColor: activeTintColor
    })), /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
      style: [styles.icon, {
        opacity: inactiveOpacity
      }]
    }, renderIcon({
      route,
      focused: false,
      horizontal,
      tintColor: inactiveTintColor
    })));
  }

}

exports.default = TabBarIcon;

const styles = _reactNative.StyleSheet.create({
  icon: {
    // We render the icon twice at the same position on top of each other:
    // active and inactive one, so we can fade between them:
    // Cover the whole iconContainer:
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    // Workaround for react-native >= 0.54 layout bug
    minWidth: 25
  }
});
//# sourceMappingURL=CrossFadeIcon.js.map