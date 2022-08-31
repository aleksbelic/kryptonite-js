import {encrypt, decrypt} from '../../src/ciphers/atbash.js';

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
});
