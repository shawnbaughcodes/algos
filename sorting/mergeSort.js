const sort = arr => {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  const splitA = sort(arr.slice(0, middle));
  const splitB = sort(arr.slice(middle));

  return merge(splitA, splitB);
};

const merge = (arr1, arr2) => {
  let idx = 0;
  let zdx = 0;
  const results = [];
  while (idx < arr1.length && zdx < arr2.length) {
    if (arr1[idx] < arr2[zdx]) {
      results.push(arr1[idx]);
      idx++;
    } else {
      results.push(arr2[zdx]);
      zdx++;
    }
  }

  while (idx < arr1.length) {
    results.push(arr1[idx]);
    idx++;
  }
  while (zdx < arr2.length) {
    results.push(arr2[zdx]);
    zdx++;
  }

  return results;
};

const m = sort([1, 10, 50, 2, 14, 99, 100, 43, 500, 4, 234, 23, 565, 22]);
console.log(m);
