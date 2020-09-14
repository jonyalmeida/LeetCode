/*
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
Return the element repeated N times.

Example 1:
Input: [1,2,3,3]
Output: 3

Example 2:
Input: [2,1,2,5,3,2]
Output: 2

Example 3:
Input: [5,1,5,2,5,3,5,4]
Output: 5

Note:
    4 <= A.length <= 10000
    0 <= A[i] < 10000
    A.length is even
*/

//solution 1

const repeatedNTimes1 = A => {
    const set = new Set();
    for (let el of A) {
        if (set.has(el)) return el;
        set.add(el);
    }
}

//solution 2

const repeatedNTimes2 = A => {
    const set = new Set();
    for (let i = 0; i < A.length; i++) {
        if (set.has(A[i])) {
            return A[i];
        } else {
            set.add(A[i]);
        }
        if (set.has(A[A.length - 1 - i])) {
            return A[A.length - 1 - i];
        } else {
            set.add(A[A.length - 1 - i]);
        }
    }
};

console.log(repeatedNTimes2([9, 5, 6, 9]));

//solution 3

const repeatedNTimes3 = A => {
    let N = A.length / 2;
    const map = new Map();
    for (let el of A) {
        map.set(el, (map.get(el) || 0) + 1);
        if (map.get(el) === N) return el;
    }
}

console.log(repeatedNTimes3([9, 5, 6, 9]));



