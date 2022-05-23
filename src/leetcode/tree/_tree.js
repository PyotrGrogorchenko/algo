// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
 
export const _makeTree = arr => {
  
  const traversal = i => {
    if (arr[i] === undefined) return null
    if (arr[i] === null && arr[i * 2 + 1] === undefined && arr[i * 2 + 2] === undefined) {
      return null
    }

    const left = traversal(i * 2 + 1)
    const right = traversal(i * 2 + 2)
    
    return new TreeNode(arr[i], left, right)

  }
 
  return traversal(0)

}

export const _printTree = root => {
  let padding = ''
  
  const queue = [root]

  while (queue.length) {
    const node = queue.shift()
    if (!node) return
    console.log(padding + node.val + '{' + (node.left ? node.left.val : '') + ',' + (node.right ? node.right.val : '') + '}')
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
}


// _printTree(_makeTree([4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]))
// _printTree([4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2])
// _printTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,18,20,21,22,23,24,25,26,27,28,29,30,31])
// console.log(_makeTree([1, 2, 3, 4, 5, 6, 7, 8, 9, null, 11, null, null, 14]))