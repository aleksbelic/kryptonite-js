import {encrypt, decrypt} from '../src/ciphers/bacon.js';

describe('Bacon cipher v1', () => {
  test('Encryption', () => {
    expect(encrypt('abcdefghijklmnopqrstuvwxyz', 1)).toEqual(
      'aaaaaaaaabaaabaaaabbaabaaaababaabbaaabbbabaaaabaaaabaabababaababbabbaaabbababbbaabbbbbaaaabaaabbaababaabbbaabbbabaabababbabbababbb'
    );
    expect(encrypt('abc jinx vulture', 1)).toEqual(
      'aaaaaaaaabaaaba abaaaabaaaabbaababab baabbbaabbabababaababaabbbaaaaaabaa'
    );
    expect(encrypt('abc jinx vulture', 1, false)).toEqual(
      'aaaaaaaaabaaabaabaaaabaaaabbaabababbaabbbaabbabababaababaabbbaaaaaabaa'
    );
  });

  test('Decryption', () => {
    expect(
      decrypt(
        'aaaaaaaaabaaabaaaabbaabaaaababaabbaaabbbabaaaabaaaabaabababaababbabbaaabbababbbaabbbbbaaaabaaabbaababaabbbaabbbabaabababbabbababbb',
        1
      )
    ).toEqual('abcdefghiiklmnopqrstuuwxyz');
    expect(
      decrypt(
        'aaaaaaaaabaaaba abaaaabaaaabbaababab baabbbaabbabababaababaabbbaaaaaabaa',
        1
      )
    ).toEqual('abciinxuulture');
    expect(
      decrypt(
        'gFaX8_Akl2:aog4Acz$B6olaeD)Awqµ#aK.OrnaSAJ_ax;kPa*q]_aB=jtn?Aöw€. MdairhGlkBC"=hzBVaÜv%iTmebxaO7hl3bnID+Fb6wkL(a§ö;a_s#7iA|pZbgp2~asoTaöZ8vaqaK/n4rBUep=a03_a!EdlvA71a,3BürbqsxA gA3_lu(1pevB+anh4TB#a6jrEK_9l?öB9€_bUqAv.a=öbBM)R?e55[B1&Äa7AB_9rb6a91A#fBa3d_Ak',
        1
      )
    ).toEqual('baconiinxuue');
  });
});

describe('Bacon cipher v2', () => {
  test('Encryption', () => {
    // version 2 is default
    expect(encrypt('abcdefghijklmnopqrstuvwxyz')).toEqual(
      'aaaaaaaaabaaabaaaabbaabaaaababaabbaaabbbabaaaabaabababaababbabbaaabbababbbaabbbbbaaaabaaabbaababaabbbabaabababbabbababbbbbaaabbaab'
    );
    expect(encrypt('abcdefghijklmnopqrstuvwxyz', 2)).toEqual(
      'aaaaaaaaabaaabaaaabbaabaaaababaabbaaabbbabaaaabaabababaababbabbaaabbababbbaabbbbbaaaabaaabbaababaabbbabaabababbabbababbbbbaaabbaab'
    );
    expect(encrypt('abc jinx vulture', 2)).toEqual(
      'aaaaaaaaabaaaba abaababaaaabbabbabbb bababbabaaababbbaabbbabaabaaabaabaa'
    );
    expect(encrypt('abc jinx vulture', 2, false)).toEqual(
      'aaaaaaaaabaaabaabaababaaaabbabbabbbbababbabaaababbbaabbbabaabaaabaabaa'
    );
  });

  test('Decryption', () => {
    // version 2 is default
    expect(
      decrypt(
        'aaaaaaaaabaaabaaaabbaabaaaababaabbaaabbbabaaaabaabababaababbabbaaabbababbbaabbbbbaaaabaaabbaababaabbbabaabababbabbababbbbbaaabbaab'
      )
    ).toEqual('abcdefghijklmnopqrstuvwxyz');
    expect(
      decrypt(
        'aaaaaaaaabaaabaaaabbaabaaaababaabbaaabbbabaaaabaabababaababbabbaaabbababbbaabbbbbaaaabaaabbaababaabbbabaabababbabbababbbbbaaabbaab',
        2
      )
    ).toEqual('abcdefghijklmnopqrstuvwxyz');
    expect(
      decrypt(
        'aaaaaaaaabaaaba abaababaaaabbabbabbb bababbabaaababbbaabbbabaabaaabaabaa',
        2
      )
    ).toEqual('abcjinxvulture');
    expect(
      decrypt(
        'maD&aFA=a9b5K1ä:a-6rah;AyqvaoK*_a(g4dZuaalAÖbaabMeBbaG3abUBazbaQ8bAP=aQbafbWaA7o]kccanDabKµ923bk#FAbbd_ablBqb71fGb90aBa9oa8bAkb2aBp3aaBf4a6a7hc2jz62ipfr',
        2
      )
    ).toEqual('baconjinxuve');
  });
});

test('Various', () => {
  expect(encrypt('Abc!', undefined, true)).toEqual('aaaaaaaaabaaaba!');
  expect(encrypt('Abc!', undefined, false)).toEqual('aaaaaaaaabaaaba');
  expect(() => encrypt('abc', 3)).toThrowError(
    "Bacon cipher version '3' unknown - please select verson 1 or 2."
  );
});
