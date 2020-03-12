import {anagram} from './';

describe('Anagrams', () => {
  it('should return that it is an anagram', () => {
    const assertion = anagram('rail safety', 'fairy tales');
    const expected = true;
  
    expect(assertion).toEqual(expected);
  })
});