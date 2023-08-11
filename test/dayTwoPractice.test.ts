import timeConversion, {
  SinglyLinkedListNode,
  countingSort,
  mergeLists,
  twoStackAsQueue
} from "../src/leetcode/dayTwoPractice";
import { miniMaxSum } from "../src/leetcode/dayTwoPractice";

describe("timeConversion", () => {
  test("plugMins an empty array", () => {
    const testTime = "12:01:00PM";
    const result = timeConversion(testTime);
    expect(result).toEqual("12:01:00");
  });

  test("plugMins an empty array", () => {
    const input = [1, 2, 3, 4, 5];
    const output = miniMaxSum(input);
    const result = Math.trunc(7 / 2);
    expect(output).toEqual([10, 14]);
  });

  test("counting sort array generation", () => {
    const input = [1, 1, 3, 2, 1];
    const expectedOut = [0, 3, 1, 1];
    const padding = new Array(96).fill(input).fill(0);
    const newArray = [...expectedOut, ...padding];
    const output = countingSort(input);
    expect(output).toEqual(newArray);
  });

  test("merge two sorted linked list", () => {
    const head1: SinglyLinkedListNode = {
      data: 1,
      next: { data: 3, next: { data: 7 } }
    };
    const head2: SinglyLinkedListNode = {
      data: 1,
      next: { data: 2 }
    };

    const merged = mergeLists(head1, head2);
    console.log(merged);
    expect(merged.data).toBe(1);
  });

  test("twoStackAsQueue", () => {
    const testArray = [[10], [1, 42], [2], [1, 14], [3], [1, 28], [3], [1, 60], [1, 78], [2], [2]];
    testArray.forEach(eachElement => twoStackAsQueue(eachElement));
  });
});
