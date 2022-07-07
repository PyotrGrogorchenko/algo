// https://leetcode.com/problems/binary-tree-maximum-path-sum/
import { _makeTree } from './_tree.js'

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let res = Number.NEGATIVE_INFINITY

  const dfs = (node) => {
    if (!node) return 0
   
    const leftMax = Math.max(dfs(node.left), 0)
    const rightMax = Math.max(dfs(node.right), 0)

    res = Math.max(res, node.val + leftMax + rightMax)
    return node.val + Math.max(leftMax, rightMax)
  }

  dfs(root)
  return res
}

console.log('6 =', maxPathSum(_makeTree([1,2,3]))) // 6
console.log('42 =', maxPathSum(_makeTree([-10,9,20,null,null,15,7]))) // 42
console.log('-3 =', maxPathSum(_makeTree([-3]))) // -3
console.log('2 =', maxPathSum(_makeTree([2,-1]))) //  2
