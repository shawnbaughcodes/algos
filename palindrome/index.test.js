import { palindrome } from './';

describe('Palidrome', () => {
  it('should equal the same as the reversed string 1', () => {
    const assertion = palindrome('aba');
    const expected = true;

    expect(assertion).toEqual(expected)
  });
  it('should equal the same as the reversed string 1', () => {
    const assertion = palindrome('shawn');
    const expected = false;

    expect(assertion).toEqual(expected)
  });
  it('should equal the same as the reversed string 1', () => {
    const assertion = palindrome('hannah');
    const expected = true;

    expect(assertion).toEqual(expected)
  });
});