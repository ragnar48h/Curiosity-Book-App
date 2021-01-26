import { NativeSyntheticEvent } from 'react-native';
export interface EdgeInsets {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
export declare type InsetChangedEvent = NativeSyntheticEvent<{
    insets: EdgeInsets;
}>;
export declare type InsetChangeNativeCallback = (event: InsetChangedEvent) => void;
