import {ALPHABET_EN} from '../globals.js';

/**
 *
 * @param plaintext
 * @param key
 * @param alphabet
 * @returns
 */
export function encrypt(
  plaintext: string,
  key: string,
  alphabet = ALPHABET_EN
): string {
  if (key === '') {
    throw Error('No key provided.');
  }

  let ciphertext = '';

  for (let i = 0; i < plaintext.length; i++) {
    ciphertext +=
      alphabet[
        (alphabet.indexOf(plaintext[i]) +
          alphabet.indexOf(key[i % key.length])) %
          alphabet.length
      ];
  }
  return ciphertext;
}

/**
 *
 * @param ciphertext
 * @param key
 * @param alphabet
 * @returns
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
