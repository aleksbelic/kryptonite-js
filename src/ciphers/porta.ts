import { ALPHABET_EN, portaMap } from '../globals';
import { isUpperCase } from '../helpers';

/**
 * [Porta cipher](http://practicalcryptography.com/ciphers/porta-cipher) encryption
 *
 * @param plaintext text to be encrypted
 * @param options encoding options
 * @param options.key secret key used in the encryption process
 * @param options.caseSensitive if correct input of upper case and lower case matters
 * @param options.includeForeignChars if unknown char should be included in ciphertext
 * @returns ciphertext, the encrypted text
 *
 * @example
 * encrypt('abc', 'key')
 * // returns 'sqo'
 *
 * encrypt('aBc', { key: 'key' })
 * // returns 'sQo'
 *
 * encrypt('aBc', { key: 'key', caseSensitive: false })
 * // returns 'sqo'
 *
 * encrypt('aB_c', { key: 'key' })
 * // returns 'sQ_u'
 *
 * encrypt('aB_c', { key: 'key', includeForeignChars: false })
 * // returns 'sQo'
 *
 * encrypt('aB_c', { key: 'key', caseSensitive: false, includeForeignChars: false })
 * returns 'sqo'
 */
export function encrypt(
    plaintext: string,
    options: {
        key: string;
        caseSensitive?: boolean;
        includeForeignChars?: boolean;
    },
): string {
    const { caseSensitive = true, includeForeignChars = true } = options;

    if (options.key === '')
        throw new Error('Invalid param: key cannot be an empty string.');

    if (!includeForeignChars) {
        plaintext = plaintext.replace(/[^a-zA-Z]/g, '');
    }

    let ciphertext = '',
        keyChar: string,
        substitutionMapAlphabet: string | undefined,
        currentCharEncrypted: string | undefined;

    Array.from(plaintext).forEach((currentChar, index) => {
        substitutionMapAlphabet = currentCharEncrypted = undefined;
        keyChar = options.key.charAt(index % options.key.length);

        for (const mapKey of portaMap.keys()) {
            if (mapKey.indexOf(keyChar.toLowerCase()) !== -1) {
                substitutionMapAlphabet = portaMap.get(mapKey);
                break;
            }
        }

        if (substitutionMapAlphabet === undefined) {
            throw new Error(
                `No substitution alphabet provided for key char '${keyChar}'.`,
            );
        } else {
            currentCharEncrypted =
                substitutionMapAlphabet[
                    ALPHABET_EN.indexOf(currentChar.toLowerCase())
                ];
            if (currentCharEncrypted === undefined) {
                if (includeForeignChars) {
                    currentCharEncrypted = currentChar;
                } else {
                    throw new Error(
                        `No substitution found for '${currentChar}' using key char '${keyChar}' in substitution alphabet.`,
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
 * [Porta cipher](http://practicalcryptography.com/ciphers/porta-cipher) decryption
 *
 * @param ciphertext text to be decrypted
 * @param options configuration for decryption
 * @param options.key secret key used in the decryption process
 * @param options.caseSensitive if correct input of upper case and lower case matters
 * @param options.includeForeignChars if unknown char should be included in ciphertext
 * @returns plaintext, the decrypted text
 *
 * @example
 * decrypt('sqo', { key: 'key' })
 * // returns 'abc'
 *
 * decrypt('sQo', { key: 'key' })
 * // returns 'aBc'
 *
 * decrypt('sQo', { key: 'key', caseSensitive: false })
 * // returns 'abc'
 *
 * decrypt('sQ_u', { key: 'key' })
 * // returns 'aB_c'
 *
 * decrypt('sQ_o', { key: 'key', includeForeignChars: false })
 * returns 'aBc'y
 *
 * decrypt('sQ_o', { key: 'key', caseSensitive: false, includeForeignChars: false })
 * // returns 'abc'
 */
export function decrypt(
    ciphertext: string,
    options: {
        key: string;
        caseSensitive?: boolean;
        includeForeignChars?: boolean;
    },
): string {
    const { key, caseSensitive = true, includeForeignChars = true } = options;

    return encrypt(ciphertext, {
        key,
        caseSensitive,
        includeForeignChars,
    });
}
