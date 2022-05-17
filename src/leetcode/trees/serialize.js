// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
import { _makeTree } from './_makeTree.js'

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return ''
  const queue = [root]
  const res = [root.val]
  
  let index = 0
  while (queue.length) {
    const node = queue.shift()

    if (node.left) {
      res[index * 2 + 1] = node.left.val
      queue.push(node.left)
    }
    if (node.right) {
      res[index * 2 + 2] = node.right.val
      queue.push(node.right)
    }
    index++
  }

  return res.toString()
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const arr = data.split(',')
  if (!arr.length) return null
  if (!arr[0]) return null

  const root = new TreeNode(Number(arr[0]))
  let stack = [root]
  for (let i = 1; i < arr.length; i += 2) {
    
    const parent = stack.pop()

    if (arr[i + 1]) {
      const right = new TreeNode(Number(arr[i + 1]))
      parent.right = right
      stack.push(right)
    } 

    if (arr[i]) {
      const left = new TreeNode(Number(arr[i]))
      parent.left = left
      stack.push(left)
    } 

  }
  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let str

str = serialize(_makeTree([1,2,3,null,null,4,5])[0])
console.log(str)
console.log(deserialize(str))

str = serialize(_makeTree([1,null,2])[0])
console.log(str)
console.log(deserialize(str))

str = serialize(_makeTree([1,2,3,null,null,4,5,6,7])[0])
console.log(str)
console.log(deserialize(str))
