/**
 * TouchableItem renders a touchable that looks native on both iOS and Android.
 *
 * It provides an abstraction on top of TouchableNativeFeedback and
 * TouchableOpacity.
 *
 * On iOS you can pass the props of TouchableOpacity, on Android pass the props
 * of TouchableNativeFeedback.
 */
import * as React from 'react';
import { ViewProps } from 'react-native';
export declare type Props = ViewProps & {
    pressColor: string;
    disabled?: boolean;
    borderless?: boolean;
    delayPressIn?: number;
    onPress?: () => void;
    children: React.ReactNode;
};
export declare class TouchableItem extends React.Component<Props> {
    static defaultProps: {
        borderless: boolean;
        pressColor: string;
    };
    render(): JSX.Element;
}
