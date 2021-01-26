function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import getChildRouter from './getChildRouter';
import getNavigationActionCreators from './routers/getNavigationActionCreators';
import getChildrenNavigationCache from './getChildrenNavigationCache';
import getEventManager from './getEventManager';

const createParamGetter = route => (paramName, defaultValue) => {
  const params = route.params;

  if (params && paramName in params) {
    return params[paramName];
  }

  return defaultValue;
};

function _getChildNavigation(navigation, childKey, getCurrentParentNavigation) {
  const children = getChildrenNavigationCache(navigation);
  const childRoute = navigation.state.routes.find(r => r.key === childKey);

  if (!childRoute) {
    return null;
  }

  if (children[childKey] && children[childKey].state === childRoute) {
    return children[childKey];
  }

  const childRouter = getChildRouter(navigation.router, childRoute.routeName); // If the route has children, we'll use this to pass in to the action creators
  // for the childRouter so that any action that depends on the active route will
  // behave as expected. We don't explicitly require that routers implement routes
  // and index properties, but if we did then we would put an invariant here to
  // ensure that a focusedGrandChildRoute exists if childRouter is defined.

  const focusedGrandChildRoute = childRoute.routes && typeof childRoute.index === 'number' ? childRoute.routes[childRoute.index] : null;

  const actionCreators = _objectSpread({}, navigation.actions, {}, navigation.router.getActionCreators(childRoute, navigation.state.key), {}, childRouter ? childRouter.getActionCreators(focusedGrandChildRoute, childRoute.key) : {}, {}, getNavigationActionCreators(childRoute));

  const actionHelpers = {};
  Object.keys(actionCreators).forEach(actionName => {
    actionHelpers[actionName] = (...args) => {
      const actionCreator = actionCreators[actionName];
      const action = actionCreator(...args);
      return navigation.dispatch(action);
    };
  });
  let _isFirstRouteInParent = true;
  const parentNavigation = getCurrentParentNavigation();

  if (parentNavigation) {
    _isFirstRouteInParent = parentNavigation.state.routes.indexOf(childRoute) === 0;
  }

  if (children[childKey] && children[childKey].isFirstRouteInParent() === _isFirstRouteInParent) {
    children[childKey] = _objectSpread({}, children[childKey], {}, actionHelpers, {
      state: childRoute,
      router: childRouter,
      actions: actionCreators,
      getParam: createParamGetter(childRoute)
    });
    return children[childKey];
  } else {
    const {
      addListener,
      emit
    } = getEventManager(childKey);
    children[childKey] = _objectSpread({}, actionHelpers, {
      state: childRoute,
      router: childRouter,
      actions: actionCreators,
      getParam: createParamGetter(childRoute),
      getChildNavigation: grandChildKey => _getChildNavigation(children[childKey], grandChildKey, () => {
        const nav = getCurrentParentNavigation();
        return nav && nav.getChildNavigation(childKey);
      }),
      isFocused: () => {
        const currentNavigation = getCurrentParentNavigation();

        if (!currentNavigation) {
          return false;
        }

        const {
          routes,
          index
        } = currentNavigation.state;

        if (!currentNavigation.isFocused()) {
          return false;
        }

        if (routes[index].key === childKey) {
          return true;
        }

        return false;
      },
      isFirstRouteInParent: () => _isFirstRouteInParent,
      dispatch: navigation.dispatch,
      getScreenProps: navigation.getScreenProps,
      dangerouslyGetParent: getCurrentParentNavigation,
      addListener,
      emit
    });
    return children[childKey];
  }
}

export default _getChildNavigation;
//# sourceMappingURL=getChildNavigation.js.map