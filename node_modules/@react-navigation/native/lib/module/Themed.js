function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { StatusBar, Text, TextInput } from 'react-native';
import { ThemeContext, ThemeColors } from '@react-navigation/core';

class ThemedText extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(Text, _extends({}, this.props, {
      style: [{
        color: ThemeColors[this.context].label
      }, this.props.style]
    }));
  }

}

_defineProperty(ThemedText, "contextType", ThemeContext);

class ThemedTextInput extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(TextInput, _extends({}, this.props, {
      placeholderTextColor: this.context === 'dark' ? '#ebebf54c' : '#3c3c434c',
      style: [{
        color: ThemeColors[this.context].label
      }, this.props.style]
    }));
  }

}

_defineProperty(ThemedTextInput, "contextType", ThemeContext);

class ThemedStatusBar extends React.Component {
  render() {
    let _this$props = this.props,
        {
      barStyle
    } = _this$props,
        props = _objectWithoutProperties(_this$props, ["barStyle"]);

    return /*#__PURE__*/React.createElement(StatusBar, _extends({
      barStyle: barStyle ? barStyle : this.context === 'dark' ? 'light-content' : 'default'
    }, props));
  }

}

_defineProperty(ThemedStatusBar, "contextType", ThemeContext);

export default {
  Text: ThemedText,
  StatusBar: ThemedStatusBar,
  TextInput: ThemedTextInput
};
//# sourceMappingURL=Themed.js.map