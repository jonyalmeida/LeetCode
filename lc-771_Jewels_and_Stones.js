/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: J = "aA", S = "aAAbbbb"
Output: 3

Example 2:
Input: J = "z", S = "ZZ"
Output: 0

Note:
S and J will consist of letters and have length at most 50.
The characters in J are distinct. */

//solution 1
const numJewelsInStones1 = (J, S) => {
    const set = new Set(J);
    let count = 0;
    S.split('').forEach(s => set.has(s) ? count++ : '');
    return count;
};

console.log(numJewelsInStones1('aA', 'aAAbbbb'));

//solution 2
const numJewelsInStones2 = (J, S) => {
    let count = 0;
    for (let i = 0; i < S.length; i++) {
        if (J.indexOf(S[i]) !== -1) {
            count++;
        }
    }
    return count;
};

console.log(numJewelsInStones2('aA', 'aAAbbbb'));

