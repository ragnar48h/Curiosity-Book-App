/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { GestureResponderEvent, ImageProps } from 'react-native';
import { Overwrite } from 'utility-types';
import { RenderProp, TouchableWebProps } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { TextProps } from '../text/text.component';
import { SelectItemDescriptor } from './select.service';
declare type SelectItemStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'default' | 'grouped' | string;
}>;
declare type TouchableSelectProps = Overwrite<TouchableWebProps, {
    onPress?: (descriptor: SelectItemDescriptor, event?: GestureResponderEvent) => void;
}>;
export interface SelectItemProps extends TouchableSelectProps, SelectItemStyledProps {
    title?: RenderProp<TextProps> | React.ReactText;
    accessoryLeft?: RenderProp<Partial<ImageProps>>;
    accessoryRight?: RenderProp<Partial<ImageProps>>;
    selected?: boolean;
    descriptor?: SelectItemDescriptor;
}
export declare type SelectItemElement = React.ReactElement<SelectItemProps>;
export declare const SelectItem: import("../../theme").StyledComponentClass<SelectItemProps>;
export {};
