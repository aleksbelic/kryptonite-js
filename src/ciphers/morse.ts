import {morseCodeMap} from '../globals.js';

/**
 * [Morse code](https://en.wikipedia.org/wiki/Morse_code) encryption.
 * @param plaintext - text to be encrypted
 * @param [short='.'] - character used for short mark
 * @param [long='-'] - character used for long mark
 * @param [space='/'] - character used for spacing between the words
 * @returns ciphertext
 * @example
 * encrypt('abc')
 * //returns '.- -... -.-.'
 * encrypt('Ab cd')
 * // returns '.- -... / -.-. -..'
 * encrypt('x y z', 'o', '=', '#')
 * // returns '=oo= # =o== # ==oo'
 */
export const encrypt = (
  plaintext: string,
  short = '.',
  long = '-',
  space = '/'
): string => {
  let ciphertextWord;
  const cipertextArray: string[] = [];
  for (const currentWord of plaintext.toLowerCase().split(/\s/g)) {
    ciphertextWord = [];
    for (const currentChar of currentWord) {
      if (morseCodeMap.get(currentChar) === undefined) {
        throw Error(`Character '${currentChar}' is not defined in Morse code.`);
      }
      ciphertextWord.push(
        morseCodeMap
          .get(currentChar)
          ?.replaceAll('.', short)
          .replaceAll('-', long)
      );
    }
    cipertextArray.push(ciphertextWord.join(' '));
  }
  return cipertextArray.join(` ${space} `);
};
