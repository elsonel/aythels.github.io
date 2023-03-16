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
  const textRef = useRef<HTMLDivElement>(null);
  const [iconSize, setIconSize] = useState(0);

  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  useResizeObserver(textRef, (entry) => {
    const height = entry.borderBoxSize[0].blockSize;
    setIconSize(height);
  });

  return (
    <div {...props}>
      <Content
        onPointerEnter={() => setIsAnimationPlaying(true)}
        onPointerLeave={() => setIsAnimationPlaying(true)}
      >
        <Link {...linkProps}>
          <Layout>
            <span ref={textRef}>{children}</span>
            <Icon
              color={color}
              as={ArrowRightUp}
              size={iconSize * 0.9}
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
    </div>
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

const Content = styled.div`
  overflow-x: clip;
  position: relative;
  display: inline-block;
  vertical-align: top;

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
