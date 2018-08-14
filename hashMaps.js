class HashMap {
  constructor(capacity) {
    this.capacity = capacity;
    this.table = [];
  }

  printTable() {
    console.log(this.table);
  }

  hash(char, arrSize) {
    let hash = 0;
    if (char === undefined) {
      return hash;
    }
    if (char.length === 0) {
      return hash;
    }
    for (let i = 0; i < char.length; i++) {
      hash += char.charCodeAt(i);
    }
    return hash % arrSize;
  }
  add(key, val) {
    let index = this.hash(key, this.capacity);
    if (this.table[index] === undefined) {
      this.table[index] = [[key, val]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = val;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.table[index].push([key, val]);
      }
    }
  }

  isEmpty(key, val) {
    let index = this.hash(key, this.capacity);
    if (this.table[index] === undefined) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  findKey(key) {
    let index = this.hash(key, this.capacity);
    if (this.table[index] === undefined) {
      console.log(false, 'Does not contain ' + key);
      return false;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (key === this.table[index][i][0]) {
        console.log(`Here is ${key}`);
      }
    }
  }

  removeKey(key) {
    let index = this.hash(key, this.capacity);
    if (this.table[index] === undefined) {
      console.log('ALREADY GONE/NEVER EXISTED');
      return false;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (key === this.table[index][i][0]) {
        console.log(`Removed ${this.table[index][i]}`);
        delete this.table[index][i];
      }
    }
    return this.table;
  }
}

const hashMap1 = new HashMap(20);
hashMap1.add('john', 33);
hashMap1.add('billy', 245);
hashMap1.add('Joe', 3);
hashMap1.add('Buddy', 67);
hashMap1.add('Heather', 12);
hashMap1.add('Karen', 44);
hashMap1.isEmpty('bill', 245);
hashMap1.findKey('billy');
hashMap1.removeKey('billy');
hashMap1.printTable();
