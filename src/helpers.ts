/**
 * Checks if given char or string is upper case.
 * @param text
 * @returns if given char or string is upper case
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * isUpperCase('a');
 * // returns false
 * isUpperCase('A');
 * // returns true
 */
export function isUpperCase(text: string): boolean {
  return text === text.toUpperCase();
}

/**
 * Returns key for the specified value in some given map.
 * @param map
 * @param value - value whose key we're looking for
 * @returns key
 * @author Aleksandar Belic Aleksanchez <aleks.belic@gmail.com>
 * @example
 * getMapKeyByValue(new Map([['a', 'alpha'],['b', 'beta']]),'alpha')
 * // returns 'a'
 * getMapKeyByValue(new Map([['a', 'alpha'],['b', 'beta']]),'gama')
 * // returns undefined
 */
export function getMapKeyByValue(
  map: Map<string, string>,
  value: string
): string | undefined {
  if (!(map instanceof Map)) {
    throw Error('Invalid param - please provide an intance of Map.');
  }
  return [...map].find(([k, v]) => v === value)?.[0];
}
