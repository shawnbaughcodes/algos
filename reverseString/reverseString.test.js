import { reverseString } from './index';

describe('Reverse String', () => {
  it('should reverse the string 1', () => {
    const assert = reverseString('abc');
    const expected = 'cba';

    expect(assert).toEqual(expected);
  })
  it('should reverse the string 2', () => {
    const assert = reverseString('482');
    const expected = '284';

    expect(assert).toEqual(expected);
  })
  it('should reverse the string 3', () => {
    const assert = reverseString('DOodDod');
    const expected = 'doDdoOD';

    expect(assert).toEqual(expected);
  })
})