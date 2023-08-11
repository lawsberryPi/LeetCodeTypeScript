/**
 *
 * @param s input string represent brackets
 * output string, "YES" or "NO"
 */
export default function isBalanced(s: string): string {
  // Write your code here
  const bracketPair: { [key: string]: string } = { "{": "}", "[": "]", "(": ")" };
  const isBalancedTracker: string[] = [];
  [...s].forEach(char => {
    const peek = isBalancedTracker.at(-1);
    if (peek && char === bracketPair[peek]) {
      isBalancedTracker.pop();
    } else {
      isBalancedTracker.push(char);
    }
  });

  return isBalancedTracker.length === 0 ? "YES" : "NO";
}

// we will need two stacks,
// one is for the main display, and the other is used for undo function
// in order to remember the last action, we will need a stack for the last
// the only time we need to bring back text to main stack is redo - delete
// if it is append, will append to main stack
//
const previousStack: string[] = [];
let mainString: string = "";
export const displayChar: string[] = [];
export function simpleTextEditor(command: string) {
  const [commandType, commandContent] = command.split(" ");

  switch (parseInt(commandType)) {
    case 1:
      previousStack.push(mainString);
      mainString = mainString.concat(commandContent);
      break;
    case 2:
      previousStack.push(mainString);
      mainString = mainString.slice(0, -parseInt(commandContent));
      break;
    case 3:
      console.log(mainString.at(parseInt(commandContent) - 1));
      displayChar.push(mainString.at(parseInt(commandContent) - 1) ?? "!!!!!!!!!!!");
      break;
    case 4:
      // undo append to text
      const prevValue = previousStack.pop();
      if (prevValue) mainString = prevValue;
      break;
  }
}

/**
 * since column can only be 1, we are just looking into the
 * row combination.
 * 1, 1, 1
 * 2, 1
 * 1, 2
 * 3
 * @param n is the height of the lego block
 * @param m is the width of the lego block
 */

export function legoBlocks(n: number, m: number) {}

export function threeSum(nums: number[]): number[][] {
  const returnArray = new Set<string>();
  nums.sort((n1, n2) => n1 - n2);
  for (let i = 0; i < nums.length - 2; i++)
    for (let j = i + 1; j < nums.length - 1; j++) {
      const searchTarget = nums.slice(j + 1, nums.length);
      const whatIsIt = -(nums[i] + nums[j]);
      const foundIndex = searchTarget.indexOf(whatIsIt);
      if (foundIndex > -1) {
        const first = nums[i];
        const second = nums[j];
        const third = searchTarget[foundIndex];
        returnArray.add([nums[i], second, third].join(","));
      }
    }
  const stringArray = Array.from(returnArray.values());
  return stringArray.map((eachLine: string) => eachLine.split(",").map(eachElement => parseInt(eachElement)));
}

export function removeDuplicates(nums: number[]): number {
  let startPointer = 0;
  let value = nums[startPointer];
  let numberOfDuplications = 0;
  for (let endPointer = 1; endPointer < nums.length; endPointer++) {
    if (value !== nums[endPointer]) {
      value = nums[endPointer];
      numberOfDuplications = endPointer - startPointer;
      if (numberOfDuplications > 2) {
        nums.splice(startPointer, numberOfDuplications - 2);
        endPointer = endPointer - (numberOfDuplications - 2);
      } 
      startPointer = endPointer;
    }
  }

  // finish for loop, checking for the last element
  if (nums.length - startPointer > 2) {
    nums.splice(startPointer, nums.length - startPointer - 2);
  }

  return nums.length;
}


export function maxProfit(prices: number[]): number {
  let lowValue = prices[0];
  let totalProfit = 0;

  for(let n = 1; n < prices.length; n ++){
    if (lowValue < prices[n]) {
      totalProfit = (prices[n] - lowValue) + totalProfit;
      lowValue = prices[n];
    }
  }
  return totalProfit;
};


export function canJump(nums: number[]): boolean {
  if(nums.length <= 1) return true
  const processStack = [0];
  while(processStack.length > 0){
    const currentNode = processStack.pop();
    if(currentNode !== undefined){
      if( currentNode >= nums.length - 1) return true
      if(nums[currentNode] > 0){
        for(let n = 1; n <= nums[currentNode] ; n ++){
          processStack.push(currentNode + n);
        }
      }
    }
  }
  return false;
};