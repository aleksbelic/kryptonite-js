import {ALPHABET_EN, portaMap} from '../globals.js';
import {isUpperCase} from '../helpers.js';

/**
 * [Porta cipher](http://practicalcryptography.com/ciphers/porta-cipher) encryption.
 * @param plaintext text to be encrypted
 * @param key secret key used in the encryption process
 * @param [caseSensitive=true] if correct input of upper case and lower case matters
 * @param [includeForeignChars=true] if unknown char should be included in ciphertext
 * @returns ciphertext
 * @example
 * encrypt('abc', 'key')
 * // returns 'sqo'
 * encrypt('aBc', 'key')
 * // returns 'sQo'
 * encrypt('aBc', 'key', false)
 * // returns 'sqo'
 * encrypt('aB_c', 'key')
 * // returns 'sQ_u'
 * encrypt('aB_c', 'key', undefined, false)
 * // returns 'sQo'
 * encrypt('aB_c', 'key', false, false)
 * returns 'sqo'
 */
export function encrypt(
  plaintext: string,
  key: string,
  caseSensitive = true,
  includeForeignChars = true
): string {
  if (key.length === 0) {
    throw Error('Invalid param: key cannot be an empty string.');
  }
  if (!includeForeignChars) {
    plaintext = plaintext.replace(/[^a-zA-Z]/g, '');
  }

  let ciphertext = '',
    keyChar: string,
    substitutionMapAlphabet: string | undefined,
    currentCharEncrypted: string | undefined;

  Array.from(plaintext).forEach((currentChar, index) => {
    substitutionMapAlphabet = currentCharEncrypted = undefined;
    keyChar = key.charAt(index % key.length);

    for (const mapKey of portaMap.keys()) {
      if (mapKey.indexOf(keyChar.toLowerCase()) !== -1) {
        substitutionMapAlphabet = portaMap.get(mapKey);
        break;
      }
    }

    if (substitutionMapAlphabet === undefined) {
      throw Error(
        `No substitution alphabet provided for key char '${keyChar}'.`
      );
    } else {
      currentCharEncrypted =
        substitutionMapAlphabet[ALPHABET_EN.indexOf(currentChar.toLowerCase())];
      if (currentCharEncrypted === undefined) {
        if (includeForeignChars) {
          currentCharEncrypted = currentChar;
        } else {
          throw Error(
            `No substitution found for '${currentChar}' using key char '${keyChar}' in substitution alphabet.`
          );
        }
      }
    }

    ciphertext +=
      isUpperCase(currentChar) && caseSensitive
        ? currentCharEncrypted.toUpperCase()
        : currentCharEncrypted;
  });

  return ciphertext;
}

/**
 * [Porta cipher](http://practicalcryptography.com/ciphers/porta-cipher) decryption.
 * @param ciphertext text to be decrypted
 * @param key secret key used in the decryption process
 * @param [caseSensitive=true] if correct input of upper case and lower case matters
 * @param [includeForeignChars=true] if unknown char should be included in ciphertext
 * @returns plaintext
 * @example
 * decrypt('sqo', 'key')
 * // returns 'abc'
 * decrypt('sQo', 'key')
 * // returns 'aBc'
 * decrypt('sQo', 'key', false)
 * // returns 'abc'
 * decrypt('sQ_u', 'key')
 * // returns 'aB_c'
 * decrypt('sQ_o', 'key', undefined, false)
 * returns 'aBc'y
 * decrypt('sQ_o', 'key', false, false)
 * // returns 'abc'
 */
export function decrypt(
  ciphertext: string,
  key: string,
  caseSensitive = true,
  includeForeignChars = true
): string {
  return encrypt(ciphertext, key, caseSensitive, includeForeignChars);
}
