import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utility/themes/Theme';
import { Paragraph } from '../../text/Paragraph';
import { IconScroll } from '../IconScroll';
import { Image } from '../Image/Image';
import { ImageTitle } from '../ImageTitle';

export interface ProjectLandingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  subtitle?: string;
  title?: string;
  isContained?: boolean;
  textColor?: string;
}

export const ProjectLanding: React.FC<ProjectLandingProps> = ({
  src,
  subtitle = '',
  title = '',
  isContained = false,
  textColor = Theme.color.background,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <ContentWrapper>
        <ImageStyled $isContained={isContained} src={src} />
        <BottomWrapper>
          <ImageTitle color={textColor} title={title} subtitle={subtitle} />
          <Icon color={textColor} />
        </BottomWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  user-select: none;
`;

const ImageStyled = styled(Image)<{ $isContained: boolean }>`
  width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: ${({ $isContained }) => ($isContained ? 'contain' : 'cover')};
`;

const BottomWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  column-gap: 20px;
`;

const Icon = styled(IconScroll)`
  flex-shrink: 0;
`;
