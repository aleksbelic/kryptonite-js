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
});
