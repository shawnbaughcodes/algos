const utils = require("./utils");
const sort = (arr = [], left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    sort(arr, left, pivotIdx - 1);
    sort(arr, pivotIdx + 1, right);
  }
  return arr;
};

const pivot = (arr = [], startIdx = 0, endIdx = arr.length - 1) => {
  let currentPivot = arr[startIdx];
  let swapIdx = startIdx;

  for (let i = startIdx; i < arr.length; i++) {
    if (currentPivot > arr[i]) {
      swapIdx++;
      utils.swap(arr, swapIdx, i);
    }
  }

  utils.swap(arr, startIdx, swapIdx);

  return swapIdx;
};

const s = sort([4, 8, 2, 1, 5, 6, 3]);

console.log(s);
