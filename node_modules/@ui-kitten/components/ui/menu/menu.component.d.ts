/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { Overwrite } from 'utility-types';
import { ChildrenWithProps, IndexPath } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { ListProps } from '../list/list.component';
import { MenuItemProps } from './menuItem.component';
declare type MenuStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'default' | 'noDivider' | string;
}>;
declare type MenuListProps = Omit<ListProps, 'data' | 'renderItem'>;
export interface MenuProps extends MenuListProps, MenuStyledProps {
    children?: ChildrenWithProps<MenuItemProps>;
    selectedIndex?: IndexPath;
    onSelect?: (index: IndexPath) => void;
}
export declare type MenuElement = React.ReactElement<MenuProps>;
export declare const Menu: import("../../theme").StyledComponentClass<MenuProps>;
export {};
