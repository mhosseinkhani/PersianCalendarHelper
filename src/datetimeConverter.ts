import { StringHelper } from "./stringHelper";

export class PersianCalendarService {
    private stringHelper: StringHelper = new StringHelper();
    weekDayNames: string[] = [
      "شنبه",
      "یکشنبه",
      "دوشنبه",
      "سه شنبه",
      "چهارشنبه",
      "پنج شنبه",
      "جمعه"
    ];
    monthNames: string[] = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند"
    ];
    weekDayName: string='';
    monthName: string='' ;
    day: number = -1;
    month: number = -1;
    year: number = -1;
    ld: number = -1;
    farsiDate: string = '';
    today: Date = new Date();
    gregorianYear: any = null;
    gregorianMonth: any = null;
    gregorianDate: any = null;
    dayOfWeek: any = null;
    yearDays: number[] = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    leapYearDays: number[] = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
  
    constructor() {}
  
    longPersianDate(gregorianDate: any): string {
      this.today = new Date(gregorianDate);
      this.gregorianYear = this.today.getFullYear();
      this.gregorianMonth = this.today.getMonth() + 1;
      this.gregorianDate = this.today.getDate();
      this.dayOfWeek = this.today.getDay();
      this.toPersian(gregorianDate);
      return (
        this.weekDayName + " " + this.day + " " + this.monthName + " " + this.year
      );
    }
    longPersianDateTime(gregorianDate: any): string {
      this.today = new Date(gregorianDate);
      this.gregorianYear = this.today.getFullYear();
      this.gregorianMonth = this.today.getMonth() + 1;
      this.gregorianDate = this.today.getDate();
      this.dayOfWeek = this.today.getDay();
      this.toPersian(gregorianDate);
      return (
        this.today.getHours() +
        ":" +
        this.today.getMinutes() +
        " " +
        this.weekDayName +
        " " +
        this.day +
        " " +
        this.monthName +
        " " +
        this.year
      );
    }
    shortPersianDateTime(gregorianDate: any): string {
      this.today = new Date(gregorianDate);
      this.gregorianYear = this.today.getFullYear();
      this.gregorianMonth = this.today.getMonth() + 1;
      this.gregorianDate = this.today.getDate();
      this.dayOfWeek = this.today.getDay();
      this.toPersian(gregorianDate);
      return (
        this.today.getHours() +
        ":" +
        this.today.getMinutes() +
        "       " +
        this.year +
        "/" +
        this.stringHelper.padLeft(Math.floor(this.month), 2) +
        "/" +
        this.stringHelper.padLeft(this.day, 2)
      );
    }
    shortPersianDate(gregorianDate: any): string {
      this.today = new Date(gregorianDate);
      this.gregorianYear = this.today.getFullYear();
      this.gregorianMonth = this.today.getMonth() + 1;
      this.gregorianDate = this.today.getDate();
      this.dayOfWeek = this.today.getDay();
      this.toPersian(gregorianDate);
      return (
        this.year +
        "/" +
        this.stringHelper.padLeft(Math.floor(this.month), 2) +
        "/" +
        this.stringHelper.padLeft(this.day, 2)
      );
    }
    shortPersinaDateNow(): string {
      this.today = new Date();
      this.gregorianYear = this.today.getFullYear();
      this.gregorianMonth = this.today.getMonth() + 1;
      this.gregorianDate = this.today.getDate();
      this.dayOfWeek = this.today.getDay();
      this.toPersian(this.today);
      return (
        this.year +
        "/" +
        this.stringHelper.padLeft(Math.floor(this.month), 2) +
        "/" +
        this.stringHelper.padLeft(this.day, 2)
      );
    }
    toPersian(gregorianDate: any) {
      if (this.gregorianYear % 4 != 0) this.farsiDate = this.dateCalculate();
      else this.farsiDate = this.leapDateCalculate();
      this.monthName = this.monthNames[Math.floor(this.month - 1)];
      this.weekDayName = this.weekDayNames[this.dayOfWeek + 1];
    }
  
    dateCalculate(): string {
      this.day = this.yearDays[this.gregorianMonth - 1] + this.gregorianDate;
      if (this.day > 79) {
        this.day = this.day - 79;
        if (this.day <= 186) {
          var day2 = this.day;
          this.month = day2 / 31 + 1;
          this.day = day2 % 31;
          if (day2 % 31 == 0) {
            this.month--;
            this.day = 31;
          }
          this.year = this.gregorianYear - 621;
        } else {
          var day2 = this.day - 186;
          this.month = day2 / 30 + 7;
          this.day = day2 % 30;
          if (day2 % 30 == 0) {
            this.month = day2 / 30 + 6;
            this.day = 30;
          }
          this.year = this.gregorianYear - 621;
        }
      } else {
        this.ld =
          this.gregorianYear > 1996 && this.gregorianYear % 4 == 1 ? 11 : 10;
        var day2 = this.day + this.ld;
        this.month = day2 / 30 + 10;
        this.day = day2 % 30;
        if (day2 % 30 == 0) {
          this.month--;
          this.day = 30;
        }
        this.year = this.gregorianYear - 622;
      }
      var fullDate = this.day + "/" + Math.floor(this.month) + "/" + this.year;
      return fullDate;
    }
  
    leapDateCalculate(): string {
      this.day = this.leapYearDays[this.gregorianMonth - 1] + this.gregorianDate;
      this.ld = this.gregorianYear >= 1996 ? 79 : 80;
      if (this.day > this.ld) {
        this.day = this.day - this.ld;
        if (this.day <= 186) {
          var day2 = this.day;
          this.month = day2 / 31 + 1;
          this.day = day2 % 31;
          if (day2 % 31 == 0) {
            this.month--;
            this.day = 31;
          }
          this.year = this.gregorianYear - 621;
        } else {
          var day2 = this.day - 186;
          this.month = day2 / 30 + 7;
          this.day = day2 % 30;
          if (day2 % 30 == 0) {
            this.month--;
            this.day = 30;
          }
          this.year = this.gregorianYear - 621;
        }
        var fullDate = this.day + "/" + Math.floor(this.month) + "/" + this.year;
        return fullDate;
      } else {
        var day2 = this.day + 10;
        this.month = day2 / 30 + 10;
        this.day = day2 % 30;
        if (day2 % 30 == 0) {
          this.month--;
          this.day = 30;
        }
        this.year = this.gregorianYear - 622;
      }
      return '';
    }
  }
  