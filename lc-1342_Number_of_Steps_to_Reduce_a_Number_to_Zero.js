/*
Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

Example 1:
Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.

Example 2:
Input: num = 8
Output: 4
Explanation: 
Step 1) 8 is even; divide by 2 and obtain 4. 
Step 2) 4 is even; divide by 2 and obtain 2. 
Step 3) 2 is even; divide by 2 and obtain 1. 
Step 4) 1 is odd; subtract 1 and obtain 0.

Example 3:
Input: num = 123
Output: 12

Constraints:
0 <= num <= 10^6 */

//solution 1
const numberOfSteps1 = num => {
    for (var i = 0; num > 0; i++) {
        if (num % 2) {
            num--;
        } else {
            num /= 2;
        }
    }
    return i;
};

console.log(numberOfSteps1(14));
console.log(numberOfSteps1(8));
console.log(numberOfSteps1(123));

//solution 2
const numberOfSteps2 = num => {
    if (num <= 0) return 0;
    return 1 + (num % 2 ? numberOfSteps2(num - 1) : numberOfSteps2(num / 2));
}

console.log(numberOfSteps2(14));
console.log(numberOfSteps2(8));
console.log(numberOfSteps2(123));