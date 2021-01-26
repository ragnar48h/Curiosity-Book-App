/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ImageProps, StyleProp, TextInputProps, TextStyle, ViewProps } from 'react-native';
import { Overwrite } from 'utility-types';
import { EvaSize, EvaStatus, RenderProp, WebEventResponderCallbacks } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { TextProps } from '../text/text.component';
declare type InputStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'default' | string;
}>;
export interface InputProps extends TextInputProps, InputStyledProps {
    status?: EvaStatus;
    size?: EvaSize;
    disabled?: boolean;
    label?: RenderProp<TextProps> | React.ReactText;
    caption?: RenderProp<TextProps> | React.ReactText;
    captionIcon?: RenderProp<Partial<ImageProps>>;
    accessoryLeft?: RenderProp<Partial<ImageProps>>;
    accessoryRight?: RenderProp<Partial<ImageProps>>;
    textStyle?: StyleProp<TextStyle>;
}
export declare type InputElement = React.ReactElement<InputProps>;
/**
 * Inputs let users enter and edit text.
 *
 * @extends React.Component
 *
 * @property {string} value - A value displayed in input field.
 *
 * @property {string} onChangeText - Called when the value should be changed.
 *
 * @property {() => void} onFocus - Called when input field becomes focused.
 *
 * @property {() => void} onBlur - Called when input field looses focus.
 *
 * @property {string} placeholder - A string to be displayed when there is no value.
 *
 * @property {boolean} disabled - Whether input field is disabled.
 * This property overrides `editable` property of TextInput.
 *
 * @property {ReactText | (TextProps) => ReactElement} label - String, number or a function component
 * to render above the input field.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactText | (TextProps) => ReactElement} caption - String, number or a function component
 * to render below the input field.
 * If it is a function, expected to return a Text.
 *
 * @property {(ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the text.
 * Expected to return an Image.
 *
 * @property {(ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the text.
 * Expected to return an Image.
 *
 * @property {(ImageProps) => ReactElement} captionIcon - Function component
 * to render to start of the *caption*.
 * Expected to return an Image.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 * Useful for giving user a hint on the input validity.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {string} size - Size of the component.
 * Can be `small`, `medium` or `large`.
 * Defaults to *medium*.
 *
 * @property {StyleProp<TextStyle>} textStyle - Customizes the style of the text field.
 *
 * @property {TextInputProps} ...TextInputProps - Any props applied to TextInput component.
 *
 * @overview-example InputSimpleUsage
 *
 * @overview-example InputStates
 * Input can be disabled with `disabled` property.
 *
 * @overview-example InputStatus
 * Or marked with `status` property, which is useful within forms validation.
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example InputAccessories
 * Input may contain labels, captions and inner views by configuring `accessoryLeft` or `accessoryRight` properties.
 * Within Eva, Input accessories are expected to be images or [svg icons](guides/icon-packages).
 *
 * @overview-example InputSize
 * To resize Input, a `size` property may be used.
 *
 * @overview-example InputStyling
 * Input and it's inner views can be styled by passing them as function components.
 * ```
 * import { Input, Text } from '@ui-kitten/components';
 *
 * <Input
 *   textStyle={{ ... }}
 *   label={evaProps => <Text {...evaProps}>Label</Text>}
 *   caption={evaProps => <Text {...evaProps}>Caption</Text>}
 * />
 * ```
 *
 * @overview-example InputTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 */
export declare class InputComponent extends React.Component<InputProps> implements WebEventResponderCallbacks {
    static styledComponentName: string;
    private textInputRef;
    private webEventResponder;
    focus: () => void;
    blur: () => void;
    isFocused: () => boolean;
    clear: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    private onTextFieldFocus;
    private onTextFieldBlur;
    private getComponentStyle;
    render(): React.ReactElement<ViewProps>;
}
export declare const Input: import("../../theme").StyledComponentClass<InputProps>;
export {};
