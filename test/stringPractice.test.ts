import { longestCommonPrefix, reverseWords}  from "../src/leetcode/stringPractice"

describe("stringPractice", () => {
    test("reverseWords", () => {
      const input = "  this is    a test  ";
      const result = "test a is this";
      const output = reverseWords(input)
      expect(output).toEqual(result);
    });

    test("longestCommonPrefix", () => {
        const newArray = new Array<number>(...[1, 2]);

        const input = ["cir","car"];
        const result = "c";
        const test = "thisisatest".slice(0, 5);
        const output = longestCommonPrefix(input)
        expect(output).toEqual(result);
    })
  });

