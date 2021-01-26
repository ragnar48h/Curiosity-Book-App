"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavigationContext = _interopRequireDefault(require("./NavigationContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SceneView extends _react.default.PureComponent {
  render() {
    const {
      screenProps,
      component: Component,
      navigation
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_NavigationContext.default.Provider, {
      value: navigation
    }, /*#__PURE__*/_react.default.createElement(Component, {
      screenProps: screenProps,
      navigation: navigation
    }));
  }

}

exports.default = SceneView;
//# sourceMappingURL=SceneView.js.map