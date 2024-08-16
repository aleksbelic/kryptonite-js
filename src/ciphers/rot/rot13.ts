import * as caesar from '../caesar';

/**
 * [ROT13 cipher](https://en.wikipedia.org/wiki/ROT13) encryption.
 * @param plaintext text to be encrypted
 * @param [caseSensitive=true] if correct input of upper case and lower case matters
 * @param [includeForeignChars=true] if unknown char should be included in ciphertext
 * @returns ciphertext
 * @example
 * encrypt('abc')
 * // returns 'nop'
 * encrypt('Abc', true)
 * // returns 'Nop'
 * encrypt('Abc', false)
 * // returns 'nop'
 * encrypt('ab!c', true, true)
 * // returns 'no!p'
 * encrypt('ab!c', true, false)
 * // returns 'nop'
 */
export function encrypt(
    plaintext: string,
    caseSensitive = true,
    includeForeignChars = true,
): string {
    return caesar.encrypt(plaintext, 13, caseSensitive, includeForeignChars);
}

/**
 * [ROT13 cipher](https://en.wikipedia.org/wiki/ROT13) decryption.
 * @param ciphertext text to be decrypted
 * @param [caseSensitive=true] if correct input of upper case and lower case matters
 * @param [includeForeignChars=true] if unknown char should be included in plaintext
 * @returns plaintext
 * @example
 * decrypt('nop')
 * // returns 'abc'
 * decrypt('Nop', true)
 * // returns 'Abc'
 * decrypt('Nop', false)
 * // returns 'abc'
 * decrypt('no!p', true, true)
 * // returns 'ab!c'
 * decrypt('no!p', true, false)
 * // returns 'abc'
 */
export function decrypt(
    ciphertext: string,
    caseSensitive = true,
    includeForeignChars = true,
): string {
    return encrypt(ciphertext, caseSensitive, includeForeignChars);
}
