const utils = require("./utils");
const insertion = arr => {
  const start = 0;
  let index = arr.length - 2;
  let end = arr.length - 1;

  while (end > start) {
    let currentVal = arr[end];

    if (arr[end] < arr[index]) {
      utils.swap(arr, index, end);
      index--;
      end--;
    } else {
      index--;
    }
  }

  return arr;
};

const ins = insertion([3, 44, 38, 5, 47, 15]);
console.log(ins);
