class Node {
  constructor(val = null) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
    this.node = new Node();
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    let current = this.head;
    let newTail = current;
    if (!this.head) return null;

    while (current.next) {
      newTail = current;
      current = current.next;
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }

  shift() {
    if (!this.head) return null;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    return currentHead.val;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }
    node.next = this.head;
    this.head = node;
    return this;
  }

  get(index) {
    if (index > this.length || index < 0) return null;
    let position = 0;
    let node = this.head;

    while (position !== index) {
      position++;
      node = node.next;
    }
    return node;
  }

  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index > this.length || index < 0) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let next = prev.next;
    prev.next = newNode;
    newNode.next = next;
    this.length++;

    return true;
  }

  remove(index) {
    if (index > this.length || index < 0) return null;
    if (index === 0) return this.unshift();
    if (index === this.length - 1) return this.pop();
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let index = 0;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    while (index < this.length) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
      index++;
    }

    return this;
  }
}

const linkedList = new SinglyLinkedList();
linkedList.push("YOO");
linkedList.push("WUDDUP");
linkedList.push("HOMIE");
linkedList.push("Unshifited Dude");
linkedList.insert(1, "HUMBUG");
// linkedList.pop();
// console.log(linkedList.pop());
linkedList.reverse();
console.log("head", JSON.stringify(linkedList.head));
console.log("tail", JSON.stringify(linkedList.tail));
console.log("node", JSON.stringify(linkedList.node));
