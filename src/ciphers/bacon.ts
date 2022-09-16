import { bacon1Map, bacon2Map } from '../globals.js';

/**
 * TODO
 * @param plaintext 
 * @param [version=2] cipher version (1 or 2)
 * @param [includeForeignChars=true] 
 * @returns 
 */
export function encrypt(plaintext: string, version = 2, includeForeignChars = true): string {

  if ([1, 2].indexOf(version) === -1) {
    throw Error('Verion unknown. Please select verson 1 or 2.');
  }
  const baconMap = (version === 1) ? bacon1Map : bacon2Map;

  let ciphertext = '',
    currentCharEncrypted: string | undefined;
  for (const char of plaintext) {
    currentCharEncrypted = baconMap.get(char.toLowerCase());
    if (currentCharEncrypted === undefined && includeForeignChars) {
      ciphertext += char;
    }
    else {
      ciphertext += currentCharEncrypted;
    }
  }

  return ciphertext;
}
