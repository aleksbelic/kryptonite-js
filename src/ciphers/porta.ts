import {ALPHABET_EN, portaMap} from '../globals.js';

/**
 * [Porta cipher](http://practicalcryptography.com/ciphers/porta-cipher) encryption.
 * @param plaintext text to be encrypted
 * @param key secret key used in the encryption process
 * @param substitutionMap map containing substitution alphabets
 * @returns ciphertext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * encrypt('abc', 'key')
 * // returns 'sqo'
 */
export function encrypt(
  plaintext: string,
  key: string,
  substitutionMap = portaMap
): string {
  let ciphertext = '',
    keyIndex: number,
    keyChar: string,
    substitutionMapAlphabet: string | undefined;

  Array.from(plaintext).forEach((char, index) => {
    keyIndex = index % key.length;
    keyChar = key.charAt(keyIndex);
    for (const mapKey of substitutionMap.keys()) {
      if (mapKey.indexOf(keyChar) !== -1) {
        substitutionMapAlphabet = portaMap.get(mapKey);
        if (substitutionMapAlphabet !== undefined) {
          ciphertext += substitutionMapAlphabet[ALPHABET_EN.indexOf(char)];
        }
      }
    }
  });

  return ciphertext;
}

/**
 * [Porta cipher](http://practicalcryptography.com/ciphers/porta-cipher) decryption.
 * @param ciphertext text to be decrypted
 * @param key secret key used in the decryption process
 * @param substitutionMap map containing substitution alphabets
 * @returns plaintext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * decrypt('sqo', 'key')
 * // returns 'abc'
 */
export function decrypt(
  ciphertext: string,
  key: string,
  substitutionMap = portaMap
): string {
  return encrypt(ciphertext, key, substitutionMap);
}
