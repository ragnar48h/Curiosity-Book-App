import * as React from 'react';
import { ViewProps } from 'react-native';
import { EdgeInsets as EdgeInsetsT } from './SafeArea.types';
export { default as initialWindowSafeAreaInsets } from './InitialWindowSafeAreaInsets';
export declare const SafeAreaContext: React.Context<EdgeInsetsT | null>;
export interface SafeAreaViewProps {
    children?: React.ReactNode;
    initialSafeAreaInsets?: EdgeInsetsT | null;
}
export declare function SafeAreaProvider({ children, initialSafeAreaInsets, }: SafeAreaViewProps): JSX.Element;
export declare const SafeAreaConsumer: React.Consumer<EdgeInsetsT | null>;
export declare function useSafeArea(): EdgeInsetsT;
export declare function SafeAreaView({ style, ...rest }: ViewProps & {
    children: React.ReactNode;
}): JSX.Element;
export declare type EdgeInsets = EdgeInsetsT;
