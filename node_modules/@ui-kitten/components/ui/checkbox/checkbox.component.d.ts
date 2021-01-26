/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { Overwrite } from 'utility-types';
import { EvaStatus, RenderProp, TouchableWebProps } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { TextProps } from '../text/text.component';
declare type CheckBoxStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'default' | string;
}>;
export interface CheckBoxProps extends TouchableWebProps, CheckBoxStyledProps {
    children?: RenderProp<TextProps> | React.ReactText;
    checked?: boolean;
    onChange?: (checked: boolean, indeterminate: boolean) => void;
    indeterminate?: boolean;
    status?: EvaStatus;
}
export declare type CheckBoxElement = React.ReactElement<CheckBoxProps>;
export declare const CheckBox: import("../../theme").StyledComponentClass<CheckBoxProps>;
export {};
