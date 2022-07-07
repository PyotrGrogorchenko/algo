// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const makeList = arr => {
  if (!arr.length) return null
  const root = new ListNode(arr[0])
  let prev = root
  for (let i = 1; i < arr.length; i++) {
    const node = new ListNode(arr[i])
    if (prev) prev.next = node
    prev = node
  }

  return root
}

const printList = list => {
  const res = []
  let node = list
  while (node) {
    res.push(node.val)
    node = node.next
  }
  return res.toString()
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let root = new ListNode((l1.val + l2.val) % 10)

  const sum = (node1, node2, parent, carry) => {
    if (!node1 && !node2) { 
      if (carry > 0) parent.next = new ListNode(carry)      
      return
    }
    
    let s = carry
    s += node1 ? node1.val : 0
    s += node2 ? node2.val : 0
    const node  = new ListNode(s % 10)
    parent.next = node

    sum(node1 ? node1.next : null, node2 ? node2.next : null, node, Math.floor(s / 10))
  }
  sum(l1.next, l2.next, root, Math.floor((l1.val + l2.val) / 10))
  return root
}

console.log(printList(addTwoNumbers(makeList([2,4,3]), makeList([5,6,4]))), '= 7,0,8')
console.log(printList(addTwoNumbers(makeList([0]), makeList([0]))), '= 0')
console.log(printList(addTwoNumbers(makeList([9,9,9,9,9,9,9]), makeList([9,9,9,9]))), '= 8,9,9,9,0,0,0,1')
