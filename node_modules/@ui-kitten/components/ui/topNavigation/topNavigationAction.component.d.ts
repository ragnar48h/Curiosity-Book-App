/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ImageProps } from 'react-native';
import { Overwrite } from 'utility-types';
import { RenderProp, TouchableWebProps } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
declare type TopNavigationActionStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'default' | 'control' | string;
}>;
export interface TopNavigationActionProps extends TouchableWebProps, TopNavigationActionStyledProps {
    icon?: RenderProp<Partial<ImageProps>>;
}
export declare type TopNavigationActionElement = React.ReactElement<TopNavigationActionProps>;
export declare const TopNavigationAction: import("../../theme").StyledComponentClass<TopNavigationActionProps>;
export {};
