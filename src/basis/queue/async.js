
const siftDown  = (heap, i, heapSize = heap.length) => {
  while (true) {
    const left = i * 2 + 1
    const right = i * 2 + 2
    let largest = i
    if (left < heapSize && heap[i] < heap[left]) {
      largest = left
    }
    if (right < heapSize && heap[largest] < heap[right]) {
      largest = right
    }
    if (largest === i) {
      return
    }
    [heap[largest], heap[i]] = [heap[i], heap[largest]]
    i = largest
  }
}

const siftUp  = (heap, i) => {
  while (i > 0) {
    const parent = Math.floor((i - 1) / 2)
    if (!(heap[parent] < heap[i])) {
      return
    }
    [heap[parent], heap[i]] = [heap[i], heap[parent]]
    i = parent
  }
}

const buildHeap = heap => {
  if (!heap.length) return
  for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
    siftDown(heap, i)
  }
}

const add = (heap, val) => {
  heap.push(val)
  siftUp(heap, heap.length - 1)
}

const top = heap =>  {
  if (!heap.length) return null
  return heap[0]
}

const extractMax = heap => {
  if (!heap.length) return null
  const res = heap[0]
  heap[0] = heap[heap.length - 1]
  heap.pop()
  siftDown(heap, 0)
  return res
}

const sort = heap =>{
  let heapSize = heap.length
  buildHeap(heap)
  while (heapSize > 0) {
    [heap[0], heap[heapSize - 1]] = [heap[heapSize - 1], heap[0]]
    heapSize--
    siftDown(heap, 0, heapSize)
  }
}


class Queue {

  constructor (heap = []) {
    this.heap = heap
    this.buildHeap()
  }

  add(val) {
    this.heap.push(val)
    this.siftUp(this.heap.length - 1)
  }

  extractMax() {
    if (!this.heap.length) return null
    const res = this.heap[0]
    this.heap[0] = this.heap[this.heap.length - 1]
    this.heap.pop()
    this.siftDown(0)
    return res
  }

  top() {
    if (!this.heap.length) return null
    return this.heap[0]
  }

  sort () {
    let heapSize = this.heap.length
    while (heapSize > 0) {
      [this.heap[0], this.heap[heapSize - 1]] = [this.heap[heapSize - 1], this.heap[0]]
      heapSize--
      this.siftDown(0, heapSize)
    }
  }

  buildHeap () {
    if (!this.heap.length) return
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.siftDown(i)
    }
  }

  siftDown (i, heapSize = this.heap.length) {
    while (true) {
      const left = i * 2 + 1
      const right = i * 2 + 2
      let largest = i
      if (left < heapSize && this.heap[i] < this.heap[left]) {
        largest = left
      }
      if (right < heapSize && this.heap[largest] < this.heap[right]) {
        largest = right
      }
      if (largest === i) {
        return
      }
      [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]]
      i = largest
    }
  }

  siftUp (i) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2)
      if (!(this.heap[parent] < this.heap[i])) {
        return
      }
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
      i = parent
    }
  }

  print() {
    console.log(this.heap.toString())
  }

}


console.log('-function-')

const heap = [1, 2, 3, 4, 7, 8, 9, 10, 14, 16]
buildHeap(heap)
console.log(heap.toString())
add(heap, 12)
console.log(heap.toString())
console.log(top(heap))
extractMax(heap)
console.log(heap.toString())
sort(heap)
console.log(heap.toString())

console.log('-class-')

const queue = new Queue([1, 2, 3, 4, 7, 8, 9, 10, 14, 16])
queue.print()
queue.add(12)
queue.print()
console.log(queue.top())
queue.extractMax()
queue.print()
queue.sort()
queue.print()
