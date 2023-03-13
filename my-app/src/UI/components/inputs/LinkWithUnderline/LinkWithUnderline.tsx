import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IParagraphProps, Paragraph } from '../../text/Paragraph/Paragraph';
import { Link, LinkProps } from '../Link/Link';
import { ArrowRightUp } from '@styled-icons/remix-line/ArrowRightUp';
import useResizeObserver from '@react-hook/resize-observer';

export interface LinkWithUnderlineProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  linkProps?: LinkProps;
  color?: string;
}

export const LinkWithUnderline: React.FC<LinkWithUnderlineProps> = ({
  children,
  linkProps,
  color = 'black',
  ...props
}): React.ReactElement => {
  const textLayoutRef = useRef<HTMLDivElement>(null);
  const [iconSize, setIconSize] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  useResizeObserver(textLayoutRef, (entry) => {
    const height = entry.borderBoxSize[0].blockSize;
    setIconSize(height);
  });

  return (
    <Wrapper
      onPointerEnter={() => {
        setIsHovered(true);
        setIsAnimationPlaying(true);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
        setIsAnimationPlaying(true);
      }}
      {...props}
    >
      <Content $isHovered={isHovered}>
        <Link {...linkProps}>
          <Layout ref={textLayoutRef}>
            {children}
            <Icon
              color={color}
              as={ArrowRightUp}
              size={iconSize}
              $marginRight={iconSize * -0.2}
            />
          </Layout>
        </Link>
        <LineWrapper
          $isAnimationPlaying={isAnimationPlaying}
          onAnimationEnd={() => setIsAnimationPlaying(false)}
        >
          <Underline $color={color} />
          <Underline $color={'transparent'} />
          <Underline $color={color} />
        </LineWrapper>
      </Content>
    </Wrapper>
  );
};

const Animation = keyframes`
    0% {
      right: 0%;
    }
    100% { 
      right: -200%;
    }
  `;

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const Content = styled.div<{
  $isHovered: boolean;
}>`
  overflow-x: clip;
  position: relative;
  transform: ${({ $isHovered }) =>
    $isHovered ? `translateY(-4px)` : `translateY(0px)`};
  transition: ${({ theme }) => theme.speed.normal}ms;
`;

const LineWrapper = styled.div<{ $isAnimationPlaying: boolean }>`
  position: absolute;
  width: 300%;
  right: 0%;

  animation-duration: ${({ theme }) => theme.speed.slow}ms;
  animation-name: ${Animation};
  ${({ $isAnimationPlaying }) =>
    !$isAnimationPlaying && `animation-name: none;`}
  animation-timing-function: linear;

  display: flex;
`;

const Underline = styled.div<{ $color: string }>`
  flex-grow: 1;
  height: 2px;
  background-color: ${({ $color }) => $color};
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.svg<{ $marginRight: number }>`
  margin-right: ${({ $marginRight }) => $marginRight}px;
`;
