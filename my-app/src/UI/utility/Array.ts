// Slice <array> elements into <parts> arrays
// sliceIntoChunks([0, 1, 2 ,3], 3);
// [[0, 1], [2], [3]]
// sliceIntoChunks([0, 1, 2 ,3], 5);
// [[0], [1], [2], [3], []]
// sliceIntoChunks([0, 1, 2 ,3], 0);
// []

export function sliceIntoChunks(array: any[], parts: number) {
  array = [...array];
  let result = [];
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

// Distribute <array> elements into <parts> arrays
// distributeIntoChunks([0, 1, 2 ,3], 3);
// [[0, 3], [1], [2]]
// distributeIntoChunks([0, 1, 2 ,3], 5);
// [[0], [1], [2], [3], []]
// distributeIntoChunks([0, 1, 2 ,3], 0);
// []

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

// fillChunks([0, 1, 2 ,3], 3);
// [[0, 1, 2] [3]]
// fillChunks([], 3);
// []

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

/* getElementAt([0, 1, 2, 3, 4], 1);
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
 */

export function getElementAt(array: any[], index: number) {
  let i = index % array.length;
  return array.at(i);
}
