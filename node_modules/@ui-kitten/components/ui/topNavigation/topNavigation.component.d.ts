/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
import { Overwrite } from 'utility-types';
import { RenderProp } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { TextProps } from '../text/text.component';
declare type TopNavigationStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'default' | 'control' | string;
}>;
export interface TopNavigationProps extends ViewProps, TopNavigationStyledProps {
    title?: RenderProp<TextProps> | React.ReactText;
    subtitle?: RenderProp<TextProps> | React.ReactText;
    accessoryLeft?: RenderProp;
    accessoryRight?: RenderProp;
    alignment?: AlignmentProp;
}
export declare type TopNavigationElement = React.ReactElement<TopNavigationProps>;
declare type AlignmentProp = 'start' | 'center';
/**
 * TopNavigation provides a heading component for the entire page.
 *
 * @extends React.Component
 *
 * @property {ReactText | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the top navigation.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactText | (TextProps) => ReactElement} subtitle - String, number or a function component
 * to render within the top navigation.
 * If it is a function, expected to return a Text.
 *
 * @property {() => ReactElement} accessoryLeft - Function component
 * to render to the left edge the top navigation.
 *
 * @property {() => ReactElement} accessoryLeft - Function component
 * to render to the right edge the top navigation.
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `default`, `control`.
 * Use *control* appearance when needed to display within a contrast container.
 *
 * @property {string} alignment - Alignment of nested components.
 * Can be `center` or `start`.
 * Defaults to *start*.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example TopNavigationSimpleUsage
 * In basic example TopNavigation contains a title and actions.
 *
 * @overview-example TopNavigationAccessories
 * TopNavigation may contain a single action on the left,
 * and as many actions as needed on the right. In common practices, actions may be wrapped in menus.
 *
 * @overview-example TopNavigationDivider
 * It is a good idea to separate TopNavigation and screen contents with `Divider` component.
 *
 * @overview-example TopNavigationImageTitle
 * Sometimes it is needed to have an image as title.
 * In this case, a function component can be provided to `title` property.
 *
 * @overview-example TopNavigationStyling
 * TopNavigation and it's inner views can be styled by passing them as function components.
 *
 * In most cases, this is redundant, if [custom theme is configured](guides/branding).
 * ```
 * import { TopNavigation, Text } from '@ui-kitten/components';
 *
 * <TopNavigation
 *   title={evaProps => <Text {...evaProps}>Title</Text>}
 *   subtitle={evaProps => <Text {...evaProps}>Subtitle</Text>}
 * />
 * ```
 */
export declare class TopNavigationComponent extends React.Component<TopNavigationProps> {
    static styledComponentName: string;
    private getAlignmentDependentStyles;
    private getComponentStyle;
    render(): React.ReactElement<ViewProps>;
}
export declare const TopNavigation: import("../../theme").StyledComponentClass<TopNavigationProps>;
export {};
