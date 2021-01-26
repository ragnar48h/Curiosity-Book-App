/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
import { Overwrite } from 'utility-types';
import { RenderProp } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { MenuProps } from '../menu/menu.component';
declare type DrawerStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'default' | 'noDivider' | string;
}>;
export interface DrawerProps extends MenuProps, DrawerStyledProps {
    header?: RenderProp<ViewProps>;
    footer?: RenderProp<ViewProps>;
}
export declare type DrawerElement = React.ReactElement<DrawerProps>;
export declare const Drawer: import("../../theme").StyledComponentClass<DrawerProps>;
export {};
