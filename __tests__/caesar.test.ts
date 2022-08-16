import {encrypt, decrypt} from '../src/caesar.js';

describe('Caesar cipher - encryption', () => {
  test('Shift', () => {
    expect(encrypt('abcdefghijklmnopqrstuvwxyz', 1)).toEqual(
      'bcdefghijklmnopqrstuvwxyza'
    );
    expect(encrypt('abcdefghijklmnopqrstuvwxyz', -1)).toEqual(
      'zabcdefghijklmnopqrstuvwxy'
    );
    expect(encrypt('abcdefghijklmnopqrstuvwxyz', -1)).toEqual(
      'zabcdefghijklmnopqrstuvwxy'
    );
  });
  test('Case sensitive', () => {
    expect(encrypt('ABc', 1, true)).toEqual('BCd');
    expect(encrypt('aBc', 1, false)).toEqual('bcd');
  });
  test('Include foreign chars', () => {
    expect(encrypt('ab!c', 1, true, true)).toEqual('bc!d');
    expect(encrypt('ab!c', 1, true, false)).toEqual('bcd');
  });
  test('Random', () => {});
});

describe('Caesar cipher - decryption', () => {
  test('Shift', () => {
    expect(decrypt('bcdefghijklmnopqrstuvwxyza', 1)).toEqual(
      'abcdefghijklmnopqrstuvwxyz'
    );
    expect(decrypt('bcd', -1)).toEqual('cde');
  });
  test('Case sensitive', () => {});
  test('Include foreign chars', () => {});
});
