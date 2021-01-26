export declare const $schema: string;
export declare const version: number;
export declare const strict: {
    "text-font-family": string;
    "text-heading-1-font-size": number;
    "text-heading-1-font-weight": string;
    "text-heading-1-font-family": string;
    "text-heading-2-font-size": number;
    "text-heading-2-font-weight": string;
    "text-heading-2-font-family": string;
    "text-heading-3-font-size": number;
    "text-heading-3-font-weight": string;
    "text-heading-3-font-family": string;
    "text-heading-4-font-size": number;
    "text-heading-4-font-weight": string;
    "text-heading-4-font-family": string;
    "text-heading-5-font-size": number;
    "text-heading-5-font-weight": string;
    "text-heading-5-font-family": string;
    "text-heading-6-font-size": number;
    "text-heading-6-font-weight": string;
    "text-heading-6-font-family": string;
    "text-subtitle-1-font-size": number;
    "text-subtitle-1-font-weight": string;
    "text-subtitle-1-font-family": string;
    "text-subtitle-2-font-size": number;
    "text-subtitle-2-font-weight": string;
    "text-subtitle-2-font-family": string;
    "text-paragraph-1-font-size": number;
    "text-paragraph-1-font-weight": string;
    "text-paragraph-1-font-family": string;
    "text-paragraph-2-font-size": number;
    "text-paragraph-2-font-weight": string;
    "text-paragraph-2-font-family": string;
    "text-caption-1-font-size": number;
    "text-caption-1-font-weight": string;
    "text-caption-1-font-family": string;
    "text-caption-2-font-size": number;
    "text-caption-2-font-weight": string;
    "text-caption-2-font-family": string;
    "text-label-font-size": number;
    "text-label-font-weight": string;
    "text-label-font-family": string;
    "size-tiny": number;
    "size-small": number;
    "size-medium": number;
    "size-large": number;
    "size-giant": number;
    "border-radius": number;
    "border-width": number;
};
export declare namespace components {
    export namespace Avatar {
        export namespace meta {
            export const scope: string;
            export namespace parameters {
                export const roundCoefficient: {
                    "type": string;
                };
                export const width: {
                    "type": string;
                };
                export const height: {
                    "type": string;
                };
            }
            export const appearances: {
                "default": {
                    "default": boolean;
                };
            };
            export namespace variantGroups {
                export namespace shape {
                    export const round: {
                        "default": boolean;
                    };
                    export const rounded: {
                        "default": boolean;
                    };
                    export const square: {
                        "default": boolean;
                    };
                }
                export namespace size {
                    export const tiny: {
                        "default": boolean;
                    };
                    export const small: {
                        "default": boolean;
                    };
                    export const medium: {
                        "default": boolean;
                    };
                    export const large: {
                        "default": boolean;
                    };
                    export const giant: {
                        "default": boolean;
                    };
                }
            }
            export const states: {};
        }
        const appearances_1: {
            "default": {
                "mapping": {};
                "variantGroups": {
                    "shape": {
                        "round": {
                            "roundCoefficient": number;
                        };
                        "rounded": {
                            "roundCoefficient": number;
                        };
                        "square": {
                            "roundCoefficient": number;
                        };
                    };
                    "size": {
                        "tiny": {
                            "width": string;
                            "height": string;
                        };
                        "small": {
                            "width": string;
                            "height": string;
                        };
                        "medium": {
                            "width": string;
                            "height": string;
                        };
                        "large": {
                            "width": string;
                            "height": string;
                        };
                        "giant": {
                            "width": string;
                            "height": string;
                        };
                    };
                };
            };
        };
        export { appearances_1 as appearances };
    }
    export namespace BottomNavigationTab {
        export namespace meta_1 {
            const scope_1: string;
            export { scope_1 as scope };
            export namespace parameters_1 {
                export const paddingHorizontal: {
                    "type": string;
                };
                export const paddingVertical: {
                    "type": string;
                };
                export const iconMarginVertical: {
                    "type": string;
                };
                export const iconWidth: {
                    "type": string;
                };
                export const iconHeight: {
                    "type": string;
                };
                export const iconTintColor: {
                    "type": string;
                };
                export const textMarginVertical: {
                    "type": string;
                };
                export const textColor: {
                    "type": string;
                };
                export const textFontFamily: {
                    "type": string;
                };
                export const textFontSize: {
                    "type": string;
                };
                export const textFontWeight: {
                    "type": string;
                };
            }
            export { parameters_1 as parameters };
            const appearances_2: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_2 as appearances };
            const variantGroups_1: {};
            export { variantGroups_1 as variantGroups };
            export namespace states_1 {
                export const selected: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export const hover: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export const focused: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
            }
            export { states_1 as states };
        }
        export { meta_1 as meta };
        const appearances_3: {
            "default": {
                "mapping": {
                    "textMarginVertical": number;
                    "textFontSize": string;
                    "textFontWeight": string;
                    "textFontFamily": string;
                    "textColor": string;
                    "iconWidth": number;
                    "iconHeight": number;
                    "iconMarginVertical": number;
                    "iconTintColor": string;
                    "state": {
                        "hover": {
                            "textColor": string;
                            "iconTintColor": string;
                        };
                        "selected": {
                            "textColor": string;
                            "iconTintColor": string;
                        };
                    };
                };
            };
        };
        export { appearances_3 as appearances };
    }
    export namespace BottomNavigation {
        export namespace meta_2 {
            const scope_2: string;
            export { scope_2 as scope };
            export namespace parameters_2 {
                export const minHeight: {
                    "type": string;
                };
                const paddingVertical_1: {
                    "type": string;
                };
                export { paddingVertical_1 as paddingVertical };
                export const backgroundColor: {
                    "type": string;
                };
                export const borderTopColor: {
                    "type": string;
                };
                export const borderTopWidth: {
                    "type": string;
                };
                export const indicatorHeight: {
                    "type": string;
                };
                export const indicatorBackgroundColor: {
                    "type": string;
                };
            }
            export { parameters_2 as parameters };
            const appearances_4: {
                "default": {
                    "default": boolean;
                };
                "noIndicator": {
                    "default": boolean;
                };
            };
            export { appearances_4 as appearances };
            const variantGroups_2: {};
            export { variantGroups_2 as variantGroups };
            const states_2: {};
            export { states_2 as states };
        }
        export { meta_2 as meta };
        const appearances_5: {
            "default": {
                "mapping": {
                    "minHeight": number;
                    "paddingVertical": number;
                    "backgroundColor": string;
                    "indicatorHeight": number;
                    "indicatorBackgroundColor": string;
                };
            };
            "noIndicator": {
                "mapping": {
                    "indicatorHeight": number;
                    "indicatorBackgroundColor": string;
                };
            };
        };
        export { appearances_5 as appearances };
    }
    export namespace Button {
        export namespace meta_3 {
            const scope_3: string;
            export { scope_3 as scope };
            export namespace parameters_3 {
                export const minWidth: {
                    "type": string;
                };
                const minHeight_1: {
                    "type": string;
                };
                export { minHeight_1 as minHeight };
                const paddingHorizontal_1: {
                    "type": string;
                };
                export { paddingHorizontal_1 as paddingHorizontal };
                const paddingVertical_2: {
                    "type": string;
                };
                export { paddingVertical_2 as paddingVertical };
                export const borderRadius: {
                    "type": string;
                };
                export const borderColor: {
                    "type": string;
                };
                export const borderWidth: {
                    "type": string;
                };
                const backgroundColor_1: {
                    "type": string;
                };
                export { backgroundColor_1 as backgroundColor };
                export const textMarginHorizontal: {
                    "type": string;
                };
                const textFontFamily_1: {
                    "type": string;
                };
                export { textFontFamily_1 as textFontFamily };
                const textFontSize_1: {
                    "type": string;
                };
                export { textFontSize_1 as textFontSize };
                const textFontWeight_1: {
                    "type": string;
                };
                export { textFontWeight_1 as textFontWeight };
                const textColor_1: {
                    "type": string;
                };
                export { textColor_1 as textColor };
                const iconWidth_1: {
                    "type": string;
                };
                export { iconWidth_1 as iconWidth };
                const iconHeight_1: {
                    "type": string;
                };
                export { iconHeight_1 as iconHeight };
                const iconTintColor_1: {
                    "type": string;
                };
                export { iconTintColor_1 as iconTintColor };
                export const iconMarginHorizontal: {
                    "type": string;
                };
            }
            export { parameters_3 as parameters };
            export namespace appearances_6 {
                export const filled: {
                    "default": boolean;
                };
                export const outline: {
                    "default": boolean;
                };
                export const ghost: {
                    "default": boolean;
                };
            }
            export { appearances_6 as appearances };
            export namespace variantGroups_3 {
                export namespace status {
                    export const basic: {
                        "default": boolean;
                    };
                    export const primary: {
                        "default": boolean;
                    };
                    export const success: {
                        "default": boolean;
                    };
                    export const info: {
                        "default": boolean;
                    };
                    export const warning: {
                        "default": boolean;
                    };
                    export const danger: {
                        "default": boolean;
                    };
                    export const control: {
                        "default": boolean;
                    };
                }
                export namespace size_1 {
                    const tiny_1: {
                        "default": boolean;
                    };
                    export { tiny_1 as tiny };
                    const small_1: {
                        "default": boolean;
                    };
                    export { small_1 as small };
                    const medium_1: {
                        "default": boolean;
                    };
                    export { medium_1 as medium };
                    const large_1: {
                        "default": boolean;
                    };
                    export { large_1 as large };
                    const giant_1: {
                        "default": boolean;
                    };
                    export { giant_1 as giant };
                }
                export { size_1 as size };
            }
            export { variantGroups_3 as variantGroups };
            export namespace states_3 {
                const hover_1: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { hover_1 as hover };
                export const disabled: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export const active: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                const focused_1: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { focused_1 as focused };
            }
            export { states_3 as states };
        }
        export { meta_3 as meta };
        export namespace appearances_7 {
            export namespace filled_1 {
                export namespace mapping {
                    const textFontFamily_2: string;
                    export { textFontFamily_2 as textFontFamily };
                    const iconMarginHorizontal_1: number;
                    export { iconMarginHorizontal_1 as iconMarginHorizontal };
                }
                export namespace variantGroups_4 {
                    export namespace status_1 {
                        export namespace basic_1 {
                            const borderColor_1: string;
                            export { borderColor_1 as borderColor };
                            const backgroundColor_2: string;
                            export { backgroundColor_2 as backgroundColor };
                            const textColor_2: string;
                            export { textColor_2 as textColor };
                            const iconTintColor_2: string;
                            export { iconTintColor_2 as iconTintColor };
                            export namespace state {
                                export namespace focused_2 {
                                    const borderColor_2: string;
                                    export { borderColor_2 as borderColor };
                                    const backgroundColor_3: string;
                                    export { backgroundColor_3 as backgroundColor };
                                }
                                export { focused_2 as focused };
                                export namespace hover_2 {
                                    const borderColor_3: string;
                                    export { borderColor_3 as borderColor };
                                    const backgroundColor_4: string;
                                    export { backgroundColor_4 as backgroundColor };
                                }
                                export { hover_2 as hover };
                                export namespace active_1 {
                                    const borderColor_4: string;
                                    export { borderColor_4 as borderColor };
                                    const backgroundColor_5: string;
                                    export { backgroundColor_5 as backgroundColor };
                                }
                                export { active_1 as active };
                                export namespace disabled_1 {
                                    const borderColor_5: string;
                                    export { borderColor_5 as borderColor };
                                    const backgroundColor_6: string;
                                    export { backgroundColor_6 as backgroundColor };
                                    const textColor_3: string;
                                    export { textColor_3 as textColor };
                                    const iconTintColor_3: string;
                                    export { iconTintColor_3 as iconTintColor };
                                }
                                export { disabled_1 as disabled };
                            }
                        }
                        export { basic_1 as basic };
                        export namespace primary_1 {
                            const borderColor_6: string;
                            export { borderColor_6 as borderColor };
                            const backgroundColor_7: string;
                            export { backgroundColor_7 as backgroundColor };
                            const textColor_4: string;
                            export { textColor_4 as textColor };
                            const iconTintColor_4: string;
                            export { iconTintColor_4 as iconTintColor };
                            export namespace state_1 {
                                export namespace focused_3 {
                                    const borderColor_7: string;
                                    export { borderColor_7 as borderColor };
                                    const backgroundColor_8: string;
                                    export { backgroundColor_8 as backgroundColor };
                                }
                                export { focused_3 as focused };
                                export namespace hover_3 {
                                    const borderColor_8: string;
                                    export { borderColor_8 as borderColor };
                                    const backgroundColor_9: string;
                                    export { backgroundColor_9 as backgroundColor };
                                }
                                export { hover_3 as hover };
                                export namespace active_2 {
                                    const borderColor_9: string;
                                    export { borderColor_9 as borderColor };
                                    const backgroundColor_10: string;
                                    export { backgroundColor_10 as backgroundColor };
                                }
                                export { active_2 as active };
                                export namespace disabled_2 {
                                    const borderColor_10: string;
                                    export { borderColor_10 as borderColor };
                                    const backgroundColor_11: string;
                                    export { backgroundColor_11 as backgroundColor };
                                    const textColor_5: string;
                                    export { textColor_5 as textColor };
                                    const iconTintColor_5: string;
                                    export { iconTintColor_5 as iconTintColor };
                                }
                                export { disabled_2 as disabled };
                            }
                            export { state_1 as state };
                        }
                        export { primary_1 as primary };
                        export namespace success_1 {
                            const borderColor_11: string;
                            export { borderColor_11 as borderColor };
                            const backgroundColor_12: string;
                            export { backgroundColor_12 as backgroundColor };
                            const textColor_6: string;
                            export { textColor_6 as textColor };
                            const iconTintColor_6: string;
                            export { iconTintColor_6 as iconTintColor };
                            export namespace state_2 {
                                export namespace focused_4 {
                                    const borderColor_12: string;
                                    export { borderColor_12 as borderColor };
                                    const backgroundColor_13: string;
                                    export { backgroundColor_13 as backgroundColor };
                                }
                                export { focused_4 as focused };
                                export namespace hover_4 {
                                    const borderColor_13: string;
                                    export { borderColor_13 as borderColor };
                                    const backgroundColor_14: string;
                                    export { backgroundColor_14 as backgroundColor };
                                }
                                export { hover_4 as hover };
                                export namespace active_3 {
                                    const borderColor_14: string;
                                    export { borderColor_14 as borderColor };
                                    const backgroundColor_15: string;
                                    export { backgroundColor_15 as backgroundColor };
                                }
                                export { active_3 as active };
                                export namespace disabled_3 {
                                    const borderColor_15: string;
                                    export { borderColor_15 as borderColor };
                                    const backgroundColor_16: string;
                                    export { backgroundColor_16 as backgroundColor };
                                    const textColor_7: string;
                                    export { textColor_7 as textColor };
                                    const iconTintColor_7: string;
                                    export { iconTintColor_7 as iconTintColor };
                                }
                                export { disabled_3 as disabled };
                            }
                            export { state_2 as state };
                        }
                        export { success_1 as success };
                        export namespace info_1 {
                            const borderColor_16: string;
                            export { borderColor_16 as borderColor };
                            const backgroundColor_17: string;
                            export { backgroundColor_17 as backgroundColor };
                            const textColor_8: string;
                            export { textColor_8 as textColor };
                            const iconTintColor_8: string;
                            export { iconTintColor_8 as iconTintColor };
                            export namespace state_3 {
                                export namespace focused_5 {
                                    const borderColor_17: string;
                                    export { borderColor_17 as borderColor };
                                    const backgroundColor_18: string;
                                    export { backgroundColor_18 as backgroundColor };
                                }
                                export { focused_5 as focused };
                                export namespace hover_5 {
                                    const borderColor_18: string;
                                    export { borderColor_18 as borderColor };
                                    const backgroundColor_19: string;
                                    export { backgroundColor_19 as backgroundColor };
                                }
                                export { hover_5 as hover };
                                export namespace active_4 {
                                    const borderColor_19: string;
                                    export { borderColor_19 as borderColor };
                                    const backgroundColor_20: string;
                                    export { backgroundColor_20 as backgroundColor };
                                }
                                export { active_4 as active };
                                export namespace disabled_4 {
                                    const borderColor_20: string;
                                    export { borderColor_20 as borderColor };
                                    const backgroundColor_21: string;
                                    export { backgroundColor_21 as backgroundColor };
                                    const textColor_9: string;
                                    export { textColor_9 as textColor };
                                    const iconTintColor_9: string;
                                    export { iconTintColor_9 as iconTintColor };
                                }
                                export { disabled_4 as disabled };
                            }
                            export { state_3 as state };
                        }
                        export { info_1 as info };
                        export namespace warning_1 {
                            const borderColor_21: string;
                            export { borderColor_21 as borderColor };
                            const backgroundColor_22: string;
                            export { backgroundColor_22 as backgroundColor };
                            const textColor_10: string;
                            export { textColor_10 as textColor };
                            const iconTintColor_10: string;
                            export { iconTintColor_10 as iconTintColor };
                            export namespace state_4 {
                                export namespace focused_6 {
                                    const borderColor_22: string;
                                    export { borderColor_22 as borderColor };
                                    const backgroundColor_23: string;
                                    export { backgroundColor_23 as backgroundColor };
                                }
                                export { focused_6 as focused };
                                export namespace hover_6 {
                                    const borderColor_23: string;
                                    export { borderColor_23 as borderColor };
                                    const backgroundColor_24: string;
                                    export { backgroundColor_24 as backgroundColor };
                                }
                                export { hover_6 as hover };
                                export namespace active_5 {
                                    const borderColor_24: string;
                                    export { borderColor_24 as borderColor };
                                    const backgroundColor_25: string;
                                    export { backgroundColor_25 as backgroundColor };
                                }
                                export { active_5 as active };
                                export namespace disabled_5 {
                                    const borderColor_25: string;
                                    export { borderColor_25 as borderColor };
                                    const backgroundColor_26: string;
                                    export { backgroundColor_26 as backgroundColor };
                                    const textColor_11: string;
                                    export { textColor_11 as textColor };
                                    const iconTintColor_11: string;
                                    export { iconTintColor_11 as iconTintColor };
                                }
                                export { disabled_5 as disabled };
                            }
                            export { state_4 as state };
                        }
                        export { warning_1 as warning };
                        export namespace danger_1 {
                            const borderColor_26: string;
                            export { borderColor_26 as borderColor };
                            const backgroundColor_27: string;
                            export { backgroundColor_27 as backgroundColor };
                            const textColor_12: string;
                            export { textColor_12 as textColor };
                            const iconTintColor_12: string;
                            export { iconTintColor_12 as iconTintColor };
                            export namespace state_5 {
                                export namespace focused_7 {
                                    const borderColor_27: string;
                                    export { borderColor_27 as borderColor };
                                    const backgroundColor_28: string;
                                    export { backgroundColor_28 as backgroundColor };
                                }
                                export { focused_7 as focused };
                                export namespace hover_7 {
                                    const borderColor_28: string;
                                    export { borderColor_28 as borderColor };
                                    const backgroundColor_29: string;
                                    export { backgroundColor_29 as backgroundColor };
                                }
                                export { hover_7 as hover };
                                export namespace active_6 {
                                    const borderColor_29: string;
                                    export { borderColor_29 as borderColor };
                                    const backgroundColor_30: string;
                                    export { backgroundColor_30 as backgroundColor };
                                }
                                export { active_6 as active };
                                export namespace disabled_6 {
                                    const borderColor_30: string;
                                    export { borderColor_30 as borderColor };
                                    const backgroundColor_31: string;
                                    export { backgroundColor_31 as backgroundColor };
                                    const textColor_13: string;
                                    export { textColor_13 as textColor };
                                    const iconTintColor_13: string;
                                    export { iconTintColor_13 as iconTintColor };
                                }
                                export { disabled_6 as disabled };
                            }
                            export { state_5 as state };
                        }
                        export { danger_1 as danger };
                        export namespace control_1 {
                            const borderColor_31: string;
                            export { borderColor_31 as borderColor };
                            const backgroundColor_32: string;
                            export { backgroundColor_32 as backgroundColor };
                            const textColor_14: string;
                            export { textColor_14 as textColor };
                            const iconTintColor_14: string;
                            export { iconTintColor_14 as iconTintColor };
                            export namespace state_6 {
                                export namespace focused_8 {
                                    const borderColor_32: string;
                                    export { borderColor_32 as borderColor };
                                    const backgroundColor_33: string;
                                    export { backgroundColor_33 as backgroundColor };
                                }
                                export { focused_8 as focused };
                                export namespace hover_8 {
                                    const borderColor_33: string;
                                    export { borderColor_33 as borderColor };
                                    const backgroundColor_34: string;
                                    export { backgroundColor_34 as backgroundColor };
                                }
                                export { hover_8 as hover };
                                export namespace active_7 {
                                    const borderColor_34: string;
                                    export { borderColor_34 as borderColor };
                                    const backgroundColor_35: string;
                                    export { backgroundColor_35 as backgroundColor };
                                }
                                export { active_7 as active };
                                export namespace disabled_7 {
                                    const borderColor_35: string;
                                    export { borderColor_35 as borderColor };
                                    const backgroundColor_36: string;
                                    export { backgroundColor_36 as backgroundColor };
                                    const textColor_15: string;
                                    export { textColor_15 as textColor };
                                    const iconTintColor_15: string;
                                    export { iconTintColor_15 as iconTintColor };
                                }
                                export { disabled_7 as disabled };
                            }
                            export { state_6 as state };
                        }
                        export { control_1 as control };
                    }
                    export { status_1 as status };
                    export namespace size_2 {
                        export namespace tiny_2 {
                            const minWidth_1: string;
                            export { minWidth_1 as minWidth };
                            const minHeight_2: string;
                            export { minHeight_2 as minHeight };
                            const borderRadius_1: string;
                            export { borderRadius_1 as borderRadius };
                            const borderWidth_1: string;
                            export { borderWidth_1 as borderWidth };
                            const paddingHorizontal_2: number;
                            export { paddingHorizontal_2 as paddingHorizontal };
                            const paddingVertical_3: number;
                            export { paddingVertical_3 as paddingVertical };
                            const textMarginHorizontal_1: number;
                            export { textMarginHorizontal_1 as textMarginHorizontal };
                            const textFontSize_2: number;
                            export { textFontSize_2 as textFontSize };
                            const textFontWeight_2: string;
                            export { textFontWeight_2 as textFontWeight };
                            const iconWidth_2: number;
                            export { iconWidth_2 as iconWidth };
                            const iconHeight_2: number;
                            export { iconHeight_2 as iconHeight };
                            const iconMarginHorizontal_2: number;
                            export { iconMarginHorizontal_2 as iconMarginHorizontal };
                        }
                        export { tiny_2 as tiny };
                        export namespace small_2 {
                            const minWidth_2: string;
                            export { minWidth_2 as minWidth };
                            const minHeight_3: string;
                            export { minHeight_3 as minHeight };
                            const borderRadius_2: string;
                            export { borderRadius_2 as borderRadius };
                            const borderWidth_2: string;
                            export { borderWidth_2 as borderWidth };
                            const paddingHorizontal_3: number;
                            export { paddingHorizontal_3 as paddingHorizontal };
                            const paddingVertical_4: number;
                            export { paddingVertical_4 as paddingVertical };
                            const textMarginHorizontal_2: number;
                            export { textMarginHorizontal_2 as textMarginHorizontal };
                            const textFontSize_3: number;
                            export { textFontSize_3 as textFontSize };
                            const textFontWeight_3: string;
                            export { textFontWeight_3 as textFontWeight };
                            const iconWidth_3: number;
                            export { iconWidth_3 as iconWidth };
                            const iconHeight_3: number;
                            export { iconHeight_3 as iconHeight };
                            const iconMarginHorizontal_3: number;
                            export { iconMarginHorizontal_3 as iconMarginHorizontal };
                        }
                        export { small_2 as small };
                        export namespace medium_2 {
                            const minWidth_3: string;
                            export { minWidth_3 as minWidth };
                            const minHeight_4: string;
                            export { minHeight_4 as minHeight };
                            const borderRadius_3: string;
                            export { borderRadius_3 as borderRadius };
                            const borderWidth_3: string;
                            export { borderWidth_3 as borderWidth };
                            const paddingHorizontal_4: number;
                            export { paddingHorizontal_4 as paddingHorizontal };
                            const paddingVertical_5: number;
                            export { paddingVertical_5 as paddingVertical };
                            const textMarginHorizontal_3: number;
                            export { textMarginHorizontal_3 as textMarginHorizontal };
                            const textFontSize_4: number;
                            export { textFontSize_4 as textFontSize };
                            const textFontWeight_4: string;
                            export { textFontWeight_4 as textFontWeight };
                            const iconWidth_4: number;
                            export { iconWidth_4 as iconWidth };
                            const iconHeight_4: number;
                            export { iconHeight_4 as iconHeight };
                            const iconMarginHorizontal_4: number;
                            export { iconMarginHorizontal_4 as iconMarginHorizontal };
                        }
                        export { medium_2 as medium };
                        export namespace large_2 {
                            const minWidth_4: string;
                            export { minWidth_4 as minWidth };
                            const minHeight_5: string;
                            export { minHeight_5 as minHeight };
                            const borderRadius_4: string;
                            export { borderRadius_4 as borderRadius };
                            const borderWidth_4: string;
                            export { borderWidth_4 as borderWidth };
                            const paddingHorizontal_5: number;
                            export { paddingHorizontal_5 as paddingHorizontal };
                            const paddingVertical_6: number;
                            export { paddingVertical_6 as paddingVertical };
                            const textMarginHorizontal_4: number;
                            export { textMarginHorizontal_4 as textMarginHorizontal };
                            const textFontSize_5: number;
                            export { textFontSize_5 as textFontSize };
                            const textFontWeight_5: string;
                            export { textFontWeight_5 as textFontWeight };
                            const iconWidth_5: number;
                            export { iconWidth_5 as iconWidth };
                            const iconHeight_5: number;
                            export { iconHeight_5 as iconHeight };
                            const iconMarginHorizontal_5: number;
                            export { iconMarginHorizontal_5 as iconMarginHorizontal };
                        }
                        export { large_2 as large };
                        export namespace giant_2 {
                            const minWidth_5: string;
                            export { minWidth_5 as minWidth };
                            const minHeight_6: string;
                            export { minHeight_6 as minHeight };
                            const borderRadius_5: string;
                            export { borderRadius_5 as borderRadius };
                            const borderWidth_5: string;
                            export { borderWidth_5 as borderWidth };
                            const paddingHorizontal_6: number;
                            export { paddingHorizontal_6 as paddingHorizontal };
                            const paddingVertical_7: number;
                            export { paddingVertical_7 as paddingVertical };
                            const textMarginHorizontal_5: number;
                            export { textMarginHorizontal_5 as textMarginHorizontal };
                            const textFontSize_6: number;
                            export { textFontSize_6 as textFontSize };
                            const textFontWeight_6: string;
                            export { textFontWeight_6 as textFontWeight };
                            const iconWidth_6: number;
                            export { iconWidth_6 as iconWidth };
                            const iconHeight_6: number;
                            export { iconHeight_6 as iconHeight };
                            const iconMarginHorizontal_6: number;
                            export { iconMarginHorizontal_6 as iconMarginHorizontal };
                        }
                        export { giant_2 as giant };
                    }
                    export { size_2 as size };
                }
                export { variantGroups_4 as variantGroups };
            }
            export { filled_1 as filled };
            export namespace outline_1 {
                const mapping_1: {};
                export { mapping_1 as mapping };
                export namespace variantGroups_5 {
                    export namespace status_2 {
                        export namespace basic_2 {
                            const borderColor_36: string;
                            export { borderColor_36 as borderColor };
                            const backgroundColor_37: string;
                            export { backgroundColor_37 as backgroundColor };
                            const textColor_16: string;
                            export { textColor_16 as textColor };
                            const iconTintColor_16: string;
                            export { iconTintColor_16 as iconTintColor };
                            export namespace state_7 {
                                export namespace focused_9 {
                                    const borderColor_37: string;
                                    export { borderColor_37 as borderColor };
                                    const backgroundColor_38: string;
                                    export { backgroundColor_38 as backgroundColor };
                                    const textColor_17: string;
                                    export { textColor_17 as textColor };
                                    const iconTintColor_17: string;
                                    export { iconTintColor_17 as iconTintColor };
                                }
                                export { focused_9 as focused };
                                export namespace hover_9 {
                                    const borderColor_38: string;
                                    export { borderColor_38 as borderColor };
                                    const backgroundColor_39: string;
                                    export { backgroundColor_39 as backgroundColor };
                                    const textColor_18: string;
                                    export { textColor_18 as textColor };
                                    const iconTintColor_18: string;
                                    export { iconTintColor_18 as iconTintColor };
                                }
                                export { hover_9 as hover };
                                export namespace active_8 {
                                    const borderColor_39: string;
                                    export { borderColor_39 as borderColor };
                                    const backgroundColor_40: string;
                                    export { backgroundColor_40 as backgroundColor };
                                    const textColor_19: string;
                                    export { textColor_19 as textColor };
                                    const iconTintColor_19: string;
                                    export { iconTintColor_19 as iconTintColor };
                                }
                                export { active_8 as active };
                                export namespace disabled_8 {
                                    const borderColor_40: string;
                                    export { borderColor_40 as borderColor };
                                    const backgroundColor_41: string;
                                    export { backgroundColor_41 as backgroundColor };
                                    const textColor_20: string;
                                    export { textColor_20 as textColor };
                                    const iconTintColor_20: string;
                                    export { iconTintColor_20 as iconTintColor };
                                }
                                export { disabled_8 as disabled };
                            }
                            export { state_7 as state };
                        }
                        export { basic_2 as basic };
                        export namespace primary_2 {
                            const borderColor_41: string;
                            export { borderColor_41 as borderColor };
                            const backgroundColor_42: string;
                            export { backgroundColor_42 as backgroundColor };
                            const textColor_21: string;
                            export { textColor_21 as textColor };
                            const iconTintColor_21: string;
                            export { iconTintColor_21 as iconTintColor };
                            export namespace state_8 {
                                export namespace focused_10 {
                                    const borderColor_42: string;
                                    export { borderColor_42 as borderColor };
                                    const backgroundColor_43: string;
                                    export { backgroundColor_43 as backgroundColor };
                                    const textColor_22: string;
                                    export { textColor_22 as textColor };
                                    const iconTintColor_22: string;
                                    export { iconTintColor_22 as iconTintColor };
                                }
                                export { focused_10 as focused };
                                export namespace hover_10 {
                                    const borderColor_43: string;
                                    export { borderColor_43 as borderColor };
                                    const backgroundColor_44: string;
                                    export { backgroundColor_44 as backgroundColor };
                                    const textColor_23: string;
                                    export { textColor_23 as textColor };
                                    const iconTintColor_23: string;
                                    export { iconTintColor_23 as iconTintColor };
                                }
                                export { hover_10 as hover };
                                export namespace active_9 {
                                    const borderColor_44: string;
                                    export { borderColor_44 as borderColor };
                                    const backgroundColor_45: string;
                                    export { backgroundColor_45 as backgroundColor };
                                    const textColor_24: string;
                                    export { textColor_24 as textColor };
                                    const iconTintColor_24: string;
                                    export { iconTintColor_24 as iconTintColor };
                                }
                                export { active_9 as active };
                                export namespace disabled_9 {
                                    const borderColor_45: string;
                                    export { borderColor_45 as borderColor };
                                    const backgroundColor_46: string;
                                    export { backgroundColor_46 as backgroundColor };
                                    const textColor_25: string;
                                    export { textColor_25 as textColor };
                                    const iconTintColor_25: string;
                                    export { iconTintColor_25 as iconTintColor };
                                }
                                export { disabled_9 as disabled };
                            }
                            export { state_8 as state };
                        }
                        export { primary_2 as primary };
                        export namespace success_2 {
                            const borderColor_46: string;
                            export { borderColor_46 as borderColor };
                            const backgroundColor_47: string;
                            export { backgroundColor_47 as backgroundColor };
                            const textColor_26: string;
                            export { textColor_26 as textColor };
                            const iconTintColor_26: string;
                            export { iconTintColor_26 as iconTintColor };
                            export namespace state_9 {
                                export namespace focused_11 {
                                    const borderColor_47: string;
                                    export { borderColor_47 as borderColor };
                                    const backgroundColor_48: string;
                                    export { backgroundColor_48 as backgroundColor };
                                    const textColor_27: string;
                                    export { textColor_27 as textColor };
                                    const iconTintColor_27: string;
                                    export { iconTintColor_27 as iconTintColor };
                                }
                                export { focused_11 as focused };
                                export namespace hover_11 {
                                    const borderColor_48: string;
                                    export { borderColor_48 as borderColor };
                                    const backgroundColor_49: string;
                                    export { backgroundColor_49 as backgroundColor };
                                    const textColor_28: string;
                                    export { textColor_28 as textColor };
                                    const iconTintColor_28: string;
                                    export { iconTintColor_28 as iconTintColor };
                                }
                                export { hover_11 as hover };
                                export namespace active_10 {
                                    const borderColor_49: string;
                                    export { borderColor_49 as borderColor };
                                    const backgroundColor_50: string;
                                    export { backgroundColor_50 as backgroundColor };
                                    const textColor_29: string;
                                    export { textColor_29 as textColor };
                                    const iconTintColor_29: string;
                                    export { iconTintColor_29 as iconTintColor };
                                }
                                export { active_10 as active };
                                export namespace disabled_10 {
                                    const borderColor_50: string;
                                    export { borderColor_50 as borderColor };
                                    const backgroundColor_51: string;
                                    export { backgroundColor_51 as backgroundColor };
                                    const textColor_30: string;
                                    export { textColor_30 as textColor };
                                    const iconTintColor_30: string;
                                    export { iconTintColor_30 as iconTintColor };
                                }
                                export { disabled_10 as disabled };
                            }
                            export { state_9 as state };
                        }
                        export { success_2 as success };
                        export namespace info_2 {
                            const borderColor_51: string;
                            export { borderColor_51 as borderColor };
                            const backgroundColor_52: string;
                            export { backgroundColor_52 as backgroundColor };
                            const textColor_31: string;
                            export { textColor_31 as textColor };
                            const iconTintColor_31: string;
                            export { iconTintColor_31 as iconTintColor };
                            export namespace state_10 {
                                export namespace focused_12 {
                                    const borderColor_52: string;
                                    export { borderColor_52 as borderColor };
                                    const backgroundColor_53: string;
                                    export { backgroundColor_53 as backgroundColor };
                                    const textColor_32: string;
                                    export { textColor_32 as textColor };
                                    const iconTintColor_32: string;
                                    export { iconTintColor_32 as iconTintColor };
                                }
                                export { focused_12 as focused };
                                export namespace hover_12 {
                                    const borderColor_53: string;
                                    export { borderColor_53 as borderColor };
                                    const backgroundColor_54: string;
                                    export { backgroundColor_54 as backgroundColor };
                                    const textColor_33: string;
                                    export { textColor_33 as textColor };
                                    const iconTintColor_33: string;
                                    export { iconTintColor_33 as iconTintColor };
                                }
                                export { hover_12 as hover };
                                export namespace active_11 {
                                    const borderColor_54: string;
                                    export { borderColor_54 as borderColor };
                                    const backgroundColor_55: string;
                                    export { backgroundColor_55 as backgroundColor };
                                    const textColor_34: string;
                                    export { textColor_34 as textColor };
                                    const iconTintColor_34: string;
                                    export { iconTintColor_34 as iconTintColor };
                                }
                                export { active_11 as active };
                                export namespace disabled_11 {
                                    const borderColor_55: string;
                                    export { borderColor_55 as borderColor };
                                    const backgroundColor_56: string;
                                    export { backgroundColor_56 as backgroundColor };
                                    const textColor_35: string;
                                    export { textColor_35 as textColor };
                                    const iconTintColor_35: string;
                                    export { iconTintColor_35 as iconTintColor };
                                }
                                export { disabled_11 as disabled };
                            }
                            export { state_10 as state };
                        }
                        export { info_2 as info };
                        export namespace warning_2 {
                            const borderColor_56: string;
                            export { borderColor_56 as borderColor };
                            const backgroundColor_57: string;
                            export { backgroundColor_57 as backgroundColor };
                            const textColor_36: string;
                            export { textColor_36 as textColor };
                            const iconTintColor_36: string;
                            export { iconTintColor_36 as iconTintColor };
                            export namespace state_11 {
                                export namespace focused_13 {
                                    const borderColor_57: string;
                                    export { borderColor_57 as borderColor };
                                    const backgroundColor_58: string;
                                    export { backgroundColor_58 as backgroundColor };
                                    const textColor_37: string;
                                    export { textColor_37 as textColor };
                                    const iconTintColor_37: string;
                                    export { iconTintColor_37 as iconTintColor };
                                }
                                export { focused_13 as focused };
                                export namespace hover_13 {
                                    const borderColor_58: string;
                                    export { borderColor_58 as borderColor };
                                    const backgroundColor_59: string;
                                    export { backgroundColor_59 as backgroundColor };
                                    const textColor_38: string;
                                    export { textColor_38 as textColor };
                                    const iconTintColor_38: string;
                                    export { iconTintColor_38 as iconTintColor };
                                }
                                export { hover_13 as hover };
                                export namespace active_12 {
                                    const borderColor_59: string;
                                    export { borderColor_59 as borderColor };
                                    const backgroundColor_60: string;
                                    export { backgroundColor_60 as backgroundColor };
                                    const textColor_39: string;
                                    export { textColor_39 as textColor };
                                    const iconTintColor_39: string;
                                    export { iconTintColor_39 as iconTintColor };
                                }
                                export { active_12 as active };
                                export namespace disabled_12 {
                                    const borderColor_60: string;
                                    export { borderColor_60 as borderColor };
                                    const backgroundColor_61: string;
                                    export { backgroundColor_61 as backgroundColor };
                                    const textColor_40: string;
                                    export { textColor_40 as textColor };
                                    const iconTintColor_40: string;
                                    export { iconTintColor_40 as iconTintColor };
                                }
                                export { disabled_12 as disabled };
                            }
                            export { state_11 as state };
                        }
                        export { warning_2 as warning };
                        export namespace danger_2 {
                            const borderColor_61: string;
                            export { borderColor_61 as borderColor };
                            const backgroundColor_62: string;
                            export { backgroundColor_62 as backgroundColor };
                            const textColor_41: string;
                            export { textColor_41 as textColor };
                            const iconTintColor_41: string;
                            export { iconTintColor_41 as iconTintColor };
                            export namespace state_12 {
                                export namespace focused_14 {
                                    const borderColor_62: string;
                                    export { borderColor_62 as borderColor };
                                    const backgroundColor_63: string;
                                    export { backgroundColor_63 as backgroundColor };
                                    const textColor_42: string;
                                    export { textColor_42 as textColor };
                                    const iconTintColor_42: string;
                                    export { iconTintColor_42 as iconTintColor };
                                }
                                export { focused_14 as focused };
                                export namespace hover_14 {
                                    const borderColor_63: string;
                                    export { borderColor_63 as borderColor };
                                    const backgroundColor_64: string;
                                    export { backgroundColor_64 as backgroundColor };
                                    const textColor_43: string;
                                    export { textColor_43 as textColor };
                                    const iconTintColor_43: string;
                                    export { iconTintColor_43 as iconTintColor };
                                }
                                export { hover_14 as hover };
                                export namespace active_13 {
                                    const borderColor_64: string;
                                    export { borderColor_64 as borderColor };
                                    const backgroundColor_65: string;
                                    export { backgroundColor_65 as backgroundColor };
                                    const textColor_44: string;
                                    export { textColor_44 as textColor };
                                    const iconTintColor_44: string;
                                    export { iconTintColor_44 as iconTintColor };
                                }
                                export { active_13 as active };
                                export namespace disabled_13 {
                                    const borderColor_65: string;
                                    export { borderColor_65 as borderColor };
                                    const backgroundColor_66: string;
                                    export { backgroundColor_66 as backgroundColor };
                                    const textColor_45: string;
                                    export { textColor_45 as textColor };
                                    const iconTintColor_45: string;
                                    export { iconTintColor_45 as iconTintColor };
                                }
                                export { disabled_13 as disabled };
                            }
                            export { state_12 as state };
                        }
                        export { danger_2 as danger };
                        export namespace control_2 {
                            const borderColor_66: string;
                            export { borderColor_66 as borderColor };
                            const backgroundColor_67: string;
                            export { backgroundColor_67 as backgroundColor };
                            const textColor_46: string;
                            export { textColor_46 as textColor };
                            const iconTintColor_46: string;
                            export { iconTintColor_46 as iconTintColor };
                            export namespace state_13 {
                                export namespace focused_15 {
                                    const borderColor_67: string;
                                    export { borderColor_67 as borderColor };
                                    const backgroundColor_68: string;
                                    export { backgroundColor_68 as backgroundColor };
                                    const textColor_47: string;
                                    export { textColor_47 as textColor };
                                    const iconTintColor_47: string;
                                    export { iconTintColor_47 as iconTintColor };
                                }
                                export { focused_15 as focused };
                                export namespace hover_15 {
                                    const borderColor_68: string;
                                    export { borderColor_68 as borderColor };
                                    const backgroundColor_69: string;
                                    export { backgroundColor_69 as backgroundColor };
                                    const textColor_48: string;
                                    export { textColor_48 as textColor };
                                    const iconTintColor_48: string;
                                    export { iconTintColor_48 as iconTintColor };
                                }
                                export { hover_15 as hover };
                                export namespace active_14 {
                                    const borderColor_69: string;
                                    export { borderColor_69 as borderColor };
                                    const backgroundColor_70: string;
                                    export { backgroundColor_70 as backgroundColor };
                                    const textColor_49: string;
                                    export { textColor_49 as textColor };
                                    const iconTintColor_49: string;
                                    export { iconTintColor_49 as iconTintColor };
                                }
                                export { active_14 as active };
                                export namespace disabled_14 {
                                    const borderColor_70: string;
                                    export { borderColor_70 as borderColor };
                                    const backgroundColor_71: string;
                                    export { backgroundColor_71 as backgroundColor };
                                    const textColor_50: string;
                                    export { textColor_50 as textColor };
                                    const iconTintColor_50: string;
                                    export { iconTintColor_50 as iconTintColor };
                                }
                                export { disabled_14 as disabled };
                            }
                            export { state_13 as state };
                        }
                        export { control_2 as control };
                    }
                    export { status_2 as status };
                }
                export { variantGroups_5 as variantGroups };
            }
            export { outline_1 as outline };
            export namespace ghost_1 {
                const mapping_2: {};
                export { mapping_2 as mapping };
                export namespace variantGroups_6 {
                    export namespace status_3 {
                        export namespace basic_3 {
                            const borderColor_71: string;
                            export { borderColor_71 as borderColor };
                            const backgroundColor_72: string;
                            export { backgroundColor_72 as backgroundColor };
                            const textColor_51: string;
                            export { textColor_51 as textColor };
                            const iconTintColor_51: string;
                            export { iconTintColor_51 as iconTintColor };
                            export namespace state_14 {
                                export namespace focused_16 {
                                    const borderColor_72: string;
                                    export { borderColor_72 as borderColor };
                                    const backgroundColor_73: string;
                                    export { backgroundColor_73 as backgroundColor };
                                    const textColor_52: string;
                                    export { textColor_52 as textColor };
                                    const iconTintColor_52: string;
                                    export { iconTintColor_52 as iconTintColor };
                                }
                                export { focused_16 as focused };
                                export namespace hover_16 {
                                    const borderColor_73: string;
                                    export { borderColor_73 as borderColor };
                                    const backgroundColor_74: string;
                                    export { backgroundColor_74 as backgroundColor };
                                    const textColor_53: string;
                                    export { textColor_53 as textColor };
                                    const iconTintColor_53: string;
                                    export { iconTintColor_53 as iconTintColor };
                                }
                                export { hover_16 as hover };
                                export namespace active_15 {
                                    const borderColor_74: string;
                                    export { borderColor_74 as borderColor };
                                    const backgroundColor_75: string;
                                    export { backgroundColor_75 as backgroundColor };
                                    const textColor_54: string;
                                    export { textColor_54 as textColor };
                                    const iconTintColor_54: string;
                                    export { iconTintColor_54 as iconTintColor };
                                }
                                export { active_15 as active };
                                export namespace disabled_15 {
                                    const borderColor_75: string;
                                    export { borderColor_75 as borderColor };
                                    const backgroundColor_76: string;
                                    export { backgroundColor_76 as backgroundColor };
                                    const textColor_55: string;
                                    export { textColor_55 as textColor };
                                    const iconTintColor_55: string;
                                    export { iconTintColor_55 as iconTintColor };
                                }
                                export { disabled_15 as disabled };
                            }
                            export { state_14 as state };
                        }
                        export { basic_3 as basic };
                        export namespace primary_3 {
                            const borderColor_76: string;
                            export { borderColor_76 as borderColor };
                            const backgroundColor_77: string;
                            export { backgroundColor_77 as backgroundColor };
                            const textColor_56: string;
                            export { textColor_56 as textColor };
                            const iconTintColor_56: string;
                            export { iconTintColor_56 as iconTintColor };
                            export namespace state_15 {
                                export namespace focused_17 {
                                    const borderColor_77: string;
                                    export { borderColor_77 as borderColor };
                                    const backgroundColor_78: string;
                                    export { backgroundColor_78 as backgroundColor };
                                    const textColor_57: string;
                                    export { textColor_57 as textColor };
                                    const iconTintColor_57: string;
                                    export { iconTintColor_57 as iconTintColor };
                                }
                                export { focused_17 as focused };
                                export namespace hover_17 {
                                    const borderColor_78: string;
                                    export { borderColor_78 as borderColor };
                                    const backgroundColor_79: string;
                                    export { backgroundColor_79 as backgroundColor };
                                    const textColor_58: string;
                                    export { textColor_58 as textColor };
                                    const iconTintColor_58: string;
                                    export { iconTintColor_58 as iconTintColor };
                                }
                                export { hover_17 as hover };
                                export namespace active_16 {
                                    const borderColor_79: string;
                                    export { borderColor_79 as borderColor };
                                    const backgroundColor_80: string;
                                    export { backgroundColor_80 as backgroundColor };
                                    const textColor_59: string;
                                    export { textColor_59 as textColor };
                                    const iconTintColor_59: string;
                                    export { iconTintColor_59 as iconTintColor };
                                }
                                export { active_16 as active };
                                export namespace disabled_16 {
                                    const borderColor_80: string;
                                    export { borderColor_80 as borderColor };
                                    const backgroundColor_81: string;
                                    export { backgroundColor_81 as backgroundColor };
                                    const textColor_60: string;
                                    export { textColor_60 as textColor };
                                    const iconTintColor_60: string;
                                    export { iconTintColor_60 as iconTintColor };
                                }
                                export { disabled_16 as disabled };
                            }
                            export { state_15 as state };
                        }
                        export { primary_3 as primary };
                        export namespace success_3 {
                            const borderColor_81: string;
                            export { borderColor_81 as borderColor };
                            const backgroundColor_82: string;
                            export { backgroundColor_82 as backgroundColor };
                            const textColor_61: string;
                            export { textColor_61 as textColor };
                            const iconTintColor_61: string;
                            export { iconTintColor_61 as iconTintColor };
                            export namespace state_16 {
                                export namespace focused_18 {
                                    const borderColor_82: string;
                                    export { borderColor_82 as borderColor };
                                    const backgroundColor_83: string;
                                    export { backgroundColor_83 as backgroundColor };
                                    const textColor_62: string;
                                    export { textColor_62 as textColor };
                                    const iconTintColor_62: string;
                                    export { iconTintColor_62 as iconTintColor };
                                }
                                export { focused_18 as focused };
                                export namespace hover_18 {
                                    const borderColor_83: string;
                                    export { borderColor_83 as borderColor };
                                    const backgroundColor_84: string;
                                    export { backgroundColor_84 as backgroundColor };
                                    const textColor_63: string;
                                    export { textColor_63 as textColor };
                                    const iconTintColor_63: string;
                                    export { iconTintColor_63 as iconTintColor };
                                }
                                export { hover_18 as hover };
                                export namespace active_17 {
                                    const borderColor_84: string;
                                    export { borderColor_84 as borderColor };
                                    const backgroundColor_85: string;
                                    export { backgroundColor_85 as backgroundColor };
                                    const textColor_64: string;
                                    export { textColor_64 as textColor };
                                    const iconTintColor_64: string;
                                    export { iconTintColor_64 as iconTintColor };
                                }
                                export { active_17 as active };
                                export namespace disabled_17 {
                                    const borderColor_85: string;
                                    export { borderColor_85 as borderColor };
                                    const backgroundColor_86: string;
                                    export { backgroundColor_86 as backgroundColor };
                                    const textColor_65: string;
                                    export { textColor_65 as textColor };
                                    const iconTintColor_65: string;
                                    export { iconTintColor_65 as iconTintColor };
                                }
                                export { disabled_17 as disabled };
                            }
                            export { state_16 as state };
                        }
                        export { success_3 as success };
                        export namespace info_3 {
                            const borderColor_86: string;
                            export { borderColor_86 as borderColor };
                            const backgroundColor_87: string;
                            export { backgroundColor_87 as backgroundColor };
                            const textColor_66: string;
                            export { textColor_66 as textColor };
                            const iconTintColor_66: string;
                            export { iconTintColor_66 as iconTintColor };
                            export namespace state_17 {
                                export namespace focused_19 {
                                    const borderColor_87: string;
                                    export { borderColor_87 as borderColor };
                                    const backgroundColor_88: string;
                                    export { backgroundColor_88 as backgroundColor };
                                    const textColor_67: string;
                                    export { textColor_67 as textColor };
                                    const iconTintColor_67: string;
                                    export { iconTintColor_67 as iconTintColor };
                                }
                                export { focused_19 as focused };
                                export namespace hover_19 {
                                    const borderColor_88: string;
                                    export { borderColor_88 as borderColor };
                                    const backgroundColor_89: string;
                                    export { backgroundColor_89 as backgroundColor };
                                    const textColor_68: string;
                                    export { textColor_68 as textColor };
                                    const iconTintColor_68: string;
                                    export { iconTintColor_68 as iconTintColor };
                                }
                                export { hover_19 as hover };
                                export namespace active_18 {
                                    const borderColor_89: string;
                                    export { borderColor_89 as borderColor };
                                    const backgroundColor_90: string;
                                    export { backgroundColor_90 as backgroundColor };
                                    const textColor_69: string;
                                    export { textColor_69 as textColor };
                                    const iconTintColor_69: string;
                                    export { iconTintColor_69 as iconTintColor };
                                }
                                export { active_18 as active };
                                export namespace disabled_18 {
                                    const borderColor_90: string;
                                    export { borderColor_90 as borderColor };
                                    const backgroundColor_91: string;
                                    export { backgroundColor_91 as backgroundColor };
                                    const textColor_70: string;
                                    export { textColor_70 as textColor };
                                    const iconTintColor_70: string;
                                    export { iconTintColor_70 as iconTintColor };
                                }
                                export { disabled_18 as disabled };
                            }
                            export { state_17 as state };
                        }
                        export { info_3 as info };
                        export namespace warning_3 {
                            const borderColor_91: string;
                            export { borderColor_91 as borderColor };
                            const backgroundColor_92: string;
                            export { backgroundColor_92 as backgroundColor };
                            const textColor_71: string;
                            export { textColor_71 as textColor };
                            const iconTintColor_71: string;
                            export { iconTintColor_71 as iconTintColor };
                            export namespace state_18 {
                                export namespace focused_20 {
                                    const borderColor_92: string;
                                    export { borderColor_92 as borderColor };
                                    const backgroundColor_93: string;
                                    export { backgroundColor_93 as backgroundColor };
                                    const textColor_72: string;
                                    export { textColor_72 as textColor };
                                    const iconTintColor_72: string;
                                    export { iconTintColor_72 as iconTintColor };
                                }
                                export { focused_20 as focused };
                                export namespace hover_20 {
                                    const borderColor_93: string;
                                    export { borderColor_93 as borderColor };
                                    const backgroundColor_94: string;
                                    export { backgroundColor_94 as backgroundColor };
                                    const textColor_73: string;
                                    export { textColor_73 as textColor };
                                    const iconTintColor_73: string;
                                    export { iconTintColor_73 as iconTintColor };
                                }
                                export { hover_20 as hover };
                                export namespace active_19 {
                                    const borderColor_94: string;
                                    export { borderColor_94 as borderColor };
                                    const backgroundColor_95: string;
                                    export { backgroundColor_95 as backgroundColor };
                                    const textColor_74: string;
                                    export { textColor_74 as textColor };
                                    const iconTintColor_74: string;
                                    export { iconTintColor_74 as iconTintColor };
                                }
                                export { active_19 as active };
                                export namespace disabled_19 {
                                    const borderColor_95: string;
                                    export { borderColor_95 as borderColor };
                                    const backgroundColor_96: string;
                                    export { backgroundColor_96 as backgroundColor };
                                    const textColor_75: string;
                                    export { textColor_75 as textColor };
                                    const iconTintColor_75: string;
                                    export { iconTintColor_75 as iconTintColor };
                                }
                                export { disabled_19 as disabled };
                            }
                            export { state_18 as state };
                        }
                        export { warning_3 as warning };
                        export namespace danger_3 {
                            const borderColor_96: string;
                            export { borderColor_96 as borderColor };
                            const backgroundColor_97: string;
                            export { backgroundColor_97 as backgroundColor };
                            const textColor_76: string;
                            export { textColor_76 as textColor };
                            const iconTintColor_76: string;
                            export { iconTintColor_76 as iconTintColor };
                            export namespace state_19 {
                                export namespace focused_21 {
                                    const borderColor_97: string;
                                    export { borderColor_97 as borderColor };
                                    const backgroundColor_98: string;
                                    export { backgroundColor_98 as backgroundColor };
                                    const textColor_77: string;
                                    export { textColor_77 as textColor };
                                    const iconTintColor_77: string;
                                    export { iconTintColor_77 as iconTintColor };
                                }
                                export { focused_21 as focused };
                                export namespace hover_21 {
                                    const borderColor_98: string;
                                    export { borderColor_98 as borderColor };
                                    const backgroundColor_99: string;
                                    export { backgroundColor_99 as backgroundColor };
                                    const textColor_78: string;
                                    export { textColor_78 as textColor };
                                    const iconTintColor_78: string;
                                    export { iconTintColor_78 as iconTintColor };
                                }
                                export { hover_21 as hover };
                                export namespace active_20 {
                                    const borderColor_99: string;
                                    export { borderColor_99 as borderColor };
                                    const backgroundColor_100: string;
                                    export { backgroundColor_100 as backgroundColor };
                                    const textColor_79: string;
                                    export { textColor_79 as textColor };
                                    const iconTintColor_79: string;
                                    export { iconTintColor_79 as iconTintColor };
                                }
                                export { active_20 as active };
                                export namespace disabled_20 {
                                    const borderColor_100: string;
                                    export { borderColor_100 as borderColor };
                                    const backgroundColor_101: string;
                                    export { backgroundColor_101 as backgroundColor };
                                    const textColor_80: string;
                                    export { textColor_80 as textColor };
                                    const iconTintColor_80: string;
                                    export { iconTintColor_80 as iconTintColor };
                                }
                                export { disabled_20 as disabled };
                            }
                            export { state_19 as state };
                        }
                        export { danger_3 as danger };
                        export namespace control_3 {
                            const borderColor_101: string;
                            export { borderColor_101 as borderColor };
                            const backgroundColor_102: string;
                            export { backgroundColor_102 as backgroundColor };
                            const textColor_81: string;
                            export { textColor_81 as textColor };
                            const iconTintColor_81: string;
                            export { iconTintColor_81 as iconTintColor };
                            export namespace state_20 {
                                export namespace focused_22 {
                                    const borderColor_102: string;
                                    export { borderColor_102 as borderColor };
                                    const backgroundColor_103: string;
                                    export { backgroundColor_103 as backgroundColor };
                                    const textColor_82: string;
                                    export { textColor_82 as textColor };
                                    const iconTintColor_82: string;
                                    export { iconTintColor_82 as iconTintColor };
                                }
                                export { focused_22 as focused };
                                export namespace hover_22 {
                                    const borderColor_103: string;
                                    export { borderColor_103 as borderColor };
                                    const backgroundColor_104: string;
                                    export { backgroundColor_104 as backgroundColor };
                                    const textColor_83: string;
                                    export { textColor_83 as textColor };
                                    const iconTintColor_83: string;
                                    export { iconTintColor_83 as iconTintColor };
                                }
                                export { hover_22 as hover };
                                export namespace active_21 {
                                    const borderColor_104: string;
                                    export { borderColor_104 as borderColor };
                                    const backgroundColor_105: string;
                                    export { backgroundColor_105 as backgroundColor };
                                    const textColor_84: string;
                                    export { textColor_84 as textColor };
                                    const iconTintColor_84: string;
                                    export { iconTintColor_84 as iconTintColor };
                                }
                                export { active_21 as active };
                                export namespace disabled_21 {
                                    const borderColor_105: string;
                                    export { borderColor_105 as borderColor };
                                    const backgroundColor_106: string;
                                    export { backgroundColor_106 as backgroundColor };
                                    const textColor_85: string;
                                    export { textColor_85 as textColor };
                                    const iconTintColor_85: string;
                                    export { iconTintColor_85 as iconTintColor };
                                }
                                export { disabled_21 as disabled };
                            }
                            export { state_20 as state };
                        }
                        export { control_3 as control };
                    }
                    export { status_3 as status };
                }
                export { variantGroups_6 as variantGroups };
            }
            export { ghost_1 as ghost };
        }
        export { appearances_7 as appearances };
    }
    export namespace ButtonGroup {
        export namespace meta_4 {
            const scope_4: string;
            export { scope_4 as scope };
            export namespace parameters_4 {
                const borderRadius_6: {
                    "type": string;
                };
                export { borderRadius_6 as borderRadius };
                const borderWidth_6: {
                    "type": string;
                };
                export { borderWidth_6 as borderWidth };
                const borderColor_106: {
                    "type": string;
                };
                export { borderColor_106 as borderColor };
                export const dividerBackgroundColor: {
                    "type": string;
                };
                export const dividerWidth: {
                    "type": string;
                };
            }
            export { parameters_4 as parameters };
            export namespace appearances_8 {
                const filled_2: {
                    "default": boolean;
                };
                export { filled_2 as filled };
                const outline_2: {
                    "default": boolean;
                };
                export { outline_2 as outline };
            }
            export { appearances_8 as appearances };
            export namespace variantGroups_7 {
                export namespace status_4 {
                    const basic_4: {
                        "default": boolean;
                    };
                    export { basic_4 as basic };
                    const primary_4: {
                        "default": boolean;
                    };
                    export { primary_4 as primary };
                    const success_4: {
                        "default": boolean;
                    };
                    export { success_4 as success };
                    const info_4: {
                        "default": boolean;
                    };
                    export { info_4 as info };
                    const warning_4: {
                        "default": boolean;
                    };
                    export { warning_4 as warning };
                    const danger_4: {
                        "default": boolean;
                    };
                    export { danger_4 as danger };
                    const control_4: {
                        "default": boolean;
                    };
                    export { control_4 as control };
                }
                export { status_4 as status };
                export namespace size_3 {
                    const tiny_3: {
                        "default": boolean;
                    };
                    export { tiny_3 as tiny };
                    const small_3: {
                        "default": boolean;
                    };
                    export { small_3 as small };
                    const medium_3: {
                        "default": boolean;
                    };
                    export { medium_3 as medium };
                    const large_3: {
                        "default": boolean;
                    };
                    export { large_3 as large };
                    const giant_3: {
                        "default": boolean;
                    };
                    export { giant_3 as giant };
                }
                export { size_3 as size };
            }
            export { variantGroups_7 as variantGroups };
            const states_4: {};
            export { states_4 as states };
        }
        export { meta_4 as meta };
        export namespace appearances_9 {
            export namespace filled_3 {
                export namespace mapping_3 {
                    const borderColor_107: string;
                    export { borderColor_107 as borderColor };
                    const dividerWidth_1: number;
                    export { dividerWidth_1 as dividerWidth };
                }
                export { mapping_3 as mapping };
                export namespace variantGroups_8 {
                    export namespace size_4 {
                        export namespace tiny_4 {
                            const borderRadius_7: string;
                            export { borderRadius_7 as borderRadius };
                            const borderWidth_7: string;
                            export { borderWidth_7 as borderWidth };
                        }
                        export { tiny_4 as tiny };
                        export namespace small_4 {
                            const borderRadius_8: string;
                            export { borderRadius_8 as borderRadius };
                            const borderWidth_8: string;
                            export { borderWidth_8 as borderWidth };
                        }
                        export { small_4 as small };
                        export namespace medium_4 {
                            const borderRadius_9: string;
                            export { borderRadius_9 as borderRadius };
                            const borderWidth_9: string;
                            export { borderWidth_9 as borderWidth };
                        }
                        export { medium_4 as medium };
                        export namespace large_4 {
                            const borderRadius_10: string;
                            export { borderRadius_10 as borderRadius };
                            const borderWidth_10: string;
                            export { borderWidth_10 as borderWidth };
                        }
                        export { large_4 as large };
                        export namespace giant_4 {
                            const borderRadius_11: string;
                            export { borderRadius_11 as borderRadius };
                            const borderWidth_11: string;
                            export { borderWidth_11 as borderWidth };
                        }
                        export { giant_4 as giant };
                    }
                    export { size_4 as size };
                    export namespace status_5 {
                        export namespace basic_5 {
                            const dividerBackgroundColor_1: string;
                            export { dividerBackgroundColor_1 as dividerBackgroundColor };
                        }
                        export { basic_5 as basic };
                        export namespace primary_5 {
                            const dividerBackgroundColor_2: string;
                            export { dividerBackgroundColor_2 as dividerBackgroundColor };
                        }
                        export { primary_5 as primary };
                        export namespace success_5 {
                            const dividerBackgroundColor_3: string;
                            export { dividerBackgroundColor_3 as dividerBackgroundColor };
                        }
                        export { success_5 as success };
                        export namespace info_5 {
                            const dividerBackgroundColor_4: string;
                            export { dividerBackgroundColor_4 as dividerBackgroundColor };
                        }
                        export { info_5 as info };
                        export namespace warning_5 {
                            const dividerBackgroundColor_5: string;
                            export { dividerBackgroundColor_5 as dividerBackgroundColor };
                        }
                        export { warning_5 as warning };
                        export namespace danger_5 {
                            const dividerBackgroundColor_6: string;
                            export { dividerBackgroundColor_6 as dividerBackgroundColor };
                        }
                        export { danger_5 as danger };
                        export namespace control_5 {
                            const dividerBackgroundColor_7: string;
                            export { dividerBackgroundColor_7 as dividerBackgroundColor };
                        }
                        export { control_5 as control };
                    }
                    export { status_5 as status };
                }
                export { variantGroups_8 as variantGroups };
            }
            export { filled_3 as filled };
            export namespace outline_3 {
                const mapping_4: {};
                export { mapping_4 as mapping };
                export namespace variantGroups_9 {
                    export namespace status_6 {
                        export namespace basic_6 {
                            const borderColor_108: string;
                            export { borderColor_108 as borderColor };
                            const dividerBackgroundColor_8: string;
                            export { dividerBackgroundColor_8 as dividerBackgroundColor };
                        }
                        export { basic_6 as basic };
                        export namespace primary_6 {
                            const borderColor_109: string;
                            export { borderColor_109 as borderColor };
                            const dividerBackgroundColor_9: string;
                            export { dividerBackgroundColor_9 as dividerBackgroundColor };
                        }
                        export { primary_6 as primary };
                        export namespace success_6 {
                            const borderColor_110: string;
                            export { borderColor_110 as borderColor };
                            const dividerBackgroundColor_10: string;
                            export { dividerBackgroundColor_10 as dividerBackgroundColor };
                        }
                        export { success_6 as success };
                        export namespace info_6 {
                            const borderColor_111: string;
                            export { borderColor_111 as borderColor };
                            const dividerBackgroundColor_11: string;
                            export { dividerBackgroundColor_11 as dividerBackgroundColor };
                        }
                        export { info_6 as info };
                        export namespace warning_6 {
                            const borderColor_112: string;
                            export { borderColor_112 as borderColor };
                            const dividerBackgroundColor_12: string;
                            export { dividerBackgroundColor_12 as dividerBackgroundColor };
                        }
                        export { warning_6 as warning };
                        export namespace danger_6 {
                            const borderColor_113: string;
                            export { borderColor_113 as borderColor };
                            const dividerBackgroundColor_13: string;
                            export { dividerBackgroundColor_13 as dividerBackgroundColor };
                        }
                        export { danger_6 as danger };
                        export namespace control_6 {
                            const borderColor_114: string;
                            export { borderColor_114 as borderColor };
                            const dividerBackgroundColor_14: string;
                            export { dividerBackgroundColor_14 as dividerBackgroundColor };
                        }
                        export { control_6 as control };
                    }
                    export { status_6 as status };
                }
                export { variantGroups_9 as variantGroups };
            }
            export { outline_3 as outline };
        }
        export { appearances_9 as appearances };
    }
    export namespace Card {
        export namespace meta_5 {
            const scope_5: string;
            export { scope_5 as scope };
            export namespace parameters_5 {
                const backgroundColor_107: {
                    "type": string;
                };
                export { backgroundColor_107 as backgroundColor };
                const borderRadius_12: {
                    "type": string;
                };
                export { borderRadius_12 as borderRadius };
                const borderColor_115: {
                    "type": string;
                };
                export { borderColor_115 as borderColor };
                const borderWidth_12: {
                    "type": string;
                };
                export { borderWidth_12 as borderWidth };
                export const bodyPaddingHorizontal: {
                    "type": string;
                };
                export const bodyPaddingVertical: {
                    "type": string;
                };
                export const headerPaddingHorizontal: {
                    "type": string;
                };
                export const headerPaddingVertical: {
                    "type": string;
                };
                export const footerPaddingHorizontal: {
                    "type": string;
                };
                export const footerPaddingVertical: {
                    "type": string;
                };
                export const accentBackgroundColor: {
                    "type": string;
                };
                export const accentHeight: {
                    "type": string;
                };
            }
            export { parameters_5 as parameters };
            export namespace appearances_10 {
                const filled_4: {
                    "default": boolean;
                };
                export { filled_4 as filled };
                const outline_4: {
                    "default": boolean;
                };
                export { outline_4 as outline };
            }
            export { appearances_10 as appearances };
            export namespace variantGroups_10 {
                export namespace status_7 {
                    const basic_7: {
                        "default": boolean;
                    };
                    export { basic_7 as basic };
                    const primary_7: {
                        "default": boolean;
                    };
                    export { primary_7 as primary };
                    const success_7: {
                        "default": boolean;
                    };
                    export { success_7 as success };
                    const info_7: {
                        "default": boolean;
                    };
                    export { info_7 as info };
                    const warning_7: {
                        "default": boolean;
                    };
                    export { warning_7 as warning };
                    const danger_7: {
                        "default": boolean;
                    };
                    export { danger_7 as danger };
                    const control_7: {
                        "default": boolean;
                    };
                    export { control_7 as control };
                }
                export { status_7 as status };
            }
            export { variantGroups_10 as variantGroups };
            export namespace states_5 {
                const active_22: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { active_22 as active };
            }
            export { states_5 as states };
        }
        export { meta_5 as meta };
        export namespace appearances_11 {
            export namespace outline_5 {
                export namespace mapping_5 {
                    const backgroundColor_108: string;
                    export { backgroundColor_108 as backgroundColor };
                    const borderRadius_13: string;
                    export { borderRadius_13 as borderRadius };
                    const borderColor_116: string;
                    export { borderColor_116 as borderColor };
                    const borderWidth_13: number;
                    export { borderWidth_13 as borderWidth };
                    const accentHeight_1: number;
                    export { accentHeight_1 as accentHeight };
                    const bodyPaddingHorizontal_1: number;
                    export { bodyPaddingHorizontal_1 as bodyPaddingHorizontal };
                    const bodyPaddingVertical_1: number;
                    export { bodyPaddingVertical_1 as bodyPaddingVertical };
                    const headerPaddingHorizontal_1: number;
                    export { headerPaddingHorizontal_1 as headerPaddingHorizontal };
                    const headerPaddingVertical_1: number;
                    export { headerPaddingVertical_1 as headerPaddingVertical };
                    const footerPaddingHorizontal_1: number;
                    export { footerPaddingHorizontal_1 as footerPaddingHorizontal };
                    const footerPaddingVertical_1: number;
                    export { footerPaddingVertical_1 as footerPaddingVertical };
                    export namespace state_21 {
                        export namespace active_23 {
                            const backgroundColor_109: string;
                            export { backgroundColor_109 as backgroundColor };
                        }
                        export { active_23 as active };
                    }
                    export { state_21 as state };
                }
                export { mapping_5 as mapping };
                export namespace variantGroups_11 {
                    export namespace status_8 {
                        export namespace basic_8 {
                            const accentHeight_2: number;
                            export { accentHeight_2 as accentHeight };
                            const accentBackgroundColor_1: string;
                            export { accentBackgroundColor_1 as accentBackgroundColor };
                        }
                        export { basic_8 as basic };
                        export namespace primary_8 {
                            const accentHeight_3: number;
                            export { accentHeight_3 as accentHeight };
                            const accentBackgroundColor_2: string;
                            export { accentBackgroundColor_2 as accentBackgroundColor };
                        }
                        export { primary_8 as primary };
                        export namespace success_8 {
                            const accentHeight_4: number;
                            export { accentHeight_4 as accentHeight };
                            const accentBackgroundColor_3: string;
                            export { accentBackgroundColor_3 as accentBackgroundColor };
                        }
                        export { success_8 as success };
                        export namespace info_8 {
                            const accentHeight_5: number;
                            export { accentHeight_5 as accentHeight };
                            const accentBackgroundColor_4: string;
                            export { accentBackgroundColor_4 as accentBackgroundColor };
                        }
                        export { info_8 as info };
                        export namespace warning_8 {
                            const accentHeight_6: number;
                            export { accentHeight_6 as accentHeight };
                            const accentBackgroundColor_5: string;
                            export { accentBackgroundColor_5 as accentBackgroundColor };
                        }
                        export { warning_8 as warning };
                        export namespace danger_8 {
                            const accentHeight_7: number;
                            export { accentHeight_7 as accentHeight };
                            const accentBackgroundColor_6: string;
                            export { accentBackgroundColor_6 as accentBackgroundColor };
                        }
                        export { danger_8 as danger };
                        export namespace control_8 {
                            const accentHeight_8: number;
                            export { accentHeight_8 as accentHeight };
                            const accentBackgroundColor_7: string;
                            export { accentBackgroundColor_7 as accentBackgroundColor };
                        }
                        export { control_8 as control };
                    }
                    export { status_8 as status };
                }
                export { variantGroups_11 as variantGroups };
            }
            export { outline_5 as outline };
            export namespace filled_5 {
                export namespace mapping_6 {
                    const borderWidth_14: number;
                    export { borderWidth_14 as borderWidth };
                    const borderColor_117: string;
                    export { borderColor_117 as borderColor };
                }
                export { mapping_6 as mapping };
            }
            export { filled_5 as filled };
        }
        export { appearances_11 as appearances };
    }
    export namespace Calendar {
        export namespace meta_6 {
            const scope_6: string;
            export { scope_6 as scope };
            export namespace parameters_6 {
                const width_1: {
                    "type": string;
                };
                export { width_1 as width };
                const paddingVertical_8: {
                    "type": string;
                };
                export { paddingVertical_8 as paddingVertical };
                const borderColor_118: {
                    "type": string;
                };
                export { borderColor_118 as borderColor };
                const borderWidth_15: {
                    "type": string;
                };
                export { borderWidth_15 as borderWidth };
                const borderRadius_14: {
                    "type": string;
                };
                export { borderRadius_14 as borderRadius };
                const headerPaddingHorizontal_2: {
                    "type": string;
                };
                export { headerPaddingHorizontal_2 as headerPaddingHorizontal };
                const headerPaddingVertical_2: {
                    "type": string;
                };
                export { headerPaddingVertical_2 as headerPaddingVertical };
                export const dividerMarginVertical: {
                    "type": string;
                };
                export const titleFontSize: {
                    "type": string;
                };
                export const titleFontWeight: {
                    "type": string;
                };
                export const titleColor: {
                    "type": string;
                };
                export const titleFontFamily: {
                    "type": string;
                };
                const iconWidth_7: {
                    "type": string;
                };
                export { iconWidth_7 as iconWidth };
                const iconHeight_7: {
                    "type": string;
                };
                export { iconHeight_7 as iconHeight };
                const iconTintColor_86: {
                    "type": string;
                };
                export { iconTintColor_86 as iconTintColor };
                export const weekdayTextFontSize: {
                    "type": string;
                };
                export const weekdayTextFontWeight: {
                    "type": string;
                };
                export const weekdayTextColor: {
                    "type": string;
                };
                export const weekdayTextFontFamily: {
                    "type": string;
                };
                export const rowMinHeight: {
                    "type": string;
                };
                export const rowMarginHorizontal: {
                    "type": string;
                };
            }
            export { parameters_6 as parameters };
            const appearances_12: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_12 as appearances };
            const variantGroups_12: {};
            export { variantGroups_12 as variantGroups };
            const states_6: {};
            export { states_6 as states };
        }
        export { meta_6 as meta };
        const appearances_13: {
            "default": {
                "mapping": {
                    "width": number;
                    "borderRadius": string;
                    "borderWidth": string;
                    "borderColor": string;
                    "paddingVertical": number;
                    "headerPaddingHorizontal": number;
                    "headerPaddingVertical": number;
                    "titleFontSize": string;
                    "titleFontWeight": string;
                    "titleFontFamily": string;
                    "titleColor": string;
                    "iconWidth": number;
                    "iconHeight": number;
                    "iconTintColor": string;
                    "weekdayTextFontSize": string;
                    "weekdayTextFontWeight": string;
                    "weekdayTextFontFamily": string;
                    "weekdayTextColor": string;
                    "dividerMarginVertical": number;
                    "rowMinHeight": number;
                    "rowMarginHorizontal": number;
                };
            };
        };
        export { appearances_13 as appearances };
    }
    export namespace CalendarCell {
        export namespace meta_7 {
            const scope_7: string;
            export { scope_7 as scope };
            export namespace parameters_7 {
                const paddingHorizontal_7: {
                    "type": string;
                };
                export { paddingHorizontal_7 as paddingHorizontal };
                const paddingVertical_9: {
                    "type": string;
                };
                export { paddingVertical_9 as paddingVertical };
                const backgroundColor_110: {
                    "type": string;
                };
                export { backgroundColor_110 as backgroundColor };
                const borderRadius_15: {
                    "type": string;
                };
                export { borderRadius_15 as borderRadius };
                export const contentBorderWidth: {
                    "type": string;
                };
                export const contentBorderRadius: {
                    "type": string;
                };
                export const contentBorderColor: {
                    "type": string;
                };
                export const contentBackgroundColor: {
                    "type": string;
                };
                export const contentTextColor: {
                    "type": string;
                };
                export const contentTextFontSize: {
                    "type": string;
                };
                export const contentTextFontWeight: {
                    "type": string;
                };
                export const contentTextFontFamily: {
                    "type": string;
                };
            }
            export { parameters_7 as parameters };
            const appearances_14: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_14 as appearances };
            const variantGroups_13: {};
            export { variantGroups_13 as variantGroups };
            export namespace states_7 {
                export const bounding: {
                    "scope": string;
                    "priority": number;
                    "default": boolean;
                };
                export const today: {
                    "scope": string;
                    "priority": number;
                    "default": boolean;
                };
                const disabled_22: {
                    "scope": string;
                    "priority": number;
                    "default": boolean;
                };
                export { disabled_22 as disabled };
                const selected_1: {
                    "scope": string;
                    "priority": number;
                    "default": boolean;
                };
                export { selected_1 as selected };
                export const range: {
                    "scope": string;
                    "priority": number;
                    "default": boolean;
                };
            }
            export { states_7 as states };
        }
        export { meta_7 as meta };
        const appearances_15: {
            "default": {
                "mapping": {
                    "paddingHorizontal": number;
                    "paddingVertical": number;
                    "borderRadius": number;
                    "backgroundColor": string;
                    "contentBorderRadius": string;
                    "contentBorderWidth": string;
                    "contentBorderColor": string;
                    "contentTextFontSize": string;
                    "contentTextFontWeight": string;
                    "contentTextFontFamily": string;
                    "contentTextColor": string;
                    "state": {
                        "bounding": {
                            "contentTextColor": string;
                        };
                        "selected": {
                            "contentBorderColor": string;
                            "contentBackgroundColor": string;
                            "contentTextColor": string;
                        };
                        "disabled": {
                            "contentTextColor": string;
                        };
                        "today": {
                            "contentBorderColor": string;
                            "contentBackgroundColor": string;
                        };
                        "range": {
                            "borderRadius": string;
                            "backgroundColor": string;
                            "contentTextColor": string;
                        };
                        "today.range": {
                            "contentBorderColor": string;
                            "contentBackgroundColor": string;
                        };
                    };
                };
            };
        };
        export { appearances_15 as appearances };
    }
    export namespace CheckBox {
        export namespace meta_8 {
            const scope_8: string;
            export { scope_8 as scope };
            export namespace parameters_8 {
                const width_2: {
                    "type": string;
                };
                export { width_2 as width };
                const height_1: {
                    "type": string;
                };
                export { height_1 as height };
                const borderWidth_16: {
                    "type": string;
                };
                export { borderWidth_16 as borderWidth };
                const borderRadius_16: {
                    "type": string;
                };
                export { borderRadius_16 as borderRadius };
                const borderColor_119: {
                    "type": string;
                };
                export { borderColor_119 as borderColor };
                const backgroundColor_111: {
                    "type": string;
                };
                export { backgroundColor_111 as backgroundColor };
                const textMarginHorizontal_6: {
                    "type": string;
                };
                export { textMarginHorizontal_6 as textMarginHorizontal };
                const textColor_86: {
                    "type": string;
                };
                export { textColor_86 as textColor };
                const textFontFamily_3: {
                    "type": string;
                };
                export { textFontFamily_3 as textFontFamily };
                const textFontSize_7: {
                    "type": string;
                };
                export { textFontSize_7 as textFontSize };
                const textFontWeight_7: {
                    "type": string;
                };
                export { textFontWeight_7 as textFontWeight };
                const iconWidth_8: {
                    "type": string;
                };
                export { iconWidth_8 as iconWidth };
                const iconHeight_8: {
                    "type": string;
                };
                export { iconHeight_8 as iconHeight };
                const iconTintColor_87: {
                    "type": string;
                };
                export { iconTintColor_87 as iconTintColor };
                export const outlineWidth: {
                    "type": string;
                };
                export const outlineHeight: {
                    "type": string;
                };
                export const outlineBorderRadius: {
                    "type": string;
                };
                export const outlineBackgroundColor: {
                    "type": string;
                };
            }
            export { parameters_8 as parameters };
            const appearances_16: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_16 as appearances };
            export namespace variantGroups_14 {
                export namespace status_9 {
                    const primary_9: {
                        "default": boolean;
                    };
                    export { primary_9 as primary };
                    const success_9: {
                        "default": boolean;
                    };
                    export { success_9 as success };
                    const warning_9: {
                        "default": boolean;
                    };
                    export { warning_9 as warning };
                    const danger_9: {
                        "default": boolean;
                    };
                    export { danger_9 as danger };
                    const info_9: {
                        "default": boolean;
                    };
                    export { info_9 as info };
                    const basic_9: {
                        "default": boolean;
                    };
                    export { basic_9 as basic };
                    const control_9: {
                        "default": boolean;
                    };
                    export { control_9 as control };
                }
                export { status_9 as status };
            }
            export { variantGroups_14 as variantGroups };
            export namespace states_8 {
                export const checked: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                const hover_23: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { hover_23 as hover };
                const disabled_23: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { disabled_23 as disabled };
                const active_24: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { active_24 as active };
                export const indeterminate: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                const focused_23: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { focused_23 as focused };
            }
            export { states_8 as states };
        }
        export { meta_8 as meta };
        const appearances_17: {
            "default": {
                "mapping": {
                    "width": number;
                    "height": number;
                    "borderRadius": number;
                    "borderWidth": string;
                    "outlineWidth": number;
                    "outlineHeight": number;
                    "outlineBorderRadius": number;
                    "outlineBackgroundColor": string;
                    "textFontSize": string;
                    "textFontWeight": string;
                    "textFontFamily": string;
                    "textMarginHorizontal": number;
                    "iconWidth": number;
                    "iconHeight": number;
                    "iconTintColor": string;
                };
                "variantGroups": {
                    "status": {
                        "basic": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "indeterminate": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                            };
                        };
                        "primary": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "indeterminate": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                            };
                        };
                        "success": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "indeterminate": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                            };
                        };
                        "info": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "indeterminate": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                            };
                        };
                        "warning": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "indeterminate": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                            };
                        };
                        "danger": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "indeterminate": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                            };
                        };
                        "control": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "indeterminate": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                    };
                };
            };
        };
        export { appearances_17 as appearances };
    }
    export namespace Datepicker {
        export namespace meta_9 {
            const scope_9: string;
            export { scope_9 as scope };
            export namespace parameters_9 {
                const minHeight_7: {
                    "type": string;
                };
                export { minHeight_7 as minHeight };
                const paddingHorizontal_8: {
                    "type": string;
                };
                export { paddingHorizontal_8 as paddingHorizontal };
                const paddingVertical_10: {
                    "type": string;
                };
                export { paddingVertical_10 as paddingVertical };
                const borderRadius_17: {
                    "type": string;
                };
                export { borderRadius_17 as borderRadius };
                const borderColor_120: {
                    "type": string;
                };
                export { borderColor_120 as borderColor };
                const borderWidth_17: {
                    "type": string;
                };
                export { borderWidth_17 as borderWidth };
                const backgroundColor_112: {
                    "type": string;
                };
                export { backgroundColor_112 as backgroundColor };
                const textMarginHorizontal_7: {
                    "type": string;
                };
                export { textMarginHorizontal_7 as textMarginHorizontal };
                const textFontSize_8: {
                    "type": string;
                };
                export { textFontSize_8 as textFontSize };
                const textFontWeight_8: {
                    "type": string;
                };
                export { textFontWeight_8 as textFontWeight };
                const textFontFamily_4: {
                    "type": string;
                };
                export { textFontFamily_4 as textFontFamily };
                const textColor_87: {
                    "type": string;
                };
                export { textColor_87 as textColor };
                export const placeholderColor: {
                    "type": string;
                };
                const iconWidth_9: {
                    "type": string;
                };
                export { iconWidth_9 as iconWidth };
                const iconHeight_9: {
                    "type": string;
                };
                export { iconHeight_9 as iconHeight };
                const iconMarginHorizontal_7: {
                    "type": string;
                };
                export { iconMarginHorizontal_7 as iconMarginHorizontal };
                const iconTintColor_88: {
                    "type": string;
                };
                export { iconTintColor_88 as iconTintColor };
                export const labelColor: {
                    "type": string;
                };
                export const labelFontFamily: {
                    "type": string;
                };
                export const labelFontSize: {
                    "type": string;
                };
                export const labelFontWeight: {
                    "type": string;
                };
                export const labelMarginBottom: {
                    "type": string;
                };
                export const captionMarginTop: {
                    "type": string;
                };
                export const captionColor: {
                    "type": string;
                };
                export const captionFontFamily: {
                    "type": string;
                };
                export const captionFontSize: {
                    "type": string;
                };
                export const captionFontWeight: {
                    "type": string;
                };
                export const captionIconWidth: {
                    "type": string;
                };
                export const captionIconHeight: {
                    "type": string;
                };
                export const captionIconMarginRight: {
                    "type": string;
                };
                export const captionIconTintColor: {
                    "type": string;
                };
            }
            export { parameters_9 as parameters };
            const appearances_18: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_18 as appearances };
            export namespace variantGroups_15 {
                export namespace status_10 {
                    const basic_10: {
                        "default": boolean;
                    };
                    export { basic_10 as basic };
                    const primary_10: {
                        "default": boolean;
                    };
                    export { primary_10 as primary };
                    const success_10: {
                        "default": boolean;
                    };
                    export { success_10 as success };
                    const info_10: {
                        "default": boolean;
                    };
                    export { info_10 as info };
                    const warning_10: {
                        "default": boolean;
                    };
                    export { warning_10 as warning };
                    const danger_10: {
                        "default": boolean;
                    };
                    export { danger_10 as danger };
                    const control_10: {
                        "default": boolean;
                    };
                    export { control_10 as control };
                }
                export { status_10 as status };
                export namespace size_5 {
                    const small_5: {
                        "default": boolean;
                    };
                    export { small_5 as small };
                    const medium_5: {
                        "default": boolean;
                    };
                    export { medium_5 as medium };
                    const large_5: {
                        "default": boolean;
                    };
                    export { large_5 as large };
                }
                export { size_5 as size };
            }
            export { variantGroups_15 as variantGroups };
            export namespace states_9 {
                const disabled_24: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { disabled_24 as disabled };
                const active_25: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { active_25 as active };
            }
            export { states_9 as states };
        }
        export { meta_9 as meta };
        const appearances_19: {
            "default": {
                "mapping": {
                    "paddingHorizontal": number;
                    "textMarginHorizontal": number;
                    "textFontFamily": string;
                    "iconWidth": number;
                    "iconHeight": number;
                    "iconMarginHorizontal": number;
                    "labelMarginBottom": number;
                    "labelFontSize": string;
                    "labelFontWeight": string;
                    "labelFontFamily": string;
                    "captionMarginTop": number;
                    "captionFontSize": string;
                    "captionFontWeight": string;
                    "captionFontFamily": string;
                    "captionIconWidth": number;
                    "captionIconHeight": number;
                    "captionIconMarginRight": number;
                };
                "variantGroups": {
                    "status": {
                        "basic": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "captionIconTintColor": string;
                            "state": {
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "primary": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "captionIconTintColor": string;
                            "state": {
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "success": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "captionIconTintColor": string;
                            "state": {
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "info": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "captionIconTintColor": string;
                            "state": {
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "warning": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "captionIconTintColor": string;
                            "state": {
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "danger": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "captionIconTintColor": string;
                            "state": {
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "control": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "captionIconTintColor": string;
                            "state": {
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                    };
                    "size": {
                        "small": {
                            "minHeight": string;
                            "borderRadius": string;
                            "borderWidth": string;
                            "paddingVertical": number;
                            "textFontSize": string;
                            "textFontWeight": string;
                        };
                        "medium": {
                            "minHeight": string;
                            "borderRadius": string;
                            "borderWidth": string;
                            "paddingVertical": number;
                            "textFontSize": string;
                            "textFontWeight": string;
                        };
                        "large": {
                            "minHeight": string;
                            "borderRadius": string;
                            "borderWidth": string;
                            "paddingVertical": number;
                            "textFontSize": string;
                            "textFontWeight": string;
                        };
                    };
                };
            };
        };
        export { appearances_19 as appearances };
    }
    export namespace Divider {
        export namespace meta_10 {
            const scope_10: string;
            export { scope_10 as scope };
            export namespace parameters_10 {
                const backgroundColor_113: {
                    "type": string;
                };
                export { backgroundColor_113 as backgroundColor };
                const height_2: {
                    "type": string;
                };
                export { height_2 as height };
            }
            export { parameters_10 as parameters };
            const appearances_20: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_20 as appearances };
            const variantGroups_16: {};
            export { variantGroups_16 as variantGroups };
            const states_10: {};
            export { states_10 as states };
        }
        export { meta_10 as meta };
        const appearances_21: {
            "default": {
                "mapping": {
                    "height": number;
                    "backgroundColor": string;
                };
            };
        };
        export { appearances_21 as appearances };
    }
    export namespace Drawer {
        export namespace meta_11 {
            const scope_11: string;
            export { scope_11 as scope };
            export namespace parameters_11 {
                const backgroundColor_114: {
                    "type": string;
                };
                export { backgroundColor_114 as backgroundColor };
                const headerPaddingHorizontal_3: {
                    "type": string;
                };
                export { headerPaddingHorizontal_3 as headerPaddingHorizontal };
                const headerPaddingVertical_3: {
                    "type": string;
                };
                export { headerPaddingVertical_3 as headerPaddingVertical };
                const footerPaddingHorizontal_2: {
                    "type": string;
                };
                export { footerPaddingHorizontal_2 as footerPaddingHorizontal };
                const footerPaddingVertical_2: {
                    "type": string;
                };
                export { footerPaddingVertical_2 as footerPaddingVertical };
            }
            export { parameters_11 as parameters };
            const appearances_22: {
                "default": {
                    "default": boolean;
                };
                "noDivider": {
                    "default": boolean;
                };
            };
            export { appearances_22 as appearances };
            const variantGroups_17: {};
            export { variantGroups_17 as variantGroups };
            const states_11: {};
            export { states_11 as states };
        }
        export { meta_11 as meta };
        const appearances_23: {
            "default": {
                "mapping": {
                    "backgroundColor": string;
                    "headerPaddingHorizontal": number;
                    "headerPaddingVertical": number;
                    "footerPaddingHorizontal": number;
                    "footerPaddingVertical": number;
                };
            };
            "noDivider": {
                "mapping": {};
            };
        };
        export { appearances_23 as appearances };
    }
    export namespace Input {
        export namespace meta_12 {
            const scope_12: string;
            export { scope_12 as scope };
            export namespace parameters_12 {
                const paddingVertical_11: {
                    "type": string;
                };
                export { paddingVertical_11 as paddingVertical };
                const paddingHorizontal_9: {
                    "type": string;
                };
                export { paddingHorizontal_9 as paddingHorizontal };
                const minHeight_8: {
                    "type": string;
                };
                export { minHeight_8 as minHeight };
                const borderRadius_18: {
                    "type": string;
                };
                export { borderRadius_18 as borderRadius };
                const borderWidth_18: {
                    "type": string;
                };
                export { borderWidth_18 as borderWidth };
                const borderColor_121: {
                    "type": string;
                };
                export { borderColor_121 as borderColor };
                const backgroundColor_115: {
                    "type": string;
                };
                export { backgroundColor_115 as backgroundColor };
                const textMarginHorizontal_8: {
                    "type": string;
                };
                export { textMarginHorizontal_8 as textMarginHorizontal };
                const textFontFamily_5: {
                    "type": string;
                };
                export { textFontFamily_5 as textFontFamily };
                const textFontSize_9: {
                    "type": string;
                };
                export { textFontSize_9 as textFontSize };
                const textFontWeight_9: {
                    "type": string;
                };
                export { textFontWeight_9 as textFontWeight };
                const textColor_88: {
                    "type": string;
                };
                export { textColor_88 as textColor };
                const placeholderColor_1: {
                    "type": string;
                };
                export { placeholderColor_1 as placeholderColor };
                const iconWidth_10: {
                    "type": string;
                };
                export { iconWidth_10 as iconWidth };
                const iconHeight_10: {
                    "type": string;
                };
                export { iconHeight_10 as iconHeight };
                const iconMarginHorizontal_8: {
                    "type": string;
                };
                export { iconMarginHorizontal_8 as iconMarginHorizontal };
                const iconTintColor_89: {
                    "type": string;
                };
                export { iconTintColor_89 as iconTintColor };
                const labelColor_1: {
                    "type": string;
                };
                export { labelColor_1 as labelColor };
                const labelFontFamily_1: {
                    "type": string;
                };
                export { labelFontFamily_1 as labelFontFamily };
                const labelFontSize_1: {
                    "type": string;
                };
                export { labelFontSize_1 as labelFontSize };
                const labelFontWeight_1: {
                    "type": string;
                };
                export { labelFontWeight_1 as labelFontWeight };
                const labelMarginBottom_1: {
                    "type": string;
                };
                export { labelMarginBottom_1 as labelMarginBottom };
                const captionMarginTop_1: {
                    "type": string;
                };
                export { captionMarginTop_1 as captionMarginTop };
                const captionColor_1: {
                    "type": string;
                };
                export { captionColor_1 as captionColor };
                const captionFontFamily_1: {
                    "type": string;
                };
                export { captionFontFamily_1 as captionFontFamily };
                const captionFontSize_1: {
                    "type": string;
                };
                export { captionFontSize_1 as captionFontSize };
                const captionFontWeight_1: {
                    "type": string;
                };
                export { captionFontWeight_1 as captionFontWeight };
                const captionIconWidth_1: {
                    "type": string;
                };
                export { captionIconWidth_1 as captionIconWidth };
                const captionIconHeight_1: {
                    "type": string;
                };
                export { captionIconHeight_1 as captionIconHeight };
                const captionIconMarginRight_1: {
                    "type": string;
                };
                export { captionIconMarginRight_1 as captionIconMarginRight };
                const captionIconTintColor_1: {
                    "type": string;
                };
                export { captionIconTintColor_1 as captionIconTintColor };
            }
            export { parameters_12 as parameters };
            const appearances_24: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_24 as appearances };
            export namespace variantGroups_18 {
                export namespace status_11 {
                    const basic_11: {
                        "default": boolean;
                    };
                    export { basic_11 as basic };
                    const primary_11: {
                        "default": boolean;
                    };
                    export { primary_11 as primary };
                    const success_11: {
                        "default": boolean;
                    };
                    export { success_11 as success };
                    const info_11: {
                        "default": boolean;
                    };
                    export { info_11 as info };
                    const warning_11: {
                        "default": boolean;
                    };
                    export { warning_11 as warning };
                    const danger_11: {
                        "default": boolean;
                    };
                    export { danger_11 as danger };
                    const control_11: {
                        "default": boolean;
                    };
                    export { control_11 as control };
                }
                export { status_11 as status };
                export namespace size_6 {
                    const small_6: {
                        "default": boolean;
                    };
                    export { small_6 as small };
                    const medium_6: {
                        "default": boolean;
                    };
                    export { medium_6 as medium };
                    const large_6: {
                        "default": boolean;
                    };
                    export { large_6 as large };
                }
                export { size_6 as size };
            }
            export { variantGroups_18 as variantGroups };
            export namespace states_12 {
                const hover_24: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { hover_24 as hover };
                const disabled_25: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { disabled_25 as disabled };
                const focused_24: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { focused_24 as focused };
            }
            export { states_12 as states };
        }
        export { meta_12 as meta };
        const appearances_25: {
            "default": {
                "mapping": {
                    "paddingHorizontal": number;
                    "textMarginHorizontal": number;
                    "textFontFamily": string;
                    "iconWidth": number;
                    "iconHeight": number;
                    "iconMarginHorizontal": number;
                    "labelMarginBottom": number;
                    "labelFontSize": string;
                    "labelFontWeight": string;
                    "labelFontFamily": string;
                    "captionMarginTop": number;
                    "captionFontSize": string;
                    "captionFontWeight": string;
                    "captionFontFamily": string;
                    "captionIconWidth": number;
                    "captionIconHeight": number;
                    "captionIconMarginRight": number;
                };
                "variantGroups": {
                    "status": {
                        "basic": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "captionIconTintColor": string;
                            "state": {
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                    "labelColor": string;
                                    "captionColor": string;
                                    "placeholderColor": string;
                                    "iconTintColor": string;
                                    "captionIconTintColor": string;
                                };
                            };
                        };
                        "primary": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "captionIconTintColor": string;
                            "state": {
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                    "labelColor": string;
                                    "captionColor": string;
                                    "placeholderColor": string;
                                    "iconTintColor": string;
                                    "captionIconTintColor": string;
                                };
                            };
                        };
                        "success": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "captionIconTintColor": string;
                            "state": {
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                    "labelColor": string;
                                    "captionColor": string;
                                    "placeholderColor": string;
                                    "iconTintColor": string;
                                    "captionIconTintColor": string;
                                };
                            };
                        };
                        "info": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "captionIconTintColor": string;
                            "state": {
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                    "labelColor": string;
                                    "captionColor": string;
                                    "placeholderColor": string;
                                    "iconTintColor": string;
                                    "captionIconTintColor": string;
                                };
                            };
                        };
                        "warning": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "captionIconTintColor": string;
                            "state": {
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                    "labelColor": string;
                                    "captionColor": string;
                                    "placeholderColor": string;
                                    "iconTintColor": string;
                                    "captionIconTintColor": string;
                                };
                            };
                        };
                        "danger": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "captionIconTintColor": string;
                            "state": {
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                    "labelColor": string;
                                    "captionColor": string;
                                    "placeholderColor": string;
                                    "iconTintColor": string;
                                    "captionIconTintColor": string;
                                };
                            };
                        };
                        "control": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "captionIconTintColor": string;
                            "state": {
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                    "labelColor": string;
                                    "captionColor": string;
                                    "placeholderColor": string;
                                    "iconTintColor": string;
                                    "captionIconTintColor": string;
                                };
                            };
                        };
                    };
                    "size": {
                        "small": {
                            "minHeight": string;
                            "borderRadius": string;
                            "borderWidth": string;
                            "paddingVertical": number;
                            "textFontSize": string;
                            "textFontWeight": string;
                        };
                        "medium": {
                            "minHeight": string;
                            "borderRadius": string;
                            "borderWidth": string;
                            "paddingVertical": number;
                            "textFontSize": string;
                            "textFontWeight": string;
                        };
                        "large": {
                            "minHeight": string;
                            "borderRadius": string;
                            "borderWidth": string;
                            "paddingVertical": number;
                            "textFontSize": string;
                            "textFontWeight": string;
                        };
                    };
                };
            };
        };
        export { appearances_25 as appearances };
    }
    export namespace Layout {
        export namespace meta_13 {
            const scope_13: string;
            export { scope_13 as scope };
            export namespace parameters_13 {
                const backgroundColor_116: {
                    "type": string;
                };
                export { backgroundColor_116 as backgroundColor };
            }
            export { parameters_13 as parameters };
            const appearances_26: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_26 as appearances };
            export namespace variantGroups_19 {
                export const level: {
                    "1": {
                        "default": boolean;
                    };
                    "2": {
                        "default": boolean;
                    };
                    "3": {
                        "default": boolean;
                    };
                    "4": {
                        "default": boolean;
                    };
                };
            }
            export { variantGroups_19 as variantGroups };
            const states_13: {};
            export { states_13 as states };
        }
        export { meta_13 as meta };
        const appearances_27: {
            "default": {
                "mapping": {};
                "variantGroups": {
                    "level": {
                        "1": {
                            "backgroundColor": string;
                        };
                        "2": {
                            "backgroundColor": string;
                        };
                        "3": {
                            "backgroundColor": string;
                        };
                        "4": {
                            "backgroundColor": string;
                        };
                    };
                };
            };
        };
        export { appearances_27 as appearances };
    }
    export namespace List {
        export namespace meta_14 {
            const scope_14: string;
            export { scope_14 as scope };
            export namespace parameters_14 {
                const backgroundColor_117: {
                    "type": string;
                };
                export { backgroundColor_117 as backgroundColor };
            }
            export { parameters_14 as parameters };
            const appearances_28: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_28 as appearances };
            const variantGroups_20: {};
            export { variantGroups_20 as variantGroups };
            const states_14: {};
            export { states_14 as states };
        }
        export { meta_14 as meta };
        const appearances_29: {
            "default": {
                "mapping": {
                    "backgroundColor": string;
                };
            };
        };
        export { appearances_29 as appearances };
    }
    export namespace ListItem {
        export namespace meta_15 {
            const scope_15: string;
            export { scope_15 as scope };
            export namespace parameters_15 {
                const paddingVertical_12: {
                    "type": string;
                };
                export { paddingVertical_12 as paddingVertical };
                const paddingHorizontal_10: {
                    "type": string;
                };
                export { paddingHorizontal_10 as paddingHorizontal };
                const backgroundColor_118: {
                    "type": string;
                };
                export { backgroundColor_118 as backgroundColor };
                const iconWidth_11: {
                    "type": string;
                };
                export { iconWidth_11 as iconWidth };
                const iconHeight_11: {
                    "type": string;
                };
                export { iconHeight_11 as iconHeight };
                const iconMarginHorizontal_9: {
                    "type": string;
                };
                export { iconMarginHorizontal_9 as iconMarginHorizontal };
                const iconTintColor_90: {
                    "type": string;
                };
                export { iconTintColor_90 as iconTintColor };
                export const titleMarginHorizontal: {
                    "type": string;
                };
                const titleFontFamily_1: {
                    "type": string;
                };
                export { titleFontFamily_1 as titleFontFamily };
                const titleFontSize_1: {
                    "type": string;
                };
                export { titleFontSize_1 as titleFontSize };
                const titleFontWeight_1: {
                    "type": string;
                };
                export { titleFontWeight_1 as titleFontWeight };
                const titleColor_1: {
                    "type": string;
                };
                export { titleColor_1 as titleColor };
                export const descriptionColor: {
                    "type": string;
                };
                export const descriptionFontFamily: {
                    "type": string;
                };
                export const descriptionFontSize: {
                    "type": string;
                };
                export const descriptionFontWeight: {
                    "type": string;
                };
                export const descriptionMarginHorizontal: {
                    "type": string;
                };
                export const accessoryMarginHorizontal: {
                    "type": string;
                };
            }
            export { parameters_15 as parameters };
            const appearances_30: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_30 as appearances };
            const variantGroups_21: {};
            export { variantGroups_21 as variantGroups };
            export namespace states_15 {
                const active_26: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { active_26 as active };
            }
            export { states_15 as states };
        }
        export { meta_15 as meta };
        const appearances_31: {
            "default": {
                "mapping": {
                    "paddingHorizontal": number;
                    "paddingVertical": number;
                    "backgroundColor": string;
                    "iconWidth": number;
                    "iconHeight": number;
                    "iconMarginHorizontal": number;
                    "iconTintColor": string;
                    "titleMarginHorizontal": number;
                    "titleFontSize": string;
                    "titleFontWeight": string;
                    "titleFontFamily": string;
                    "titleColor": string;
                    "descriptionMarginHorizontal": number;
                    "descriptionFontSize": string;
                    "descriptionFontWeight": string;
                    "descriptionFontFamily": string;
                    "descriptionColor": string;
                    "accessoryMarginHorizontal": number;
                    "state": {
                        "active": {
                            "backgroundColor": string;
                        };
                    };
                };
            };
        };
        export { appearances_31 as appearances };
    }
    export namespace Menu {
        export namespace meta_16 {
            const scope_16: string;
            export { scope_16 as scope };
            const parameters_16: {};
            export { parameters_16 as parameters };
            const appearances_32: {
                "default": {
                    "default": boolean;
                };
                "noDivider": {
                    "default": boolean;
                };
            };
            export { appearances_32 as appearances };
            const variantGroups_22: {};
            export { variantGroups_22 as variantGroups };
            const states_16: {};
            export { states_16 as states };
        }
        export { meta_16 as meta };
        const appearances_33: {
            "default": {
                "mapping": {};
            };
            "noDivider": {
                "mapping": {};
            };
        };
        export { appearances_33 as appearances };
    }
    export namespace MenuItem {
        export namespace meta_17 {
            const scope_17: string;
            export { scope_17 as scope };
            export namespace parameters_17 {
                export const indicatorWidth: {
                    "type": string;
                };
                const indicatorBackgroundColor_1: {
                    "type": string;
                };
                export { indicatorBackgroundColor_1 as indicatorBackgroundColor };
                const paddingVertical_13: {
                    "type": string;
                };
                export { paddingVertical_13 as paddingVertical };
                const paddingHorizontal_11: {
                    "type": string;
                };
                export { paddingHorizontal_11 as paddingHorizontal };
                export const paddingLeft: {
                    "type": string;
                };
                const backgroundColor_119: {
                    "type": string;
                };
                export { backgroundColor_119 as backgroundColor };
                const iconWidth_12: {
                    "type": string;
                };
                export { iconWidth_12 as iconWidth };
                const iconHeight_12: {
                    "type": string;
                };
                export { iconHeight_12 as iconHeight };
                const iconMarginHorizontal_10: {
                    "type": string;
                };
                export { iconMarginHorizontal_10 as iconMarginHorizontal };
                const iconTintColor_91: {
                    "type": string;
                };
                export { iconTintColor_91 as iconTintColor };
                const titleMarginHorizontal_1: {
                    "type": string;
                };
                export { titleMarginHorizontal_1 as titleMarginHorizontal };
                const titleFontFamily_2: {
                    "type": string;
                };
                export { titleFontFamily_2 as titleFontFamily };
                const titleFontSize_2: {
                    "type": string;
                };
                export { titleFontSize_2 as titleFontSize };
                const titleFontWeight_2: {
                    "type": string;
                };
                export { titleFontWeight_2 as titleFontWeight };
                const titleColor_2: {
                    "type": string;
                };
                export { titleColor_2 as titleColor };
            }
            export { parameters_17 as parameters };
            const appearances_34: {
                "default": {
                    "default": boolean;
                };
                "grouped": {
                    "default": boolean;
                };
            };
            export { appearances_34 as appearances };
            const variantGroups_23: {};
            export { variantGroups_23 as variantGroups };
            export namespace states_17 {
                const hover_25: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { hover_25 as hover };
                const disabled_26: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { disabled_26 as disabled };
                const selected_2: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { selected_2 as selected };
                const active_27: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { active_27 as active };
                const focused_25: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { focused_25 as focused };
            }
            export { states_17 as states };
        }
        export { meta_17 as meta };
        const appearances_35: {
            "default": {
                "mapping": {
                    "paddingHorizontal": number;
                    "paddingVertical": number;
                    "backgroundColor": string;
                    "indicatorWidth": number;
                    "indicatorBackgroundColor": string;
                    "titleMarginHorizontal": number;
                    "titleFontSize": string;
                    "titleFontWeight": string;
                    "titleFontFamily": string;
                    "titleColor": string;
                    "iconWidth": number;
                    "iconHeight": number;
                    "iconMarginHorizontal": number;
                    "iconTintColor": string;
                    "state": {
                        "hover": {
                            "titleColor": string;
                            "iconTintColor": string;
                        };
                        "active": {
                            "backgroundColor": string;
                        };
                        "selected": {
                            "backgroundColor": string;
                            "indicatorWidth": number;
                            "indicatorBackgroundColor": string;
                            "titleColor": string;
                            "iconTintColor": string;
                        };
                        "disabled": {
                            "titleColor": string;
                            "iconTintColor": string;
                        };
                    };
                };
            };
            "grouped": {
                "mapping": {
                    "paddingLeft": number;
                };
            };
        };
        export { appearances_35 as appearances };
    }
    export namespace OverflowMenu {
        export namespace meta_18 {
            const scope_18: string;
            export { scope_18 as scope };
            export namespace parameters_18 {
                const width_3: {
                    "type": string;
                };
                export { width_3 as width };
                export const maxHeight: {
                    "type": string;
                };
                const borderRadius_19: {
                    "type": string;
                };
                export { borderRadius_19 as borderRadius };
                const indicatorBackgroundColor_2: {
                    "type": string;
                };
                export { indicatorBackgroundColor_2 as indicatorBackgroundColor };
            }
            export { parameters_18 as parameters };
            const appearances_36: {
                "default": {
                    "default": boolean;
                };
                "noDivider": {
                    "default": boolean;
                };
            };
            export { appearances_36 as appearances };
            const states_18: {};
            export { states_18 as states };
            const variantGroups_24: {};
            export { variantGroups_24 as variantGroups };
        }
        export { meta_18 as meta };
        const appearances_37: {
            "default": {
                "mapping": {
                    "width": number;
                    "maxHeight": number;
                    "borderRadius": string;
                    "indicatorBackgroundColor": string;
                };
            };
            "noDivider": {
                "mapping": {};
            };
        };
        export { appearances_37 as appearances };
    }
    export namespace Popover {
        export namespace meta_19 {
            const scope_19: string;
            export { scope_19 as scope };
            export namespace parameters_19 {
                const borderRadius_20: {
                    "type": string;
                };
                export { borderRadius_20 as borderRadius };
                const borderWidth_19: {
                    "type": string;
                };
                export { borderWidth_19 as borderWidth };
                const borderColor_122: {
                    "type": string;
                };
                export { borderColor_122 as borderColor };
                const backgroundColor_120: {
                    "type": string;
                };
                export { backgroundColor_120 as backgroundColor };
                const indicatorWidth_1: {
                    "type": string;
                };
                export { indicatorWidth_1 as indicatorWidth };
                const indicatorHeight_1: {
                    "type": string;
                };
                export { indicatorHeight_1 as indicatorHeight };
                const indicatorBackgroundColor_3: {
                    "type": string;
                };
                export { indicatorBackgroundColor_3 as indicatorBackgroundColor };
            }
            export { parameters_19 as parameters };
            const appearances_38: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_38 as appearances };
            const variantGroups_25: {};
            export { variantGroups_25 as variantGroups };
            const states_19: {};
            export { states_19 as states };
        }
        export { meta_19 as meta };
        const appearances_39: {
            "default": {
                "mapping": {
                    "borderRadius": string;
                    "borderWidth": string;
                    "borderColor": string;
                    "backgroundColor": string;
                    "indicatorWidth": number;
                    "indicatorHeight": number;
                    "indicatorBackgroundColor": string;
                };
            };
        };
        export { appearances_39 as appearances };
    }
    export namespace Select {
        export namespace meta_20 {
            const scope_20: string;
            export { scope_20 as scope };
            export namespace parameters_20 {
                const minWidth_6: {
                    "type": string;
                };
                export { minWidth_6 as minWidth };
                const minHeight_9: {
                    "type": string;
                };
                export { minHeight_9 as minHeight };
                const paddingHorizontal_12: {
                    "type": string;
                };
                export { paddingHorizontal_12 as paddingHorizontal };
                const paddingVertical_14: {
                    "type": string;
                };
                export { paddingVertical_14 as paddingVertical };
                const borderRadius_21: {
                    "type": string;
                };
                export { borderRadius_21 as borderRadius };
                const borderColor_123: {
                    "type": string;
                };
                export { borderColor_123 as borderColor };
                const borderWidth_20: {
                    "type": string;
                };
                export { borderWidth_20 as borderWidth };
                const backgroundColor_121: {
                    "type": string;
                };
                export { backgroundColor_121 as backgroundColor };
                export const placeholderMarginHorizontal: {
                    "type": string;
                };
                export const placeholderFontFamily: {
                    "type": string;
                };
                export const placeholderFontSize: {
                    "type": string;
                };
                export const placeholderFontWeight: {
                    "type": string;
                };
                const placeholderColor_2: {
                    "type": string;
                };
                export { placeholderColor_2 as placeholderColor };
                const textMarginHorizontal_9: {
                    "type": string;
                };
                export { textMarginHorizontal_9 as textMarginHorizontal };
                const textFontFamily_6: {
                    "type": string;
                };
                export { textFontFamily_6 as textFontFamily };
                const textFontSize_10: {
                    "type": string;
                };
                export { textFontSize_10 as textFontSize };
                const textFontWeight_10: {
                    "type": string;
                };
                export { textFontWeight_10 as textFontWeight };
                const textColor_89: {
                    "type": string;
                };
                export { textColor_89 as textColor };
                const iconWidth_13: {
                    "type": string;
                };
                export { iconWidth_13 as iconWidth };
                const iconHeight_13: {
                    "type": string;
                };
                export { iconHeight_13 as iconHeight };
                const iconTintColor_92: {
                    "type": string;
                };
                export { iconTintColor_92 as iconTintColor };
                const iconMarginHorizontal_11: {
                    "type": string;
                };
                export { iconMarginHorizontal_11 as iconMarginHorizontal };
                export const popoverMaxHeight: {
                    "type": string;
                };
                export const popoverBorderRadius: {
                    "type": string;
                };
                export const popoverBorderColor: {
                    "type": string;
                };
                export const popoverBorderWidth: {
                    "type": string;
                };
                const labelColor_2: {
                    "type": string;
                };
                export { labelColor_2 as labelColor };
                const labelFontFamily_2: {
                    "type": string;
                };
                export { labelFontFamily_2 as labelFontFamily };
                const labelFontSize_2: {
                    "type": string;
                };
                export { labelFontSize_2 as labelFontSize };
                const labelFontWeight_2: {
                    "type": string;
                };
                export { labelFontWeight_2 as labelFontWeight };
                const labelMarginBottom_2: {
                    "type": string;
                };
                export { labelMarginBottom_2 as labelMarginBottom };
                const captionMarginTop_2: {
                    "type": string;
                };
                export { captionMarginTop_2 as captionMarginTop };
                const captionColor_2: {
                    "type": string;
                };
                export { captionColor_2 as captionColor };
                const captionFontFamily_2: {
                    "type": string;
                };
                export { captionFontFamily_2 as captionFontFamily };
                const captionFontSize_2: {
                    "type": string;
                };
                export { captionFontSize_2 as captionFontSize };
                const captionFontWeight_2: {
                    "type": string;
                };
                export { captionFontWeight_2 as captionFontWeight };
            }
            export { parameters_20 as parameters };
            const appearances_40: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_40 as appearances };
            export namespace variantGroups_26 {
                export namespace status_12 {
                    const basic_12: {
                        "default": boolean;
                    };
                    export { basic_12 as basic };
                    const primary_12: {
                        "default": boolean;
                    };
                    export { primary_12 as primary };
                    const success_12: {
                        "default": boolean;
                    };
                    export { success_12 as success };
                    const info_12: {
                        "default": boolean;
                    };
                    export { info_12 as info };
                    const warning_12: {
                        "default": boolean;
                    };
                    export { warning_12 as warning };
                    const danger_12: {
                        "default": boolean;
                    };
                    export { danger_12 as danger };
                    const control_12: {
                        "default": boolean;
                    };
                    export { control_12 as control };
                }
                export { status_12 as status };
                export namespace size_7 {
                    const small_7: {
                        "default": boolean;
                    };
                    export { small_7 as small };
                    const medium_7: {
                        "default": boolean;
                    };
                    export { medium_7 as medium };
                    const large_7: {
                        "default": boolean;
                    };
                    export { large_7 as large };
                }
                export { size_7 as size };
            }
            export { variantGroups_26 as variantGroups };
            export namespace states_20 {
                const hover_26: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { hover_26 as hover };
                const disabled_27: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { disabled_27 as disabled };
                const active_28: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { active_28 as active };
                const focused_26: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { focused_26 as focused };
            }
            export { states_20 as states };
        }
        export { meta_20 as meta };
        const appearances_41: {
            "default": {
                "mapping": {
                    "paddingHorizontal": number;
                    "iconWidth": number;
                    "iconHeight": number;
                    "iconMarginHorizontal": number;
                    "placeholderMarginHorizontal": number;
                    "textMarginHorizontal": number;
                    "textFontFamily": string;
                    "placeholderFontFamily": string;
                    "labelMarginBottom": number;
                    "labelFontSize": string;
                    "labelFontWeight": string;
                    "labelFontFamily": string;
                    "captionMarginTop": number;
                    "captionFontSize": string;
                    "captionFontWeight": string;
                    "captionFontFamily": string;
                    "popoverMaxHeight": number;
                    "popoverBorderRadius": string;
                    "popoverBorderWidth": string;
                    "popoverBorderColor": string;
                };
                "variantGroups": {
                    "status": {
                        "basic": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "state": {
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "placeholderColor": string;
                                    "textColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "primary": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "state": {
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "placeholderColor": string;
                                    "textColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "success": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "state": {
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "placeholderColor": string;
                                    "textColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "info": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "state": {
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "placeholderColor": string;
                                    "textColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "warning": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "state": {
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "placeholderColor": string;
                                    "textColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "danger": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "state": {
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "placeholderColor": string;
                                    "textColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "control": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "labelColor": string;
                            "captionColor": string;
                            "placeholderColor": string;
                            "iconTintColor": string;
                            "state": {
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                    "labelColor": string;
                                    "placeholderColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                    };
                    "size": {
                        "small": {
                            "borderRadius": string;
                            "borderWidth": string;
                            "minHeight": string;
                            "paddingVertical": number;
                            "textFontSize": string;
                            "textFontWeight": string;
                            "placeholderFontSize": string;
                            "placeholderFontWeight": string;
                        };
                        "medium": {
                            "borderRadius": string;
                            "borderWidth": string;
                            "minHeight": string;
                            "paddingVertical": number;
                            "textFontSize": string;
                            "textFontWeight": string;
                            "placeholderFontSize": string;
                            "placeholderFontWeight": string;
                        };
                        "large": {
                            "borderRadius": string;
                            "borderWidth": string;
                            "minHeight": string;
                            "paddingVertical": number;
                            "textFontSize": string;
                            "textFontWeight": string;
                            "placeholderFontSize": string;
                            "placeholderFontWeight": string;
                        };
                    };
                };
            };
        };
        export { appearances_41 as appearances };
    }
    export namespace SelectOption {
        export namespace meta_21 {
            const scope_21: string;
            export { scope_21 as scope };
            export namespace parameters_21 {
                const paddingHorizontal_13: {
                    "type": string;
                };
                export { paddingHorizontal_13 as paddingHorizontal };
                const paddingVertical_15: {
                    "type": string;
                };
                export { paddingVertical_15 as paddingVertical };
                const paddingLeft_1: {
                    "type": string;
                };
                export { paddingLeft_1 as paddingLeft };
                const backgroundColor_122: {
                    "type": string;
                };
                export { backgroundColor_122 as backgroundColor };
                const iconWidth_14: {
                    "type": string;
                };
                export { iconWidth_14 as iconWidth };
                const iconHeight_14: {
                    "type": string;
                };
                export { iconHeight_14 as iconHeight };
                const iconMarginHorizontal_12: {
                    "type": string;
                };
                export { iconMarginHorizontal_12 as iconMarginHorizontal };
                const iconTintColor_93: {
                    "type": string;
                };
                export { iconTintColor_93 as iconTintColor };
                const textMarginHorizontal_10: {
                    "type": string;
                };
                export { textMarginHorizontal_10 as textMarginHorizontal };
                const textFontFamily_7: {
                    "type": string;
                };
                export { textFontFamily_7 as textFontFamily };
                const textFontSize_11: {
                    "type": string;
                };
                export { textFontSize_11 as textFontSize };
                const textFontWeight_11: {
                    "type": string;
                };
                export { textFontWeight_11 as textFontWeight };
                const textColor_90: {
                    "type": string;
                };
                export { textColor_90 as textColor };
            }
            export { parameters_21 as parameters };
            const appearances_42: {
                "default": {
                    "default": boolean;
                };
                "grouped": {
                    "default": boolean;
                };
            };
            export { appearances_42 as appearances };
            const variantGroups_27: {};
            export { variantGroups_27 as variantGroups };
            export namespace states_21 {
                const hover_27: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { hover_27 as hover };
                const disabled_28: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { disabled_28 as disabled };
                const selected_3: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { selected_3 as selected };
                const active_29: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { active_29 as active };
                const focused_27: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { focused_27 as focused };
            }
            export { states_21 as states };
        }
        export { meta_21 as meta };
        const appearances_43: {
            "default": {
                "mapping": {
                    "paddingHorizontal": number;
                    "paddingVertical": number;
                    "backgroundColor": string;
                    "textMarginHorizontal": number;
                    "textFontSize": string;
                    "textFontWeight": string;
                    "textFontFamily": string;
                    "textColor": string;
                    "iconWidth": number;
                    "iconHeight": number;
                    "iconMarginHorizontal": number;
                    "iconTintColor": string;
                    "state": {
                        "hover": {
                            "iconTintColor": string;
                            "backgroundColor": string;
                        };
                        "active": {
                            "backgroundColor": string;
                        };
                        "selected": {
                            "backgroundColor": string;
                            "textColor": string;
                            "iconTintColor": string;
                        };
                        "selected.hover": {
                            "background-color": string;
                            "textColor": string;
                        };
                        "disabled": {
                            "backgroundColor": string;
                            "textColor": string;
                            "iconTintColor": string;
                        };
                    };
                };
            };
            "grouped": {
                "mapping": {
                    "paddingLeft": number;
                };
            };
        };
        export { appearances_43 as appearances };
    }
    export namespace Radio {
        export namespace meta_22 {
            const scope_22: string;
            export { scope_22 as scope };
            export namespace parameters_22 {
                const width_4: {
                    "type": string;
                };
                export { width_4 as width };
                const height_3: {
                    "type": string;
                };
                export { height_3 as height };
                const borderRadius_22: {
                    "type": string;
                };
                export { borderRadius_22 as borderRadius };
                const borderWidth_21: {
                    "type": string;
                };
                export { borderWidth_21 as borderWidth };
                const borderColor_124: {
                    "type": string;
                };
                export { borderColor_124 as borderColor };
                const backgroundColor_123: {
                    "type": string;
                };
                export { backgroundColor_123 as backgroundColor };
                const textColor_91: {
                    "type": string;
                };
                export { textColor_91 as textColor };
                const textFontFamily_8: {
                    "type": string;
                };
                export { textFontFamily_8 as textFontFamily };
                const textMarginHorizontal_11: {
                    "type": string;
                };
                export { textMarginHorizontal_11 as textMarginHorizontal };
                const textFontSize_12: {
                    "type": string;
                };
                export { textFontSize_12 as textFontSize };
                const textFontWeight_12: {
                    "type": string;
                };
                export { textFontWeight_12 as textFontWeight };
                const iconWidth_15: {
                    "type": string;
                };
                export { iconWidth_15 as iconWidth };
                const iconHeight_15: {
                    "type": string;
                };
                export { iconHeight_15 as iconHeight };
                export const iconBorderRadius: {
                    "type": string;
                };
                const iconTintColor_94: {
                    "type": string;
                };
                export { iconTintColor_94 as iconTintColor };
                const outlineWidth_1: {
                    "type": string;
                };
                export { outlineWidth_1 as outlineWidth };
                const outlineHeight_1: {
                    "type": string;
                };
                export { outlineHeight_1 as outlineHeight };
                const outlineBorderRadius_1: {
                    "type": string;
                };
                export { outlineBorderRadius_1 as outlineBorderRadius };
                const outlineBackgroundColor_1: {
                    "type": string;
                };
                export { outlineBackgroundColor_1 as outlineBackgroundColor };
            }
            export { parameters_22 as parameters };
            const appearances_44: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_44 as appearances };
            export namespace variantGroups_28 {
                export namespace status_13 {
                    const basic_13: {
                        "default": boolean;
                    };
                    export { basic_13 as basic };
                    const primary_13: {
                        "default": boolean;
                    };
                    export { primary_13 as primary };
                    const success_13: {
                        "default": boolean;
                    };
                    export { success_13 as success };
                    const info_13: {
                        "default": boolean;
                    };
                    export { info_13 as info };
                    const warning_13: {
                        "default": boolean;
                    };
                    export { warning_13 as warning };
                    const danger_13: {
                        "default": boolean;
                    };
                    export { danger_13 as danger };
                    const control_13: {
                        "default": boolean;
                    };
                    export { control_13 as control };
                }
                export { status_13 as status };
            }
            export { variantGroups_28 as variantGroups };
            export namespace states_22 {
                const checked_1: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { checked_1 as checked };
                const hover_28: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { hover_28 as hover };
                const disabled_29: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { disabled_29 as disabled };
                const active_30: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { active_30 as active };
                const focused_28: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { focused_28 as focused };
            }
            export { states_22 as states };
        }
        export { meta_22 as meta };
        const appearances_45: {
            "default": {
                "mapping": {
                    "width": number;
                    "height": number;
                    "borderRadius": number;
                    "borderWidth": string;
                    "iconWidth": number;
                    "iconHeight": number;
                    "iconBorderRadius": number;
                    "iconTintColor": string;
                    "outlineWidth": number;
                    "outlineHeight": number;
                    "outlineBorderRadius": number;
                    "outlineBackgroundColor": string;
                    "textMarginHorizontal": number;
                    "textFontSize": string;
                    "textFontWeight": string;
                    "textFontFamily": string;
                };
                "variantGroups": {
                    "status": {
                        "basic": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "primary": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "success": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "info": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "warning": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "danger": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "control": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "textColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                            };
                        };
                    };
                };
            };
        };
        export { appearances_45 as appearances };
    }
    export namespace RadioGroup {
        export namespace meta_23 {
            const scope_23: string;
            export { scope_23 as scope };
            export namespace parameters_23 {
                export const itemMarginVertical: {
                    "type": string;
                };
            }
            export { parameters_23 as parameters };
            const appearances_46: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_46 as appearances };
            const variantGroups_29: {};
            export { variantGroups_29 as variantGroups };
            const states_23: {};
            export { states_23 as states };
        }
        export { meta_23 as meta };
        const appearances_47: {
            "default": {
                "mapping": {
                    "itemMarginVertical": number;
                };
            };
        };
        export { appearances_47 as appearances };
    }
    export namespace Spinner {
        export namespace meta_24 {
            const scope_24: string;
            export { scope_24 as scope };
            export namespace parameters_24 {
                const width_5: {
                    "type": string;
                };
                export { width_5 as width };
                const height_4: {
                    "type": string;
                };
                export { height_4 as height };
                const borderWidth_22: {
                    "type": string;
                };
                export { borderWidth_22 as borderWidth };
                const borderRadius_23: {
                    "type": string;
                };
                export { borderRadius_23 as borderRadius };
                const borderColor_125: {
                    "type": string;
                };
                export { borderColor_125 as borderColor };
            }
            export { parameters_24 as parameters };
            const appearances_48: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_48 as appearances };
            export namespace variantGroups_30 {
                export namespace status_14 {
                    const basic_14: {
                        "default": boolean;
                    };
                    export { basic_14 as basic };
                    const primary_14: {
                        "default": boolean;
                    };
                    export { primary_14 as primary };
                    const success_14: {
                        "default": boolean;
                    };
                    export { success_14 as success };
                    const info_14: {
                        "default": boolean;
                    };
                    export { info_14 as info };
                    const warning_14: {
                        "default": boolean;
                    };
                    export { warning_14 as warning };
                    const danger_14: {
                        "default": boolean;
                    };
                    export { danger_14 as danger };
                    const control_14: {
                        "default": boolean;
                    };
                    export { control_14 as control };
                }
                export { status_14 as status };
                export namespace size_8 {
                    const tiny_5: {
                        "default": boolean;
                    };
                    export { tiny_5 as tiny };
                    const small_8: {
                        "default": boolean;
                    };
                    export { small_8 as small };
                    const medium_8: {
                        "default": boolean;
                    };
                    export { medium_8 as medium };
                    const large_8: {
                        "default": boolean;
                    };
                    export { large_8 as large };
                    const giant_5: {
                        "default": boolean;
                    };
                    export { giant_5 as giant };
                }
                export { size_8 as size };
            }
            export { variantGroups_30 as variantGroups };
            const states_24: {};
            export { states_24 as states };
        }
        export { meta_24 as meta };
        const appearances_49: {
            "default": {
                "mapping": {};
                "variantGroups": {
                    "status": {
                        "basic": {
                            "borderColor": string;
                        };
                        "primary": {
                            "borderColor": string;
                        };
                        "success": {
                            "borderColor": string;
                        };
                        "info": {
                            "borderColor": string;
                        };
                        "warning": {
                            "borderColor": string;
                        };
                        "danger": {
                            "borderColor": string;
                        };
                        "control": {
                            "borderColor": string;
                        };
                    };
                    "size": {
                        "tiny": {
                            "width": number;
                            "height": number;
                            "borderRadius": number;
                            "borderWidth": number;
                        };
                        "small": {
                            "width": number;
                            "height": number;
                            "borderRadius": number;
                            "borderWidth": number;
                        };
                        "medium": {
                            "width": number;
                            "height": number;
                            "borderRadius": number;
                            "borderWidth": number;
                        };
                        "large": {
                            "width": number;
                            "height": number;
                            "borderRadius": number;
                            "borderWidth": number;
                        };
                        "giant": {
                            "width": number;
                            "height": number;
                            "borderRadius": number;
                            "borderWidth": number;
                        };
                    };
                };
            };
        };
        export { appearances_49 as appearances };
    }
    export namespace Tab {
        export namespace meta_25 {
            const scope_25: string;
            export { scope_25 as scope };
            export namespace parameters_25 {
                const textFontFamily_9: {
                    "type": string;
                };
                export { textFontFamily_9 as textFontFamily };
                const textFontSize_13: {
                    "type": string;
                };
                export { textFontSize_13 as textFontSize };
                const textFontWeight_13: {
                    "type": string;
                };
                export { textFontWeight_13 as textFontWeight };
                const textMarginVertical_1: {
                    "type": string;
                };
                export { textMarginVertical_1 as textMarginVertical };
                const textColor_92: {
                    "type": string;
                };
                export { textColor_92 as textColor };
                const iconWidth_16: {
                    "type": string;
                };
                export { iconWidth_16 as iconWidth };
                const iconHeight_16: {
                    "type": string;
                };
                export { iconHeight_16 as iconHeight };
                const iconMarginVertical_1: {
                    "type": string;
                };
                export { iconMarginVertical_1 as iconMarginVertical };
                const iconTintColor_95: {
                    "type": string;
                };
                export { iconTintColor_95 as iconTintColor };
            }
            export { parameters_25 as parameters };
            const appearances_50: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_50 as appearances };
            const variantGroups_31: {};
            export { variantGroups_31 as variantGroups };
            export namespace states_25 {
                const selected_4: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { selected_4 as selected };
                const hover_29: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { hover_29 as hover };
                const focused_29: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { focused_29 as focused };
            }
            export { states_25 as states };
        }
        export { meta_25 as meta };
        const appearances_51: {
            "default": {
                "mapping": {
                    "textMarginVertical": number;
                    "textFontSize": number;
                    "textFontWeight": string;
                    "textFontFamily": string;
                    "textColor": string;
                    "iconWidth": number;
                    "iconHeight": number;
                    "iconMarginVertical": number;
                    "iconTintColor": string;
                    "state": {
                        "hover": {
                            "textColor": string;
                            "iconTintColor": string;
                        };
                        "selected": {
                            "textColor": string;
                            "iconTintColor": string;
                        };
                    };
                };
            };
        };
        export { appearances_51 as appearances };
    }
    export namespace TabBar {
        export namespace meta_26 {
            const scope_26: string;
            export { scope_26 as scope };
            export namespace parameters_26 {
                const paddingVertical_16: {
                    "type": string;
                };
                export { paddingVertical_16 as paddingVertical };
                const backgroundColor_124: {
                    "type": string;
                };
                export { backgroundColor_124 as backgroundColor };
                const indicatorHeight_2: {
                    "type": string;
                };
                export { indicatorHeight_2 as indicatorHeight };
                export const indicatorBorderRadius: {
                    "type": string;
                };
                const indicatorBackgroundColor_4: {
                    "type": string;
                };
                export { indicatorBackgroundColor_4 as indicatorBackgroundColor };
            }
            export { parameters_26 as parameters };
            const appearances_52: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_52 as appearances };
            const variantGroups_32: {};
            export { variantGroups_32 as variantGroups };
            const states_26: {};
            export { states_26 as states };
        }
        export { meta_26 as meta };
        const appearances_53: {
            "default": {
                "mapping": {
                    "paddingVertical": number;
                    "backgroundColor": string;
                    "indicatorHeight": number;
                    "indicatorBorderRadius": number;
                    "indicatorBackgroundColor": string;
                };
            };
        };
        export { appearances_53 as appearances };
    }
    export namespace Text {
        export namespace meta_27 {
            const scope_27: string;
            export { scope_27 as scope };
            export namespace parameters_27 {
                export const fontFamily: {
                    "type": string;
                };
                export const fontSize: {
                    "type": string;
                };
                export const fontWeight: {
                    "type": string;
                };
                export const color: {
                    "type": string;
                };
            }
            export { parameters_27 as parameters };
            const appearances_54: {
                "default": {
                    "default": boolean;
                };
                "alternative": {
                    "default": boolean;
                };
                "hint": {
                    "default": boolean;
                };
            };
            export { appearances_54 as appearances };
            export namespace variantGroups_33 {
                export namespace category {
                    export const h1: {
                        "default": boolean;
                    };
                    export const h2: {
                        "default": boolean;
                    };
                    export const h3: {
                        "default": boolean;
                    };
                    export const h4: {
                        "default": boolean;
                    };
                    export const h5: {
                        "default": boolean;
                    };
                    export const h6: {
                        "default": boolean;
                    };
                    export const s1: {
                        "default": boolean;
                    };
                    export const s2: {
                        "default": boolean;
                    };
                    export const p1: {
                        "default": boolean;
                    };
                    export const p2: {
                        "default": boolean;
                    };
                    export const c1: {
                        "default": boolean;
                    };
                    export const c2: {
                        "default": boolean;
                    };
                    export const label: {
                        "default": boolean;
                    };
                }
                export namespace status_15 {
                    const basic_15: {
                        "default": boolean;
                    };
                    export { basic_15 as basic };
                    const primary_15: {
                        "default": boolean;
                    };
                    export { primary_15 as primary };
                    const success_15: {
                        "default": boolean;
                    };
                    export { success_15 as success };
                    const info_15: {
                        "default": boolean;
                    };
                    export { info_15 as info };
                    const warning_15: {
                        "default": boolean;
                    };
                    export { warning_15 as warning };
                    const danger_15: {
                        "default": boolean;
                    };
                    export { danger_15 as danger };
                    const control_15: {
                        "default": boolean;
                    };
                    export { control_15 as control };
                }
                export { status_15 as status };
            }
            export { variantGroups_33 as variantGroups };
            const states_27: {};
            export { states_27 as states };
        }
        export { meta_27 as meta };
        const appearances_55: {
            "default": {
                "mapping": {
                    "color": string;
                };
                "variantGroups": {
                    "category": {
                        "h1": {
                            "fontSize": string;
                            "fontWeight": string;
                            "fontFamily": string;
                        };
                        "h2": {
                            "fontSize": string;
                            "fontWeight": string;
                            "fontFamily": string;
                        };
                        "h3": {
                            "fontSize": string;
                            "fontWeight": string;
                            "fontFamily": string;
                        };
                        "h4": {
                            "fontSize": string;
                            "fontWeight": string;
                            "fontFamily": string;
                        };
                        "h5": {
                            "fontSize": string;
                            "fontWeight": string;
                            "fontFamily": string;
                        };
                        "h6": {
                            "fontSize": string;
                            "fontWeight": string;
                            "fontFamily": string;
                        };
                        "s1": {
                            "fontSize": string;
                            "fontWeight": string;
                            "fontFamily": string;
                        };
                        "s2": {
                            "fontSize": string;
                            "fontWeight": string;
                            "fontFamily": string;
                        };
                        "p1": {
                            "fontSize": string;
                            "fontWeight": string;
                            "fontFamily": string;
                        };
                        "p2": {
                            "fontSize": string;
                            "fontWeight": string;
                            "fontFamily": string;
                        };
                        "c1": {
                            "fontSize": string;
                            "fontWeight": string;
                            "fontFamily": string;
                        };
                        "c2": {
                            "fontSize": string;
                            "fontWeight": string;
                            "fontFamily": string;
                        };
                        "label": {
                            "fontSize": string;
                            "fontWeight": string;
                            "fontFamily": string;
                        };
                    };
                    "status": {
                        "basic": {
                            "color": string;
                        };
                        "primary": {
                            "color": string;
                        };
                        "success": {
                            "color": string;
                        };
                        "info": {
                            "color": string;
                        };
                        "warning": {
                            "color": string;
                        };
                        "danger": {
                            "color": string;
                        };
                        "control": {
                            "color": string;
                        };
                    };
                };
            };
            "alternative": {
                "mapping": {
                    "color": string;
                };
            };
            "hint": {
                "mapping": {
                    "color": string;
                };
            };
        };
        export { appearances_55 as appearances };
    }
    export namespace Toggle {
        export namespace meta_28 {
            const scope_28: string;
            export { scope_28 as scope };
            export namespace parameters_28 {
                const width_6: {
                    "type": string;
                };
                export { width_6 as width };
                const height_5: {
                    "type": string;
                };
                export { height_5 as height };
                const borderRadius_24: {
                    "type": string;
                };
                export { borderRadius_24 as borderRadius };
                const borderWidth_23: {
                    "type": string;
                };
                export { borderWidth_23 as borderWidth };
                const borderColor_126: {
                    "type": string;
                };
                export { borderColor_126 as borderColor };
                const backgroundColor_125: {
                    "type": string;
                };
                export { backgroundColor_125 as backgroundColor };
                export const thumbWidth: {
                    "type": string;
                };
                export const thumbHeight: {
                    "type": string;
                };
                export const thumbBorderRadius: {
                    "type": string;
                };
                export const thumbBackgroundColor: {
                    "type": string;
                };
                const textMarginHorizontal_12: {
                    "type": string;
                };
                export { textMarginHorizontal_12 as textMarginHorizontal };
                const textFontFamily_10: {
                    "type": string;
                };
                export { textFontFamily_10 as textFontFamily };
                const textFontSize_14: {
                    "type": string;
                };
                export { textFontSize_14 as textFontSize };
                const textFontWeight_14: {
                    "type": string;
                };
                export { textFontWeight_14 as textFontWeight };
                const textColor_93: {
                    "type": string;
                };
                export { textColor_93 as textColor };
                const iconWidth_17: {
                    "type": string;
                };
                export { iconWidth_17 as iconWidth };
                const iconHeight_17: {
                    "type": string;
                };
                export { iconHeight_17 as iconHeight };
                const iconTintColor_96: {
                    "type": string;
                };
                export { iconTintColor_96 as iconTintColor };
                const outlineWidth_2: {
                    "type": string;
                };
                export { outlineWidth_2 as outlineWidth };
                const outlineHeight_2: {
                    "type": string;
                };
                export { outlineHeight_2 as outlineHeight };
                const outlineBorderRadius_2: {
                    "type": string;
                };
                export { outlineBorderRadius_2 as outlineBorderRadius };
                const outlineBackgroundColor_2: {
                    "type": string;
                };
                export { outlineBackgroundColor_2 as outlineBackgroundColor };
            }
            export { parameters_28 as parameters };
            const appearances_56: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_56 as appearances };
            export namespace variantGroups_34 {
                export namespace status_16 {
                    const basic_16: {
                        "default": boolean;
                    };
                    export { basic_16 as basic };
                    const primary_16: {
                        "default": boolean;
                    };
                    export { primary_16 as primary };
                    const success_16: {
                        "default": boolean;
                    };
                    export { success_16 as success };
                    const info_16: {
                        "default": boolean;
                    };
                    export { info_16 as info };
                    const warning_16: {
                        "default": boolean;
                    };
                    export { warning_16 as warning };
                    const danger_16: {
                        "default": boolean;
                    };
                    export { danger_16 as danger };
                    const control_16: {
                        "default": boolean;
                    };
                    export { control_16 as control };
                }
                export { status_16 as status };
            }
            export { variantGroups_34 as variantGroups };
            export namespace states_28 {
                const checked_2: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { checked_2 as checked };
                const hover_30: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { hover_30 as hover };
                const disabled_30: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { disabled_30 as disabled };
                const active_31: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { active_31 as active };
                const focused_30: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { focused_30 as focused };
            }
            export { states_28 as states };
        }
        export { meta_28 as meta };
        const appearances_57: {
            "default": {
                "mapping": {
                    "width": number;
                    "height": number;
                    "borderRadius": number;
                    "borderWidth": string;
                    "thumbWidth": number;
                    "thumbHeight": number;
                    "thumbBorderRadius": number;
                    "outlineWidth": number;
                    "outlineHeight": number;
                    "outlineBorderRadius": number;
                    "textMarginHorizontal": number;
                    "textFontSize": string;
                    "textFontWeight": string;
                    "textFontFamily": string;
                    "iconWidth": number;
                    "iconHeight": number;
                };
                "variantGroups": {
                    "status": {
                        "basic": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "thumbBackgroundColor": string;
                            "outlineBackgroundColor": string;
                            "textColor": string;
                            "iconTintColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "thumbBackgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "primary": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "thumbBackgroundColor": string;
                            "outlineBackgroundColor": string;
                            "textColor": string;
                            "iconTintColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "thumbBackgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "success": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "thumbBackgroundColor": string;
                            "outlineBackgroundColor": string;
                            "textColor": string;
                            "iconTintColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "thumbBackgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "info": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "thumbBackgroundColor": string;
                            "outlineBackgroundColor": string;
                            "textColor": string;
                            "iconTintColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "thumbBackgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "warning": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "thumbBackgroundColor": string;
                            "outlineBackgroundColor": string;
                            "textColor": string;
                            "iconTintColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "thumbBackgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "danger": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "thumbBackgroundColor": string;
                            "outlineBackgroundColor": string;
                            "textColor": string;
                            "iconTintColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "thumbBackgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "iconTintColor": string;
                                };
                            };
                        };
                        "control": {
                            "borderColor": string;
                            "backgroundColor": string;
                            "thumbBackgroundColor": string;
                            "outlineBackgroundColor": string;
                            "textColor": string;
                            "iconTintColor": string;
                            "state": {
                                "checked": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "iconTintColor": string;
                                };
                                "focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.focused": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "checked.hover": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "outlineBackgroundColor": string;
                                };
                                "checked.active": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                };
                                "disabled": {
                                    "borderColor": string;
                                    "backgroundColor": string;
                                    "thumbBackgroundColor": string;
                                    "textColor": string;
                                };
                                "checked.disabled": {
                                    "iconTintColor": string;
                                };
                            };
                        };
                    };
                };
            };
        };
        export { appearances_57 as appearances };
    }
    export namespace Tooltip {
        export namespace meta_29 {
            const scope_29: string;
            export { scope_29 as scope };
            export namespace parameters_29 {
                const paddingHorizontal_14: {
                    "type": string;
                };
                export { paddingHorizontal_14 as paddingHorizontal };
                const paddingVertical_17: {
                    "type": string;
                };
                export { paddingVertical_17 as paddingVertical };
                const borderWidth_24: {
                    "type": string;
                };
                export { borderWidth_24 as borderWidth };
                const borderRadius_25: {
                    "type": string;
                };
                export { borderRadius_25 as borderRadius };
                const borderColor_127: {
                    "type": string;
                };
                export { borderColor_127 as borderColor };
                const backgroundColor_126: {
                    "type": string;
                };
                export { backgroundColor_126 as backgroundColor };
                const indicatorBackgroundColor_5: {
                    "type": string;
                };
                export { indicatorBackgroundColor_5 as indicatorBackgroundColor };
                const iconWidth_18: {
                    "type": string;
                };
                export { iconWidth_18 as iconWidth };
                const iconHeight_18: {
                    "type": string;
                };
                export { iconHeight_18 as iconHeight };
                const iconMarginHorizontal_13: {
                    "type": string;
                };
                export { iconMarginHorizontal_13 as iconMarginHorizontal };
                const iconTintColor_97: {
                    "type": string;
                };
                export { iconTintColor_97 as iconTintColor };
                const textMarginHorizontal_13: {
                    "type": string;
                };
                export { textMarginHorizontal_13 as textMarginHorizontal };
                const textFontFamily_11: {
                    "type": string;
                };
                export { textFontFamily_11 as textFontFamily };
                const textFontSize_15: {
                    "type": string;
                };
                export { textFontSize_15 as textFontSize };
                const textFontWeight_15: {
                    "type": string;
                };
                export { textFontWeight_15 as textFontWeight };
                const textColor_94: {
                    "type": string;
                };
                export { textColor_94 as textColor };
            }
            export { parameters_29 as parameters };
            const appearances_58: {
                "default": {
                    "default": boolean;
                };
            };
            export { appearances_58 as appearances };
            const variantGroups_35: {};
            export { variantGroups_35 as variantGroups };
            const states_29: {};
            export { states_29 as states };
        }
        export { meta_29 as meta };
        const appearances_59: {
            "default": {
                "mapping": {
                    "borderRadius": string;
                    "borderColor": string;
                    "backgroundColor": string;
                    "paddingHorizontal": number;
                    "paddingVertical": number;
                    "indicatorBackgroundColor": string;
                    "textMarginHorizontal": number;
                    "textFontSize": string;
                    "textFontWeight": string;
                    "textFontFamily": string;
                    "textColor": string;
                    "iconWidth": number;
                    "iconHeight": number;
                    "iconMarginHorizontal": number;
                    "iconTintColor": string;
                };
            };
        };
        export { appearances_59 as appearances };
    }
    export namespace TopNavigation {
        export namespace meta_30 {
            const scope_30: string;
            export { scope_30 as scope };
            export namespace parameters_30 {
                const minHeight_10: {
                    "type": string;
                };
                export { minHeight_10 as minHeight };
                const paddingVertical_18: {
                    "type": string;
                };
                export { paddingVertical_18 as paddingVertical };
                const paddingHorizontal_15: {
                    "type": string;
                };
                export { paddingHorizontal_15 as paddingHorizontal };
                const backgroundColor_127: {
                    "type": string;
                };
                export { backgroundColor_127 as backgroundColor };
                export const titleTextAlign: {
                    "type": string;
                };
                const titleFontFamily_3: {
                    "type": string;
                };
                export { titleFontFamily_3 as titleFontFamily };
                const titleFontSize_3: {
                    "type": string;
                };
                export { titleFontSize_3 as titleFontSize };
                const titleFontWeight_3: {
                    "type": string;
                };
                export { titleFontWeight_3 as titleFontWeight };
                const titleColor_3: {
                    "type": string;
                };
                export { titleColor_3 as titleColor };
                export const subtitleTextAlign: {
                    "type": string;
                };
                export const subtitleFontFamily: {
                    "type": string;
                };
                export const subtitleFontSize: {
                    "type": string;
                };
                export const subtitleFontWeight: {
                    "type": string;
                };
                export const subtitleColor: {
                    "type": string;
                };
            }
            export { parameters_30 as parameters };
            const appearances_60: {
                "default": {
                    "default": boolean;
                };
                "control": {
                    "default": boolean;
                };
            };
            export { appearances_60 as appearances };
            export namespace variantGroups_36 {
                export namespace alignment {
                    export const start: {
                        "default": boolean;
                    };
                    export const center: {
                        "default": boolean;
                    };
                }
            }
            export { variantGroups_36 as variantGroups };
            const states_30: {};
            export { states_30 as states };
        }
        export { meta_30 as meta };
        const appearances_61: {
            "default": {
                "mapping": {
                    "minHeight": number;
                    "paddingVertical": number;
                    "paddingHorizontal": number;
                    "backgroundColor": string;
                    "titleFontSize": string;
                    "titleFontWeight": string;
                    "titleFontFamily": string;
                    "titleColor": string;
                    "subtitleFontSize": string;
                    "subtitleFontWeight": string;
                    "subtitleFontFamily": string;
                    "subtitleColor": string;
                };
                "variantGroups": {
                    "alignment": {
                        "start": {
                            "titleTextAlign": string;
                            "subtitleTextAlign": string;
                        };
                        "center": {
                            "titleTextAlign": string;
                            "subtitleTextAlign": string;
                        };
                    };
                };
            };
            "control": {
                "mapping": {
                    "backgroundColor": string;
                };
            };
        };
        export { appearances_61 as appearances };
    }
    export namespace TopNavigationAction {
        export namespace meta_31 {
            const scope_31: string;
            export { scope_31 as scope };
            export namespace parameters_31 {
                const iconWidth_19: {
                    "type": string;
                };
                export { iconWidth_19 as iconWidth };
                const iconHeight_19: {
                    "type": string;
                };
                export { iconHeight_19 as iconHeight };
                const iconTintColor_98: {
                    "type": string;
                };
                export { iconTintColor_98 as iconTintColor };
                const iconMarginHorizontal_14: {
                    "type": string;
                };
                export { iconMarginHorizontal_14 as iconMarginHorizontal };
            }
            export { parameters_31 as parameters };
            const appearances_62: {
                "default": {
                    "default": boolean;
                };
                "control": {
                    "default": boolean;
                };
            };
            export { appearances_62 as appearances };
            const variantGroups_37: {};
            export { variantGroups_37 as variantGroups };
            export namespace states_31 {
                const hover_31: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { hover_31 as hover };
                const active_32: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { active_32 as active };
                const focused_31: {
                    "default": boolean;
                    "priority": number;
                    "scope": string;
                };
                export { focused_31 as focused };
            }
            export { states_31 as states };
        }
        export { meta_31 as meta };
        const appearances_63: {
            "default": {
                "mapping": {
                    "iconWidth": number;
                    "iconHeight": number;
                    "iconMarginHorizontal": number;
                    "iconTintColor": string;
                    "state": {
                        "hover": {
                            "iconTintColor": string;
                        };
                        "focused": {
                            "iconTintColor": string;
                        };
                        "active": {
                            "iconTintColor": string;
                        };
                    };
                };
            };
            "control": {
                "mapping": {
                    "iconTintColor": string;
                    "state": {
                        "hover": {
                            "iconTintColor": string;
                        };
                        "focused": {
                            "iconTintColor": string;
                        };
                        "active": {
                            "iconTintColor": string;
                        };
                    };
                };
            };
        };
        export { appearances_63 as appearances };
    }
}
