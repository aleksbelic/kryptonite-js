import {encrypt} from '../src/ciphers/bacon.js';

describe('Bacon cipher v1 - encryption', () => {
  test('Basic', () => {
    expect(encrypt('abcdefghijklmnopqrstuvwxyz', 1)).toEqual(
      'aaaaaaaaabaaabaaaabbaabaaaababaabbaaabbbabaaaabaaaabaabababaababbabbaaabbababbbaabbbbbaaaabaaabbaababaabbbaabbbabaabababbabbababbb'
    );
    expect(encrypt('abc jinx vulture', 1)).toEqual(
      'aaaaaaaaabaaaba abaaaabaaaabbaababab baabbbaabbabababaababaabbbaaaaaabaa'
    );
    expect(encrypt('abc jinx vulture', 1, false)).toEqual(
      'aaaaaaaaabaaabaabaaaabaaaabbaabababbaabbbaabbabababaababaabbbaaaaaabaa'
    );
    expect(() => encrypt('abc', 3)).toThrowError(
      'Bacon cipher version unknown - please select verson 1 or 2.'
    );
  });

  test('Various', () => {
    expect(encrypt('ijuv')).toEqual('abaaaabaabbabaababab');
    expect(encrypt('ijuv', 1)).toEqual('abaaaabaaabaabbbaabb');
    expect(encrypt('ijuv', 2)).toEqual('abaaaabaabbabaababab');
    expect(encrypt('Abc!', undefined, true)).toEqual('aaaaaaaaabaaaba!');
    expect(encrypt('Abc!', undefined, false)).toEqual('aaaaaaaaabaaaba');
  });
});
