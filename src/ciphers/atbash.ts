import {ALPHABET_EN} from '../globals.js';
import {isUpperCase} from '../helpers.js';

/**
 * [Atbash cipher](https://en.wikipedia.org/wiki/Atbash) encryption.
 * @param plaintext text to encrypt
 * @param [caseSensitive=true] if correct input of upper case and lower case matters
 * @param [includeForeignChars=true] if unknown char should be included in ciphertext
 * @param [alphabet=ALPHABET_EN] alphabet used for encryption process
 * @returns ciphertext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
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
  let ciphertext = '',
    currentCharIndexInAlphabet: number,
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
      alphabet[alphabet.length - currentCharIndexInAlphabet - 1];
    if (caseSensitive && isCurrentCharUpperCase) {
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
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
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
