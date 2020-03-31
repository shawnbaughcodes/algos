const recursiveRange = (range, sum = 0, i = 0) => {
  if (i === range) return sum + i;
  return recursiveRange(range, (sum += i), (i += 1));
};

// recursiveRange(6) // 21
// recursiveRange(10) // 55
const range = recursiveRange(10);
console.log(range);
