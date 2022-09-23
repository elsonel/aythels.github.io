import React from 'react';
import styled from 'styled-components';
import {
  ImageThumbnail,
  ImageThumbnailProps,
} from '../ImageThumbnail/ImageThumbnail';

export interface ImageThumbnailAspectProps extends ImageThumbnailProps {
  aspect: number;
  /**
   * isFilingContainer
   */
  isFillingParent?: boolean;
}

export const ImageThumbnailAspect: React.FC<ImageThumbnailAspectProps> = ({
  aspect,
  isFillingParent = true,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper $isFillingParent={isFillingParent}>
      <Content $aspect={aspect}>
        <ImageStyled {...props} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isFillingParent: boolean }>`
  width: ${({ $isFillingParent }) => ($isFillingParent ? '100%' : '300px')};
`;

const Content = styled.div<{
  $aspect: number;
}>`
  position: relative;
  width: inherit;

  &::before {
    float: left;
    padding-top: ${({ $aspect }) => `${(1 / $aspect) * 100}%`};
    content: '';
  }

  &::after {
    display: block;
    content: '';
    clear: both;
  }

  ${({ $aspect }) =>
    $aspect &&
    `
      &::before {
        float: left;
        padding-top: ${(1 / $aspect) * 100}%;
        content: '';
      }

      &::after {
        display: block;
        content: '';
        clear: both;
      }
    `};
`;

const ImageStyled = styled(ImageThumbnail)`
  overflow: hidden;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;
