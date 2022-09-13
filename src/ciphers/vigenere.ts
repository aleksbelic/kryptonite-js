import {ALPHABET_EN} from '../globals.js';

/**
 * [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) encryption.
 * @param plaintext text to be encrypted
 * @param key word used to switch cipher alphabets every letter
 * @param [caseSensitive=true] if correct input of upper case and lower case matters
 * @param [includeForeignChars=true] if unknown char should be included in ciphertext
 * @param alphabet used alphabet
 * @returns ciphertext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * TODO
 */
export function encrypt(
  plaintext: string,
  key: string,
  caseSensitive = true,
  includeForeignChars = true,
  alphabet = ALPHABET_EN
): string {
  if (key === '') {
    throw Error('No key provided.');
  }

  let ciphertext = '',
    currentChar: string;

  for (let i = 0; i < plaintext.length; i++) {
    currentChar = plaintext[i];
    if (alphabet.indexOf(currentChar) === -1) {
      if (includeForeignChars) {
        ciphertext += currentChar;
      }
      continue;
    }
    ciphertext +=
      alphabet[
        (alphabet.indexOf(currentChar) +
          alphabet.indexOf(key[i % key.length])) %
          alphabet.length
      ];
  }
  return ciphertext;
}

/**
 * [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) decryption.
 * @param ciphertext text to be decrypted
 * @param key word used to switch cipher alphabets every letter
 * @param alphabet used alphabet
 * @returns plaintext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * TODO
 */
export function decrypt(
  ciphertext: string,
  key: string,
  alphabet = ALPHABET_EN
): string {
  if (key === '') {
    throw Error('No key provided.');
  }

  let plaintext = '';
  let currentDecryptedCharIndex: number;
  for (let i = 0; i < ciphertext.length; i++) {
    currentDecryptedCharIndex =
      alphabet.indexOf(ciphertext[i]) - alphabet.indexOf(key[i % key.length]);
    plaintext +=
      alphabet[
        (currentDecryptedCharIndex += alphabet.length) % alphabet.length
      ];
  }
  return plaintext;
}
