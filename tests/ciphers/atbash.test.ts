import {describe, expect, test} from '@jest/globals';
import {encrypt, decrypt} from '../../src/ciphers/atbash';

describe('Atbash cipher - encryption', () => {
  test('Basic substitution', () => {
    expect(encrypt('abcdefghijklmnopqrstuvwxyz')).toEqual(
      'zyxwvutsrqponmlkjihgfedcba'
    );
  });

  test('Case sensitive', () => {
    expect(encrypt('abc')).toEqual('zyx');
    expect(encrypt('Abc', true)).toEqual('Zyx');
    expect(encrypt('Abc', false)).toEqual('zyx');
  });

  test('Include foreign chars', () => {
    expect(encrypt('abc#d', undefined, true)).toEqual('zyx#w');
  });

  test('Custom alphabet', () => {
    expect(encrypt('ћшчшћћ', undefined, undefined, ['ш', 'ч', 'ћ'])).toEqual(
      'шћчћшш'
    );
  });

  test('Various', () => {
    expect(encrypt('aBc!D', false, false)).toEqual('zyxw');
    expect(encrypt('aBc!D', true, false)).toEqual('zYxW');
    expect(encrypt('aBc!D', false, true)).toEqual('zyx!w');
    expect(encrypt('aBc!D', true, true)).toEqual('zYx!W');
    expect(encrypt('abcd abcd')).toEqual('zyxw zyxw');
    expect(encrypt('abcd abcd', undefined, false)).toEqual('zyxwzyxw');
  });
});

describe('Atbash cipher - decryption', () => {
  test('Basic substitution', () => {
    expect(decrypt('zyxwvutsrqponmlkjihgfedcba')).toEqual(
      'abcdefghijklmnopqrstuvwxyz'
    );
  });

  test('Case sensitive', () => {
    expect(decrypt('zyx')).toEqual('abc');
    expect(decrypt('Zyx', true)).toEqual('Abc');
    expect(decrypt('Zyx', false)).toEqual('abc');
  });

  test('Include foreign chars', () => {
    expect(decrypt('zyx#w', undefined, true)).toEqual('abc#d');
  });

  test('Custom alphabet', () => {
    expect(decrypt('шћчћшш', undefined, undefined, ['ш', 'ч', 'ћ'])).toEqual(
      'ћшчшћћ'
    );
  });

  test('Various', () => {
    expect(decrypt('zYx!W', false, false)).toEqual('abcd');
    expect(decrypt('zYx!W', true, false)).toEqual('aBcD');
    expect(decrypt('zYx!W', false, true)).toEqual('abc!d');
    expect(decrypt('zYx!W', true, true)).toEqual('aBc!D');
    expect(decrypt('zyxw zyxw')).toEqual('abcd abcd');
    expect(decrypt('zyxw zyxw', undefined, false)).toEqual('abcdabcd');
  });
});
