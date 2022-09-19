// LINKED LIST : DOUBLY


class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    // creates a new node
    let node = new Node(data);

    // stores the current node
    let curr;

    // If the list is empty, add the data as the head
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      let oldHead = this.head;
      this.head = node;
      oldHead.next = this.head;
      this.head.prev = oldHead;
    }
    // increase the size
    this.size++;
  }

  // Adds to the end of the list
  insertLast(data) {
    // creates a new node
    let node = new Node(data);

    // stores the current node
    let curr;

    // If the list is empty, add the data as the head
    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      let oldTail = this.tail;
      this.tail = node;
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
    // increase the size
    this.size++;
  }

  // // Insert at an index
  // insertAt(data, index) {
  //   // If the index given is out of range, add to the end
  //   if (index > 0 && index > this.size) {
  //     this.insertLast(data);
  //     return;
  //   }

  //   // If trying to insert at the first index
  //   if (index === 0) {
  //     this.insertFirst(data);
  //     return;
  //   }

  //   // create a new node & keep track of the current and previous nodes
  //   const node = new Node(data);
  //   let curr, prev;

  //   // Set current to the first
  //   curr = this.head;
  //   let count = 0;

  //   while (count < index) {
  //     prev = curr; // Node before the index where we want to insert at
  //     count++;
  //     curr = curr.next; // Node after the index
  //   }

  //   // setting the node's next value to the current
  //   // setting the last node's next to the inserted node
  //   node.next = curr;
  //   prev.next = node;

  //   // increase the size
  //   this.size++;
  // }

  // // Get at an index
  // getAt(index) {
  //   let curr = this.head;
  //   let count = 0;

  //   // increment through the list till index is reached
  //   while (curr) {
  //     if (count == index) {
  //       console.log(curr.data);
  //     }
  //     count++;
  //     curr = curr.next;
  //   }

  //   // if the index is never met, returns null
  //   return null;
  // }

  // Remove the head of the list
  removeHead() {
    // If the list is empty
    if (!this.head) {
      return null;
    } else {
      let removedHead = this.head;

      // if only 1 node left
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return removedHead.data;
    }

    // decrease the size
    this.size--;
  }

  // Remove the tail of the list
  removeLast() {
    // If the list is empty
    if (!this.tail) {
      return null;
    } else {
      let removedTail = this.tail;

      // if only 1 node left
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.head.prev;
        this.tail.next = null;
      }
      return removedTail.data;
    }

    // decrease the size
    this.size--;
  }

  // // Clear the list
  // clearList() {
  // }

  search(data) {
    let curr = this.head;

    while(curr) {
      if (curr.value === value) {
        return curr;
      }
      curr = curr.next;
    }

    return null;
  }

  // Print the list data
  printListData() {
    let curr = this.head;

    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

let list = new LinkedList();


