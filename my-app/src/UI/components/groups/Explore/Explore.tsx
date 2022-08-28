import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { GridBreakpoint } from '../../layout/GridSquare';
import { ImageThumbnailProps } from '../../atoms/ImageThumbnail';
import { GreaterThanHook } from '../../../utility/ResponsiveProps';
import { HorizontalBulletMenu } from '../../atoms/HorizontalBulletMenu';
import { GridSquareLong } from '../../layout/GridSquareLong';

const DEFAULT_BREAKPOINTS: GridBreakpoint[] = [
  {
    minWidth: 0,
    columnCount: 1,
  },
  {
    minWidth: 600,
    columnCount: 2,
  },
  {
    minWidth: 800,
    columnCount: 3,
  },
  {
    minWidth: 1200,
    columnCount: 4,
  },
];

export interface ExploreProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?:
    | React.ReactElement<ImageThumbnailProps>[]
    | React.ReactElement<ImageThumbnailProps>;
}

export const Explore: React.FC<ExploreProps> = ({
  title = '',
  children = [],
  ...props
}): React.ReactElement => {
  !Array.isArray(children) && (children = [children]);
  const [menuIndex, setMenuIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  let count = 1;
  if (GreaterThanHook(0)) count = 1;
  if (GreaterThanHook(600)) count = 2;
  if (GreaterThanHook(800)) count = 3;
  if (GreaterThanHook(1200)) count = 4;

  useEffect(() => {
    // If the window changes size, make sure to update the tab;
    onScroll();
  });

  const scrollRef = (direction: 'START' | 'END') => {
    if (contentRef.current) {
      const element = contentRef.current.children[0];
      let left = 0;

      if (direction === 'START') left = 0;
      else if (direction === 'END') left = element.scrollWidth;

      element.scroll({
        left: left,
        behavior: 'smooth',
      });
    }
  };

  const onScroll = () => {
    if (contentRef.current) {
      const element = contentRef.current.children[0];
      const elementWidth = element.scrollWidth - element.clientWidth;
      const elementScroll = element.scrollLeft;

      const scrollProgress = elementScroll / elementWidth;

      if (scrollProgress < 0.5) setMenuIndex(0);
      else setMenuIndex(1);
    }
  };

  return (
    <Wrapper {...props}>
      <HeaderWrapper>
        <Header>
          <TitleText>{title}</TitleText>
          {children.length > count && (
            <HorizontalBulletMenu
              tabs={[
                {
                  onClick: () => scrollRef('START'),
                  isSelected: menuIndex === 0,
                },
                {
                  onClick: () => scrollRef('END'),
                  isSelected: menuIndex === 1,
                },
              ]}
            />
          )}
        </Header>
      </HeaderWrapper>
      <Content ref={contentRef}>
        <Grid $center={children.length < count} onScroll={onScroll}>
          {children}
        </Grid>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.text};
`;

const HeaderWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;

  border: 1px solid ${({ theme }) => theme.colors.textPassive1};
`;

const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;

  overflow: hidden;
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const Grid = styled(GridSquareLong)<{ $center: boolean }>`
  justify-content: ${({ $center }) => ($center ? 'center' : 'space-between')};
`;

const TitleText = styled(Paragraph)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: ${({ theme }) => theme.font.size.h4};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
  color: ${({ theme }) => theme.colors.background};
`;
