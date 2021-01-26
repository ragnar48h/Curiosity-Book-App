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
const devsupport_1 = require("../../devsupport");
const theme_1 = require("../../theme");
const divider_component_1 = require("../divider/divider.component");
/**
 * Cards contain content and actions about a single subject.
 *
 * @extends React.Component
 *
 * @property {ReactNode} children - Component to render within the card.
 *
 * @property {(ViewProps) => ReactElement} header - Function component
 * to render above the content.
 *
 * @property {(ViewProps) => ReactElement} footer - Function component
 * to render below the content.
 *
 * @property {(ViewProps) => ReactElement} accent - Function component
 * to render above the card.
 * Accents may change it's color depending on *status* property.
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `filled` or `outline`.
 * Defaults to *outline*.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example CardSimpleUsage
 * In basic example, card accepts content view as child element.
 *
 * @overview-example CardAccessories
 * It also may have header and footer by configuring `header` and `footer` properties.
 *
 * @overview-example CardStatuses
 */
class CardComponent extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.onPressIn = (event) => {
            this.props.eva.dispatch([theme_1.Interaction.ACTIVE]);
            this.props.onPressIn && this.props.onPressIn(event);
        };
        this.onPressOut = (event) => {
            this.props.eva.dispatch([]);
            this.props.onPressOut && this.props.onPressOut(event);
        };
        this.getComponentStyle = (source) => {
            const { bodyPaddingVertical, bodyPaddingHorizontal, accentHeight, accentBackgroundColor, headerPaddingVertical, headerPaddingHorizontal, footerPaddingVertical, footerPaddingHorizontal, ...containerParameters } = source;
            return {
                container: containerParameters,
                body: {
                    paddingVertical: bodyPaddingVertical,
                    paddingHorizontal: bodyPaddingHorizontal,
                },
                accent: {
                    height: accentHeight,
                    backgroundColor: accentBackgroundColor,
                },
                header: {
                    paddingHorizontal: headerPaddingHorizontal,
                    paddingVertical: headerPaddingVertical,
                },
                footer: {
                    paddingHorizontal: footerPaddingHorizontal,
                    paddingVertical: footerPaddingVertical,
                },
            };
        };
        this.renderStatusAccent = (evaStyle) => {
            return (react_1.default.createElement(react_native_1.View, { style: evaStyle }));
        };
    }
    render() {
        const { eva, style, children, accent, header, footer, ...touchableProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        return (react_1.default.createElement(devsupport_1.TouchableWeb, Object.assign({}, touchableProps, { style: [styles.container, evaStyle.container, style], onPressIn: this.onPressIn, onPressOut: this.onPressOut }),
            react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.accent, fallback: this.renderStatusAccent(evaStyle.accent), component: accent }),
            react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.header, component: header }),
            header && react_1.default.createElement(divider_component_1.Divider, null),
            react_1.default.createElement(react_native_1.View, { style: [styles.body, evaStyle.body] }, this.props.children),
            footer && react_1.default.createElement(divider_component_1.Divider, null),
            react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.footer, component: footer })));
    }
}
CardComponent.styledComponentName = 'Card';
const styles = react_native_1.StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    body: {
        backgroundColor: 'transparent',
        overflow: 'hidden',
    },
});
exports.Card = theme_1.styled(CardComponent);
//# sourceMappingURL=card.component.js.map