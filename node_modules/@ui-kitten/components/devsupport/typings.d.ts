import { ReactElement } from 'react';
export declare type ChildrenProp<Element extends ReactElement = ReactElement> = Element | Element[];
export declare type ChildrenWithProps<Props = {}> = ChildrenProp<ReactElement<Props>>;
export declare type EvaStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'control' | string;
export declare type EvaSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant' | string;
export declare type EvaInputSize = 'small' | 'medium' | 'large' | string;
export declare class IndexPath {
    readonly row: number;
    readonly section?: number;
    constructor(row: number, section?: number);
    get groupIndex(): IndexPath;
    toString(): string;
    equals: (other: IndexPath) => boolean;
}
