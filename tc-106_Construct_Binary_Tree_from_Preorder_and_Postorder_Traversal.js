/*
Given inorder and postorder traversal of a tree, construct the binary tree.
Note:
You may assume that duplicates do not exist in the tree.
For example, given
inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:
    3
   / \
  9  20
    /  \
   15   7 */

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];

//solution 1
const buildTree1 = (inorder, postorder) => {
  const hashMap = {};
  inorder.forEach((val, idx) => hashMap[val] = idx);
  const build = (start, end) => {
    if (start > end) return null;
    const root = new TreeNode(postorder.pop());
    console.log(root);
    root.right = build(hashMap[root.val] + 1, end);
    root.left = build(start, hashMap[root.val] - 1);
    return root;
  }
  return build(0, inorder.length - 1);
};

// console.log(buildTree1(inorder, postorder));

const buildTree2 = (inorder, postorder) => {
  if (inorder.length === 0) return null;
  const hashMap = {};
  inorder.forEach((val, idx) => hashMap[val] = idx);
  return build(0, 0, inorder.length);
  function build(inorderPos, postorderPos, length) {
    const root = new TreeNode(postorder[postorderPos + length - 1]);
    const leftL = hashMap[root.val] - inorderPos;
    if (leftL > 0) root.left = build(inorderPos, postorderPos, leftL);
    if (length > leftL + 1) root.right = build(inorderPos + leftL + 1, postorderPos + leftL, length - 1 - leftL);
    return root;
  }
};
console.log(buildTree2(inorder, postorder));
