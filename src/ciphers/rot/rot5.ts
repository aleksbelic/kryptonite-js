import {DIGITS} from '../../globals.js';
import * as caesar from '../caesar.js';

/**
 * Variant of [ROT13 cipher](https://en.wikipedia.org/wiki/ROT13) encryption that applies to numeric digits.
 * @param plaintext text to be encrypted
 * @param [includeCharsOtherThanNumbers=true] if chars other than numbers should be included in ciphertext
 * @returns ciphertext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * encrypt('1234567890')
 * // returns '6789012345'
 * encrypt('ab!c 123', true)
 * // returns 'ab!c 678'
 * encrypt('ab!c 123', false)
 * // returns '678'
 */
export function encrypt(
  plaintext: string,
  includeCharsOtherThanNumbers = true
): string {
  return caesar.encrypt(
    plaintext,
    5,
    true,
    includeCharsOtherThanNumbers,
    DIGITS
  );
}

/**
 * Variant of [ROT13 cipher](https://en.wikipedia.org/wiki/ROT13) decryption that applies to numeric digits.
 * @param ciphertext text to be decrypted
 * @param [includeCharsOtherThanNumbers=true] if chars other than numbers should be included in plaintext
 * @returns plaintext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * decrypt('6789012345');
 * // returns '1234567890'
 * decrypt('ab!c 678', true);
 * // returns 'ab!c 123'
 * decrypt('ab!c 678', false);
 * // returns '123'
 */
export function decrypt(
  ciphertext: string,
  includeCharsOtherThanNumbers = true
): string {
  return encrypt(ciphertext, includeCharsOtherThanNumbers);
}
