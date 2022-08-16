import {encrypt, decrypt} from '../src/ciphers/caesar.js';
import {ALPHABET_SR_CYR} from '../src/globals.js';

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
    expect(decrypt('Ohcl uv mlhy vm pjl jvsk ILLY', 7, true)).toEqual(
      'Have no fear of ice cold BEER'
    );
    expect(decrypt('Hega w xkoo', 22, false)).toEqual('like a boss');
  });

  test('Include foreign chars', () => {});

  test('Custom alphabet', () => {
    expect(() => decrypt('a', 1, undefined, undefined, ['a'])).toThrowError(
      'Alphabet needs be at least 2 characters long.'
    );
    expect(
      decrypt(
        'Фа овењачр уљче фабљ, гљч е ше ебљољ.',
        13,
        true,
        true,
        ALPHABET_SR_CYR
      )
    ).toEqual('Ко другоме јаму копа, сам у њу упада.');
  });

  test('Random', () => {});
});
