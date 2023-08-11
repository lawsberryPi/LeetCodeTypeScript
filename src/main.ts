import plusMinus from "./leetcode/plusMinus";

export default class Main {
  readonly MAIN_VALUE = "class wide ready only variable";

  static execute(params: string): string {
    const test = plusMinus([-4, 3, -9, 0, 4, 1]);
    console.log(test);
    return params;
  }
}

Main.execute("this what is the change how does it change?");
