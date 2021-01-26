export declare const $schema: string;
export declare const $ref: string;
export declare const title: string;
export declare namespace definitions {
    export const root: {
        "type": string;
        "required": string[];
        "properties": {
            "$schema": {
                "type": string;
            };
            "version": {
                "$ref": string;
            };
            "strict": {
                "$ref": string;
            };
            "components": {
                "$ref": string;
            };
        };
        "additionalProperties": {
            "$ref": string;
        };
    };
    export const version: {
        "type": string;
    };
    export const strictTokens: {
        "description": string;
        "type": string;
        "additionalProperties": {
            "type": string[];
        };
    };
    export namespace components {
        export namespace propertyNames {
            export const pattern: string;
        }
        export namespace additionalProperties {
            const $ref_1: string;
            export { $ref_1 as $ref };
        }
    }
    export const control: {
        "description": string;
        "type": string;
        "required": string[];
        "properties": {
            "meta": {
                "type": string;
                "required": string[];
                "properties": {
                    "scope": {
                        "$ref": string;
                    };
                    "parameters": {
                        "type": string;
                        "propertyNames": {
                            "pattern": string;
                        };
                        "additionalProperties": {
                            "$ref": string;
                        };
                    };
                    "appearances": {
                        "type": string;
                        "propertyNames": {
                            "pattern": string;
                        };
                        "additionalProperties": {
                            "$ref": string;
                        };
                    };
                    "variantGroups": {
                        "type": string;
                        "propertyNames": {
                            "pattern": string;
                        };
                        "additionalProperties": {
                            "type": string;
                            "propertyNames": {
                                "pattern": string;
                            };
                            "minProperties": number;
                            "additionalProperties": {
                                "$ref": string;
                            };
                        };
                    };
                    "states": {
                        "type": string;
                        "propertyNames": {
                            "pattern": string;
                        };
                        "additionalProperties": {
                            "$ref": string;
                        };
                    };
                };
                "additionalProperties": boolean;
            };
            "appearances": {
                "type": string;
                "propertyNames": {
                    "pattern": string;
                };
                "minProperties": number;
                "additionalProperties": {
                    "$ref": string;
                };
            };
        };
        "additionalProperties": boolean;
    };
    export const appearanceMeta: {
        "required": string[];
        "type": string;
        "properties": {
            "default": {
                "type": string;
            };
        };
        "additionalProperties": boolean;
    };
    export const variantMeta: {
        "type": string;
        "required": string[];
        "properties": {
            "default": {
                "type": string;
            };
        };
        "additionalProperties": boolean;
    };
    export const stateMeta: {
        "type": string;
        "required": string[];
        "properties": {
            "default": {
                "type": string;
            };
            "priority": {
                "type": string;
                "minimum": number;
            };
            "scope": {
                "$ref": string;
            };
        };
    };
    export const parameterMeta: {
        "type": string;
        "required": string[];
        "properties": {
            "type": {
                "type": string;
                "enum": string[];
            };
        };
        "additionalProperties": boolean;
    };
    export const scope: {
        "description": string;
        "type": string;
        "enum": string[];
    };
    export const appearance: {
        "description": string;
        "type": string;
        "required": string[];
        "properties": {
            "mapping": {
                "$ref": string;
            };
            "variantGroups": {
                "type": string;
                "propertyNames": {
                    "pattern": string;
                };
                "additionalProperties": {
                    "$ref": string;
                };
            };
        };
        "additionalProperties": boolean;
    };
    export const variant: {
        "description": string;
        "type": string;
        "propertyNames": {
            "pattern": string;
        };
        "additionalProperties": {
            "$ref": string;
        };
    };
    export const mapping: {
        "description": string;
        "type": string;
        "propertyNames": {
            "pattern": string;
        };
        "properties": {
            "state": {
                "$ref": string;
                "propertyNames": {
                    "pattern": string;
                };
                "minProperties": number;
            };
        };
        "additionalProperties": {
            "$ref": string;
        };
    };
    export namespace parameter {
        export const description: string;
        export const anyOf: ({
            "type": string[];
            "$ref"?: undefined;
        } | {
            "$ref": string;
            "type"?: undefined;
        })[];
    }
}
