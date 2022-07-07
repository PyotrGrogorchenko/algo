// https://leetcode.com/problems/recover-binary-search-tree/
import { _makeTree } from './_tree.js'

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let curr = root
  let prev = new TreeNode(Number.NEGATIVE_INFINITY)

  const replace = []
  const stack = []

  while (stack.length || curr) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
  
    const node = stack.pop()
    if (node.val < prev.val) replace.push([node, prev])
    
    prev = node
    curr = node.right

  }



  return root
}

console.log(recoverTree(_makeTree([1,3,null,null,2])))
// console.log(recoverTree(_makeTree([3,1,4,null,null,2])))
