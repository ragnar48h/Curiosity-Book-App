/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { Overwrite } from 'utility-types';
import { EvaStatus, RenderProp, TouchableWebElement, TouchableWebProps } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { TextProps } from '../text/text.component';
declare type RadioStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'default' | string;
}>;
export interface RadioProps extends TouchableWebProps, RadioStyledProps {
    children?: RenderProp<TextProps> | React.ReactText;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    status?: EvaStatus;
}
export declare type RadioElement = React.ReactElement<RadioProps>;
/**
 * Radio buttons allow the user to select one option from a set.
 *
 * @extends React.Component
 *
 * @property {boolean} checked - Whether component is checked.
 * Defaults to *false*.
 *
 * @property {(boolean) => void} onChange - Called when radio
 * should switch it's value.
 *
 * @property {ReactText | (TextProps) => ReactElement} children - String, number or a function component
 * to render near the checkbox.
 * If it is a function, expected to return a Text.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example RadioSimpleUsage
 *
 * @overview-example RadioGroupSimpleUsage
 * Radios should be passed to RadioGroup child elements to provide a usable component.
 *
 * @overview-example RadioStates
 * A single Radio can be checked or disabled.
 *
 * @overview-example RadioStatus
 * Or marked with `status` property, which is useful within forms validation.
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example RadioStyling
 * Radio and it's inner views can be styled by passing them as function components.
 * ```
 * import { Radio, Text } from '@ui-kitten/components';
 *
 * <Radio>
 *   {evaProps => <Text {...evaProps}>Place your Text</Text>}
 * </Radio>
 * ```
 *
 * @overview-example RadioTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 */
export declare class RadioComponent extends React.Component<RadioProps> {
    static styledComponentName: string;
    private onMouseEnter;
    private onMouseLeave;
    private onFocus;
    private onBlur;
    private onPress;
    private onPressIn;
    private onPressOut;
    private getComponentStyle;
    render(): TouchableWebElement;
}
export declare const Radio: import("../../theme").StyledComponentClass<RadioProps>;
export {};
