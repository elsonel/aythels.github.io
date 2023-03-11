import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import useOnWindowScroll from '../../../utility/hooks/useOnWindowScroll';
import { Body } from './Body/Body';
import { Landing } from './Landing/Landing';

export interface GalleryProjectNewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode[];
}

export const GalleryProjectNew: React.FC<GalleryProjectNewProps> = ({
  children,
  ...props
}): React.ReactElement => {
  const { image } = useTheme();

  return (
    <Wrapper {...props}>
      <Block />
      <Landing
        title={'KINETIC BOARDWALK'}
        subtitle={'Drifting Landscapes'}
        imageSrc={image.exampleSquare}
      />
      <Body />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Block = styled.div`
  width: 100%;
  height: 1000px;
`;
