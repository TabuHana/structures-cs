// LINKED LIST : SINGLY

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Adds to the end of the list
  insertLast(data) {
    // creates a new node
    let node = new Node(data);

    // stores the current node
    let curr;

    // If the list is empty, add the data as the head
    if (!this.head) {
      this.head = node;
    } else {
      curr = this.head;

      // iterate to the end of the list
      while (curr.next) {
        curr = curr.next;
      }

      // add on the node
      curr.next = node;
    }
    // increase the size
    this.size++;
  }

  // Insert at an index
  insertAt(data, index) {
    // If the index given is out of range, add to the end
    if (index > 0 && index > this.size) {
      this.insertLast(data);
      return;
    }

    // If trying to insert at the first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    // create a new node & keep track of the current and previous nodes
    const node = new Node(data);
    let curr, prev;

    // Set current to the first
    curr = this.head;
    let count = 0;

    while (count < index) {
      prev = curr; // Node before the index where we want to insert at
      count++;
      curr = curr.next; // Node after the index
    }

    // setting the node's next value to the current
    // setting the last node's next to the inserted node
    node.next = curr;
    prev.next = node;

    // increase the size
    this.size++;
  }

  // Get at an index
  getAt(index) {
    let curr = this.head;
    let count = 0;

    // increment through the list till index is reached
    while (curr) {
      if (count == index) {
        console.log(curr.data);
      }
      count++;
      curr = curr.next;
    }

    // if the index is never met, returns null
    return null;
  }

  // Remove at an index
  removeAt(index) {
    // If the index is out of range, dont remove anything
    if (index > 0 && index > this.size) {
      return;
    }

    let curr = this.head;
    let prev;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = curr.next;
    } else {
      // iterate throug the list 
      while (count < index) {
        count++;
        prev = curr;
        curr = curr.next;
      }

      //removes the node once index is met
      prev.next = curr.next;
    }

    // decrease the size
    this.size--;
  }

  // Clear the list
  clearList() {
    this.head = null;
    this.size = 0;
    //there is still stuff stored in memory however
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

const list = new LinkedList();

list.insertFirst(100);
list.insertFirst(200);
list.insertFirst(300);
list.insertLast(400);
// list.insertAt(500, 9);
// list.getAt(3);
list.removeAt(2);

list.printListData();



