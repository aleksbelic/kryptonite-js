import {checkAlphabet, getMapKeyByValue, isUpperCase} from '../src/helpers.js';

describe('Helper functions', () => {
  test('Is Upper Case', () => {
    expect(isUpperCase('a')).toEqual(false);
    expect(isUpperCase('A')).toEqual(true);
    expect(isUpperCase('abc')).toEqual(false);
    expect(isUpperCase('ABC')).toEqual(true);
    expect(isUpperCase('aBc')).toEqual(false);
  });

  test('Get Map Key by Value - undefined', () => {
    const testMap: Map<string, string> = new Map([
      ['a', 'alpha'],
      ['b', 'beta'],
    ]);
    expect(getMapKeyByValue(testMap, 'alpha')).toEqual('a');
    expect(getMapKeyByValue(testMap, 'gama')).toBeUndefined();
  });

  test('Get Map Key by Value - no map given', () => {
    expect(() =>
      // @ts-expect-error - function param with false type
      getMapKeyByValue('abc', 'alpha')
    ).toThrowError('Invalid param - please provide an intance of Map.');
  });

  test('Check Alphabet', () => {
    // @ts-expect-error - function param with false type
    expect(() => checkAlphabet(true)).toThrowError(
      'Invalid alphabet: please provide an array of single-letter chars.'
    );
    // @ts-expect-error - function param with false type
    expect(() => checkAlphabet([1, 2])).toThrowError(
      'Invalid alphabet: alphabet should contain only single-letter chars.'
    );
    expect(() => checkAlphabet([])).toThrowError(
      'Invalid alphabet: alphabet needs be at least 2 characters long.'
    );
    expect(() => checkAlphabet([''])).toThrowError(
      'Invalid alphabet: alphabet needs be at least 2 characters long.'
    );
    expect(() => checkAlphabet(['', ''])).toThrowError(
      'Invalid alphabet: alphabet should contain only single-letter chars.'
    );
    expect(() => checkAlphabet(['a'])).toThrowError(
      'Invalid alphabet: alphabet needs be at least 2 characters long.'
    );
    expect(() => checkAlphabet(['a', 'a'])).toThrowError(
      'Invalid alphabet: alphabet must not contain duplicates.'
    );
    expect(() => checkAlphabet(['a', 'A'])).toThrowError(
      'Invalid alphabet: alphabet must not contain duplicates.'
    );
    expect(() => checkAlphabet([' ', 'x'])).toThrowError(
      'Invalid alphabet: alphabet should contain only single-letter chars.'
    );
    expect(() => checkAlphabet(['a', 'b'])).toBeTruthy();
  });
});
