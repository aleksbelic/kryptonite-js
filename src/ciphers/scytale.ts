/**
 * [Scytale cipher](https://en.wikipedia.org/wiki/Scytale) encryption.
 * @param plaintext text to be encrypted
 * @param [columnCount=4] number of text columns created by wounding plaintext around a scytale
 * @returns ciphertext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * encrypt('abcdef', 2)
 * // returns 'acebdf'
 * encrypt('abcdef', 5)
 * // returns 'afb c d e'
 */
export function encrypt(plaintext: string, columnCount = 4): string {
  if (columnCount < 1) {
    throw Error('Invalid param: number of columns must be a positive integer.');
  }

  let ciphertextArray: string[] = new Array(columnCount).fill('');
  const rowCount = Math.ceil(plaintext.length / columnCount);

  Array.from(plaintext).forEach((char, index) => {
    ciphertextArray[index % columnCount] += char;
  });
  ciphertextArray = ciphertextArray.map(cipherTextSubstring =>
    cipherTextSubstring.padEnd(rowCount)
  );

  return ciphertextArray.join('').trimEnd();
}

/**
 * [Scytale cipher](https://en.wikipedia.org/wiki/Scytale) encryption.
 * @param ciphertext text to be decrypted
 * @param columnCount [columnCount=4] number of text columns created by wounding ciphertext around a scytale
 * @returns plaintext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * decrypt('acebdf', 2)
 * // returns 'abcdef'
 * decrypt('afb c d e', 5)
 * // returns 'abcdef'
 */
export function decrypt(ciphertext: string, columnCount = 4): string {
  if (columnCount < 1) {
    throw Error('Invalid param: number of columns must be a positive integer.');
  } else if (ciphertext.length === 0) {
    throw Error('Invalid param: no ciphertext provided.');
  }
  const rowCount = Math.ceil(ciphertext.length / columnCount);
  return encrypt(ciphertext, rowCount);
}
