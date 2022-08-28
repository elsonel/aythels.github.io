import React, { useEffect } from 'react';
import { finishLoad, startLoad } from '../Loader';
import { ImageThumbnail } from '../UI/components/atoms/ImageThumbnail';
import { GridSquare } from '../UI/components/layout/GridSquare';
import { HeaderFooter } from './templates/HeaderFooter';

export interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {
  resetCallback: () => void;
}

export const About: React.FC<AboutProps> = ({
  resetCallback,
  ...props
}): React.ReactElement => {
  return (
    <div {...props}>
      <HeaderFooter reset={resetCallback}>
        <div>This is the about page</div>
        <GridSquare>
          <ImageThumbnail src="/example/square.jpg" />
          <ImageThumbnail src="/example/square.jpg" />
          <ImageThumbnail src="/example/square.jpg" />
          <ImageThumbnail src="/example/square.jpg" />
        </GridSquare>
      </HeaderFooter>
    </div>
  );
};
