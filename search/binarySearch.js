const search = (arr, item) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== item && left <= right) {
    if (item > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }

    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] === item ? middle : -1;
};

const s = search([1, 2, 3, 4, 5, 6, 7, 9, 10, 15, 16, 17], 17);
console.log(s);
