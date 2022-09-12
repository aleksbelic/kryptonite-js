import {encrypt, decrypt} from '../../src/ciphers/rot13.js';

describe('ROT13 cipher - encryption', () => {
  test('Shift', () => {
    expect(encrypt('abcdefghijklmnopqrstuvwxyz')).toEqual(
      'nopqrstuvwxyzabcdefghijklm'
    );
  });
});

describe('ROT13 cipher - decryption', () => {
  test('Shift', () => {
    expect(decrypt('nopqrstuvwxyzabcdefghijklm')).toEqual(
      'abcdefghijklmnopqrstuvwxyz'
    );
  });
});
