import {morseCodeMap} from '../globals.js';

/**
 * [Morse code](https://en.wikipedia.org/wiki/Morse_code) encryption.
 * @param plaintext - text to be encrypted
 * @returns ciphertext
 */
export const encrypt = (plaintext: string): string => {
  let ciphertext = '';
  for (const currentChar of plaintext.toLowerCase()) {
    if (morseCodeMap.get(currentChar) === undefined) {
      throw Error(`Character '${currentChar}' is not defined in Morse code.`);
    }
    ciphertext += morseCodeMap.get(currentChar) + ' ';
  }
  return ciphertext.trimEnd();
};
