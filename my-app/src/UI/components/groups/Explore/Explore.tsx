import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { GridBreakpoint } from '../../layout/Grid';
import { ImageThumbnailProps } from '../../atoms/ImageThumbnail';
import { GreaterThanHook } from '../../../utilities/hooks/ResponsiveProps';
import { HorizontalBulletMenu } from '../../atoms/HorizontalBulletMenu';
import { GridRow } from '../../layout/GridRow';

export const EXPLORE_BREAKPOINTS: GridBreakpoint[] = [
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
  children: React.ReactElement<ImageThumbnailProps>[];
  breakpoints?: GridBreakpoint[];
}

export const Explore: React.FC<ExploreProps> = ({
  title = '',
  children,
  breakpoints = EXPLORE_BREAKPOINTS,
  ...props
}): React.ReactElement => {
  const [menuIndex, setMenuIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  let count = 1;
  for (let i = 0; i < breakpoints.length; i++) {
    const breakpoint = breakpoints[i];
    if (GreaterThanHook(breakpoint.minWidth)) count = breakpoint.columnCount;
  }

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
          <Bullet $isVisible={false} tabs={[{}, {}]} />
          <TitleText isWrapped={false}>{title}</TitleText>
          <Bullet
            $isVisible={children.length > count}
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
        </Header>
      </HeaderWrapper>
      <div ref={contentRef}>
        <Grid
          paddingTop={20}
          paddingBottom={20}
          paddingLeft={20}
          paddingRight={20}
          breakpoints={breakpoints}
          $center={children.length < count}
          onScroll={onScroll}
        >
          {children}
        </Grid>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.text};
`;

const HeaderWrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 20px;

  border: 1px solid ${({ theme }) => theme.color.textHovered};
  border-left: 0px;
  border-right: 0px;
`;

const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
`;

const Grid = styled(GridRow)<{ $center: boolean }>`
  box-sizing: border-box;
  width: 100%;
  justify-content: ${({ $center }) => ($center ? 'center' : 'space-between')};
`;

const TitleText = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.default.size.h4};
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  color: ${({ theme }) => theme.color.backgroundHighlight};
`;

const Bullet = styled(HorizontalBulletMenu)<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
`;
