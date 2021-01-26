"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.isOrientationLandscape = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const isOrientationLandscape = ({
  width,
  height
}) => width > height;

exports.isOrientationLandscape = isOrientationLandscape;

function _default(WrappedComponent) {
  class withOrientation extends _react.default.Component {
    constructor() {
      super();

      _defineProperty(this, "handleOrientationChange", ({
        window
      }) => {
        const isLandscape = isOrientationLandscape(window);
        this.setState({
          isLandscape
        });
      });

      const _isLandscape = isOrientationLandscape(_reactNative.Dimensions.get('window'));

      this.state = {
        isLandscape: _isLandscape
      };
    }

    componentDidMount() {
      _reactNative.Dimensions.addEventListener('change', this.handleOrientationChange);
    }

    componentWillUnmount() {
      _reactNative.Dimensions.removeEventListener('change', this.handleOrientationChange);
    }

    render() {
      return /*#__PURE__*/_react.default.createElement(WrappedComponent, _extends({}, this.props, this.state));
    }

  }

  return (0, _hoistNonReactStatics.default)(withOrientation, WrappedComponent);
}
//# sourceMappingURL=withOrientation.js.map