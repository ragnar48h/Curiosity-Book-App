/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ImageProps } from 'react-native';
import { Overwrite } from 'utility-types';
import { StyledComponentProps } from '../../theme';
import { EvaSize } from '@ui-kitten/components/devsupport';
declare type AvatarStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'default' | string;
}>;
export interface AvatarProps extends ImageProps, AvatarStyledProps {
    shape?: 'round' | 'rounded' | 'square' | string;
    size?: EvaSize;
}
export declare type AvatarElement = React.ReactElement<AvatarProps>;
/**
 * An Image with additional styles provided by Eva.
 *
 * @extends React.Component
 *
 * @property {string} shape - Shape of the component.
 * Can be `round`, `rounded` or `square`.
 * Defaults to *round*.
 *
 * @property {string} size - Size of the component.
 * Can be `tiny`, `small`, `medium`, `large`, or `giant`.
 * Defaults to *medium*.
 *
 * @property {ImageProps} ...ImageProps - Any props applied to Image component.
 *
 * @overview-example AvatarSimpleUsage
 *
 * @overview-example AvatarSize
 * Avatar can be resized by passing `size` property.
 *
 * @overview-example AvatarShape
 * Also, it may have different shape configurable with `shape` property.
 */
export declare class AvatarComponent extends React.Component<AvatarProps> {
    static styledComponentName: string;
    private getComponentStyle;
    render(): React.ReactElement<ImageProps>;
}
export declare const Avatar: import("../../theme").StyledComponentClass<AvatarProps>;
export {};
