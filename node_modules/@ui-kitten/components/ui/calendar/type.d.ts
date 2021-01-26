/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export interface CalendarDateOptions {
    bounding: boolean;
    holiday: boolean;
    range?: boolean;
}
export interface CalendarRange<D> {
    startDate?: D;
    endDate?: D;
}
export interface CalendarDateInfo<D> extends CalendarDateOptions {
    date: D;
}
export interface CalendarViewMode {
    id: string;
    navigationNext: () => CalendarViewMode;
    pickNext: () => CalendarViewMode;
}
interface CalendarViewModes {
    DATE: CalendarViewMode;
    MONTH: CalendarViewMode;
    YEAR: CalendarViewMode;
}
export declare const CalendarViewModes: CalendarViewModes;
export {};
