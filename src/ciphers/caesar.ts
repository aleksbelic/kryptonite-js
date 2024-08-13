import {ALPHABET_EN} from '../globals';
import {checkAlphabet, getShiftedChar, isUpperCase} from '../helpers';

/**
 * [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) encryption.
 * @param plaintext text to be encrypted
 * @param shift number of left or right alphabet rotations
 * @param [caseSensitive=true] if correct input of upper case and lower case matters
 * @param [includeForeignChars=true] if unknown char should be included in ciphertext
 * @param [alphabet=ALPHABET_EN] used alphabet
 * @returns ciphertext
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
  checkAlphabet(alphabet);

  let ciphertext = '',
    currentCharEncrypted: string | undefined;

  for (const currentChar of plaintext) {
    currentCharEncrypted = getShiftedChar(currentChar, shift, alphabet);
    if (currentCharEncrypted === undefined) {
      if (includeForeignChars) {
        ciphertext += currentChar;
      }
      continue;
    } else if (caseSensitive && isUpperCase(currentChar)) {
      currentCharEncrypted = currentCharEncrypted.toUpperCase();
    }
    ciphertext += currentCharEncrypted;
  }

  return ciphertext;
}

/**
 * [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) decryption.
 * @param ciphertext text to be decrypted
 * @param shift number of left or right alphabet rotations
 * @param [caseSensitive=true] if correct input of upper case and lower case matters
 * @param [includeForeignChars=true] if unknown char should be included in plaintext
 * @param [alphabet=ALPHABET_EN] used alphabet
 * @returns plaintext
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
  return encrypt(
    ciphertext,
    alphabet.length - shift,
    caseSensitive,
    includeForeignChars,
    alphabet
  );
}

/**
 * Prints decrypted plaintext for given ciphertext, shift & alphabet.
 * @param ciphertext text to be decrypted
 * @param shift number of left or right alphabet rotations
 * @param [caseSensitive=true] if correct input of upper case and lower case matters
 * @param [includeForeignChars=true] if unknown char should be included in ciphertext
 * @param [alphabet=ALPHABET_EN] used alphabet
 * @example
 * printShift('abc', 1)
 * // prints 'bcd'
 */
export function printShift(
  ciphertext: string,
  shift: number,
  caseSensitive = true,
  includeForeignChars = true,
  alphabet = ALPHABET_EN
): void {
  console.log(
    encrypt(ciphertext, shift, caseSensitive, includeForeignChars, alphabet)
  );
}

/**
 * Prints decrypted plaintext of given ciphertext with all possible shifts.
 * @param ciphertext text to be decrypted
 * @param [caseSensitive=true] if correct input of upper case and lower case matters
 * @param [includeForeignChars=true] if unknown char should be included in ciphertext
 * @param [alphabet=ALPHABET_EN] used alphabet
 * @example
 * printAllShifts('a', undefined, undefined, ['a', 'b', 'c'])
 * // prints
 * 'a'
 * 'b'
 * 'c'
 */
export function printAllShifts(
  ciphertext: string,
  caseSensitive = true,
  includeForeignChars = true,
  alphabet = ALPHABET_EN
): void {
  for (let shift = 0; shift < alphabet.length; shift++) {
    console.log(
      encrypt(ciphertext, shift, caseSensitive, includeForeignChars, alphabet)
    );
  }
}
