export declare class PersianCalendarService {
    private stringHelper;
    weekDayNames: string[];
    monthNames: string[];
    strWeekDay: string;
    strMonth: string;
    day: number;
    month: number;
    year: number;
    ld: number;
    farsiDate: string;
    today: Date;
    gregorianYear: any;
    gregorianMonth: any;
    gregorianDate: any;
    WeekDay: any;
    buf1: number[];
    buf2: number[];
    constructor();
    longPersianDate(gregorianDate: any): string;
    longPersianDateTime(gregorianDate: any): string;
    shortPersianDateTime(gregorianDate: any): string;
    shortPersianDate(gregorianDate: any): string;
    shortPersinaDateNow(): string;
    toPersian(gregorianDate: any): void;
    func1(): string;
    func2(): string;
}
