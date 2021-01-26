import * as React from 'react';
import { ViewStyle } from 'react-native';
import { InsetChangeNativeCallback } from './SafeArea.types';
interface NativeSafeAreaViewProps {
    children?: React.ReactNode;
    style: ViewStyle;
    onInsetsChange: InsetChangeNativeCallback;
}
export default function NativeSafeAreaView({ children, style, onInsetsChange, }: NativeSafeAreaViewProps): JSX.Element;
export {};
