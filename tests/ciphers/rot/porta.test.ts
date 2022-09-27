import {encrypt, decrypt} from '../../../src/ciphers/porta.js';

describe('Porta cipher', () => {
  test('Encryption', () => {
    expect(encrypt('abc', 'key')).toEqual('sqo');
    expect(encrypt('aBc', 'key')).toEqual('sQo');
    expect(encrypt('aBc', 'key', false)).toEqual('sqo');
    expect(encrypt('aB_c', 'key')).toEqual('sQ_u');
    expect(encrypt('aB_c', 'key', undefined, false)).toEqual('sQo');
    expect(encrypt('aB_c', 'key', false, false)).toEqual('sqo');
    expect(() => encrypt('abc', '')).toThrowError(
      'Invalid param: key cannot be an empty string.'
    );
    expect(() => encrypt('abc', '_')).toThrowError(
      `No substitution alphabet provided for key char '_'.`
    );
  });

  test('Decryption', () => {
    expect(decrypt('sqo', 'key')).toEqual('abc');
    expect(decrypt('sQo', 'key')).toEqual('aBc');
    expect(decrypt('sQo', 'key', false)).toEqual('abc');
    expect(decrypt('sQ_u', 'key')).toEqual('aB_c');
    expect(decrypt('sQ_o', 'key', undefined, false)).toEqual('aBc');
    expect(decrypt('sQ_o', 'key', false, false)).toEqual('abc');
    expect(() => decrypt('sqo', '')).toThrowError(
      'Invalid param: key cannot be an empty string.'
    );
    expect(() => decrypt('sqo', '_')).toThrowError(
      `No substitution alphabet provided for key char '_'.`
    );
  });
});
