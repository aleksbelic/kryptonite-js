/**
 * [Scytale cipher](https://en.wikipedia.org/wiki/Scytale) encryption
 *
 * @param plaintext text to be encrypted
 * @param options configuration for encryption
 * @param options.columnCount number of text columns created by wounding plaintext around a scytale
 * @returns ciphertext, the encrypted text
 *
 * @example
 * encrypt('abcdef')
 * // returns 'aebfc d'
 *
 * encrypt('abcdef', { columnCount: 2 })
 * // returns 'acebdf'
 *
 * encrypt('abcdef', { columnCount: 5 })
 * // returns 'afb c d e'
 */
export function encrypt(
    plaintext: string,
    options?: { columnCount: number },
): string {
    const { columnCount = 4 } = options || {};

    if (columnCount < 1) {
        throw new Error(
            'Invalid param: number of columns must be a positive integer.',
        );
    }

    let ciphertextArray = new Array(columnCount).fill('');
    const rowCount = Math.ceil(plaintext.length / columnCount);

    Array.from(plaintext).forEach((char, index) => {
        ciphertextArray[index % columnCount] += char;
    });
    ciphertextArray = ciphertextArray.map(cipherTextSubstring =>
        cipherTextSubstring.padEnd(rowCount),
    );

    return ciphertextArray.join('').trimEnd();
}

/**
 * [Scytale cipher](https://en.wikipedia.org/wiki/Scytale) decryption
 *
 * @param ciphertext text to be decrypted
 * @param options configuration for decryption
 * @param options.columnCount number of text columns created by wounding ciphertext around a scytale
 * @returns plaintext, the decrypted text
 *
 * @example
 * decrypt('aebfc d')
 * // returns 'abcdef'
 *
 * decrypt('acebdf', { columnCount: 2 })
 * // returns 'abcdef'
 *
 * decrypt('afb c d e', { columnCount: 5 })
 * // returns 'abcdef'
 */
export function decrypt(
    ciphertext: string,
    options?: { columnCount?: number },
): string {
    const { columnCount = 4 } = options || {};

    if (columnCount < 1) {
        throw new Error(
            'Invalid param: number of columns must be a positive integer.',
        );
    } else if (ciphertext.length === 0) {
        throw new Error('Invalid param: no ciphertext provided.');
    }
    const rowCount = Math.ceil(ciphertext.length / columnCount);
    return encrypt(ciphertext, { columnCount: rowCount });
}
