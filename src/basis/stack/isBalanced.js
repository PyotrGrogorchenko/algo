const isBalanced = (str) => {
  if (!str) {
    return true
  }
  
  const isOpen = (char) => ['{', '[', '('].includes(char)
  const isPair = (open, close) => ['{}', '[]', '()'].includes(open.concat(close))
  
  const stack = []

  str.split('').forEach(char => {
    if (stack.length && isPair(stack[stack.length - 1], char)) {
      stack.pop()
      return
    }
    stack.push(char)
  })
  return stack.length === 0;
}

console.log(isBalanced('{}({[]})')) // true
console.log(isBalanced('{}{}(()')) // false
console.log(isBalanced('({[{[][][]}]})')) // true
console.log(isBalanced('{(][])}')) // false
console.log(isBalanced('([])(){({[]})}')) // true
console.log(isBalanced('}{')) // false
console.log(isBalanced('')) // true
