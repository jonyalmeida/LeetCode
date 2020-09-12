/*Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]. */

//solution 1
const runningSum1 = function (nums) {
    return nums.map((x, i) => {
        return nums.slice(0, i + 1).reduce((sum, y) => sum + y);
    });
};

console.log(runningSum1([1, 1, 1, 1, 1]));
console.log(runningSum1([1, 2, 3, 4]));

//solution 2
const runningSum2 = nums => {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }
    return nums;
}

console.log(runningSum2([1, 1, 1, 1, 1]));
console.log(runningSum2([1, 2, 3, 4]));
