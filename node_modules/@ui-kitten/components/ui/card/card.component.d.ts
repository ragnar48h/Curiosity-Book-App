/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
import { Overwrite } from 'utility-types';
import { EvaStatus, RenderProp, TouchableWebProps } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
declare type CardStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'filled' | 'outline' | string;
}>;
export interface CardProps extends TouchableWebProps, CardStyledProps {
    children?: React.ReactNode;
    header?: RenderProp<ViewProps>;
    footer?: RenderProp<ViewProps>;
    accent?: RenderProp<ViewProps>;
    status?: EvaStatus;
}
export declare type CardElement = React.ReactElement<CardProps>;
export declare const Card: import("../../theme").StyledComponentClass<CardProps>;
export {};
