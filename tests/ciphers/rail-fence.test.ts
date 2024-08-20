import { describe, expect, test } from '@jest/globals';
import { decrypt, encrypt } from '../../src/ciphers/rail-fence';

describe('Rail fence', () => {
    test('Rail fence - encryption', () => {
        expect(encrypt('ABCDEFG', { railCount: 1 })).toEqual('ABCDEFG');
        expect(encrypt('ABCDEFG', { railCount: 2 })).toEqual('ACEGBDF');
        expect(encrypt('WE ARE DISCOVERED FLEE AT ONCE')).toEqual(
            'WECRLTEERDSOEEFEAOCAIVDEN',
        );
        expect(
            encrypt('GROUND CONTROL TO MAJOR TOM', { railCount: 6 }),
        ).toEqual('GRTRTOROONLOMUOTJNCOADM');
    });

    test('Rail fence - decryption', () => {
        expect(decrypt('ABCDEFG', { railCount: 1 })).toEqual('ABCDEFG');
        expect(decrypt('ACEGBDF', { railCount: 2 })).toEqual('ABCDEFG');
        expect(decrypt('WECRLTEERDSOEEFEAOCAIVDEN')).toEqual(
            'WEAREDISCOVEREDFLEEATONCE',
        );
        expect(decrypt('GRTRTOROONLOMUOTJNCOADM', { railCount: 6 })).toEqual(
            'GROUNDCONTROLTOMAJORTOM',
        );
    });
});
