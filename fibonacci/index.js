export const fibonacci = n => {
  if (n < 2) return n;

  return memoize(fibonacci(n - 1)) + memoize(fibonacci(n - 2));

  // const result = [0, 1];

  // for (let index = 2; index <= n; index++) {
  //   result.push(result[index - 1] + result[index - 2]);
  // }

  // return result[n];
};

const memoize = func => {
  const cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }

    const result = func.apply(this, args);
    cache[args] = result;

    return result;
  };
};
