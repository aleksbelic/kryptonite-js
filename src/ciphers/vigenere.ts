import {ALPHABET_EN} from '../globals.js';
import {isUpperCase} from '../helpers.js';

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
 * encrypt('My secret msg', 'mykey')
 * // returns 'Yw ciadcd qqs'
 * encrypt('My secret msg', 'mykey', false)
 * // returns 'yw ciadcd qqs'
 * encrypt('My secret msg', 'mykey', undefined, false)
 * // returns 'Ywciadcdqqs'
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
    currentChar: string,
    currentCharEncrypted: string;

  for (let i = 0, j = 0; i < plaintext.length; i++, j++) {
    currentChar = plaintext[i];
    if (alphabet.indexOf(currentChar.toLowerCase()) === -1) {
      if (includeForeignChars) {
        ciphertext += currentChar;
      }
      --j;
      continue;
    }
    currentCharEncrypted =
      alphabet[
        (alphabet.indexOf(currentChar.toLowerCase()) +
          alphabet.indexOf(key[j % key.length])) %
          alphabet.length
      ];
    ciphertext +=
      caseSensitive && isUpperCase(currentChar)
        ? currentCharEncrypted.toUpperCase()
        : currentCharEncrypted;
  }
  return ciphertext;
}

/**
 * [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) decryption.
 * @param ciphertext text to be decrypted
 * @param key word used to switch cipher alphabets every letter
 * @param [caseSensitive=true] if correct input of upper case and lower case matters
 * @param [includeForeignChars=true] if unknown char should be included in plaintext
 * @param alphabet used alphabet
 * @returns plaintext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * decrypt('Yw ciadcd qqs', 'mykey')
 * // returns 'My secret msg'
 * decrypt('Yw ciadcd qqs', 'mykey', false)
 * // returns 'my secret msg'
 * decrypt('Yw ciadcd qqs', 'mykey', undefined, false)
 * // returns 'Mysecretmsg'
 */
export function decrypt(
  ciphertext: string,
  key: string,
  caseSensitive = true,
  includeForeignChars = true,
  alphabet = ALPHABET_EN
): string {
  if (key === '') {
    throw Error('No key provided.');
  }

  let plaintext = '',
    currentChar: string,
    currentCharDecryptedIndex: number,
    currentCharDecrypted: string;

  for (let i = 0, j = 0; i < ciphertext.length; i++, j++) {
    currentChar = ciphertext[i];
    if (alphabet.indexOf(currentChar.toLowerCase()) === -1) {
      if (includeForeignChars) {
        plaintext += currentChar;
      }
      --j;
      continue;
    }
    currentCharDecryptedIndex =
      alphabet.indexOf(currentChar.toLowerCase()) -
      alphabet.indexOf(key[j % key.length]);
    currentCharDecrypted =
      alphabet[(currentCharDecryptedIndex + alphabet.length) % alphabet.length];
    plaintext +=
      caseSensitive && isUpperCase(currentChar)
        ? currentCharDecrypted.toUpperCase()
        : currentCharDecrypted;
  }
  return plaintext;
}
