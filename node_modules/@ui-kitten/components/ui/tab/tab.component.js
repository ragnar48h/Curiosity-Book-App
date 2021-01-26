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
class TabComponent extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.onMouseEnter = (event) => {
            this.props.eva.dispatch([theme_1.Interaction.HOVER]);
            this.props.onMouseEnter && this.props.onMouseEnter(event);
        };
        this.onMouseLeave = (event) => {
            this.props.eva.dispatch([]);
            this.props.onMouseLeave && this.props.onMouseLeave(event);
        };
        this.onPress = () => {
            this.props.onSelect && this.props.onSelect(!this.props.selected);
        };
        this.getComponentStyle = (source) => {
            const { textMarginVertical, textFontFamily, textFontSize, textFontWeight, textColor, iconWidth, iconHeight, iconMarginVertical, iconTintColor, ...containerParameters } = source;
            return {
                container: containerParameters,
                icon: {
                    width: iconWidth,
                    height: iconHeight,
                    marginVertical: iconMarginVertical,
                    tintColor: iconTintColor,
                },
                title: {
                    marginVertical: textMarginVertical,
                    fontFamily: textFontFamily,
                    fontSize: textFontSize,
                    fontWeight: textFontWeight,
                    color: textColor,
                },
            };
        };
    }
    render() {
        const { eva, style, title, icon, ...touchableProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        return (react_1.default.createElement(devsupport_1.TouchableWeb, Object.assign({}, touchableProps, { style: [evaStyle.container, styles.container, style], onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onPress: this.onPress }),
            react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.icon, component: icon }),
            react_1.default.createElement(devsupport_1.FalsyText, { style: evaStyle.title, component: title })));
    }
}
exports.TabComponent = TabComponent;
TabComponent.styledComponentName = 'Tab';
TabComponent.defaultProps = {
    selected: false,
};
const styles = react_native_1.StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
exports.Tab = theme_1.styled(TabComponent);
//# sourceMappingURL=tab.component.js.map