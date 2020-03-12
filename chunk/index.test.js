import { chunk } from './';

describe('Array Chunk', () => {
  it('should return the chunks with its on arrays', () => {
    const assertion = chunk([1, 2, 2, 3, 0], 2);
    const expected = [[1,2], [2,3], [0]];

    expect(assertion).toEqual(expected);
  });

  it('should return the chunks with its on arrays', () => {
    const assertion = chunk([1, 2, 2, 3, 0], 3);
    const expected = [[1, 2, 2], [3, 0]];

    expect(assertion).toEqual(expected);
  });

  it('should return the chunks with its on arrays', () => {
    const assertion = chunk([1, 2, 2, 3, 0, 6, 7, 3, 6, 62, 5, 6], 5);
    const expected = [[1, 2, 2, 3, 0], [6, 7, 3, 6, 62], [5, 6]];

    expect(assertion).toEqual(expected);
  });
});