const same = (arr1, arr2) => {
  let isSame = false;
  if (arr1.length !== arr2.length) {
    console.log(isSame);
    return false;
  }
  for (const key in arr1) {
    if (arr1[key] ** 2 === arr2[key]) {
      isSame = true;
    }
  }
  console.log(isSame);

  return isSame;
};

same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false
