/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
import { Overwrite } from 'utility-types';
import { ChildrenWithProps } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { RadioProps } from '../radio/radio.component';
declare type RadioGroupStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'default' | string;
}>;
export interface RadioGroupProps extends ViewProps, RadioGroupStyledProps {
    children?: ChildrenWithProps<RadioProps>;
    selectedIndex?: number;
    onChange?: (index: number) => void;
}
export declare type RadioGroupElement = React.ReactElement<RadioGroupProps>;
export declare const RadioGroup: import("../../theme").StyledComponentClass<RadioGroupProps>;
export {};
