import React, { useState } from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utility/themes/Theme';
import { GalleryProjectPanelProps } from '../../atoms/GalleryProjectPanel';
import { StickyEndsContainer } from '../../layout/StickyEndsContainer';
import { TwoColumn } from '../../layout/TwoColumn';

export interface GalleryProjectProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: [
    React.ReactElement<GalleryProjectPanelProps>,
    ...React.ReactNode[]
  ];
}

export const GalleryProject: React.FC<GalleryProjectProps> = ({
  children,
  ...props
}): React.ReactElement => {
  const [panel, ...other] = children;
  return (
    <Wrapper {...props}>
      <Content leftRatio={1} rightRatio={2} breakIfLessThan={900}>
        <StickyEndsContainer topMargin={Theme.size.header} bottomMargin={20}>
          {panel}
        </StickyEndsContainer>
        <RightWrapper>{other}</RightWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 20px;
`;

const Content = styled(TwoColumn)`
  gap: 20px;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
