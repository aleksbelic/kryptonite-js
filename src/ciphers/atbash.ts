import {ALPHABET_EN} from '../globals';
import {checkAlphabet, getShiftedChar, isUpperCase} from '../helpers';

/**
 * [Atbash cipher](https://en.wikipedia.org/wiki/Atbash) encryption.
 * @param plaintext text to encrypt
 * @param [caseSensitive=true] if correct input of upper case and lower case matters
 * @param [includeForeignChars=true] if unknown char should be included in ciphertext
 * @param [alphabet=ALPHABET_EN] alphabet used for encryption process
 * @returns ciphertext
 * @example
 * encrypt('abc')
 * // returns 'zyx'
 * encrypt('Abc', true)
 * // returns 'Zyx'
 * encrypt('abc#d', undefined, true)
 * // returns 'zyx#w'
 * encrypt('ћшчшћћ', undefined, undefined, ['ш', 'ч', 'ћ'])
 * // returns 'шћчћшш'
 */
export function encrypt(
  plaintext: string,
  caseSensitive = true,
  includeForeignChars = true,
  alphabet = ALPHABET_EN
): string {
  checkAlphabet(alphabet);

  let ciphertext = '',
    shift: number,
    currentCharEncrypted: string | undefined;

  for (const currentChar of plaintext) {
    shift =
      alphabet.length - 2 * alphabet.indexOf(currentChar.toLowerCase()) - 1;
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
 * [Atbash cipher](https://en.wikipedia.org/wiki/Atbash) decryption.
 * @param ciphertext text to decrypt
 * @param [caseSensitive=true] if correct input of upper case and lower case matters
 * @param [includeForeignChars=true] if unknown char should be included in plaintext
 * @param [alphabet=ALPHABET_EN] alphabet used for decryption process
 * @returns plaintext
 * @example
 * decrypt('zyx')
 * // returns 'abc'
 * decrypt('Zyx', true)
 * // returns 'Abc'
 * decrypt('zyx#w', undefined, true)
 * // returns 'abc#d'
 * decrypt('шћчћшш', undefined, undefined, ['ш', 'ч', 'ћ'])
 * // returns 'ћшчшћћ'
 */
export function decrypt(
  ciphertext: string,
  caseSensitive = true,
  includeForeignChars = true,
  alphabet = ALPHABET_EN
): string {
  return encrypt(ciphertext, caseSensitive, includeForeignChars, alphabet);
}
