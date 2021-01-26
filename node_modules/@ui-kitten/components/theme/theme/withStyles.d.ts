/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ThemeType } from './theme.service';
import { Styles } from '../style/style.service';
import { EvaProp } from '../style/styled';
export interface ThemedComponentProps<T extends Styles<T> = any> {
    eva?: EvaProp;
}
export declare type ThemedComponentClass<P, S extends Styles<S>> = React.ComponentClass<ThemedComponentProps<S> & P>;
declare type CreateStylesFunction<T extends Styles<T>> = (theme: ThemeType) => T;
/**
 * High Order Function for creating styles mapped to current theme
 * Returns component class which can be used as themed component.
 *
 * Injects `eva` property into component props, which is `{ theme, style }`.
 * Current theme and styles provided by Eva.
 *
 * @property {EvaProp} eva - Additional property injected to all `styled` components. Includes following properties:
 * `theme` - current theme,
 * `style` - styles provided by Eva,
 *
 * @param Component - Type: {ComponentType}. Component to be themed.
 *
 * @param createStyles - Type: {(ThemeType) => NamedStyles}. Function used to create styles mapped on theme.
 *
 * @overview-example WithStylesSimpleUsage
 */
export declare const withStyles: <P extends object, S>(Component: React.ComponentType<P>, createStyles?: CreateStylesFunction<S>) => ThemedComponentClass<P, S>;
export {};
