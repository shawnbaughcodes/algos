// Two pointer method example

const findUnique = arr => {
  if (arr.length === 0) {
    console.log("index", 0);
    return 0;
  }
  let i = 0;
  let scout = 1;
  while (scout <= arr.length) {
    if (arr[i] === arr[scout]) {
      scout++;
    } else {
      i++;
      arr[i] = arr[scout];
    }
  }
  console.log("index", i);

  return i;
};

findUnique([1, 1, 1, 1, 1, 1, 2]);
findUnique([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
findUnique([]);
findUnique([-2 - 1, -1, 0, 1]);
