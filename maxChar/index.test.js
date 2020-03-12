import {maxChar} from './';

describe('Max Char', () => {
  it('should return the most used character 1', () => {
    const assertion = maxChar('aaqafetabccc');
    const expected = 'a';

    expect(assertion).toEqual(expected);
  });
  it('should return the most used character 2', () => {
    const assertion = maxChar('aabsbbbgetbccc');
    const expected = 'b';

    expect(assertion).toEqual(expected);
  });
  it('should return the most used character 3', () => {
    const assertion = maxChar('aabccc');
    const expected = 'c';

    expect(assertion).toEqual(expected);
  });
});