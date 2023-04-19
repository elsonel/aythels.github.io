import { findClosestNumber } from './Array';

export const Aspects = {
  SQUARE: 1 / 1,
  WIDE1: 3 / 2,
  WIDE2: 3.5 / 2.5,
  WIDE3: 4 / 3,
  WIDE4: 5 / 4,
  SCREEN: 16 / 9,
};

// Get the closest approximate aspect based on width and height
export function getAspect(width: number, height: number) {
  let isFlipped = height > width ? true : false;

  const closestAspect = findClosestNumber(
    Object.values(Aspects),
    isFlipped ? height / width : width / height
  );

  return isFlipped ? 1 / closestAspect : closestAspect;
}
