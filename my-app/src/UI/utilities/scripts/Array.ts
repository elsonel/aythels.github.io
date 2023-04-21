/*
 * =============================================================================
 * Slice <array> elements into <parts> arrays
 * =============================================================================
 *
 * sliceIntoChunks([0, 1, 2 ,3], 3);
 * [[0, 1], [2], [3]]
 *
 * sliceIntoChunks([0, 1, 2 ,3], 5);
 * [[0], [1], [2], [3], []]
 *
 * sliceIntoChunks([0, 1, 2 ,3], 0);
 * [];
 *
 */

export function sliceIntoChunks(array: any[], parts: number) {
  array = [...array];
  let result = [];
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

/*
 * =============================================================================
 * Distribute <array> elements into <parts> arrays
 * =============================================================================
 *
 * distributeIntoChunks([0, 1, 2 ,3], 3);
 * [[0, 3], [1], [2]]
 *
 * distributeIntoChunks([0, 1, 2 ,3], 5);
 * [[0], [1], [2], [3], []]
 *
 * distributeIntoChunks([0, 1, 2 ,3], 0);
 * []
 *
 */

export function distributeIntoChunks(array: any[], parts: number) {
  const result: any[] = [];

  for (let i = 0; i < parts; i++) result.push([]);

  let n = 0;
  for (let i = 0; i < array.length; i++) {
    if (n > result.length - 1) n = 0;
    result[n] && result[n].push(array[i]);
    n += 1;
  }

  return result;
}

/*
 * =============================================================================
 *  Put <array> elements into child arrays containing max <max> elements
 * =============================================================================
 *
 * fillChunks([0, 1, 2 ,3], 3);
 * [[0, 1, 2] [3]]
 *
 * fillChunks([], 3);
 * []
 *
 */

export function fillChunks(array: any[], max: number) {
  const result = [];

  let temp = [];
  for (let i = 0; i < array.length; i++) {
    temp.push(array[i]);
    if (temp.length === max) {
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);

  return result;
}

/*
 * =============================================================================
 * get the element at the specified array index, looping around if necessary
 * =============================================================================
 *
 * getElementAt([0, 1, 2, 3, 4], 1);
 * 1
 *
 * getElementAt([0, 1, 2, 3, 4], 5);
 * 0
 *
 * getElementAt([0, 1, 2, 3, 4], -1);
 * 4
 *
 * getElementAt([0, 1, 2, 3, 4], -5);
 * 0
 *
 */

export function getElementAt(array: any[], index: number) {
  if (array.length === 0) return undefined;
  let i = index % array.length;
  return array.at(i);
}

/*
 * =============================================================================
 * Get the closest number to <number> in an array <array> of numbers
 * =============================================================================
 *
 * const array = [2, 42, 82, 122, 162, 202, 242, 282, 322, 362];
 * const number = 112;
 * findClosestNumber(array, number);
 * 122
 *
 */

export function findClosestNumber(array: number[], number: number) {
  let curr = array[0];

  for (let i = 0; i < array.length; i++) {
    const val = array[i];
    if (Math.abs(number - val) < Math.abs(number - curr)) curr = val;
  }

  return curr;
}
