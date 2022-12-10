export class TempUtils {
  static kelvinToCelsius(kelvin: number): number {
    if (kelvin === undefined || kelvin === null) {
      return null;
    }
    return Math.round(kelvin - 273.15);
  }
}