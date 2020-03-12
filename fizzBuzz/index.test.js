import {fizzBuzz} from './';

describe('Fizz Buzz', () => {
  it('should return fizz buzz 1', () => {
    const assertion = fizzBuzz(15);
    const expected = ['fizz', 'buzz', 'fizzbuzz'];

    expect(assertion).toEqual(expected);
  });
  it('should return fizz buzz 2', () => {
    const assertion = fizzBuzz(5);
    const expected = ['buzz'];

    expect(assertion).toEqual(expected);
  });
  it('should return fizz buzz 3', () => {
    const assertion = fizzBuzz(60);
    const expected = ['fizz', 'buzz', 'fizzbuzz'];

    expect(assertion).toEqual(expected);
  });
});