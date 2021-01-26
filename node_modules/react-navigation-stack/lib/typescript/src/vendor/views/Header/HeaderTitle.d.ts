import * as React from 'react';
import { Animated } from 'react-native';
declare type Props = React.ComponentProps<typeof Animated.Text> & {
    tintColor?: string;
    children?: string;
};
export default function HeaderTitle({ tintColor, style, ...rest }: Props): JSX.Element;
export {};
