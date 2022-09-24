import {encrypt, decrypt} from '../../src/ciphers/scytale.js';
import {ALPHABET_EN} from '../../src/globals.js';

describe('Scytale cipher', () => {
  test('Encryption', () => {
    expect(encrypt('', 1)).toEqual('');
    expect(encrypt('abcdef')).toEqual('aebfc d');
    expect(encrypt('abcdef', 1)).toEqual('abcdef');
    expect(encrypt('abcdef', 2)).toEqual('acebdf');
    expect(encrypt('abcdef', 3)).toEqual('adbecf');
    expect(encrypt('abcdef', 4)).toEqual('aebfc d');
    expect(encrypt('abcdef', 5)).toEqual('afb c d e');
    expect(encrypt('abcdef', 6)).toEqual('abcdef');
    expect(encrypt('abcdef', 7)).toEqual('abcdef');
    expect(encrypt([...ALPHABET_EN].join(''), 1)).toEqual(
      [...ALPHABET_EN].join('')
    );
    expect(encrypt([...ALPHABET_EN].join(''), 4)).toEqual(
      'aeimquybfjnrvzcgkosw dhlptx'
    );
    expect(encrypt([...ALPHABET_EN].join(''), 5)).toEqual(
      'afkpuzbglqv chmrw dinsx ejoty'
    );
    expect(() => encrypt('abcdef', 0)).toThrowError(
      'Invalid param: number of columns must be a positive integer.'
    );
  });

  test('Decryption', () => {
    expect(decrypt('aebfc d')).toEqual('abcdef');
    expect(decrypt('abcdef', 1)).toEqual('abcdef');
    expect(decrypt('acebdf', 2)).toEqual('abcdef');
    expect(decrypt('adbecf', 3)).toEqual('abcdef');
    expect(decrypt('aebfc d', 4)).toEqual('abcdef');
    expect(decrypt('afb c d e', 5)).toEqual('abcdef');
    expect(decrypt('abcdef', 6)).toEqual('abcdef');
    expect(decrypt('abcdef', 7)).toEqual('abcdef');
    expect(decrypt([...ALPHABET_EN].join(''), 1)).toEqual(
      [...ALPHABET_EN].join('')
    );
    expect(decrypt('aeimquybfjnrvzcgkosw dhlptx', 4)).toEqual(
      [...ALPHABET_EN].join('')
    );
    expect(decrypt('afkpuzbglqv chmrw dinsx ejoty', 5)).toEqual(
      [...ALPHABET_EN].join('')
    );
    expect(() => decrypt('abcdef', 0)).toThrowError(
      'Invalid param: number of columns must be a positive integer.'
    );
    expect(() => decrypt('', 1)).toThrowError(
      'Invalid param: no ciphertext provided.'
    );
  });
});
