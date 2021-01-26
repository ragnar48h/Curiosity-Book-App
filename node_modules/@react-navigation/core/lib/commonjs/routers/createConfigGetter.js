"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _invariant = _interopRequireDefault(require("../utils/invariant"));

var _getScreenForRouteName = _interopRequireDefault(require("./getScreenForRouteName"));

var _validateScreenOptions = _interopRequireDefault(require("./validateScreenOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function applyConfig(configurer, navigationOptions, configProps) {
  if (typeof configurer === 'function') {
    return _objectSpread({}, navigationOptions, {}, configurer(_objectSpread({}, configProps, {
      navigationOptions
    })));
  }

  if (typeof configurer === 'object') {
    return _objectSpread({}, navigationOptions, {}, configurer);
  }

  return navigationOptions;
}

var _default = (routeConfigs, navigatorScreenConfig) => (navigation, screenProps, theme) => {
  const {
    state
  } = navigation;
  const route = state;
  (0, _invariant.default)(route.routeName && typeof route.routeName === 'string', 'Cannot get config because the route does not have a routeName.');
  const Component = (0, _getScreenForRouteName.default)(routeConfigs, route.routeName);
  const routeConfig = routeConfigs[route.routeName];
  const routeScreenConfig = routeConfig === Component ? null : routeConfig.navigationOptions;
  const componentScreenConfig = Component.navigationOptions;
  const configOptions = {
    navigation,
    screenProps: screenProps || {},
    theme
  };
  let outputConfig = applyConfig(navigatorScreenConfig, {}, configOptions);
  outputConfig = applyConfig(componentScreenConfig, outputConfig, configOptions);
  outputConfig = applyConfig(routeScreenConfig, outputConfig, configOptions);
  (0, _validateScreenOptions.default)(outputConfig, route);
  return outputConfig;
};

exports.default = _default;
//# sourceMappingURL=createConfigGetter.js.map