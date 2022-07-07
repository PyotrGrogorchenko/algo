// https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
var maxDepth = function(root) {
  let res = 0

  const dfs = (node, count) => {
    if (!node) {
      res = Math.max(res, count)
      return
    }
    dfs(node.left, count + 1) 
    dfs(node.right, count + 1)
  }
  dfs(root, 0)
  return res
}

console.log(maxDepth(_makeTree([3,9,20,null,null,15,7])))