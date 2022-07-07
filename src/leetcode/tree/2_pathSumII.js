// https://leetcode.com/problems/path-sum-ii/

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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const res = []  

  const dfs = (node, path, sum) => {
    if (!node) return

    path.push(node.val)
    sum += node.val

    if (sum === targetSum && !node.left && !node.right) {
      res.push(path)
      return
    }

    dfs(node.left, [...path], sum)
    dfs(node.right, [...path], sum)

  }

  dfs(root, [], 0)

  return res
}

// console.log(pathSum(_makeTree([5,4,8,11,null,13,4,7,2,null,null,5,1]), 22))
console.log(pathSum(_makeTree([1]), 1)) // [1]
console.log(pathSum(_makeTree([1, 2]), 1)) // []
console.log(pathSum(_makeTree([-2,null,-3]), -5)) // [-2, -3]
