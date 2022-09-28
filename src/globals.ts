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

// relative char frequencies
export const CHAR_FREQUENCY_EN = [
  { char: 'a', freq: 0.0817 }, { char: 'b', freq: 0.0150 },
  { char: 'c', freq: 0.0278 }, { char: 'd', freq: 0.0425 },
  { char: 'e', freq: 0.1270 }, { char: 'f', freq: 0.0223 },
  { char: 'g', freq: 0.0202 }, { char: 'h', freq: 0.0609 },
  { char: 'i', freq: 0.0697 }, { char: 'j', freq: 0.0015 },
  { char: 'k', freq: 0.0077 }, { char: 'l', freq: 0.0403 },
  { char: 'm', freq: 0.0241 }, { char: 'n', freq: 0.0675 },
  { char: 'o', freq: 0.0751 }, { char: 'p', freq: 0.0193 },
  { char: 'q', freq: 0.0010 }, { char: 'r', freq: 0.0599 },
  { char: 's', freq: 0.0633 }, { char: 't', freq: 0.0906 },
  { char: 'u', freq: 0.0276 }, { char: 'v', freq: 0.0098 },
  { char: 'w', freq: 0.0236 }, { char: 'x', freq: 0.0015 },
  { char: 'y', freq: 0.0197 }, { char: 'z', freq: 0.0007 }
]