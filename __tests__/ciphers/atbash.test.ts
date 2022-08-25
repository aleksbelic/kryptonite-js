import {encrypt, decrypt} from '../../src/ciphers/atbash.js';

describe('Atbash cipher - encryption', () => {
  test('Basic', () => {
    expect(encrypt('abcdefghijklmnopqrstuvwxyz')).toEqual(
      'zyxwvutsrqponmlkjihgfedcba'
    );
  });
});

describe('Atbash cipher - decryption', () => {
  test('Basic', () => {
    expect(decrypt('zyxwvutsrqponmlkjihgfedcba')).toEqual(
      'abcdefghijklmnopqrstuvwxyz'
    );
  });
});
