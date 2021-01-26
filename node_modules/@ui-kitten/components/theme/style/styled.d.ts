/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { Interaction, StyleType } from './style.service';
import { ThemeType } from '../theme/theme.service';
export interface EvaProp {
    theme?: ThemeType;
    style?: StyleType;
    dispatch?: (interaction: Interaction[]) => void;
}
export interface StyledComponentProps {
    appearance?: string;
    eva?: EvaProp;
}
export declare type StyledComponentClass<P> = React.ComponentClass<StyledComponentProps & P>;
/**
 * High Order Function to apply style mapping on a component.
 * Used by all UI Kitten components and can be used when building custom components with Eva.
 *
 * Requires component to have a static `styledComponentName` property which defines
 * corresponding component name in mapping.
 *
 * Injects `eva` property into component props, which is `{ theme, style, dispatch }`.
 * Current theme, styles provided by Eva and dispatch function to request styles for a particular state.
 *
 * @property {string} appearance - Appearance of component. Default is provided by mapping.
 *
 * @property {EvaProp} eva - Additional property injected to all `styled` components. Includes following properties:
 * `theme` - current theme,
 * `style` - style provided by Eva,
 * `dispatch` - Function for requesting styles from Eva for current component state.
 *
 * @param Component - Type: {ComponentType}. Component to be styled.
 *
 * @overview-example StyledComponentSimpleUsage
 *
 * @overview-example StyledComponentStates
 *
 * @overview-example StyledComponentVariants
 */
export declare const styled: <P extends object>(Component: React.ComponentType<P>) => StyledComponentClass<P>;
