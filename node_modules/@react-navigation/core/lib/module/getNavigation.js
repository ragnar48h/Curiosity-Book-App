function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import getNavigationActionCreators from './routers/getNavigationActionCreators';
import _getChildNavigation from './getChildNavigation';
import getChildrenNavigationCache from './getChildrenNavigationCache';
export default function getNavigation(router, state, dispatch, actionSubscribers, getScreenProps, getCurrentNavigation) {
  const actions = router.getActionCreators(state, null);
  const navigation = {
    actions,
    router,
    state,
    dispatch,
    getScreenProps,
    getChildNavigation: childKey => _getChildNavigation(navigation, childKey, getCurrentNavigation),
    isFocused: childKey => {
      const {
        routes,
        index
      } = getCurrentNavigation().state;

      if (childKey == null || routes[index].key === childKey) {
        return true;
      }

      return false;
    },
    addListener: (eventName, handler) => {
      if (eventName !== 'action') {
        return {
          remove: () => {}
        };
      }

      actionSubscribers.add(handler);
      return {
        remove: () => {
          actionSubscribers.delete(handler);
        }
      };
    },
    dangerouslyGetParent: () => null,
    isFirstRouteInParent: () => true,
    _childrenNavigation: getChildrenNavigationCache(getCurrentNavigation())
  };

  const actionCreators = _objectSpread({}, getNavigationActionCreators(navigation.state), {}, actions);

  Object.keys(actionCreators).forEach(actionName => {
    navigation[actionName] = (...args) => navigation.dispatch(actionCreators[actionName](...args));
  });
  return navigation;
}
//# sourceMappingURL=getNavigation.js.map