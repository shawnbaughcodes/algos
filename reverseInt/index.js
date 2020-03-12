export const reverseInt = (n) => {
  const numberString = n.toString();
  const reversedNumber = parseInt(numberString.split('').reverse().join(''));
  return reversedNumber * Math.sign(n);
  // return n < 0 ? -reversedNumber : reversedNumber;
}