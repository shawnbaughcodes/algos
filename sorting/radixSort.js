const sort = nums => {
  const maxDigits = mostDigits(nums);
  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let d = 0; d < nums.length; d++) {
      let digit = getDigit(nums[d], k);
      buckets[digit].push(nums[d]);
    }
    nums = [].concat(...buckets);
  }

  return nums;
};

const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const digitCount = num => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = nums => {
  let maxDigits = 0;
  for (const i in nums) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
};

const s = sort([74, 2, 654, 7, 345, 85467, 335, 78]);
console.log(s);
