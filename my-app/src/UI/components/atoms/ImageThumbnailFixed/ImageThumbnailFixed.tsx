import React from 'react';
import { findClosestNumber } from '../../../utility/scripts/Array';
import { ImageThumbnail, ImageThumbnailProps } from '../ImageThumbnail';

const Aspects = {
  SQUARE: 1 / 1,
  WIDE1: 3 / 2,
  WIDE2: 3.5 / 2.5,
  WIDE3: 4 / 3,
  WIDE4: 5 / 4,
  SCREEN: 16 / 9,
};

function getAspect(width: number, height: number) {
  let isFlipped = height > width ? true : false;

  const closestAspect = findClosestNumber(
    Object.values(Aspects),
    isFlipped ? height / width : width / height
  );

  return isFlipped ? 1 / closestAspect : closestAspect;
}

export interface ImageThumbnailFixedProps extends ImageThumbnailProps {
  /**
   * Image width
   */
  imageWidth: number;
  /**
   * Image height
   */
  imageHeight: number;
}

export const ImageThumbnailFixed: React.FC<ImageThumbnailFixedProps> = ({
  imageWidth,
  imageHeight,
  ...props
}): React.ReactElement => {
  if (imageWidth <= 0 || imageHeight <= 0) throw 'Invalid image dimensions';

  return (
    <ImageThumbnail
      imageWidth={getAspect(imageWidth, imageHeight)}
      imageHeight={1}
      {...props}
    />
  );
};
