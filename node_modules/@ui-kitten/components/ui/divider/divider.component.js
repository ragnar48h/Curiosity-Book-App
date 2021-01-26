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
 * A divider is a thin line that groups content in lists and layouts.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 */
class DividerComponent extends react_1.default.Component {
    render() {
        const { eva, style, ...viewProps } = this.props;
        return (react_1.default.createElement(react_native_1.View, Object.assign({}, viewProps, { style: [eva.style, style] })));
    }
}
DividerComponent.styledComponentName = 'Divider';
exports.Divider = theme_1.styled(DividerComponent);
//# sourceMappingURL=divider.component.js.map