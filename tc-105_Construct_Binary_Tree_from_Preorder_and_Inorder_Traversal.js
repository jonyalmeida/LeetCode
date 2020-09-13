/*
Given preorder and inorder traversal of a tree, construct the binary tree.
Note:
You may assume that duplicates do not exist in the tree.
For example, given
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

//solution 1
const buildTree1 = (preorder, inorder) => {
    if (!preorder.length && !inorder.length) return null;
    let root = new TreeNode(preorder[0]);
    const leftInorder = inorder.slice(0, inorder.indexOf(root.val));
    const leftPreorder = preorder.filter(val => leftInorder.includes(val));
    root.left = buildTree1(leftPreorder, leftInorder);

    const rightInorder = inorder.slice(inorder.indexOf(root.val) + 1);
    const rightPreorder = preorder.filter(val => rightInorder.includes(val));
    root.right = buildTree1(rightPreorder, rightInorder);

    return root;
};

console.log(buildTree1(preorder, inorder));

//solution 2
const buildTree2 = (preorder, inorder) => {
    const obj = {};
    inorder.forEach((val, idx) => { obj[val] = idx });
    const helper = (start, end) => {
        if (start > end) return null;
        let root = new TreeNode(preorder.shift());
        root.left = helper(start, obj[root.val] - 1);
        root.right = helper(obj[root.val] + 1, end);
        return root;
    }
    return helper(0, inorder.length - 1);
};

console.log(buildTree2(preorder, inorder));


