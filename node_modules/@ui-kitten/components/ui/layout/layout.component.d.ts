/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
import { Overwrite } from 'utility-types';
import { StyledComponentProps } from '../../theme';
declare type LayoutStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'default' | string;
}>;
export interface LayoutProps extends ViewProps, LayoutStyledProps {
    children?: React.ReactNode;
    level?: '1' | '2' | '3' | '4' | string;
}
export declare type LayoutElement = React.ReactElement<LayoutProps>;
/**
 * Overall page container.
 *
 * @extends React.Component
 *
 * @property {ReactNode} children - Component to render within the layout.
 *
 * @property {string} level - Background color level of component.
 * Can be `1`, `2`, `3` or `4`.
 * Defaults to *1*.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example LayoutLevel
 * Layout should be used as a root component of the screen.
 * Comparative to `View` element, it uses a background color with respect to current theme.
 * Using Layout is redundant, when background color is configured with `style` property.
 *
 * Layouts can be used in different levels.
 * It is useful, when needed to highlight the container relative to another.
 */
export declare class LayoutComponent extends React.Component<LayoutProps> {
    static styledComponentName: string;
    render(): React.ReactElement<ViewProps>;
}
export declare const Layout: import("../../theme").StyledComponentClass<LayoutProps>;
export {};
