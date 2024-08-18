import { morseCodeMap } from '../globals';
import { getMapKeyByValue } from '../helpers';

/**
 * [Morse code](https://en.wikipedia.org/wiki/Morse_code) encryption.
 *
 * @param {string} plaintext text to be encrypted
 * @param {Object} [options] optional encoding options
 * @param {string} [options.short] symbol to represent short signals (e.g., dots (".") in Morse code)
 * @param {string} [options.long] symbol to represent long signals (e.g., dashes ("-") in Morse code)
 * @param {string} [options.space] symbol to represent spaces between words
 * @returns {string} ciphertext, the encrypted text
 *
 * @example
 * encrypt('abc')
 * //returns '.- -... -.-.'
 *
 * encrypt('Ab cd')
 * // returns '.- -... / -.-. -..'
 *
 * encrypt('x y z', { short: 'o', long: '=', space: '#' })
 * // returns '=oo= # =o== # ==oo'
 */
export function encrypt(
    plaintext: string,
    options?: {
        short?: string;
        long?: string;
        space?: string;
    },
): string {
    const { short = '.', long = '-', space = '/' } = options || {};

    if (
        [short, long, space].join('') !==
        [...new Set([short, long, space])].join('')
    ) {
        throw new Error(
            'Please use different characters for short mark, long mark & spacing between the words.',
        );
    }

    let ciphertextWord;
    const cipertextArray: string[] = [];
    for (const currentWord of plaintext.toLowerCase().split(/\s/g)) {
        ciphertextWord = [];
        for (const currentChar of currentWord) {
            if (morseCodeMap.get(currentChar) === undefined) {
                throw new Error(
                    `Character '${currentChar}' is not defined in Morse code.`,
                );
            }
            ciphertextWord.push(
                morseCodeMap
                    .get(currentChar)
                    ?.replaceAll('.', short)
                    .replaceAll('-', long),
            );
        }
        cipertextArray.push(ciphertextWord.join(' '));
    }
    return cipertextArray.join(` ${space} `);
}

/**
 * [Morse code](https://en.wikipedia.org/wiki/Morse_code) decryption.
 *
 * @param {string} ciphertext text to be decrypted
 * @param {Object} [options] optional decoding options
 * @param {string} [options.short] symbol to represent short signals (e.g., dots in Morse code)
 * @param {string} [options.long] symbol to represent long signals (e.g., dashes in Morse code)
 * @param {string} [options.space] symbol to represent spaces between words
 * @returns {string} plaintext, the decrypted text
 *
 * @example
 * decrypt('.- -... -.-.')
 * // returns 'abc'
 *
 * decrypt('.- -... / -.-. -..')
 * // returns 'ab cd'
 *
 * decrypt('=oo= # =o== # ==oo', { short: 'o', long: '=', space: '#' })
 * // returns 'x y z'
 */
export function decrypt(
    ciphertext: string,
    options?: {
        short?: string;
        long?: string;
        space?: string;
    },
): string {
    const { short = '.', long = '-', space = '/' } = options || {};

    if (
        [short, long, space].join('') !==
        [...new Set([short, long, space])].join('')
    ) {
        throw new Error(
            'Please use different characters for short mark, long mark & spacing between the words.',
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
                ciphertextChar.replaceAll(short, '.').replaceAll(long, '-'),
            );
            if (currentCharDecrypted === undefined) {
                throw new Error(
                    `Character '${ciphertextChar}' could not be decrypted.`,
                );
            }
            plaintextWord.push(currentCharDecrypted);
        }
        plaintextArray.push(plaintextWord.join(''));
    }
    return plaintextArray.join(' ');
}
