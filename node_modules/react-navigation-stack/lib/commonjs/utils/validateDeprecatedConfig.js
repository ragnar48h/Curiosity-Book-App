"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateDeprecatedConfig;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const shownWarnings = [];

const validations = _objectSpread({
  transparentCard: {
    message: "'transparentCard' is removed in favor of 'cardStyle: { backgroundColor: 'transparent' }' in 'navigationOptions'. Specify it in 'defaultNavigationOptions' to keep the same behaviour.",
    compat: (c, o) => c.transparentCard ? _objectSpread({}, o, {
      cardStyle: [{
        backgroundColor: 'transparent'
      }, o.cardStyle]
    }) : o
  },
  headerLayoutPreset: {
    message: "'headerLayoutPreset' is renamed to 'headerTitleAlign' and moved to 'navigationOptions'. Specify it in 'defaultNavigationOptions' to keep the same behaviour.",
    compat: (c, o) => _objectSpread({}, o, {
      headerTitleAlign: c.headerLayoutPreset
    })
  },
  headerTransitionPreset: {
    message: "'headerTransitionPreset' is removed in favor of the new animation APIs"
  },
  transitionConfig: {
    message: "'transitionConfig' is removed in favor of the new animation APIs"
  }
}, ['cardShadowEnabled', 'cardOverlayEnabled', 'cardStyle', 'headerBackTitleVisible', 'onTransitionStart', 'onTransitionEnd'].reduce((acc, name) => {
  acc[name] = {
    message: "'".concat(name, "' is moved to 'navigationOptions'. Specify it in 'defaultNavigationOptions' to keep the same behaviour."),
    compat: (c, o) => _objectSpread({}, o, {
      [name]: () => c[name]
    })
  };
  return acc;
}, {}));

function validateDeprecatedConfig(config, options) {
  let result = options;
  Object.keys(validations).forEach(name => {
    if (name in config) {
      const {
        compat,
        message
      } = validations[name];
      result = compat ? compat(config, result) : result;

      if (process.env.NODE_ENV !== 'production') {
        if (shownWarnings.includes(message)) {
          return;
        }

        console.warn("Deprecation in 'createStackNavigator':\n".concat(message));
        shownWarnings.push(message);
      }
    }
  });
  return result;
}
//# sourceMappingURL=validateDeprecatedConfig.js.map