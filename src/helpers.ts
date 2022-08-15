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
