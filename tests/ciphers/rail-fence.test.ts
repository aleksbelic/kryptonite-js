import {decrypt, encrypt} from '../../src/ciphers/rail-fence';

describe('Rail fence', () => {
  test('Rail fence - encryption', () => {
    expect(encrypt('ABCDEFG', 1)).toEqual('ABCDEFG');
    expect(encrypt('ABCDEFG', 2)).toEqual('ACEGBDF');
    expect(encrypt('WE ARE DISCOVERED FLEE AT ONCE')).toEqual(
      'WECRLTEERDSOEEFEAOCAIVDEN'
    );
  });

  test('Rail fence - decryption', () => {
    expect(decrypt('ABCDEFG', 1)).toEqual('ABCDEFG');
    expect(decrypt('ACEGBDF', 2)).toEqual('ABCDEFG');
    expect(decrypt('WECRLTEERDSOEEFEAOCAIVDEN')).toEqual(
      'WEAREDISCOVEREDFLEEATONCE'
    );
  });
});
