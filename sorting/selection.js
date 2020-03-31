const utils = require("./utils");

const sort = arr => {
  let minIndex = 0;
  let index = 1;

  while (minIndex !== arr.length - 1) {
    if (arr[minIndex] > arr[index] && arr[minIndex] !== arr[index]) {
      utils.swap(arr, minIndex, index);
    }
    if (index === arr.length) {
      minIndex++;
      index = minIndex;
    }
    index++;
  }

  return arr;
};

const s = sort([23, 1, 53, 634, 3, 34, 6]);
// 1, 23
console.log(s);
