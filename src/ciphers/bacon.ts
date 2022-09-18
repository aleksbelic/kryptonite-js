import {bacon1Map, bacon2Map} from '../globals.js';
import {getMapKeyByValue} from '../helpers.js';

/**
 * [Bacon's cipher](https://en.wikipedia.org/wiki/Bacon%27s_cipher) encryption.
 * @param plaintext text to be encrypted
 * @param [version=2] cipher version (1 or 2). 1st version uses the same code for letters 'i' & 'j' as well as for 'u' & v, while the 2nd version has unique code for each letter.
 * @param [includeForeignChars=true] if unknown char should be included in ciphertext
 * @returns ciphertext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * encrypt('abc')
 * returns 'aaaaaaaaabaaaba'
 * encrypt('ijuv', 1)
 * returns 'abaaaabaaabaabbbaabb'
 * encrypt('ijuv', 2)
 * returns 'abaaaabaabbabaababab'
 * encrypt('Abc!', undefined, true)
 * returns 'aaaaaaaaabaaaba!'
 * encrypt('Abc!', undefined, false)
 * returns 'aaaaaaaaabaaaba'
 */
export function encrypt(
  plaintext: string,
  version = 2,
  includeForeignChars = true
): string {
  checkVersion(version);
  const baconMap = version === 1 ? bacon1Map : bacon2Map;

  let ciphertext = '',
    currentCharEncrypted: string | undefined;
  for (const char of plaintext) {
    if (baconMap.has(char.toLowerCase())) {
      currentCharEncrypted = baconMap.get(char.toLowerCase());
    } else if (includeForeignChars) {
      currentCharEncrypted = char;
    } else {
      continue;
    }

    ciphertext += currentCharEncrypted;
  }

  return ciphertext;
}

/**
 * [Bacon's cipher](https://en.wikipedia.org/wiki/Bacon%27s_cipher) decryption.
 * @param ciphertext text to be decrypted
 * @param [version=2] cipher version (1 or 2). 1st version uses the same code for letters 'i' & 'j' as well as for 'u' & v, while the 2nd version has unique code for each letter.
 * @returns plaintext
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * decrypt('aaaaaaaaabaaaba')
 * returns 'abc'
 * decrypt('abaaaabaaabaabbbaabb', 1)
 * returns 'iiuu'
 * decrypt('abaaaabaabbabaababab', 2)
 * returns 'ijuv'
 * decrypt('aaaaa_aaaab !!! aaaba!')
 * returns 'abc'
 */
export function decrypt(ciphertext: string, version = 2) {
  checkVersion(version);
  const baconMap = version === 1 ? bacon1Map : bacon2Map;

  let plaintext = '',
    fiveBaconChars = '',
    currentCharDecrypted: string | undefined;

  ciphertext = ciphertext.toLowerCase().replace(/[^ab]/g, '');
  for (const char of ciphertext) {
    if (fiveBaconChars.length < 5) {
      fiveBaconChars += char;
      if (fiveBaconChars.length === 5) {
        currentCharDecrypted = getMapKeyByValue(baconMap, fiveBaconChars);
        if (currentCharDecrypted !== undefined) {
          plaintext += currentCharDecrypted;
        }
        fiveBaconChars = '';
      }
    }
  }

  return plaintext;
}

export function encryptInRandomText(message: string) {
  //TODO
}

/**
 * Checks if provided Bacon's cipher verion is valid.
 * @param version cipher version
 * @returns true if provided version is valid, throws error if invalid
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 */
function checkVersion(version: number): boolean | never {
  if ([1, 2].indexOf(version) === -1) {
    throw Error(
      `Bacon cipher version '${version}' unknown - please select verson 1 or 2.`
    );
  }
  return true;
}
