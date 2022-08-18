import {encrypt, decrypt} from '../../src/ciphers/caesar.js';
import {ALPHABET_SR_CYR} from '../../src/globals.js';

describe('Caesar cipher - encryption', () => {
  test('Shift', () => {
    expect(encrypt('abcdefghijklmnopqrstuvwxyz', 1)).toEqual(
      'bcdefghijklmnopqrstuvwxyza'
    );
    expect(encrypt('abcdefghijklmnopqrstuvwxyz', -1)).toEqual(
      'zabcdefghijklmnopqrstuvwxy'
    );
    expect(encrypt('abc', 30)).toEqual('efg');
    expect(encrypt('abc', -30)).toEqual('wxy');
  });

  test('Case sensitive', () => {
    expect(encrypt('ABc', 1, true)).toEqual('BCd');
    expect(encrypt('aBc', 1, false)).toEqual('bcd');
  });

  test('Include foreign chars', () => {
    expect(encrypt('ab!c', 1, true, true)).toEqual('bc!d');
    expect(encrypt('ab!c', 1, true, false)).toEqual('bcd');
  });

  test('Custom alphabet', () => {
    expect(() => encrypt('a', 1, undefined, undefined, ['a'])).toThrowError(
      'Alphabet needs be at least 2 characters long.'
    );
    expect(() =>
      encrypt('abc', 1, undefined, undefined, ['c', 'b', 'a', 'c', 'd'])
    ).toThrowError('Alphabet must not contain duplicates.');
    expect(
      encrypt(
        'Ако не почнеш, нећеш ни завршити',
        10,
        true,
        true,
        ALPHABET_SR_CYR
      )
    ).toEqual('Јтч хњ џчжхњи, хњвњи хр пјлширбр');
  });

  test('Random', () => {
    expect(
      encrypt(
        'Ignavi coram morte quidem animam trahunt, audaces autem illam non saltem advertunt.',
        5
      )
    ).toBe(
      'Nlsfan htwfr rtwyj vznijr fsnrfr ywfmzsy, fzifhjx fzyjr nqqfr sts xfqyjr fiajwyzsy.'
    );
    expect(encrypt('Veni, vidi, vici.', 22, false, false)).toBe('rajerezereye');
  });
});

describe('Caesar cipher - decryption', () => {
  test('Shift', () => {
    expect(decrypt('bcdefghijklmnopqrstuvwxyza', 1)).toEqual(
      'abcdefghijklmnopqrstuvwxyz'
    );
    expect(decrypt('zabcdefghijklmnopqrstuvwxy', -1)).toEqual(
      'abcdefghijklmnopqrstuvwxyz'
    );
    expect(decrypt('efg', 30)).toEqual('abc');
    expect(decrypt('wxy', -30)).toEqual('abc');
  });

  test('Case sensitive', () => {
    expect(decrypt('BCd', 1, true)).toEqual('ABc');
    expect(decrypt('bCd', 1, false)).toEqual('abc');
  });

  test('Include foreign chars', () => {
    expect(decrypt('bc!d', 1, true, true)).toEqual('ab!c');
    expect(decrypt('bc!d', 1, true, false)).toEqual('abc');
  });

  test('Custom alphabet', () => {
    expect(() => decrypt('a', 1, undefined, undefined, ['a'])).toThrowError(
      'Alphabet needs be at least 2 characters long.'
    );
    expect(() =>
      decrypt('bcd', 1, undefined, undefined, ['c', 'b', 'a', 'c', 'd'])
    ).toThrowError('Alphabet must not contain duplicates.');
    expect(
      decrypt(
        'Јтч хњ џчжхњи, хњвњи хр пјлширбр',
        10,
        true,
        true,
        ALPHABET_SR_CYR
      )
    ).toEqual('Ако не почнеш, нећеш ни завршити');
  });

  test('Random', () => {
    expect(decrypt('T slgp yz topl hsle T lx oztyr', -15)).toEqual(
      'I have no idea what I am doing'
    );
    expect(decrypt('Qjen wx onja xo rln lxum KNNA', 9)).toEqual(
      'Have no fear of ice cold BEER'
    );
  });
});
