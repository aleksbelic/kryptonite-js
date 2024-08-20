import { bacon1Map, bacon2Map } from '../globals';
import { getMapKeyByValue, isUpperCase } from '../helpers';

/**
 * [Bacon's cipher](https://en.wikipedia.org/wiki/Bacon%27s_cipher) encryption
 *
 * @param plaintext text to be encrypted
 * @param options optional configuration for encryption
 * @param options.version cipher version (1 or 2). 1st version uses the same code for letters 'i' & 'j' as well as for 'u' & v, while the 2nd version has unique code for each letter
 * @param options.includeForeignChars if unknown char should be included in ciphertext
 * @returns ciphertext, the encrypted text
 *
 * @example
 * encrypt('abc')
 * // returns 'aaaaaaaaabaaaba'
 *
 * encrypt('ijuv', { version: 1 })
 * // returns 'abaaaabaaabaabbbaabb'
 *
 * encrypt('ijuv', { version: 2 })
 * // returns 'abaaaabaabbabaababab'
 *
 * encrypt('Abc!', { includeForeignChars: true })
 * // returns 'aaaaaaaaabaaaba!'
 *
 * encrypt('Abc!', { includeForeignChars: false })
 * // returns 'aaaaaaaaabaaaba'
 */
export function encrypt(
    plaintext: string,
    options?: {
        version?: number;
        includeForeignChars?: boolean;
    },
): string {
    const { version = 2, includeForeignChars = true } = options || {};

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
 *
 * @param ciphertext text to be decrypted
 * @param options configuration for decryption
 * @param options.version cipher version (1 or 2). 1st version uses the same code for letters 'i' & 'j' as well as for 'u' & v, while the 2nd version has unique code for each letter
 * @returns plaintext, the decrypted text
 *
 * @example
 * decrypt('aaaaaaaaabaaaba')
 * // returns 'abc'
 *
 * decrypt('abaaaabaaabaabbbaabb', { version: 1 })
 * // returns 'iiuu'
 *
 * decrypt('abaaaabaabbabaababab', { version: 2 })
 * // returns 'ijuv'
 *
 * decrypt('aaaaa_aaaab !!! aaaba!')
 * // returns 'abc'
 */
export function decrypt(
    ciphertext: string,
    options?: {
        version?: number;
    },
) {
    const { version = 2 } = options || {};

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
                currentCharDecrypted = getMapKeyByValue(
                    baconMap,
                    fiveBaconChars,
                );
                if (currentCharDecrypted !== undefined) {
                    plaintext += currentCharDecrypted;
                }
                fiveBaconChars = '';
            }
        }
    }

    return plaintext;
}

/**
 * Returns specified text containing encrypted message where lower case letters represent letter 'a' & upper case - letter 'b'
 *
 * @param message message that will be encrypted & hidden inside specified text
 * @param text text used to hide encrypted message
 * @param options optional configuration for encryption
 * @param options.version cipher version (1 or 2). 1st version uses the same code for letters 'i' & 'j' as well as for 'u' & v, while the 2nd version has unique code for each letter
 * @returns specified text containing encrypted message
 *
 * @example
 * encryptInText('abc', 'Find what you love and let it kill you.')
 * // returns 'find what yOu loVe and let it kill you.'
 */
export function encryptInText(
    message: string,
    text: string,
    options?: {
        version?: number;
    },
): string {
    const { version = 2 } = options || {};

    const encryptedMsg = encrypt(message, {
        version,
        includeForeignChars: false,
    });
    const lettersInText = text.replaceAll(/[\W\d]/g, '').length;
    if (encryptedMsg.length > lettersInText) {
        throw new Error(
            `Text should not contain less letters than encrypted message (${encryptedMsg.length}), please provide more letters.`,
        );
    }
    let textWithEncryptedMsg = '',
        currentTextChar: string;
    for (
        let encryptedMsgIndex = 0, textIndex = 0;
        textIndex < text.length;
        textIndex++
    ) {
        currentTextChar = text.charAt(textIndex).toLowerCase();
        if (encryptedMsgIndex === encryptedMsg.length) {
            textWithEncryptedMsg += text.substring(textIndex);
            break;
        } else if (currentTextChar.match(/[^\W\d]/g)) {
            currentTextChar =
                encryptedMsg.charAt(encryptedMsgIndex) === 'a'
                    ? currentTextChar
                    : currentTextChar.toUpperCase();
            encryptedMsgIndex++;
        }
        textWithEncryptedMsg += currentTextChar;
    }

    return textWithEncryptedMsg;
}

/**
 * Returns decrypted message hidden in specified text where lower case letters represent letter 'a' & upper case - letter 'b'
 *
 * @param text text that contains hidden, encrypted message
 * @param options configuration for decryption
 * @param options.version cipher version (1 or 2). 1st version uses the same code for letters 'i' & 'j' as well as for 'u' & v, while the 2nd version has unique code for each letter
 * @returns plaintext hidden in specified text
 *
 * @example
 * decryptInText('find what yOu loVe and let it kill you.', { version: 2 })
 * // returns 'abcaaa'
 */
export function decryptInText(
    text: string,
    options?: { version?: number },
): string {
    const { version = 2 } = options || {};

    text = text.replace(/[\W\d]/g, '');
    let encryptedMsg = '';
    for (const char of text) {
        encryptedMsg += isUpperCase(char) ? 'b' : 'a';
    }
    return decrypt(encryptedMsg, { version });
}

/*
find what yOu loVe and let it kill you.
aaaaa aaaaB aaaBa aaaaa aaaaa aaaaa
*/

export function encryptInRandomText() {
    // TODO
}

/**
 * Checks if provided Bacon's cipher verion is valid.
 *
 * @param version cipher version
 *
 * @returns true if provided version is valid, throws error if invalid
 */
function checkVersion(version: number): boolean | never {
    if ([1, 2].indexOf(version) === -1) {
        throw new Error(
            `Bacon cipher version '${version}' unknown - please select verson 1 or 2.`,
        );
    }
    return true;
}
