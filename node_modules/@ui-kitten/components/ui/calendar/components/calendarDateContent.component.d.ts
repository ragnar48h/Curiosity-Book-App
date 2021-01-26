/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { StyleProp, TextStyle, ViewProps } from 'react-native';
export interface CalendarDateContentProps extends ViewProps {
    textStyle?: StyleProp<TextStyle>;
    children: string;
}
export declare type CalendarDateContentElement = React.ReactElement<CalendarDateContentProps>;
export declare class CalendarDateContent extends React.Component<CalendarDateContentProps> {
    render(): React.ReactElement<ViewProps>;
}
