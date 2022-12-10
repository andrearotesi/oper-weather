import {ConditionEnum} from "./condition.enum";

export class Condition {
  main: ConditionEnum;
  description: string;

  constructor(data: any | undefined) {
    this.main = data ? data.main : null;
    this.description = data ? data.description : null;
  }
}