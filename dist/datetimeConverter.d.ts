export declare class PersianCalendarService {
    private stringHelper;
    weekDayNames: string[];
    monthNames: string[];
    weekDayName: string;
    monthName: string;
    day: number;
    month: number;
    year: number;
    ld: number;
    farsiDate: string;
    today: Date;
    gregorianYear: any;
    gregorianMonth: any;
    gregorianDate: any;
    dayOfWeek: any;
    yearDays: number[];
    leapYearDays: number[];
    constructor();
    longPersianDate(gregorianDate: any): string;
    longPersianDateTime(gregorianDate: any): string;
    shortPersianDateTime(gregorianDate: any): string;
    shortPersianDate(gregorianDate: any): string;
    shortPersinaDateNow(): string;
    toPersian(gregorianDate: any): void;
    dateCalculate(): string;
    leapDateCalculate(): string;
}
