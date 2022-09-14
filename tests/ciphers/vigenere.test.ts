import {encrypt, decrypt} from '../../src/ciphers/vigenere.js';

describe('Vigenère cipher - encryption', () => {
  test('Basic', () => {
    expect(encrypt('', 'secretkey')).toEqual('');
    expect(encrypt('abcdefghijklmnopqrstuvwxyz', 'cowabunga')).toEqual(
      'cpydfztnilyhmoicwruhqvxrlf'
    );
    expect(encrypt('this is my secret message', 'secretkey')).toEqual(
      'llkj ml wc qwgtvx fowqskg'
    );
    expect(encrypt('My name is Bond, James Bond.', 'secretkey', true)).toEqual(
      'Ec prqx sw Zgrf, Aefow Zgrf.'
    );
    expect(encrypt('My name is Bond, James Bond.', 'secretkey', false)).toEqual(
      'ec prqx sw zgrf, aefow zgrf.'
    );
    expect(
      encrypt('My name is Bond, James Bond.', 'secretkey', undefined, false)
    ).toEqual('EcprqxswZgrfAefowZgrf');
  });
});

describe('Vigenère cipher - decryption', () => {
  test('Basic', () => {
    expect(decrypt('', 'secretkey')).toEqual('');
    expect(decrypt('cpydfztnilyhmoicwruhqvxrlf', 'cowabunga')).toEqual(
      'abcdefghijklmnopqrstuvwxyz'
    );
    expect(decrypt('llkj ml wc qwgtvx fowqskg', 'secretkey')).toEqual(
      'this is my secret message'
    );
    expect(decrypt('Ec prqx sw Zgrf, Aefow Zgrf.', 'secretkey', true)).toEqual(
      'My name is Bond, James Bond.'
    );
    expect(decrypt('Ec prqx sw Zgrf, Aefow Zgrf.', 'secretkey', false)).toEqual(
      'my name is bond, james bond.'
    );
    expect(
      decrypt('Ec prqx sw Zgrf, Aefow Zgrf.', 'secretkey', undefined, false)
    ).toEqual('MynameisBondJamesBond');
  });
});
