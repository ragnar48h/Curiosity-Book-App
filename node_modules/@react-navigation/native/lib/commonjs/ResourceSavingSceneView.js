"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _core = require("@react-navigation/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const FAR_FAR_AWAY = 3000; // this should be big enough to move the whole view out of its container

class ResourceSavingSceneView extends _react.default.PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isFocused && !prevState.awake) {
      return {
        awake: true
      };
    } else {
      return null;
    }
  }

  constructor(props) {
    super();

    _defineProperty(this, "_mustAlwaysBeVisible", () => {
      return this.props.animationEnabled || this.props.swipeEnabled;
    });

    this.state = {
      awake: props.lazy ? props.isFocused : true
    };
  }

  render() {
    const {
      awake
    } = this.state;

    const _this$props = this.props,
          {
      isFocused,
      childNavigation,
      removeClippedSubviews
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["isFocused", "childNavigation", "removeClippedSubviews"]);

    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.container,
      collapsable: false,
      removeClippedSubviews: _reactNative.Platform.OS === 'android' ? removeClippedSubviews : !isFocused && removeClippedSubviews
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: this._mustAlwaysBeVisible() || isFocused ? styles.innerAttached : styles.innerDetached
    }, awake ? /*#__PURE__*/_react.default.createElement(_core.SceneView, _extends({}, rest, {
      navigation: childNavigation
    })) : null));
  }

}

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  },
  innerAttached: {
    flex: 1
  },
  innerDetached: {
    flex: 1,
    top: FAR_FAR_AWAY
  }
});

var _default = ResourceSavingSceneView;
exports.default = _default;
//# sourceMappingURL=ResourceSavingSceneView.js.map