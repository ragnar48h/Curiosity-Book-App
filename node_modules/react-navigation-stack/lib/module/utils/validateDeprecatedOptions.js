function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const shownWarnings = [];
const validations = [{
  check: o => typeof o.headerForceInset === 'object',
  deprecated: 'headerForceInset',
  updated: 'safeAreaInsets',
  compat: o => {
    const {
      headerForceInset
    } = o,
          rest = _objectWithoutProperties(o, ["headerForceInset"]);

    let safeAreaInsets = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };

    switch (headerForceInset) {
      case 'top':
        delete safeAreaInsets.top;
        break;

      case 'bottom':
        delete safeAreaInsets.bottom;
        break;

      case 'left':
        delete safeAreaInsets.left;
        break;

      case 'right':
        delete safeAreaInsets.right;
        break;

      case 'vertical':
        delete safeAreaInsets.top;
        delete safeAreaInsets.bottom;
        break;

      case 'horizontal':
        delete safeAreaInsets.left;
        delete safeAreaInsets.right;
        break;

      case 'always':
        safeAreaInsets = undefined;
        break;
    }

    return _objectSpread({}, rest, {
      safeAreaInsets
    });
  }
}, {
  check: o => o.gesturesEnabled !== undefined,
  deprecated: 'gesturesEnabled',
  updated: 'gestureEnabled',
  compat: o => {
    const {
      gesturesEnabled
    } = o,
          rest = _objectWithoutProperties(o, ["gesturesEnabled"]);

    return _objectSpread({}, rest, {
      gestureEnabled: gesturesEnabled
    });
  }
}, {
  check: o => o.header === null,
  deprecated: 'header: null',
  updated: 'headerShown: false',
  compat: o => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      header
    } = o,
          rest = _objectWithoutProperties(o, ["header"]);

    return _objectSpread({}, rest, {
      headerShown: false
    });
  }
}, {
  check: o => o.header != null && typeof o.header !== 'function',
  deprecated: 'header: <SomeElement />',
  updated: 'header: () => <SomeElement />',
  compat: o => _objectSpread({}, o, {
    header: () => o.header
  })
}, {
  check: o => o.headerTitle !== undefined && typeof o.headerTitle !== 'string' && typeof o.headerTitle !== 'function',
  deprecated: 'headerTitle: <SomeElement />',
  updated: 'headerTitle: () => <SomeElement />',
  compat: o => _objectSpread({}, o, {
    headerTitle: () => o.headerTitle
  })
}, ...['headerLeft', 'headerRight', 'headerBackground', 'headerBackImage'].map(p => ({
  check: o => o[p] !== undefined && typeof o[p] !== 'function',
  deprecated: "".concat(p, ": <SomeElement />"),
  updated: "".concat(p, ": () => <SomeElement />"),
  compat: o => _objectSpread({}, o, {
    [p]: () => o[p]
  })
}))];
export default function validateDeprecatedOptions(options) {
  let result = options;
  const warnings = []; // Validate options to show warnings for deprecations

  validations.forEach(v => {
    if (v.check(options)) {
      result = v.compat(result);

      if (process.env.NODE_ENV !== 'production') {
        if (shownWarnings.includes(v.deprecated)) {
          return;
        }

        warnings.push(v);
        shownWarnings.push(v.deprecated);
      }
    }
  });

  if (warnings.length) {
    console.warn("Deprecation in 'navigationOptions':\n".concat(warnings.map(v => "- '".concat(v.deprecated, "' will be removed in a future version. Use '").concat(v.updated, "' instead")).join('\n')));
  }

  return result;
}
//# sourceMappingURL=validateDeprecatedOptions.js.map