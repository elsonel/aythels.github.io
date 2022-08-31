import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utility/themes/Theme';
import { Paragraph } from '../../text/Paragraph';
import { IconScroll } from '../IconScroll';
import { Image } from '../Image/Image';

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
          <TextWrapper>
            <TextSubtitle $color={textColor}>{subtitle}</TextSubtitle>
            <TextTitle $color={textColor}>{title}</TextTitle>
          </TextWrapper>
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

const TextWrapper = styled.div`
  overflow: hidden;
`;

const Text = styled(Paragraph)<{ $color: string }>`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  color: ${({ $color }) => $color};
`;

const TextSubtitle = styled(Text)`
  font-size: ${({ theme }) => theme.font.size.default};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

const TextTitle = styled(Text)`
  font-size: ${({ theme }) => theme.font.size.h5};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
`;
