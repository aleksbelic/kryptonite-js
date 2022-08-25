import {ALPHABET_EN} from '../globals.js';

/**
 * [Atbash cipher](https://en.wikipedia.org/wiki/Atbash) encryption.
 * @param plaintext - text to encrypt
 * @param [alphabet=ALPHABET_EN] - alphabet used for encryption process
 * @returns ciphertext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * encrypt('abc')
 * // returns 'zyx'
 */
export function encrypt(plaintext: string, alphabet = ALPHABET_EN): string {
  let ciphertext = '';
  let currentCharIndex: number;
  for (const currentChar of plaintext) {
    currentCharIndex = alphabet.indexOf(currentChar);
    // -1 TODO
    ciphertext += alphabet[alphabet.length - currentCharIndex - 1];
  }
  return ciphertext;
}

/**
 * [Atbash cipher](https://en.wikipedia.org/wiki/Atbash) decryption.
 * @param ciphertext - text to decrypt
 * @param [alphabet=ALPHABET_EN] - alphabet used for decryption process
 * @returns plaintext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * decrypt('zyx')
 * // returns 'abc'
 */
export function decrypt(ciphertext: string, alphabet = ALPHABET_EN): string {
  return encrypt(ciphertext, alphabet);
}
