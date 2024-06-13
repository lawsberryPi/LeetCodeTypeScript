const isSubsequence = function isSubsequence(s: string, t: string): boolean {
    var searchPointer = 0;
    var targetPointer = 0;
    while (targetPointer < t.length) {
        const searchOrigin = s[searchPointer];
        const targetOrigin = t[targetPointer];
        if (searchPointer == s.length) {
            return true;
        }
        else if (searchOrigin == targetOrigin) {
            searchPointer++;
            targetPointer++;
        } else {
            targetPointer++;
        }
    }

    return searchPointer == s.length;
};

const longestSubarray = function longestSubarray(nums: number[]): number {
    var leftPointer = 0;
    var rightPointer = nums.length - 1;
    var zeroCount = nums.filter(num => num === 0).length;
    if (zeroCount <= 1) {
        return nums.length - zeroCount;
    }

    var nextZeroPath = 0;
    while (leftPointer < rightPointer && nextZeroPath < nums.length/2) {
        if (nums[leftPointer + nextZeroPath] === 0) {
            leftPointer = leftPointer + nextZeroPath + 1;
            nextZeroPath = 0;
            zeroCount--;
        }
        else if (nums[rightPointer - nextZeroPath] === 0) {
            rightPointer = rightPointer - nextZeroPath - 1;
            nextZeroPath = 0;
            zeroCount--;
        }
        else
        {
            nextZeroPath ++; 
        }

        if (zeroCount === 1) {
            return rightPointer - leftPointer;
        }

    }
    
    return 0;
}

export { isSubsequence, longestSubarray }