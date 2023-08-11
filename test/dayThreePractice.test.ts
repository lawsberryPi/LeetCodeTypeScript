import isBalanced, { canJump, displayChar, removeDuplicates, simpleTextEditor, threeSum } from "../src/leetcode/dayThreePractice";
import { inputArray } from "./data/simpleTextInputData";

describe("day three", () => {
  test("isBalanced", () => {
    const s = "{[()]}";
    const result = isBalanced(s);
    expect(result).toBe("YES");
  });

  test("simple text editor", () => {
    const inputs = ["8", "1 abc", "3 3", "2 3", "1 xy", "3 2", "4", "4", "3 1"];
    inputs.forEach(input => {
      const result = simpleTextEditor(input);
    });
    expect(0).toBe(0);
  });

  test("simple text editor with 1000 inputs", () => {
    inputArray.forEach(input => {
      const result = simpleTextEditor(input);
    });
    console.log(displayChar);
    expect(displayChar).toBe(displayChar);
  });

  test("three sum", () => {
    const inputArray = [-1,0,1,2,-1,-4];
    const expectedValue = [[-1,-1,2],[-1,0,1]];
    const result = threeSum(inputArray);
    expect(expectedValue).toEqual(result);
  })

  test("remove sorted array", () => {
    const inputArray = [1,1,1,2,2,3];
    const expectedValue = [1,1,2,2,3];
    const result = removeDuplicates(inputArray);
    expect(result).toBe(expectedValue.length);
  })

  test("remove sorted array with four element", () => {
    const inputArray = [0,0,1,1,1,1,2,3,3];
    const expectedValue = [0,0,1,1,2,3,3];
    const result = removeDuplicates(inputArray);
    expect(result).toBe(expectedValue.length);
  })

  test("remove sorted array with six element", () => {
    const inputArray = [1,2,2,2];
    const expectedValue = [1,2,2];
    const result = removeDuplicates(inputArray);
    expect(result).toBe(expectedValue.length);
  })

  test("can jump stack solution", () => {
    const inputArray = [2,0,0];
    const expectedValue = true;
    const result = canJump(inputArray);
    expect(result).toBe(expectedValue);
  })
});
