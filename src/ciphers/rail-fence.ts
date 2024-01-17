/**
 * [Rail Fence cipher](https://en.wikipedia.org/wiki/Rail_fence_cipher) encryption.
 * @param plaintext text to be encrypted
 * @param railCount number of successive "rails" of an imaginary fence
 * @returns ciphertext
 * @example
 * encrypt('WE ARE DISCOVERED FLEE AT ONCE', 3)
 * // returns 'WECRUOERDSOEERNTNEAIVDAC'
 */
export function encrypt(plaintext: string, railCount = 3): string {
  plaintext = plaintext.replace(/\s/g, '');
  const ciphertextRails: string[] = new Array(railCount).fill('');

  let railIndex = 0;
  let direction = 1;
  for (const currentChar of plaintext.split('')) {
    ciphertextRails[railIndex] += currentChar;
    if (railCount === 1) {
      direction = 0;
    } else if (railIndex === 0) {
      direction = 1;
    } else if (railIndex === railCount - 1) {
      direction = -1;
    }
    railIndex += direction;
  }

  return ciphertextRails.join('');
}

/**
 * [Rail Fence cipher](https://en.wikipedia.org/wiki/Rail_fence_cipher) decryption.
 * @param ciphertext text to be decrypted
 * @param railCount number of successive "rails" of an imaginary fence
 * @returns plaintext
 * @example
 * decrypt('WECRUOERDSOEERNTNEAIVDAC', 3)
 * // returns 'WEAREDISCOVEREDFLEEATONCE'
 */
export function decrypt(ciphertext: string, railCount = 3): string {
  let plaintext = '';
  const ciphertextRails: string[] = new Array(railCount).fill('');
  const ciphertextRailsLengths: number[] = new Array(railCount).fill(0);

  let railIndex = 0;
  let direction = 1;
  for (let i = 0; i < ciphertext.length; i++) {
    ciphertextRailsLengths[railIndex] += 1;
    if (railCount === 1) {
      direction = 0;
    } else if (railIndex === 0) {
      direction = 1;
    } else if (railIndex === railCount - 1) {
      direction = -1;
    }
    railIndex += direction;
  }

  let tempCiphertext = ciphertext;
  for (const [
    railIndex,
    ciphertextRailsLength
  ] of ciphertextRailsLengths.entries()) {
    ciphertextRails[railIndex] = tempCiphertext.substring(
      0,
      ciphertextRailsLength
    );
    tempCiphertext = tempCiphertext.slice(ciphertextRailsLength);
  }

  railIndex = 0;
  direction = 1;
  for (let i = 0; i < ciphertext.length; i++) {
    plaintext += ciphertextRails[railIndex][0];
    ciphertextRails[railIndex] = ciphertextRails[railIndex].slice(1);
    if (railCount === 1) {
      direction = 0;
    } else if (railIndex === 0) {
      direction = 1;
    } else if (railIndex === railCount - 1) {
      direction = -1;
    }
    railIndex += direction;
  }

  return plaintext;
}
