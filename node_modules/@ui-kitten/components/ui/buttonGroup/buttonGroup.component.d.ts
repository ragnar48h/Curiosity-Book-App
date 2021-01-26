/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
import { Overwrite } from 'utility-types';
import { ChildrenWithProps, EvaSize, EvaStatus } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { ButtonProps } from '../button/button.component';
declare type ButtonGroupStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'filled' | 'outline' | string;
}>;
export interface ButtonGroupProps extends ViewProps, ButtonGroupStyledProps {
    children: ChildrenWithProps<ButtonProps>;
    status?: EvaStatus;
    size?: EvaSize;
}
export declare type ButtonGroupElement = React.ReactElement<ButtonGroupProps>;
export declare const ButtonGroup: import("../../theme").StyledComponentClass<ButtonGroupProps>;
export {};
