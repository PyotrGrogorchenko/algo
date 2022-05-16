// https://leetcode.com/problems/binary-tree-inorder-traversal/

// Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

const treeNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 11, null, null, 14]
const tree = []

for (let i = 0; i < treeNum.length; i++) {
  if (treeNum[i] === null) continue
  const treeNode = new TreeNode(treeNum[i], treeNum[i * 2 + 1], treeNum[i * 2 + 2])
  tree.push(treeNode)
  if (i === 0) continue
  const parent = i - Math.floor(i / 2) - 1
  tree[parent][i % 2 === 0 ? 'right' : 'left'] = treeNode
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const res = []
  traversal(res, root)
  return res
}

const traversal = (res, node) => {
  if (node === null) return
  traversal(res, node.left)
  res.push(node.val)
  traversal(res, node.right)
}

console.log(inorderTraversal(tree[0]).toString())

var inorderTraversalNum = function(rootIndex) {
  const res = []
  traversalNum(res, rootIndex)
  return res
}

const traversalNum = (res, index) => {
  if (!treeNum[index]) return
  traversalNum(res, index * 2 + 1)
  res.push(treeNum[index])
  traversalNum(res, index * 2 + 2)
}

console.log(inorderTraversalNum(0).toString())
