class Heap {
  #container = []
  #isDebug = false
  
  constructor(isDebug = false) {
    this.#isDebug = isDebug
  }

  get container() { return this.#container }
  
  add(x) {
    if (!Array.isArray(x)) x = [x]
    
    const container = this.#container
    x.forEach(val => {
      container.push(val)
      let i = container.length - 1
      while(i !== 1 && container[i] < container[Math.floor(i/2)]) {
        [container[i], container[Math.floor(i/2)]] = [container[Math.floor(i/2)], container[i]]
        i = Math.floor(i/2)
      }
    })
    if (this.#isDebug) this.print('add')
  }

  erase() {
    const container = this.#container
    let last = container.length - 1
    {[container[0], container[last]] = [container[last], container[0]]}
    container.pop()
    let i = 0
    while (i * 2 < container.length && container[i] > container[i * 2 + 1] 
        || i * 2 + 1 < container.length && container[i] > container[i * 2]) {
      if (i * 2 + 1 < container.length && container[i * 2] < container[i * 2 + 1]) {
        [container[i], container[i * 2]] = [container[i * 2], container[i]]
        i *= 2  
        continue
      }
      [container[i], container[i * 2 + 1]] = [container[i * 2 + 1], container[i]]
      i *= 2
      i++  
  }

    if (this.#isDebug) this.print('erase')
  }

  top() {
    return this.#container[0]
  }
  
  sort() {
    const copy = [...this.#container]
    const res = []

    while (this.#container.length) {
      res.push(this.top())
      this.erase()
    }
     
    this.#container = [...copy]
    if (this.#isDebug) this.print('sort')
    return res    
  }

  print(action = '') {
    if (action) {
      action = '['.concat(action).concat(']')
      while (action.length < 10) {
        action = action.concat(' ')
      }
    }
    console.log(action.concat(this.#container))
  }
}

const heap = new Heap([1], true)
heap.add(1)
heap.add(2)
heap.add([10, 5, 40, 12, 3, 6, 9, 5])

heap.sort()

heap.erase()
heap.erase()
heap.erase()

