import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import useOnWindowScroll from '../../../utility/hooks/useOnWindowScroll';
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
  const [isLandingVisible, setIsLandingVisible] = useState(true);
  useOnWindowScroll((offsetY: number) => {
    if (offsetY > 1000) setIsLandingVisible(false);
    else setIsLandingVisible(true);
  });

  return (
    <Wrapper {...props}>
      <Landing
        title={'KINETIC BOARDWALK'}
        subtitle={'Drifting Landscapes'}
        imageSrc={image.exampleSquare}
      />
      <Block />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Block = styled.div`
  width: 100%;
  height: 2000px;
  background-color: purple;
`;
