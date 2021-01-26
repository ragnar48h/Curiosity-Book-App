"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("../../theme");
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
class AvatarComponent extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.getComponentStyle = (source) => {
            const { roundCoefficient, ...containerParameters } = source;
            // @ts-ignore: avoid checking `containerParameters`
            const baseStyle = react_native_1.StyleSheet.flatten([
                containerParameters,
                this.props.style,
            ]);
            // @ts-ignore: rhs operator is restricted to be number
            const borderRadius = roundCoefficient * baseStyle.height;
            return {
                borderRadius,
                ...baseStyle,
            };
        };
    }
    render() {
        const { eva, ...imageProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        return (react_1.default.createElement(react_native_1.Image, Object.assign({}, imageProps, { style: evaStyle })));
    }
}
exports.AvatarComponent = AvatarComponent;
AvatarComponent.styledComponentName = 'Avatar';
exports.Avatar = theme_1.styled(AvatarComponent);
//# sourceMappingURL=avatar.component.js.map