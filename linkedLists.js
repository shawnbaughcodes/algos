const sampleList1 = {
  head: {
    value: 1,
    next: {
      value: 3,
      next: {
        value: 5,
        next: {
          value: 8,
          next: {
            value: 9,
            next: null
          }
        }
      }
    }
  }
};
const sampleList2 = {
  head: {
    value: 2,
    next: {
      value: 20,
      next: {
        value: 4,
        next: {
          value: 7,
          next: {
            value: 100,
            next: null
          }
        }
      }
    }
  }
};
const sampleList3 = {
  head: {
    value: 200,
    next: {
      value: 50,
      next: {
        value: 27,
        next: {
          value: 8,
          next: null
        }
      }
    }
  }
};

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
    this.count = 0;
    this.length = 0;
  }

  addToHead(value) {
    const node = {
      val: value,
      next: null
    };
    const temp = this.head;

    // Point head to the new Node
    this.head = node;

    // Add the rest of node behind the new first Node
    this.head.next = temp;

    this.count++;

    console.log(this.head);
  }

  addToEnd(value) {
    const node = {
      val: value,
      next: null
    };

    if (this.count === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.count++;
  }

  contains(value) {
    let node = {
      val: value,
      next: null
    };
    node = this.head;
    while (node) {
      if (node.val === value) {
        console.log(true);
      } else {
        console.log(false);
      }
      node = node.next;
    }
  }

  removeFront(value) {
    const node = {
      val: value,
      next: null
    };
    this.head = this.head.next;
    this.count--;
  }

  listFront() {
    console.log(this.head.val);
  }

  slLength() {
    let node = {
      val: null,
      next: null
    };
    node = this.head;
    while (node) {
      node = node.next;
      this.length++;
    }
    console.log('LENGTH', this.length);
  }

  slDisplay() {
    let node = {
      val: null,
      next: null
    };
    node = this.head;
    let values = 'My Values:';
    let runner = 0;
    while (node) {
      values = `${values} ${node.val}`;
      node = node.next;
      runner++;
    }
    console.log(values);
  }

  slListMax() {
    let node = {
      val: null,
      next: null
    };
    node = this.head;
    let max = node.val;
    while (node) {
      if (node.val > max) {
        max = node.val;
      }
      node = node.next;
    }
    console.log('MAX', max);
  }

  slMin() {
    let node = {
      val: null,
      next: null
    };
    node = this.head;
    let min = node.val;
    while (node) {
      if (node.val < min) {
        min = node.val;
      }
      node = node.next;
    }
    console.log('MIN', min);
  }

  slAverage() {
    let node = {
      val: null,
      next: null
    };
    node = this.head;
    let total = node.val;
    while (node) {
      total += node.val;
      this.length++;
      node = node.next;
    }
    console.log('AVG', total / this.length);
  }

  slListBack() {
    let node = {
      val: null,
      next: null
    };
    node = this.head;
    while (node) {
      if (node.next === null) {
        console.log('BACK', node.val);
      }
      node = node.next;
    }
  }

  slRemoveBack() {
    let node = {
      val: null,
      next: null
    };
    node = this.head;
    while (node) {
      if (node.next.next === null) {
        node.next = null;
        this.length--;
      }
      node = node.next;
    }
    console.log('REMOVED BACK');
  }

  splitOnVal(list, num) {
    let node = {
      val: null,
      next: null
    };
    node = list.head;
    let newList = null;

    while (node) {
      if (node.value === num) {
        newList = node;
        node = node.next;
      }
      node = node.next;
    }

    console.log('NEW LIST', newList);
  }
}

const theList = new LinkedList();
theList.addToEnd(7);
theList.addToEnd(120);
theList.addToEnd(123400);
theList.addToEnd(1230);
theList.addToHead(30);
theList.contains(100);
theList.removeFront();
theList.listFront();
theList.slLength();
theList.slDisplay();
theList.slListMax();
theList.slMin();
theList.slAverage();
theList.slListBack();
theList.slRemoveBack();
theList.splitOnVal(sampleList1, 3);

console.log(theList);
