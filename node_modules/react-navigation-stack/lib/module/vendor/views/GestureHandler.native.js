import * as React from 'react';
import { PanGestureHandler as PanGestureHandlerNative } from 'react-native-gesture-handler';
import GestureHandlerRefContext from '../utils/GestureHandlerRefContext';
export function PanGestureHandler(props) {
  const gestureRef = React.useRef(null);
  return /*#__PURE__*/React.createElement(GestureHandlerRefContext.Provider, {
    value: gestureRef
  }, /*#__PURE__*/React.createElement(PanGestureHandlerNative, props));
}
export { GestureHandlerRootView, State as GestureState, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
//# sourceMappingURL=GestureHandler.native.js.map