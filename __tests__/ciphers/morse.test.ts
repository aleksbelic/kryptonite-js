import {encrypt} from '../../src/ciphers/morse';

describe('Morse code - encryption', () => {
  test('ITU Standard', () => {
    expect(encrypt('abcdefghijklmnopqrstuvwxyz')).toEqual(
      '.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..'
    );
    expect(encrypt('1234567890')).toEqual(
      '.---- ..--- ...-- ....- ..... -.... --... ---.. ----. -----'
    );
    expect(encrypt('.,?\'!/()&:;=+-_"$@')).toEqual(
      '.-.-.- --..-- ..--.. .----. -.-.-- -..-. -.--. -.--.- .-... ---... -.-.-. -...- .-.-. -....- ..--.- .-..-. ...-..- .--.-.'
    );
  });
  test('Unknown char', () => {
    expect(() => encrypt('aßc')).toThrowError(
      "Character 'ß' is not defined in Morse code."
    );
  });
  test('Whitespace', () => {
    expect(encrypt('The quick brown fox jumps over the lazy dog')).toEqual(
      '- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.'
    );
  });
  test('Custom short mark, long mark & space', () => {
    expect(
      encrypt(
        "Life is like a box of chocolates. You never know what you're gonna get.",
        'X',
        '?',
        '*'
      )
    ).toEqual(
      'X?XX XX XX?X X * XX XXX * X?XX XX ?X? X * X? * ?XXX ??? ?XX? * ??? XX?X * ?X?X XXXX ??? ?X?X ??? X?XX X? ? X XXX X?X?X? * ?X?? ??? XX? * ?X X XXX? X X?X * ?X? ?X ??? X?? * X?? XXXX X? ? * ?X?? ??? XX? X????X X?X X * ??X ??? ?X ?X X? * ??X X ? X?X?X?'
    );
  });
});
