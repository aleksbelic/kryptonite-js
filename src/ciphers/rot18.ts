import * as rot5 from './rot5.js';
import * as rot13 from './rot13.js';
import {ALPHABET_EN, DIGITS} from '../globals.js';
import {isUpperCase} from '../helpers.js';

/**
 * Variant of [ROT13 cipher](https://en.wikipedia.org/wiki/ROT13) encryption that applies to both digits and letters.
 * @param plaintext text to be encrypted
 * @param [caseSensitive=true] if correct input of upper case and lower case matters
 * @param [includeForeignChars=true] if unknown char should be included in ciphertext
 * @returns ciphertext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * encrypt('123aBc')
 * // returns '678nOp'
 * encrypt('123aBc', false)
 * // returns '678nop'
 * encrypt('123!aBc', undefined, true)
 * // returns '678!nOp'
 * encrypt('123!aBc', undefined, false)
 * // returns '678nOp'
 */
export function encrypt(
  plaintext: string,
  caseSensitive = true,
  includeForeignChars = true
): string {
  const digitsAndAlphabetEn = DIGITS.concat(ALPHABET_EN);
  let ciphertext = '';
  const tmpCiphertext = rot13.encrypt(
    rot5.encrypt(plaintext, true),
    caseSensitive,
    true
  );
  if (!includeForeignChars) {
    for (const char of tmpCiphertext) {
      if (digitsAndAlphabetEn.indexOf(char.toLowerCase()) !== -1) {
        ciphertext +=
          caseSensitive && isUpperCase(char) ? char : char.toLowerCase();
      }
    }
  } else ciphertext = tmpCiphertext;
  return ciphertext;
}
