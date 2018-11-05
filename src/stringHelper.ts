export class StringHelper {
    public padLeft(num: any, size: any): string {
      var s = num + "";
      while (s.length < size) s = "0" + s;
      return s;
    }
    public padRight(num: any, size: any): string {
      var s = num + "";
      while (s.length < size) s = s + "0";
      return s;
    }
  }