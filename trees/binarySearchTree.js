// BINARY SEARCH TREE

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(data) {
    this.root = new Node(data);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(data) {
    this.count++;

    let newNode = new Node(data);

    const searchTree = node => {
      // if data < node.data, go left
      if (data < node.data) {
        // if no left child, append new node
        if (!node.left) {
          node.left = newNode;
          // if left child, look left again
        } else {
          searchTree(node.left);
        }
      }
      // if data > node.data, go right
      else if (data > node.data) {
        // if no right child, append new node
        if (!node.right) {
          node.right = newNode;
          // if right child, look right again
        } else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }

  min() {
    let curr = this.root;

    while (curr.left) {
      curr = curr.left;
    }

    return curr.data;
  }

  max() {
    let curr = this.root;

    while (curr.right) {
      curr = curr.right;
    }

    return curr.data;
  }

  contains(data) {
    let curr = this.root;

    while (curr) {
      if (data === curr.data) {
        return true;
      }
      if (data < curr.data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    return false;
  }

  // depth first search - branch by branch

  // in-order
  // left, root, right
  // 2, 3, 12, 15, 28, 36, 39
  dfsInOrder() {
    let result = [];

    const traverse = node => {
      // if left child exists, go left again
      if (node.left) {
        traverse(node.left);
      }
      // capture root node value
      result.push(node.data);

      // if right child exists, go right again
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return result;
  }

  // pre-order
  // root, left, right
  // 15, 3, 2, 12, 36, 28, 39
  dfsPreOrder() {
    let result = [];

    const traverse = node => {
      // capture root node value
      result.push(node.data);

      // if left child exists, go left again
      if (node.left) {
        traverse(node.left);
      }

      // if right child exists, go right again
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return result;
  }

  // post-order
  // left, right, root
  // 2, 12, 3, 28, 39, 36, 15
  dfsPostOrder() {
    let result = [];

    const traverse = node => {
      // if left child exists, go left again
      if (node.left) {
        traverse(node.left);
      }

      // if right child exists, go right again
      if (node.right) {
        traverse(node.right);
      }

      // capture root node value
      result.push(node.data);
    };

    traverse(this.root);
    return result;
  }

  // breadth first search - level by level
  // using a queue
  // 15, 3, 36, 2, 12, 28, 39
  bfs() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      let curr = queue.shift();

      result.push(curr);

      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }

    return result;
  }
}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);


console.log(bst.dfsInOrder());
console.log(bst.dfsPostOrder());
console.log(bst.dfsPreOrder());
console.log(bst.bfs());