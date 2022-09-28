import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utility/themes/Theme';
import { Fact, GalleryProjectPanel } from '../../atoms/GalleryProjectPanel';
import { StickyEndsContainer } from '../../layout/StickyEndsContainer';
import { TwoColumn } from '../../layout/TwoColumn';

export interface GalleryProjectProps
  extends React.HTMLAttributes<HTMLDivElement> {
  body: string[];
  facts: Fact[];
  children?: React.ReactNode[];
}

const PADDING = 20;

export const GalleryProject: React.FC<GalleryProjectProps> = ({
  body,
  facts,
  children,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Content leftRatio={1} rightRatio={2} breakIfLessThan={1100}>
        <StickyEndsContainer
          topMargin={Theme.size.headerHeight + PADDING}
          bottomMargin={20}
        >
          <GalleryProjectPanel body={body} facts={facts} />
        </StickyEndsContainer>
        <RightWrapper>{children}</RightWrapper>
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
