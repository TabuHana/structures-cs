// QUEUE : FIRST IN - FIRST OUT
/*

USING ARRAYS

const queue = [];

// enqueue
queue.push('dog');
queue.push('cat');
queue.push('bird');

// dequeue
queue.shift()

// there is another data structure called "deque"
// don't confuse with dequeue!

*/

class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(data) {
    this.storage[this.tail] = data;
    this.tail++;
  }

  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

const queue = new Queue();

queue.enqueue('dog');
queue.enqueue('cat');
queue.enqueue('bird');

