const utils = require("./utils");

// YUCK
const bubbleSort = arr => {
  for (const i in arr) {
    for (const j in arr) {
      if (arr[i] < arr[j]) {
        utils.swap(arr, i, j);
      }
    }
  }
  return arr;
};

const sort = bubbleSort([4, 2, 76, 5, 876, 3, 56, 5]);

console.log(sort);
