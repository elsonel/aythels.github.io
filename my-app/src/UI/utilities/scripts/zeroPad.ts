/**
 *
 * Pads the given number with leading zeros.
 *
 * @example
 * console.log(zeroPad(5, 2)); // "05"
 * console.log(zeroPad(5, 4)); // "0005"
 * console.log(zeroPad(5, 6)); // "000005"
 * console.log(zeroPad(1234, 2)); // "1234"
 *
 * @param {Number} num - The value to pad.
 * @param {Number} places - The quantity of digits.
 * @returns {string} - The padded number with leading zeros as a string.
 *
 */

export const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, '0');
