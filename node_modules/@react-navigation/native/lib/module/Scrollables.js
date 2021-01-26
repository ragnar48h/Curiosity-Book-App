function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { ScrollView, Platform, FlatList, SectionList, RefreshControl } from 'react-native'; // eslint-disable-next-line import/named

import { ScrollView as GHScrollView } from 'react-native-gesture-handler';
import createNavigationAwareScrollable from './createNavigationAwareScrollable';
import invariant from './utils/invariant';
let WrappedScrollView;

if (Platform.OS === 'android') {
  // @todo: use GHScrollView again when
  // https://github.com/kmagiera/react-native-gesture-handler/issues/560 has
  // been fixed.
  WrappedScrollView = createNavigationAwareScrollable(ScrollView);
} else {
  WrappedScrollView = createNavigationAwareScrollable(GHScrollView);
}

function propsMaybeWithRefreshControl(props) {
  const onRefresh = props.onRefresh;

  if (onRefresh) {
    invariant(typeof props.refreshing === 'boolean', '`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `' + JSON.stringify(props.refreshing) + '`');
    return _objectSpread({}, props, {
      refreshControl: props.refreshControl == null ? /*#__PURE__*/React.createElement(RefreshControl, {
        refreshing: props.refreshing,
        onRefresh: onRefresh,
        progressViewOffset: props.progressViewOffset
      }) : props.refreshControl
    });
  } else {
    return props;
  }
}

const WrappedFlatList = React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(FlatList, _extends({
  ref: ref
}, props, {
  renderScrollComponent: props => /*#__PURE__*/React.createElement(WrappedScrollView, propsMaybeWithRefreshControl(props))
})));
const WrappedSectionList = React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(SectionList, _extends({
  ref: ref
}, props, {
  renderScrollComponent: props => /*#__PURE__*/React.createElement(WrappedScrollView, propsMaybeWithRefreshControl(props))
})));
export { WrappedScrollView as ScrollView, WrappedFlatList as FlatList, WrappedSectionList as SectionList };
//# sourceMappingURL=Scrollables.js.map