/**
 * convert twelve hour format to military format
 * @param A single string  that represents a time in -hour clock format (i.e.:hh:mm:ssAM or hh:mm:ssPM)
 * @returns military format
 */
export default function timeConversion(twelveHourFormat: string): string {
  const whichHalf = twelveHourFormat.slice(-2); // take a last two char to determine whether morning or afternoon
  const [hourString, minutString, secondString] = twelveHourFormat.split(":");
  let hour: string;
  if (whichHalf === "AM") {
    hour = hourString === "12" ? "00" : hourString;
  } else {
    hour = hourString === "12" ? hourString : (parseInt(hourString) + 12).toString();
  }
  return `${hour}:${minutString}:${secondString.slice(0, -2)}`;
}

/**
 * Given five positive integers, find the minimum and maximum values that can be calculated
 * by summing exactly four of the five integers. Then print the respective minimum and maximum
 * values as a single line of two space-separated long integers.
 * @param arr A single line of five space-separated integers.
 */
export function miniMaxSum(arr: number[]): number[] {
  // Write your code here
  arr.sort((n1, n2) => n1 - n2);
  const minSum = arr.slice(0, 4).reduce((sum, current) => sum + current, 0);
  const maxSum = arr.slice(-4).reduce((sum, current) => sum + current, 0);
  return [minSum, maxSum];
}

/**
 *
 * @param arr input array, indicate the
 */
export function countingSort(arr: number[]): number[] {
  // Write your code here
  let countArray = new Array(100).fill(0);
  arr.forEach(element => {
    countArray[element] = countArray[element] + 1;
  });
  return countArray;
}

/**
 * we have to think about how LinkedList is being read
 * @param head1 singly linked list 1
 * @param head2 singly linked list 2
 * @returns a merged sorted linked list
 */
export function mergeLists(head1: SinglyLinkedListNode, head2: SinglyLinkedListNode): SinglyLinkedListNode {
  let currentHead1: SinglyLinkedListNode | undefined = head1;
  let currentHead2: SinglyLinkedListNode | undefined = head2;
  let newConstructedList: SinglyLinkedListNode | undefined;

  while (currentHead1 || currentHead2) {
    // if both list have value
    let newNodeData: number;
    if (currentHead1?.data && currentHead2?.data) {
      if (currentHead1.data > currentHead2.data) {
        newNodeData = currentHead2.data;
        currentHead2 = currentHead2.next;
      } else {
        newNodeData = currentHead1.data;
        currentHead1 = currentHead1.next;
      }
      // if only head1 has value
    } else if (currentHead1?.data) {
      newNodeData = currentHead1.data;
      currentHead1 = currentHead1.next;
      // if only head2 has value
    } else {
      newNodeData = currentHead2?.data ?? 0;
      currentHead2 = currentHead2?.next;
    }

    if (!newConstructedList) {
      newConstructedList = { data: newNodeData };
    } else {
      let current = newConstructedList;
      while (current?.next) {
        current = current.next;
      }
      if (current) current.next = { data: newNodeData };
    }
  }
  return newConstructedList ? newConstructedList : { data: 0 };
}
const stack1: number[] = [];
const stack2: number[] = [];
export function twoStackAsQueue(inputLine: number[]) {
  switch (inputLine[0]) {
    // case one means en-queuen, if stack 1 is not empty move everything to stack 2
    case 1:
      if (stack1.length > 0) {
        while (stack1.length > 0) {
          const popNumber = stack1.pop();
          if (popNumber) stack2.push(popNumber);
        }
        stack1.push(inputLine[1]);
        while (stack2.length > 0) {
          const popNumber = stack2.pop();
          if (popNumber) stack1.push(popNumber);
        }
      } else {
        stack1.push(inputLine[1]);
      }
      break;
    case 2:
      stack1.pop();
      break;
    case 3:
      console.log(stack1.at(-1));
      break;
  }
}

export interface SinglyLinkedListNode {
  data: number;
  next?: SinglyLinkedListNode;
}
