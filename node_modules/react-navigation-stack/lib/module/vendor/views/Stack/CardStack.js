function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Animated, StyleSheet, Dimensions, Platform } from 'react-native';
import { MaybeScreenContainer, MaybeScreen } from '../Screens';
import { getDefaultHeaderHeight } from '../Header/HeaderSegment';
import CardContainer from './CardContainer';
import { DefaultTransition, ModalTransition } from '../../TransitionConfigs/TransitionPresets';
import { forNoAnimation as forNoAnimationHeader } from '../../TransitionConfigs/HeaderStyleInterpolators';
import { forNoAnimation as forNoAnimationCard } from '../../TransitionConfigs/CardStyleInterpolators';
import getDistanceForDirection from '../../utils/getDistanceForDirection';
const EPSILON = 0.01;
const FALLBACK_DESCRIPTOR = Object.freeze({
  options: {}
});

const getHeaderHeights = (routes, insets, descriptors, layout, previous) => {
  return routes.reduce((acc, curr) => {
    const {
      options = {}
    } = descriptors[curr.key] || {};
    const {
      height = previous[curr.key]
    } = StyleSheet.flatten(options.headerStyle || {});

    const safeAreaInsets = _objectSpread({}, insets, {}, options.safeAreaInsets);

    const {
      headerStatusBarHeight = safeAreaInsets.top
    } = options;
    acc[curr.key] = typeof height === 'number' ? height : getDefaultHeaderHeight(layout, headerStatusBarHeight);
    return acc;
  }, {});
};

const getDistanceFromOptions = (mode, layout, descriptor) => {
  const {
    gestureDirection = mode === 'modal' ? ModalTransition.gestureDirection : DefaultTransition.gestureDirection
  } = (descriptor === null || descriptor === void 0 ? void 0 : descriptor.options) || {};
  return getDistanceForDirection(layout, gestureDirection);
};

const getProgressFromGesture = (mode, gesture, layout, descriptor) => {
  const distance = getDistanceFromOptions(mode, {
    // Make sure that we have a non-zero distance, otherwise there will be incorrect progress
    // This causes blank screen on web if it was previously inside container with display: none
    width: Math.max(1, layout.width),
    height: Math.max(1, layout.height)
  }, descriptor);

  if (distance > 0) {
    return gesture.interpolate({
      inputRange: [0, distance],
      outputRange: [1, 0]
    });
  }

  return gesture.interpolate({
    inputRange: [distance, 0],
    outputRange: [0, 1]
  });
};

