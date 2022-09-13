import {encrypt} from '../../src/ciphers/rot18.js';

describe('ROT18 cipher - encryption', () => {
  test('Shift', () => {
    expect(encrypt('1234567890abcdefghijklmnopqrstuvwxyz')).toEqual(
      '6789012345nopqrstuvwxyzabcdefghijklm'
    );
    expect(encrypt('123aBc', true)).toEqual('678nOp');
    expect(encrypt('123aBc', false)).toEqual('678nop');
    expect(encrypt('123 aBc', undefined, true)).toEqual('678 nOp');
    expect(encrypt('123 aBc', undefined, false)).toEqual('678nOp');
  });
});
