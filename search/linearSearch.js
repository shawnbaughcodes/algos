const search = (arr, item) => {
  for (const i in arr) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
};

console.log(search([100], 100));
