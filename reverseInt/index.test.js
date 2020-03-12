import  {reverseInt} from './';

describe('Reverse Int', () => {
  it('should return a number that is reversed 1', () => {
    const assertion = reverseInt(123);
    const expected = 321;

    expect(assertion).toEqual(expected)
  });
  it('should return a number that is reversed 2', () => {
    const assertion = reverseInt(753);
    const expected = 357;

    expect(assertion).toEqual(expected)
  });
  it('should return a number that is reversed 3', () => {
    const assertion = reverseInt(-123);
    const expected = -321;

    expect(assertion).toEqual(expected)
  });
  it('should return a number that is reversed 3', () => {
    const assertion = reverseInt(-90);
    const expected = -9;

    expect(assertion).toEqual(expected)
  });
});