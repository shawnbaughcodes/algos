// write a function that calculates the sum of 2 numbers from 1 up to and including n
// O(n)
const addUpToOne = n => {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }
  console.log("addUpToOne", total);

  return total;
};
// O(1)
const addUpToTwo = n => {
  const total = (n * (n + 1)) / 2;
  console.log("addUpToTwo", total);
  return total;
};

addUpToOne(20);
addUpToTwo(20);
