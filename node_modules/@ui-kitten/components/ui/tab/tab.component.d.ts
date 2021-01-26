/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ImageProps } from 'react-native';
import { Overwrite } from 'utility-types';
import { RenderProp, TouchableWebElement, TouchableWebProps } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { TextProps } from '../text/text.component';
declare type TabStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'default' | string;
}>;
export interface TabProps extends TouchableWebProps, TabStyledProps {
    children?: React.ReactElement;
    title?: RenderProp<TextProps> | React.ReactText;
    icon?: RenderProp<Partial<ImageProps>>;
    selected?: boolean;
    onSelect?: (selected: boolean) => void;
}
export declare type TabElement = React.ReactElement<TabProps>;
/**
 * A single tab within the TabView or TabBar.
 * Tabs should be rendered within TabView or TabBar to provide a usable component.
 *
 * @extends React.Component
 *
 * @property {ReactElement} children - A component displayed below the tab.
 *
 * @property {ReactText | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the tab.
 * If it is a function, expected to return a Text.
 *
 * @property {(ImageProps) => ReactElement} icon - Function component
 * to render within the tab.
 * Expected to return an Image.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example TabSimpleUsage
 */
export declare class TabComponent extends React.Component<TabProps> {
    static styledComponentName: string;
    static defaultProps: Partial<TabProps>;
    private onMouseEnter;
    private onMouseLeave;
    private onPress;
    private getComponentStyle;
    render(): TouchableWebElement;
}
export declare const Tab: import("../../theme").StyledComponentClass<TabProps>;
export {};