export default class CardStack extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.routes === state.routes && props.descriptors === state.descriptors) {
      return null;
    }

    const gestures = props.routes.reduce((acc, curr) => {
      const descriptor = props.descriptors[curr.key];
      const {
        animationEnabled
      } = (descriptor === null || descriptor === void 0 ? void 0 : descriptor.options) || {};
      acc[curr.key] = state.gestures[curr.key] || new Animated.Value(props.openingRouteKeys.includes(curr.key) && animationEnabled !== false ? getDistanceFromOptions(props.mode, state.layout, descriptor) : 0);
      return acc;
    }, {});
    return {
      routes: props.routes,
      scenes: props.routes.map((route, index, self) => {
        const previousRoute = self[index - 1];
        const nextRoute = self[index + 1];
        const oldScene = state.scenes[index];
        const currentGesture = gestures[route.key];
        const previousGesture = previousRoute ? gestures[previousRoute.key] : undefined;
        const nextGesture = nextRoute ? gestures[nextRoute.key] : undefined;
        const descriptor = props.descriptors[route.key] || state.descriptors[route.key] || (oldScene ? oldScene.descriptor : FALLBACK_DESCRIPTOR);
        const nextDescriptor = props.descriptors[nextRoute === null || nextRoute === void 0 ? void 0 : nextRoute.key] || state.descriptors[nextRoute === null || nextRoute === void 0 ? void 0 : nextRoute.key];
        const previousDescriptor = props.descriptors[previousRoute === null || previousRoute === void 0 ? void 0 : previousRoute.key] || state.descriptors[previousRoute === null || previousRoute === void 0 ? void 0 : previousRoute.key];
        const scene = {
          route,
          descriptor,
          progress: {
            current: getProgressFromGesture(props.mode, currentGesture, state.layout, descriptor),
            next: nextGesture ? getProgressFromGesture(props.mode, nextGesture, state.layout, nextDescriptor) : undefined,
            previous: previousGesture ? getProgressFromGesture(props.mode, previousGesture, state.layout, previousDescriptor) : undefined
          },
          __memo: [route, state.layout, descriptor, nextDescriptor, previousDescriptor, currentGesture, nextGesture, previousGesture]
        };

        if (oldScene && scene.__memo.every((it, i) => {
          // @ts-ignore
          return oldScene.__memo[i] === it;
        })) {
          return oldScene;
        }

        return scene;
      }),
      gestures,
      descriptors: props.descriptors,
      headerHeights: getHeaderHeights(props.routes, props.insets, state.descriptors, state.layout, state.headerHeights)
    };
  }

  constructor(_props) {
    super(_props);

    _defineProperty(this, "handleLayout", e => {
      const {
        height,
        width
      } = e.nativeEvent.layout;
      const layout = {
        width,
        height
      };
      this.setState((state, props) => {
        if (height === state.layout.height && width === state.layout.width) {
          return null;
        }

        return {
          layout,
          headerHeights: getHeaderHeights(props.routes, props.insets, state.descriptors, layout, {})
        };
      });
    });

    _defineProperty(this, "handleHeaderLayout", ({
      route,
      height
    }) => {
      this.setState(({
        headerHeights
      }) => {
        const previousHeight = headerHeights[route.key];

        if (previousHeight === height) {
          return null;
        }

        return {
          headerHeights: _objectSpread({}, headerHeights, {
            [route.key]: height
          })
        };
      });
    });

    _defineProperty(this, "getFocusedRoute", () => {
      const {
        state
      } = this.props;
      return state.routes[state.index];
    });

    const {
      height: _height = 0,
      width: _width = 0
    } = Dimensions.get('window');
    this.state = {
      routes: [],
      scenes: [],
      gestures: {},
      layout: {
        height: _height,
        width: _width
      },
      descriptors: this.props.descriptors,
      // Used when card's header is null and mode is float to make transition
      // between screens with headers and those without headers smooth.
      // This is not a great heuristic here. We don't know synchronously
      // on mount what the header height is so we have just used the most
      // common cases here.
      headerHeights: {}
    };
  }

  render() {
    const {
      mode,
      insets,
      descriptors,
      state,
      routes,
      closingRouteKeys,
      onOpenRoute,
      onCloseRoute,
      getPreviousRoute,
      getGesturesEnabled,
      renderHeader,
      renderScene,
      headerMode,
      onTransitionStart,
      onTransitionEnd,
      onPageChangeStart,
      onPageChangeConfirm,
      onPageChangeCancel
    } = this.props;
    const {
      scenes,
      layout,
      gestures,
      headerHeights
    } = this.state;
    const focusedRoute = state.routes[state.index];
    const focusedDescriptor = descriptors[focusedRoute.key];
    const focusedOptions = focusedDescriptor ? focusedDescriptor.options : {};
    let defaultTransitionPreset = mode === 'modal' ? ModalTransition : DefaultTransition;

    if (headerMode === 'screen') {
      defaultTransitionPreset = _objectSpread({}, defaultTransitionPreset, {
        headerStyleInterpolator: forNoAnimationHeader
      });
    }

    const {
      top = insets.top,
      right = insets.right,
      bottom = insets.bottom,
      left = insets.left
    } = focusedOptions.safeAreaInsets || {}; // Screens is buggy on iOS and web, so we only enable it on Android
    // For modals, usually we want the screen underneath to be visible, so also disable it there

    const isScreensEnabled = Platform.OS !== 'ios' && mode !== 'modal';
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MaybeScreenContainer, {
      enabled: isScreensEnabled,
      style: styles.container,
      onLayout: this.handleLayout
    }, routes.map((route, index, self) => {
      const focused = focusedRoute.key === route.key;
      const gesture = gestures[route.key];
      const scene = scenes[index];
      const isScreenActive = scene.progress.next ? scene.progress.next.interpolate({
        inputRange: [0, 1 - EPSILON, 1],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp'
      }) : 1;
      const {
        safeAreaInsets,
        headerShown,
        headerTransparent,
        cardShadowEnabled,
        cardOverlayEnabled,
        cardOverlay,
        cardStyle,
        animationEnabled,
        gestureResponseDistance,
        gestureVelocityImpact,
        gestureDirection = defaultTransitionPreset.gestureDirection,
        transitionSpec = defaultTransitionPreset.transitionSpec,
        cardStyleInterpolator = animationEnabled === false ? forNoAnimationCard : defaultTransitionPreset.cardStyleInterpolator,
        headerStyleInterpolator = defaultTransitionPreset.headerStyleInterpolator
      } = scene.descriptor ? scene.descriptor.options : {};
      let transitionConfig = {
        gestureDirection,
        transitionSpec,
        cardStyleInterpolator,
        headerStyleInterpolator
      }; // When a screen is not the last, it should use next screen's transition config
      // Many transitions also animate the previous screen, so using 2 different transitions doesn't look right
      // For example combining a slide and a modal transition would look wrong otherwise
      // With this approach, combining different transition styles in the same navigator mostly looks right
      // This will still be broken when 2 transitions have different idle state (e.g. modal presentation),
      // but majority of the transitions look alright

      if (index !== self.length - 1) {
        const nextScene = scenes[index + 1];

        if (nextScene) {
          const {
            animationEnabled,
            gestureDirection = defaultTransitionPreset.gestureDirection,
            transitionSpec = defaultTransitionPreset.transitionSpec,
            cardStyleInterpolator = animationEnabled === false ? forNoAnimationCard : defaultTransitionPreset.cardStyleInterpolator,
            headerStyleInterpolator = defaultTransitionPreset.headerStyleInterpolator
          } = nextScene.descriptor ? nextScene.descriptor.options : {};
          transitionConfig = {
            gestureDirection,
            transitionSpec,
            cardStyleInterpolator,
            headerStyleInterpolator
          };
        }
      }

      const {
        top: safeAreaInsetTop = insets.top,
        right: safeAreaInsetRight = insets.right,
        bottom: safeAreaInsetBottom = insets.bottom,
        left: safeAreaInsetLeft = insets.left
      } = safeAreaInsets || {};
      const previousRoute = getPreviousRoute({
        route: scene.route
      });
      let previousScene = scenes[index - 1];

      if (previousRoute) {
        // The previous scene will be shortly before the current scene in the array
        // So loop back from current index to avoid looping over the full array
        for (let j = index - 1; j >= 0; j--) {
          const s = scenes[j];

          if (s && s.route.key === previousRoute.key) {
            previousScene = s;
            break;
          }
        }
      }

      return /*#__PURE__*/React.createElement(MaybeScreen, {
        key: route.key,
        style: StyleSheet.absoluteFill,
        enabled: isScreensEnabled,
        active: isScreenActive,
        pointerEvents: "box-none"
      }, /*#__PURE__*/React.createElement(CardContainer, _extends({
        index: index,
        active: index === self.length - 1,
        focused: focused,
        closing: closingRouteKeys.includes(route.key),
        layout: layout,
        gesture: gesture,
        scene: scene,
        previousScene: previousScene,
        safeAreaInsetTop: safeAreaInsetTop,
        safeAreaInsetRight: safeAreaInsetRight,
        safeAreaInsetBottom: safeAreaInsetBottom,
        safeAreaInsetLeft: safeAreaInsetLeft,
        cardOverlay: cardOverlay,
        cardOverlayEnabled: cardOverlayEnabled,
        cardShadowEnabled: cardShadowEnabled,
        cardStyle: cardStyle,
        onPageChangeStart: onPageChangeStart,
        onPageChangeConfirm: onPageChangeConfirm,
        onPageChangeCancel: onPageChangeCancel,
        gestureResponseDistance: gestureResponseDistance,
        headerHeight: headerHeights[route.key],
        onHeaderHeightChange: this.handleHeaderLayout,
        getPreviousRoute: getPreviousRoute,
        getFocusedRoute: this.getFocusedRoute,
        mode: mode,
        headerMode: headerMode,
        headerShown: headerShown,
        headerTransparent: headerTransparent,
        renderHeader: renderHeader,
        renderScene: renderScene,
        onOpenRoute: onOpenRoute,
        onCloseRoute: onCloseRoute,
        onTransitionStart: onTransitionStart,
        onTransitionEnd: onTransitionEnd,
        gestureEnabled: index !== 0 && getGesturesEnabled({
          route
        }),
        gestureVelocityImpact: gestureVelocityImpact
      }, transitionConfig)));
    })), headerMode === 'float' ? renderHeader({
      mode: 'float',
      layout,
      insets: {
        top,
        right,
        bottom,
        left
      },
      scenes,
      getPreviousRoute,
      getFocusedRoute: this.getFocusedRoute,
      onContentHeightChange: this.handleHeaderLayout,
      gestureDirection: focusedOptions.gestureDirection !== undefined ? focusedOptions.gestureDirection : defaultTransitionPreset.gestureDirection,
      styleInterpolator: focusedOptions.headerStyleInterpolator !== undefined ? focusedOptions.headerStyleInterpolator : defaultTransitionPreset.headerStyleInterpolator,
      style: styles.floating
    }) : null);
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  floating: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  }
});
//# sourceMappingURL=CardStack.js.map