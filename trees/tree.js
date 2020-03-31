const q = require("../queue");
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.value) return null;
      if (current.value > val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      if (current.value < val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let current = this.root;
    while (val !== current.value) {
      if (val < current.value) {
        if (!current.left) return false;
        current = current.left;
      }
      if (val > current.value) {
        if (!current.right) return false;
        current = current.right;
      }
    }

    return current;
  }

  breadthFirstSearch() {
    let node = this.root;
    let searched = [];
    let queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      searched.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return searched;
  }

  preOrder() {}
}

const t = new Tree();

t.insert(20);
t.insert(50);
t.insert(10);
t.insert(12);
t.insert(100);
t.insert(19);
// console.log(JSON.stringify(t));
console.log(t.breadthFirstSearch());
