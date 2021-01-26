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
 * Provides to select a single state from multiple options.
 * RadioGroup should contain Radio components to provide a useful component.
 *
 * @extends React.Component
 *
 * @property {number} selectedIndex - Index of currently checked radio.
 *
 * @property {(number) => void} onChange - Called when one of the radios is pressed.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example RadioGroupSimpleUsage
 */
class RadioGroupComponent extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.onRadioChange = (index) => {
            this.props.onChange && this.props.onChange(index);
        };
        this.getComponentStyle = (source) => {
            const { itemMarginVertical, ...containerParameters } = source;
            return {
                container: containerParameters,
                item: {
                    marginVertical: itemMarginVertical,
                },
            };
        };
        this.renderRadioElements = (source, style) => {
            return react_1.default.Children.map(source, (element, index) => {
                return react_1.default.cloneElement(element, {
                    key: index,
                    style: [style, element.props.style],
                    checked: this.props.selectedIndex === index,
                    onChange: () => this.onRadioChange(index),
                });
            });
        };
    }
    render() {
        const { eva, style, children, ...viewProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        const radioElements = this.renderRadioElements(children, evaStyle.item);
        return (react_1.default.createElement(react_native_1.View, Object.assign({}, viewProps, { style: [evaStyle.container, style] }), radioElements));
    }
}
RadioGroupComponent.styledComponentName = 'RadioGroup';
RadioGroupComponent.defaultProps = {
    selectedIndex: -1,
};
exports.RadioGroup = theme_1.styled(RadioGroupComponent);
//# sourceMappingURL=radioGroup.component.js.map