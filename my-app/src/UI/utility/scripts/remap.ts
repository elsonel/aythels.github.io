/**
 * Remaps the given value from one range to another
 *
 * @example
 * // returns 30
 * remap(1, 0, 1, 20, 30)
 *
 * @example
 * // returns 40
 * remap(2, 0, 1, 20, 30)
 *
 * @example
 * // returns 10
 * remap(-1, 0, 1, 20, 30)
 *
 * @example
 * // returns 25
 * remap(1, 0, 2, 20, 30)
 *
 * @example
 * // Low and high range parameters can be reversed
 * // returns 20
 * remap(1, 0, 1, 30, 20)
 *
 * // returns 1
 * remap(10, 30, 20, 3, 2)
 *
 * @param {Number} value - The value to remap
 * @param {Number} low1 - The lower boundary of the initial value's range
 * @param {Number} high1 - The upper boundary of the initial value's range
 * @param {Number} low2 - The lower boundary of the remapped value's range
 * @param {Number} high2 - The upper boundary of the remapped value's range
 * @returns {number} - The value remapped such that its range of [low1, high1]
 * becomes [low2, high2]
 */
export function remap(
  value: number,
  low1: number,
  high1: number,
  low2: number,
  high2: number
) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}
