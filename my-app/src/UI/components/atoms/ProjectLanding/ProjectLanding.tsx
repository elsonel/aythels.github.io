import React from 'react';
import styled from 'styled-components';
import { LessThanHook } from '../../../utility/hooks/ResponsiveProps';
import { Theme } from '../../../utility/themes/Theme';
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
  const isMobile = LessThanHook(600);

  return (
    <Wrapper {...props}>
      <Content>
        <ImageStyled $isContained={isContained} alt={title} src={src} />
        <BottomWrapper>
          <ImageTitle
            size={isMobile ? 'small' : 'medium'}
            color={textColor}
            title={title}
            subtitle={subtitle}
          />
          <Icon color={textColor} />
        </BottomWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  user-select: none;
  cursor: pointer;
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
