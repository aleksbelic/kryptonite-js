import {encrypt, decrypt} from '../src/caesar';

describe('Caesar cipher - encryption', () => {
  test('Basic', () => {
    expect(encrypt('abc', 1)).toEqual('bcd');
  });
});

describe('Caesar cipher - decryption', () => {
  test('Basic', () => {
    expect(decrypt('bcd', -1)).toEqual('cde');
  });
});
