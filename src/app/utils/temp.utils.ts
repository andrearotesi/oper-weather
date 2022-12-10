export class TempUtils {
  static farenheitToCelsius(farenheit: number): number {
    if (farenheit === undefined || farenheit === null) {
      return null;
    }
    return Math.floor(((farenheit - 32) * 5) / 9);
  }
}