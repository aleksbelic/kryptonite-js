import { ALPHABET_EN } from '../globals';
import { checkAlphabet, getShiftedChar, isUpperCase } from '../helpers';

/**
 * [Atbash cipher](https://en.wikipedia.org/wiki/Atbash) encryption.
 *
 * @param plaintext text to encrypt
 * @param options optional configuration for encryption
 * @param options.caseSensitive if correct input of upper case and lower case matters
 * @param options.includeForeignChars if unknown char should be included in ciphertext
 * @param options.alphabet alphabet used for encryption process
 * @returns ciphertext, the encrypted text
 *
 * @example
 * encrypt('abc')
 * // returns 'zyx'
 *
 * encrypt('Abc', { caseSensitive: true })
 * // returns 'Zyx'
 *
 * encrypt('abc#d', { includeForeignChars: true })
 * // returns 'zyx#w'
 *
 * encrypt('ћшчшћћ', { alphabet: ['ш', 'ч', 'ћ'] })
 * // returns 'шћчћшш'
 */
export function encrypt(
    plaintext: string,
    options?: {
        caseSensitive?: boolean;
        includeForeignChars?: boolean;
        alphabet?: string[];
    },
): string {
    const {
        caseSensitive = true,
        includeForeignChars = true,
        alphabet = ALPHABET_EN,
    } = options || {};

    checkAlphabet(alphabet!);

    let ciphertext = '',
        shift: number,
        currentCharEncrypted: string | undefined;

    for (const currentChar of plaintext) {
        shift =
            alphabet.length -
            2 * alphabet.indexOf(currentChar.toLowerCase()) -
            1;
        currentCharEncrypted = getShiftedChar(currentChar, shift, alphabet);

        if (currentCharEncrypted === undefined) {
            if (includeForeignChars) {
                ciphertext += currentChar;
            }
            continue;
        } else if (caseSensitive && isUpperCase(currentChar)) {
            currentCharEncrypted = currentCharEncrypted.toUpperCase();
        }
        ciphertext += currentCharEncrypted;
    }
    return ciphertext;
}

/**
 * [Atbash cipher](https://en.wikipedia.org/wiki/Atbash) decryption.
 *
 * @param ciphertext text to decrypt
 * @param options configuration for decryption
 * @param options.caseSensitive if correct input of upper case and lower case matters
 * @param options.includeForeignChars if unknown char should be included in plaintext
 * @param options.alphabet alphabet used for decryption process
 * @returns plaintext, the decrypted text
 *
 * @example
 * decrypt('zyx')
 * // returns 'abc'
 *
 * decrypt('Zyx', { caseSensitive: true })
 * // returns 'Abc'
 *
 * decrypt('zyx#w', { includeForeignChars: true })
 * // returns 'abc#d'
 *
 * decrypt('шћчћшш', { alphabet: ['ш', 'ч', 'ћ'] })
 * // returns 'ћшчшћћ'
 */
export function decrypt(
    ciphertext: string,
    options?: {
        caseSensitive?: boolean;
        includeForeignChars?: boolean;
        alphabet?: string[];
    },
): string {
    const {
        caseSensitive = true,
        includeForeignChars = true,
        alphabet = ALPHABET_EN,
    } = options || {};

    return encrypt(ciphertext, {
        caseSensitive,
        includeForeignChars,
        alphabet,
    });
}
