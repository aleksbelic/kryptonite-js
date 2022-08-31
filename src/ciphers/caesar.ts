import {ALPHABET_EN} from '../globals.js';
import {isUpperCase} from '../helpers.js';

/**
 * [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) encryption.
 * @param plaintext - text to be encrypted
 * @param shift - number of left or right alphabet rotations
 * @param [caseSensitive=true] - if correct input of uppercase and lowercase matters
 * @param [includeForeignChars=true] - if unknown char should be omitted in ciphertext
 * @param [alphabet=ALPHABET_EN] - alphabet being used
 * @returns ciphertext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * encrypt('abc', 1)
 * // returns 'bcd'
 * encrypt('abc', -1)
 * // returns 'zab'
 * encrypt('Abc', 1, true)
 * // returns 'Bcd'
 * encrypt('Abc', 1, false)
 * // returns 'bcd'
 * encrypt('ab!c', 1, true, true)
 * // returns 'bc!d'
 * encrypt('ab!c', 1, true, false)
 * // returns 'bcd'
 */
export function encrypt(
  plaintext: string,
  shift: number,
  caseSensitive = true,
  includeForeignChars = true,
  alphabet = ALPHABET_EN
): string {
  // check alphabet
  if (alphabet.length < 2) {
    throw Error('Alphabet needs be at least 2 characters long.');
  }
  if (alphabet.toString() !== [...new Set(alphabet)].toString()) {
    throw Error('Alphabet must not contain duplicates.');
  }

  if (Math.abs(shift) > alphabet.length) {
    shift %= alphabet.length;
  }
  if (shift < 0) {
    shift = alphabet.length + shift;
  }

  let ciphertext = '';
  let currentCharIndexInAlphabet: number,
    isCurrentCharUpperCase: boolean,
    currentCharEncrypted: string;

  for (const currentChar of plaintext) {
    isCurrentCharUpperCase = isUpperCase(currentChar);
    currentCharIndexInAlphabet = alphabet.indexOf(currentChar.toLowerCase());

    if (currentCharIndexInAlphabet === -1) {
      if (includeForeignChars) {
        ciphertext += currentChar;
      }
      continue;
    }

    currentCharEncrypted =
      alphabet[(currentCharIndexInAlphabet + shift) % alphabet.length];
    if (caseSensitive && isCurrentCharUpperCase) {
      currentCharEncrypted = currentCharEncrypted.toUpperCase();
    }
    ciphertext += currentCharEncrypted;
  }
  return ciphertext;
}

/**
 * [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) decryption.
 * @param ciphertext - text to be decrypted
 * @param shift - number of left or right alphabet rotations
 * @param [caseSensitive=true] - if correct input of uppercase and lowercase matters
 * @param [includeForeignChars=true] - if unknown char should be included in plaintext
 * @param [alphabet=ALPHABET_EN] - alphabet being used
 * @returns plaintext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * decrypt('bcd', 1)
 * // returns 'abc'
 * decrypt('zab', -1)
 * // returns 'abc'
 * decrypt('Bcd', 1, true)
 * // returns 'Abc'
 * decrypt('Bcd', 1, false)
 * // returns 'abc'
 * decrypt('bc!d', 1, true, true)
 * // returns 'ab!c'
 * decrypt('bc!d', 1, true, false)
 * // returns 'abc'
 */
export function decrypt(
  ciphertext: string,
  shift: number,
  caseSensitive = true,
  includeForeignChars = true,
  alphabet = ALPHABET_EN
): string {
  encrypt;
  return encrypt(
    ciphertext,
    alphabet.length - shift,
    caseSensitive,
    includeForeignChars,
    alphabet
  );
}
