export const palindrome = (str) => {
  return (str.split('').reverse().join('') === str);
}