import {isUpperCase} from '../src/helpers.js';

describe('Helper functions', () => {
  test('isUpperCase', () => {
    expect(isUpperCase('a')).toEqual(false);
    expect(isUpperCase('A')).toEqual(true);
    expect(isUpperCase('abc')).toEqual(false);
    expect(isUpperCase('ABC')).toEqual(true);
    expect(isUpperCase('aBc')).toEqual(false);
  });
});
