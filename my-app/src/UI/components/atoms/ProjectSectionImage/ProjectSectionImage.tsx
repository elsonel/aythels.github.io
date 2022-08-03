import React from 'react';
import styled from 'styled-components';
import { TextCaption } from '../../text/TextCaption';
import { Image } from '../Image';

export interface ProjectSectionImageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  children: string;
}

export const ProjectSectionImage: React.FC<ProjectSectionImageProps> = ({
  src,
  children,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <StyledImage src={src} />
      <StyledTextCaption>{children}</StyledTextCaption>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
`;

const StyledTextCaption = styled(TextCaption)`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
`;
