import {encrypt, decrypt} from '../../src/ciphers/vigenere.js';

describe('Vigenère cipher - encryption', () => {
  test('Basic', () => {
    expect(encrypt('abcdefghijklmnopqrstuvwxyz', 'cowabunga')).toEqual(
      'cpydfztnilyhmoicwruhqvxrlf'
    );
  });
});

describe('Vigenère cipher - decryption', () => {
  test('Basic', () => {
    expect(decrypt('cpydfztnilyhmoicwruhqvxrlf', 'cowabunga')).toEqual(
      'abcdefghijklmnopqrstuvwxyz'
    );
  });
});
