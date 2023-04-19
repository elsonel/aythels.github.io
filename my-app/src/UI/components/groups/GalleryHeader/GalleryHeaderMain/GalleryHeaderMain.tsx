import React from 'react';
import { GreaterThanHook } from '../../../../utilities/hooks/ResponsiveProps';
import { GalleryHeaderBaseProps } from '../GalleryHeaderBase';
import { GalleryHeaderBrowser } from '../GalleryHeaderBrowser';
import { GalleryHeaderMobile } from '../GalleryHeaderMobile';
import { GalleryHeaderTablet } from '../GalleryHeaderTablet';

export interface GalleryHeaderMainProps extends GalleryHeaderBaseProps {}

export const GalleryHeaderMain: React.FC<GalleryHeaderMainProps> = ({
  ...props
}): React.ReactElement => {
  const isTablet = GreaterThanHook(420);
  const isBrowser = GreaterThanHook(720);

  const render = () => {
    if (isBrowser) return <GalleryHeaderBrowser {...props} />;
    else if (isTablet) return <GalleryHeaderTablet {...props} />;
    return <GalleryHeaderMobile {...props} />;
  };

  return render();
};
