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
import { MenuItemDescriptor } from './menu.service';
declare type MenuItemStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'default' | 'grouped' | string;
}>;
declare type TouchableMenuItemProps = Overwrite<TouchableWebProps, {
    onPress?: (descriptor: MenuItemDescriptor, event?: GestureResponderEvent) => void;
}>;
export interface MenuItemProps extends TouchableMenuItemProps, MenuItemStyledProps {
    title?: RenderProp<TextProps> | React.ReactText;
    accessoryLeft?: RenderProp<Partial<ImageProps>>;
    accessoryRight?: RenderProp<Partial<ImageProps>>;
    selected?: boolean;
    descriptor?: MenuItemDescriptor;
}
export declare type MenuItemElement = React.ReactElement<MenuItemProps>;
export declare const MenuItem: import("../../theme").StyledComponentClass<MenuItemProps>;
export {};
