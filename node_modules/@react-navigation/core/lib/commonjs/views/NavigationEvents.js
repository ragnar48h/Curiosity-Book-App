"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _withNavigation = _interopRequireDefault(require("./withNavigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const EventNameToPropName = {
  willFocus: 'onWillFocus',
  didFocus: 'onDidFocus',
  willBlur: 'onWillBlur',
  didBlur: 'onDidBlur'
};
const EventNames = Object.keys(EventNameToPropName);

class NavigationEvents extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "getPropListener", eventName => this.props[EventNameToPropName[eventName]]);
  }

  componentDidMount() {
    this.subscriptions = {}; // We register all navigation listeners on mount to ensure listener stability across re-render
    // A former implementation was replacing (removing/adding) listeners on all update (if prop provided)
    // but there were issues (see https://github.com/react-navigation/react-navigation/issues/5058)

    EventNames.forEach(eventName => {
      this.subscriptions[eventName] = this.props.navigation.addListener(eventName, (...args) => {
        const propListener = this.getPropListener(eventName);
        return propListener && propListener(...args);
      });
    });
  }

  componentWillUnmount() {
    EventNames.forEach(eventName => {
      this.subscriptions[eventName].remove();
    });
  }

  render() {
    return null;
  }

}

var _default = (0, _withNavigation.default)(NavigationEvents);

exports.default = _default;
//# sourceMappingURL=NavigationEvents.js.map