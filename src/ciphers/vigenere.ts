import {ALPHABET_EN} from '../globals.js';

/**
 * [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) encryption.
 * @param plaintext text to be encrypted
 * @param key word used to switch cipher alphabets every letter
 * @param alphabet used alphabet
 * @returns ciphertext
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
 * [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) decryption.
 * @param ciphertext text to be decrypted
 * @param key word used to switch cipher alphabets every letter
 * @param alphabet used alphabet
 * @returns plaintext
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
