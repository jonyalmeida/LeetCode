/*
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
The binary search tree is guaranteed to have unique values.

Example 1:
Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32

Example 2:
Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23

Note:
The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const buildTree = (node, value) => {
    if (!node) {
        return new TreeNode(value);
    }
    if (value < node.val) {
        node.left = buildTree(node.left, value);
    } else if (value >= node.val) {
        node.right = buildTree(node.right, value);
    }
    return node;
}

const arrayToBST = (array, root) => {
    array.forEach(val => {
        root = buildTree(root, val);
    });
    return root;
}

// console.log(arrayToBST([10, 5, 15, 3, 7, 18], null));
const root = arrayToBST([10, 5, 15, 3, 7, 18], null);
const root2 = arrayToBST([10, 5, 15, 3, 7, 13, 18, 1, 6], null)

const rangeSumBST = (root, L, R) => {
    let sum = 0;
    if (!root) return sum;
    if (root.val >= L & root.val <= R) sum += root.val;
    if (root.val > L) sum += rangeSumBST(root.left, L, R);
    if (root.val < R) sum += rangeSumBST(root.right, L, R);
    return sum;
};

console.log(rangeSumBST(root, 7, 15));
console.log(rangeSumBST(root2, 6, 10)); 
