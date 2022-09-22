/**
 * [Scytale cipher](https://en.wikipedia.org/wiki/Scytale) encryption.
 * @param plaintext text to be encrypted
 * @param [columnCount=1] number of text columns created by wounding it around a scytale
 * @returns ciphertext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * encrypt('abcdef', 2)
 * // returns 'acebdf'
 * encrypt('abcdef', 5)
 * // returns 'afbcde'
 */
export function encrypt(plaintext: string, columnCount = 1): string {
  if (columnCount < 1) {
    throw Error('Invalid param: number of columns must be a positive integer.');
  }
  let ciphertext = '';
  const plaintextArray = Array.from(plaintext);

  let i = 0;
  while (ciphertext.length !== plaintext.length) {
    if (plaintextArray[i] !== '') {
      ciphertext += plaintextArray[i];
      plaintextArray[i] = '';
      i = i + columnCount < plaintext.length ? i + columnCount : 0;
    } else {
      i++;
    }
  }

  return ciphertext;
}
