function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
export default class TabBarTop extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_renderLabel", ({
      route,
      focused,
      color
    }) => {
      const {
        showLabel,
        upperCaseLabel,
        labelStyle,
        allowFontScaling
      } = this.props;

      if (showLabel === false) {
        return null;
      }

      const label = this.props.getLabelText({
        route
      });

      if (typeof label === 'string') {
        return /*#__PURE__*/React.createElement(Animated.Text, {
          style: [styles.label, {
            color
          }, labelStyle],
          allowFontScaling: allowFontScaling
        }, upperCaseLabel ? label.toUpperCase() : label);
      }

      if (typeof label === 'function') {
        return label({
          focused,
          tintColor: color
        });
      }

      return label;
    });

    _defineProperty(this, "_renderIcon", ({
      route,
      focused,
      color
    }) => {
      const {
        renderIcon,
        showIcon,
        iconStyle
      } = this.props;

      if (showIcon === false) {
        return null;
      }

      return /*#__PURE__*/React.createElement(View, {
        style: [styles.icon, iconStyle]
      }, renderIcon({
        route,
        focused,
        tintColor: color
      }));
    });
  }

  render() {
    const _this$props = this.props,
          {
      navigation,
      activeTintColor,
      inactiveTintColor,

      /* eslint-disable @typescript-eslint/no-unused-vars */
      renderIcon,
      getLabelText,
      allowFontScaling,
      showLabel,
      showIcon,
      upperCaseLabel,
      tabBarPosition,
      screenProps,
      iconStyle
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["navigation", "activeTintColor", "inactiveTintColor", "renderIcon", "getLabelText", "allowFontScaling", "showLabel", "showIcon", "upperCaseLabel", "tabBarPosition", "screenProps", "iconStyle"]);

    return /*#__PURE__*/React.createElement(TabBar, _extends({}, rest, {
      activeColor: activeTintColor,
      inactiveColor: inactiveTintColor,
      navigationState: navigation.state,
      renderIcon: this._renderIcon,
      renderLabel: this._renderLabel
    }));
  }

}

_defineProperty(TabBarTop, "defaultProps", {
  activeTintColor: 'rgba(255, 255, 255, 1)',
  inactiveTintColor: 'rgba(255, 255, 255, 0.7)',
  showIcon: false,
  showLabel: true,
  upperCaseLabel: true,
  allowFontScaling: true
});

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24
  },
  label: {
    textAlign: 'center',
    fontSize: 13,
    margin: 4,
    backgroundColor: 'transparent'
  }
});
//# sourceMappingURL=MaterialTopTabBar.js.map