import {morseCodeMap} from '../globals';
import {getMapKeyByValue} from '../helpers';

/**
 * [Morse code](https://en.wikipedia.org/wiki/Morse_code) encryption.
 * @param plaintext text to be encrypted
 * @param [short='.'] character used for short mark
 * @param [long='-'] character used for long mark
 * @param [space='/'] character used for spacing between the words
 * @returns ciphertext
 * @example
 * encrypt('abc')
 * //returns '.- -... -.-.'
 * encrypt('Ab cd')
 * // returns '.- -... / -.-. -..'
 * encrypt('x y z', 'o', '=', '#')
 * // returns '=oo= # =o== # ==oo'
 */
export function encrypt(
  plaintext: string,
  short = '.',
  long = '-',
  space = '/'
): string {
  if (
    [short, long, space].join('') !==
    [...new Set([short, long, space])].join('')
  ) {
    throw Error(
      'Please use different characters for short mark, long mark & spacing between the words.'
    );
  }

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
}

/**
 * [Morse code](https://en.wikipedia.org/wiki/Morse_code) decryption.
 * @param ciphertext text to be decrypted
 * @param [short='.'] character used for short mark
 * @param [long='-'] character used for long mark
 * @param [space='/'] character used for spacing between the words
 * @returns plaintext
 * @example
 * decrypt('.- -... -.-.')
 * // returns 'abc'
 * decrypt('.- -... / -.-. -..')
 * // returns 'ab cd'
 * decrypt('=oo= # =o== # ==oo', 'o', '=', '#')
 * // returns 'x y z'
 */
export function decrypt(
  ciphertext: string,
  short = '.',
  long = '-',
  space = '/'
): string {
  if (
    [short, long, space].join('') !==
    [...new Set([short, long, space])].join('')
  ) {
    throw Error(
      'Please use different characters for short mark, long mark & spacing between the words.'
    );
  }

  const plaintextArray: string[] = [];
  let plaintextWord: string[];
  let currentCharDecrypted: string | undefined;
  for (const ciphertextWord of ciphertext.split(` ${space} `)) {
    plaintextWord = [];
    for (const ciphertextChar of ciphertextWord.split(' ')) {
      currentCharDecrypted = getMapKeyByValue(
        morseCodeMap,
        ciphertextChar.replaceAll(short, '.').replaceAll(long, '-')
      );
      if (currentCharDecrypted === undefined) {
        throw Error(`Character '${ciphertextChar}' could not be decrypted.`);
      }
      plaintextWord.push(currentCharDecrypted);
    }
    plaintextArray.push(plaintextWord.join(''));
  }
  return plaintextArray.join(' ');
}
