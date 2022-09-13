import {encrypt, decrypt} from '../../src/ciphers/vigenere.js';

describe('Vigenère cipher - encryption', () => {
  test('Basic', () => {
    expect(encrypt('abcdefghijklmnopqrstuvwxyz', 'cowabunga')).toEqual(
      'cpydfztnilyhmoicwruhqvxrlf'
    );
    expect(encrypt('this is my secret message', 'secretkey')).toEqual(
      'llkj ml wc qwgtvx fowqskg'
    );
  });
});

describe('Vigenère cipher - decryption', () => {
  test('Basic', () => {
    expect(decrypt('cpydfztnilyhmoicwruhqvxrlf', 'cowabunga')).toEqual(
      'abcdefghijklmnopqrstuvwxyz'
    );
    expect(encrypt('llkj ml wc qwgtvx fowqskg', 'secretkey')).toEqual(
      'this is my secret message'
    );
  });
});
