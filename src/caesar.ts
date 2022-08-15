import {ALPHABET_EN} from './globals';
import {isUpperCase} from './helpers';

/**
 * [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) encryption.
 * @param plaintext text to be encrypted
 * @param shift number of left or right alphabet rotations
 * @param caseSensitive if correct input of uppercase and lowercase chars matters
 * @param includeForeignChars if unknown char should be omitted in ciphertext
 * @param alphabet alphabet being used
 * @returns ciphertext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * encrypt('ABC', 1)
 * // returns 'BCD'
 * @example
 * encrypt('ABC', -1)
 * // returns 'ZAB'
 */
export const encrypt = (
  plaintext: string,
  shift: number,
  caseSensitive = true,
  includeForeignChars = true,
  alphabet = ALPHABET_EN
): string => {
  let ciphertext = '';
  if (shift < 0) {
    shift = alphabet.length + shift;
  }
  let currentCharIndexInAlphabet = -1;
  for (let i = 0; i < plaintext.length; i++) {
    currentCharIndexInAlphabet = alphabet.indexOf(plaintext[i]);
    if (currentCharIndexInAlphabet === -1) {
      if (includeForeignChars) {
        ciphertext += plaintext[i];
      }
      continue;
    }
    ciphertext +=
      alphabet[(currentCharIndexInAlphabet + shift) % alphabet.length];
  }
  return ciphertext;
};

/**
 * [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) decryption.
 * @param ciphertext text to be decrypted
 * @param shift number of left or right alphabet rotations
 * @param caseSensitive if correct input of uppercase and lowercase chars matters
 * @param includeForeignChars if unknown char should be omitted in ciphertext
 * @param alphabet alphabet being used
 * @returns plaintext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * decrypt('BCD', 1)
 * // returns 'ABC'
 * @example
 * decrypt('ZAB', -1)
 * // returns 'ABC'
 */
export const decrypt = (
  ciphertext: string,
  shift: number,
  caseSensitive = true,
  includeForeignChars = true,
  alphabet = ALPHABET_EN
): string => {
  encrypt;
  return encrypt(
    ciphertext,
    alphabet.length - shift,
    caseSensitive,
    includeForeignChars,
    alphabet
  );
};
