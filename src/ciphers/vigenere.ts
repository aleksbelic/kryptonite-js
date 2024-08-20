import { ALPHABET_EN } from '../globals';
import { isUpperCase } from '../helpers';

/**
 * [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) encryption
 *
 * @param plaintext text to be encrypted
 * @param options configuration for encryption
 * @param options.key word used to switch cipher alphabets every letter
 * @param options.caseSensitive if correct input of upper case and lower case matters
 * @param options.includeForeignChars if unknown char should be included in ciphertext
 * @param options.alphabet used alphabet
 * @returns ciphertext, the encrypted text
 *
 * @example
 * encrypt('My secret msg', { key: 'mykey' })
 * // returns 'Yw ciadcd qqs'
 *
 * encrypt('My secret msg', { key: 'mykey', caseSensitive: false })
 * // returns 'yw ciadcd qqs'
 *
 * encrypt('My secret msg', { key: 'mykey', includeForeignChars: false })
 * // returns 'Ywciadcdqqs'
 */
export function encrypt(
    plaintext: string,
    options: {
        key: string;
        caseSensitive?: boolean;
        includeForeignChars?: boolean;
        alphabet?: string[];
    },
): string {
    const {
        key,
        caseSensitive = true,
        includeForeignChars = true,
        alphabet = ALPHABET_EN,
    } = options;

    if (key === '') throw new Error('No key provided.');

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
 * [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) decryption
 *
 * @param ciphertext text to be decrypted
 * @param options configuration for decryption
 * @param options.key word used to switch cipher alphabets every letter
 * @param options.caseSensitive if correct input of upper case and lower case matters
 * @param options.includeForeignChars if unknown char should be included in plaintext
 * @param options.alphabet used alphabet
 * @returns plaintext, the decrypted text
 *
 * @example
 * decrypt('Yw ciadcd qqs', { key: 'mykey' })
 * // returns 'My secret msg'
 *
 * decrypt('Yw ciadcd qqs', { key: 'mykey', caseSensitive: false })
 * // returns 'my secret msg'
 *
 * decrypt('Yw ciadcd qqs', { key: 'mykey', includeForeignChars: false })
 * // returns 'Mysecretmsg'
 */
export function decrypt(
    ciphertext: string,
    options: {
        key: string;
        caseSensitive?: boolean;
        includeForeignChars?: boolean;
        alphabet?: string[];
    },
): string {
    const {
        key,
        caseSensitive = true,
        includeForeignChars = true,
        alphabet = ALPHABET_EN,
    } = options;

    if (key === '') throw new Error('No key provided.');

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
            alphabet[
                (currentCharDecryptedIndex + alphabet.length) % alphabet.length
            ];
        plaintext +=
            caseSensitive && isUpperCase(currentChar)
                ? currentCharDecrypted.toUpperCase()
                : currentCharDecrypted;
    }

    return plaintext;
}
