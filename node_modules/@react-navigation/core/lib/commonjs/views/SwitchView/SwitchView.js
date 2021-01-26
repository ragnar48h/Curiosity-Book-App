"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SceneView = _interopRequireDefault(require("../SceneView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SwitchView extends _react.default.Component {
  render() {
    const {
      state
    } = this.props.navigation;
    const activeKey = state.routes[state.index].key;
    const descriptor = this.props.descriptors[activeKey];
    const ChildComponent = descriptor.getComponent();
    return /*#__PURE__*/_react.default.createElement(_SceneView.default, {
      component: ChildComponent,
      navigation: descriptor.navigation,
      screenProps: this.props.screenProps
    });
  }

}

exports.default = SwitchView;
//# sourceMappingURL=SwitchView.js.map