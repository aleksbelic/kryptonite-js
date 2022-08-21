import {getMapKeyByValue, isUpperCase} from '../src/helpers.js';

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
});
