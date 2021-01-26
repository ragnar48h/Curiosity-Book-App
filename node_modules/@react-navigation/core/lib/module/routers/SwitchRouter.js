function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import invariant from '../utils/invariant';
import getScreenForRouteName from './getScreenForRouteName';
import createConfigGetter from './createConfigGetter';
import * as NavigationActions from '../NavigationActions';
import * as SwitchActions from './SwitchActions';
import * as StackActions from './StackActions';
import validateRouteConfigMap from './validateRouteConfigMap';
import { createPathParser } from './pathUtils';

const defaultActionCreators = () => ({});

export default ((routeConfigs, config = {}) => {
  // Fail fast on invalid route definitions
  validateRouteConfigMap(routeConfigs);
  const order = config.order || Object.keys(routeConfigs);
  const getCustomActionCreators = config.getCustomActionCreators || defaultActionCreators;
  const initialRouteParams = config.initialRouteParams;
  const initialRouteName = config.initialRouteName || order[0];
  const backBehavior = config.backBehavior || 'none';
  const resetOnBlur = config.hasOwnProperty('resetOnBlur') ? config.resetOnBlur : true;
  const initialRouteIndex = order.indexOf(initialRouteName);

  if (initialRouteIndex === -1) {
    throw new Error("Invalid initialRouteName '".concat(initialRouteName, "'.") + "Should be one of ".concat(order.map(n => "\"".concat(n, "\"")).join(', ')));
  }

  const childRouters = {};
  order.forEach(routeName => {
    childRouters[routeName] = null;
    const screen = getScreenForRouteName(routeConfigs, routeName);

    if (screen.router) {
      childRouters[routeName] = screen.router;
    }
  });

  function getParamsForRoute(routeName, params) {
    let routeConfig = routeConfigs[routeName];

    if (routeConfig && routeConfig.params) {
      return _objectSpread({}, routeConfig.params, {}, params);
    } else {
      return params;
    }
  }

  const {
    getPathAndParamsForRoute,
    getActionForPathAndParams
  } = createPathParser(childRouters, routeConfigs, config);

  function resetChildRoute(routeName) {
    let initialParams = routeName === initialRouteName ? initialRouteParams : undefined; // note(brentvatne): merging initialRouteParams *on top* of default params
    // on the route seems incorrect but it's consistent with existing behavior
    // in stackrouter

    let params = getParamsForRoute(routeName, initialParams);
    const childRouter = childRouters[routeName];

    if (childRouter) {
      const childAction = NavigationActions.init();
      return _objectSpread({}, childRouter.getStateForAction(childAction), {
        key: routeName,
        routeName,
        params
      });
    }

    return {
      key: routeName,
      routeName,
      params
    };
  }

  function getNextState(action, prevState, possibleNextState) {
    function updateNextStateHistory(prevState, nextState) {
      if (backBehavior !== 'history' || prevState && nextState && nextState.index === prevState.index) {
        return nextState;
      }

      let nextRouteKeyHistory = prevState ? prevState.routeKeyHistory : [];

      if (action.type === NavigationActions.NAVIGATE) {
        nextRouteKeyHistory = [...nextRouteKeyHistory]; // copy

        const keyToAdd = nextState.routes[nextState.index].key;
        nextRouteKeyHistory = nextRouteKeyHistory.filter(k => k !== keyToAdd); // dedup

        nextRouteKeyHistory.push(keyToAdd);
      } else if (action.type === NavigationActions.BACK) {
        nextRouteKeyHistory = [...nextRouteKeyHistory]; // copy

        nextRouteKeyHistory.pop();
      }

      return _objectSpread({}, nextState, {
        routeKeyHistory: nextRouteKeyHistory
      });
    }

    let nextState = possibleNextState;

    if (prevState && possibleNextState && prevState.index !== possibleNextState.index && resetOnBlur) {
      const prevRouteName = prevState.routes[prevState.index].routeName;
      const nextRoutes = [...possibleNextState.routes];
      nextRoutes[prevState.index] = resetChildRoute(prevRouteName);
      nextState = _objectSpread({}, possibleNextState, {
        routes: nextRoutes
      });
    }

    return updateNextStateHistory(prevState, nextState);
  }

  function getInitialState() {
    const routes = order.map(resetChildRoute);
    const initialState = {
      routes,
      index: initialRouteIndex
    };

    if (backBehavior === 'history') {
      const initialKey = routes[initialRouteIndex].key;
      initialState['routeKeyHistory'] = [initialKey];
    }

    return initialState;
  }

  return {
    childRouters,

    getActionCreators(route, stateKey) {
      return getCustomActionCreators(route, stateKey);
    },

    getStateForAction(action, inputState) {
      let prevState = inputState ? _objectSpread({}, inputState) : inputState;
      let state = inputState || getInitialState();
      let activeChildIndex = state.index;

      if (action.type === NavigationActions.INIT) {
        // NOTE(brentvatne): this seems weird... why are we merging these
        // params into child routes?
        // ---------------------------------------------------------------
        // Merge any params from the action into all the child routes
        const {
          params
        } = action;

        if (params) {
          state.routes = state.routes.map(route => _objectSpread({}, route, {
            params: _objectSpread({}, route.params, {}, params, {}, route.routeName === initialRouteName ? initialRouteParams : null)
          }));
        }
      }

      if (action.type === SwitchActions.JUMP_TO && (action.key == null || action.key === state.key)) {
        const {
          params
        } = action;
        const index = state.routes.findIndex(route => route.routeName === action.routeName);

        if (index === -1) {
          throw new Error("There is no route named '".concat(action.routeName, "' in the navigator with the key '").concat(action.key, "'.\n") + "Must be one of: ".concat(state.routes.map(route => "'".concat(route.routeName, "'")).join(',')));
        }

        return getNextState(action, prevState, _objectSpread({}, state, {
          routes: params ? state.routes.map((route, i) => i === index ? _objectSpread({}, route, {
            params: _objectSpread({}, route.params, {}, params)
          }) : route) : state.routes,
          index
        }));
      } // Let the current child handle it


      const activeChildLastState = state.routes[state.index];
      const activeChildRouter = childRouters[order[state.index]];

      if (activeChildRouter) {
        const activeChildState = activeChildRouter.getStateForAction(action, activeChildLastState);

        if (!activeChildState && inputState) {
          return null;
        }

        if (activeChildState && activeChildState !== activeChildLastState) {
          const routes = [...state.routes];
          routes[state.index] = activeChildState;
          return getNextState(action, prevState, _objectSpread({}, state, {
            routes
          }));
        }
      } // Handle tab changing. Do this after letting the current tab try to
      // handle the action, to allow inner children to change first


      const isBackEligible = action.key == null || action.key === activeChildLastState.key;

      if (action.type === NavigationActions.BACK) {
        if (isBackEligible && backBehavior === 'initialRoute') {
          activeChildIndex = initialRouteIndex;
        } else if (isBackEligible && backBehavior === 'order') {
          activeChildIndex = Math.max(0, activeChildIndex - 1);
        } // The history contains current route, so we can only go back
        // if there is more than one item in the history
        else if (isBackEligible && backBehavior === 'history' && state.routeKeyHistory.length > 1) {
            const routeKey = state.routeKeyHistory[state.routeKeyHistory.length - 2];
            activeChildIndex = order.indexOf(routeKey);
          }
      }

      let didNavigate = false;

      if (action.type === NavigationActions.NAVIGATE) {
        didNavigate = !!order.find((childId, i) => {
          if (childId === action.routeName) {
            activeChildIndex = i;
            return true;
          }

          return false;
        });

        if (didNavigate) {
          const childState = state.routes[activeChildIndex];
          const childRouter = childRouters[action.routeName];
          let newChildState = childState;

          if (action.action && childRouter) {
            const childStateUpdate = childRouter.getStateForAction(action.action, childState);

            if (childStateUpdate) {
              newChildState = childStateUpdate;
            }
          }

          if (action.params) {
            newChildState = _objectSpread({}, newChildState, {
              params: _objectSpread({}, newChildState.params || {}, {}, action.params)
            });
          }

          if (newChildState !== childState) {
            const routes = [...state.routes];
            routes[activeChildIndex] = newChildState;

            const nextState = _objectSpread({}, state, {
              routes,
              index: activeChildIndex
            });

            return getNextState(action, prevState, nextState);
          } else if (newChildState === childState && state.index === activeChildIndex && prevState) {
            return null;
          }
        }
      }

      if (action.type === NavigationActions.SET_PARAMS) {
        const key = action.key;
        const lastRoute = state.routes.find(route => route.key === key);

        if (lastRoute) {
          const params = _objectSpread({}, lastRoute.params, {}, action.params);

          const routes = [...state.routes];
          routes[state.routes.indexOf(lastRoute)] = _objectSpread({}, lastRoute, {
            params
          });
          return getNextState(action, prevState, _objectSpread({}, state, {
            routes
          }));
        }
      }

      if (activeChildIndex !== state.index) {
        return getNextState(action, prevState, _objectSpread({}, state, {
          index: activeChildIndex
        }));
      } else if (didNavigate && !inputState) {
        return state;
      } else if (didNavigate) {
        return _objectSpread({}, state);
      }

      const isActionBackOrPop = action.type === NavigationActions.BACK || action.type === StackActions.POP || action.type === StackActions.POP_TO_TOP;
      const sendActionToInactiveChildren = !isActionBackOrPop || action.type === NavigationActions.BACK && action.key != null; // Let other children handle it and switch to the first child that returns a new state
      // Do not do this for StackActions.POP or NavigationActions.BACK actions without a key:
      // it would be unintuitive for these actions to switch to another tab just because that tab had a Stack that could accept a back action

      if (sendActionToInactiveChildren) {
        let index = state.index;
        let routes = state.routes;
        order.find((childId, i) => {
          const childRouter = childRouters[childId];

          if (i === index) {
            return false;
          }

          let childState = routes[i];

          if (childRouter) {
            childState = childRouter.getStateForAction(action, childState);
          }

          if (!childState) {
            index = i;
            return true;
          }

          if (childState !== routes[i]) {
            routes = [...routes];
            routes[i] = childState;
            index = i;
            return true;
          }

          return false;
        }); // Nested routers can be updated after switching children with actions such as SET_PARAMS
        // and COMPLETE_TRANSITION.

        if (action.preserveFocus) {
          index = state.index;
        }

        if (index !== state.index || routes !== state.routes) {
          return getNextState(action, prevState, _objectSpread({}, state, {
            index,
            routes
          }));
        }
      }

      return state;
    },

    getComponentForState(state) {
      const routeName = state.routes[state.index].routeName;
      invariant(routeName, "There is no route defined for index ".concat(state.index, ". Check that\n        that you passed in a navigation state with a valid tab/screen index."));
      const childRouter = childRouters[routeName];

      if (childRouter) {
        return childRouter.getComponentForState(state.routes[state.index]);
      }

      return getScreenForRouteName(routeConfigs, routeName);
    },

    getComponentForRouteName(routeName) {
      return getScreenForRouteName(routeConfigs, routeName);
    },

    getPathAndParamsForState(state) {
      const route = state.routes[state.index];
      return getPathAndParamsForRoute(route);
    },

    getActionForPathAndParams(path, params) {
      return getActionForPathAndParams(path, params);
    },

    getScreenOptions: createConfigGetter(routeConfigs, config.defaultNavigationOptions)
  };
});
//# sourceMappingURL=SwitchRouter.js.map