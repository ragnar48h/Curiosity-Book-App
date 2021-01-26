/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
import { Overwrite } from 'utility-types';
import { StyledComponentProps } from '../../theme';
declare type DividerStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'default' | string;
}>;
export declare type DividerProps = ViewProps & DividerStyledProps;
export declare type DividerElement = React.ReactElement<DividerProps>;
export declare const Divider: import("../../theme").StyledComponentClass<DividerProps>;
export {};
