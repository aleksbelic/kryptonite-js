export const ASCII_PRINTABLE_SPECIAL = [...' !"#$%&\'()*+,-./:;<=>?@`[\\~]^_{|}'];

export const DIGITS = [...'1234567890'];

// using ISO 639-1 language codes
export const ALPHABET_EN = [...'abcdefghijklmnopqrstuvwxyz'];
export const ALPHABET_DE = [...'abcdefghijklmnopqrstuvwxyzäöüß'];
export const ALPHABET_SR_CYR = [...'абвгдђежзијклљмнњопрстћуфхцчџш'];
export const ALPHABET_GR = [...'αβγδεζηθικλμνξοπρστυφχψω'];

export const morseCodeMap = new Map([
  // letters
  ['a', '.-'], ['b', '-...'], ['c', '-.-.'],
  ['d', '-..'], ['e', '.'], ['f', '..-.'],
  ['g', '--.'], ['h', '....'], ['i', '..'],
  ['j', '.---'], ['k', '-.-'], ['l', '.-..'],
  ['m', '--'], ['n', '-.'], ['o', '---'],
  ['p', '.--.'], ['q', '--.-'], ['r', '.-.'],
  ['s', '...'], ['t', '-'], ['u', '..-'],
  ['v', '...-'], ['w', '.--'], ['x', '-..-'],
  ['y', '-.--'], ['z', '--..'],
  // numbers
  ['1', '.----'], ['2', '..---'], ['3', '...--'],
  ['4', '....-'], ['5', '.....'], ['6', '-....'],
  ['7', '--...'], ['8', '---..'], ['9', '----.'],
  ['0', '-----'],
  // punctuation
  ['.', '.-.-.-'], [',', '--..--'], ['?', '..--..'],
  ["'", '.----.'], ['!', '-.-.--'], ['/', '-..-.'],
  ['(', "-.--."], [')', '-.--.-'], ['&', '.-...'],
  [':', '---...'], [';', '-.-.-.'], ['=', '-...-'],
  ['+', '.-.-.'], ['-', '-....-'], ['_', '..--.-'],
  ['"', '.-..-.'], ['$', '...-..-'], ['@', '.--.-.']
]);

// 'i' & 'j', as well as 'u' & 'v' use the same code
export const bacon1Map = new Map([
  ['a', 'aaaaa'], ['b', 'aaaab'], ['c', 'aaaba'], ['d', 'aaabb'],
  ['e', 'aabaa'], ['f', 'aabab'], ['g', 'aabba'], ['h', 'aabbb'],
  ['i', 'abaaa'], ['j', 'abaaa'], ['k', 'abaab'], ['l', 'ababa'],
  ['m', 'ababb'], ['n', 'abbaa'], ['o', 'abbab'], ['p', 'abbba'],
  ['q', 'abbbb'], ['r', 'baaaa'], ['s', 'baaab'], ['t', 'baaba'],
  ['u', 'baabb'], ['v', 'baabb'], ['w', 'babaa'], ['x', 'babab'],
  ['y', 'babba'], ['z', 'babbb']
]);
export const bacon2Map = new Map([
  ['a', 'aaaaa'], ['b', 'aaaab'], ['c', 'aaaba'], ['d', 'aaabb'],
  ['e', 'aabaa'], ['f', 'aabab'], ['g', 'aabba'], ['h', 'aabbb'],
  ['i', 'abaaa'], ['j', 'abaab'], ['k', 'ababa'], ['l', 'ababb'],
  ['m', 'abbaa'], ['n', 'abbab'], ['o', 'abbba'], ['p', 'abbbb'],
  ['q', 'baaaa'], ['r', 'baaab'], ['s', 'baaba'], ['t', 'baabb'],
  ['u', 'babaa'], ['v', 'babab'], ['w', 'babba'], ['x', 'babbb'],
  ['y', 'bbaaa'], ['z', 'bbaab']
]);

export const portaMap = new Map([
  //      abcdefghijklmnopqrstuvwxyz
  ['ab', 'nopqrstuvwxyzabcdefghijklm'],
  ['cd', 'opqrstuvwxyznmabcdefghijkl'],
  ['ef', 'pqrstuvwxyznolmabcdefghijk'],
  ['gh', 'qrstuvwxyznopklmabcdefghij'],
  ['ij', 'rstuvwxyznopqjklmabcdefghi'],
  ['kl', 'stuvwxyznopqrijklmabcdefgh'],
  ['mn', 'tuvwxyznopqrshijklmabcdefg'],
  ['op', 'uvwxyznopqrstghijklmabcdef'],
  ['qr', 'vwxyznopqrstufghijklmabcde'],
  ['st', 'wxyznopqrstuvefghijklmabcd'],
  ['uv', 'xyznopqrstuvwdefghijklmabc'],
  ['wx', 'yznopqrstuvwxcdefghijklmab'],
  ['yz', 'znopqrstuvwxybcdefghijklma']
]);
