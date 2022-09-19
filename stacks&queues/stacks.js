// STACK : LAST IN - FIRST OUT
/*

USING ARRAYS

const stack = [];

// push
stack.push('dog');
stack.push('cat');
stack.push('bird');

// pop
stack.pop();

// peek 
stack[stack.length - 1];

*/

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(data) {
    this.size++;
    this.storage[this.size] = data;
  }

  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }

  peek() {
    return this.storage[this.size];
  }
}

const stack = new Stack();

stack.push('dog');
stack.push('cat');
stack.push('bird');

