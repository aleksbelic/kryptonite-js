import {encrypt} from '../../src/ciphers/scytale.js';
import {ALPHABET_EN} from '../../src/globals.js';

describe('Scytale cipher', () => {
  test('Encryption', () => {
    expect(encrypt('', 1)).toEqual('');
    expect(encrypt('abcdef', 1)).toEqual('abcdef');
    expect(encrypt('abcdef', 2)).toEqual('acebdf');
    expect(encrypt('abcdef', 3)).toEqual('adbecf');
    expect(encrypt('abcdef', 4)).toEqual('aebfcd');
    expect(encrypt('abcdef', 5)).toEqual('afbcde');
    expect(encrypt('abcdef', 6)).toEqual('abcdef');
    expect(encrypt('abcdef', 7)).toEqual('abcdef');
    expect(encrypt([...ALPHABET_EN].join(''), 1)).toEqual(
      [...ALPHABET_EN].join('')
    );
    expect(encrypt([...ALPHABET_EN].join(''), 4)).toEqual(
      'aeimquybfjnrvzcgkoswdhlptx'
    );
    expect(encrypt([...ALPHABET_EN].join(''), 5)).toEqual(
      'afkpuzbglqvchmrwdinsxejoty'
    );
    expect(() => encrypt('abcdef', 0)).toThrowError(
      'Invalid param: number of columns must be a positive integer.'
    );
  });
});
