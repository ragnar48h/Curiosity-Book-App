/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ImageProps, ViewProps } from 'react-native';
import { Overwrite } from 'utility-types';
import { RenderProp, TouchableWebElement, TouchableWebProps } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { TextProps } from '../text/text.component';
declare type ListItemStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'default' | string;
}>;
export interface ListItemProps extends TouchableWebProps, ListItemStyledProps {
    title?: RenderProp<TextProps> | React.ReactText;
    description?: RenderProp<TextProps> | React.ReactText;
    accessoryLeft?: RenderProp<Partial<ImageProps>>;
    accessoryRight?: RenderProp<ViewProps>;
    children?: React.ReactNode;
}
export declare type ListItemElement = React.ReactElement<ListItemProps>;
/**
 * A single item rendered in List.
 * Items should be rendered within List by providing them through `renderItem` property to provide a usable component.
 *
 * @extends React.Component
 *
 * @property {ReactText | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the item.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactText | (TextProps) => ReactElement} description - String, number or a function component
 * to render within the item.
 * If it is a function, expected to return a Text.
 *
 * @property {(ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the text.
 * Expected to return an Image.
 *
 * @property {(ViewProps) => ReactElement} accessoryRight - Function component
 * to render to end of the text.
 *
 * @property {ReactNode} children - Component to render within the item.
 * Useful when needed to render a custom item and get a feedback when it is pressed.
 * If provided, *title* and other properties will be ignored.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example ListItemSimpleUsage
 *
 * @overview-example ListItemStyling
 * List Item and it's inner views can be styled by passing them as function components.
 *
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 * ```
 * import { ListItem, Text } from '@ui-kitten/components';
 *
 * <ListItem
 *   title={evaProps => <Text {...evaProps}>TITLE</Text>}
 *   description={evaProps => <Text {...evaProps}>DESCRIPTION</Text>}
 * />
 * ```
 */
export declare class ListItemComponent extends React.Component<ListItemProps & {
    index: number;
}> {
    static styledComponentName: string;
    private onPressIn;
    private onPressOut;
    private getComponentStyle;
    private renderTemplateChildren;
    render(): TouchableWebElement;
}
export declare const ListItem: import("../../theme").StyledComponentClass<ListItemProps>;
export {};
