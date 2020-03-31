const productOfArray = (arr, result = 0, i = 0) => {
  if (i === arr.length - 1) return result * arr[i];

  result = arr[i] * arr[(i += 1)];

  return productOfArray(arr, result, i);
};

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
const product = productOfArray([1, 2, 3, 10]);

console.log(product);
