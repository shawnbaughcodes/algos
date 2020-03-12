export const fizzBuzz = (n) => {
  const fizzBuzzArray = [];
  if (n % 3 === 0) {
    fizzBuzzArray.push('fizz');
  }
  if (n % 5 === 0) {
    fizzBuzzArray.push('buzz');
  }
  if (n % 15 === 0) {
    fizzBuzzArray.push('fizzbuzz');
  }

  return fizzBuzzArray;
}