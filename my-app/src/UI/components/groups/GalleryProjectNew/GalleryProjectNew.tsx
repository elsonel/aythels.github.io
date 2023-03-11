import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import useOnWindowScroll from '../../../utility/hooks/useOnWindowScroll';
import { Body } from './Body/Body';
import { Landing } from './Landing/Landing';

export interface GalleryProjectNewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode[];
}

const LANDING_HEIGHT = 1000;

export const GalleryProjectNew: React.FC<GalleryProjectNewProps> = ({
  children,
  ...props
}): React.ReactElement => {
  const { image } = useTheme();

  return (
    <Wrapper {...props}>
      <Block />
      <Block2 />
      <Landing
        title={'KINETIC BOARDWALK'}
        subtitle={'Drifting Landscapes'}
        prototypeHref={'/'}
        imageSrc={image.exampleSquare}
        scrollLength={LANDING_HEIGHT}
      />
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

const Block2 = styled.div`
  width: 100%;
  height: 5000px;
  background-color: green;
`;
