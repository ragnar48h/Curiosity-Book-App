function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import withNavigation from './withNavigation';
const EventNameToPropName = {
  willFocus: 'onWillFocus',
  didFocus: 'onDidFocus',
  willBlur: 'onWillBlur',
  didBlur: 'onDidBlur'
};
const EventNames = Object.keys(EventNameToPropName);

class NavigationEvents extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "getPropListener", eventName => this.props[EventNameToPropName[eventName]]);
  }

  componentDidMount() {
    this.subscriptions = {}; // We register all navigation listeners on mount to ensure listener stability across re-render
    // A former implementation was replacing (removing/adding) listeners on all update (if prop provided)
    // but there were issues (see https://github.com/react-navigation/react-navigation/issues/5058)

    EventNames.forEach(eventName => {
      this.subscriptions[eventName] = this.props.navigation.addListener(eventName, (...args) => {
        const propListener = this.getPropListener(eventName);
        return propListener && propListener(...args);
      });
    });
  }

  componentWillUnmount() {
    EventNames.forEach(eventName => {
      this.subscriptions[eventName].remove();
    });
  }

  render() {
    return null;
  }

}

export default withNavigation(NavigationEvents);
//# sourceMappingURL=NavigationEvents.js.map