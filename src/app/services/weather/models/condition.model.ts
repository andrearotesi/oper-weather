export class Condition {
  main: string;
  description: string;

  constructor(data: any | undefined) {
    this.main = data ? data.main : null;
    this.description = data ? data.description : null;
  }
}