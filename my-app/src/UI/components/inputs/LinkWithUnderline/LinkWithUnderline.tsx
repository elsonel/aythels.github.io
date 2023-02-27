import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontInterface } from '../../../utility/themes/ThemeFont';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { Link } from '../Link/Link';

export interface LinkWithUnderlineProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  href: string;
  color?: string;
  size?: keyof FontInterface['size'];
}

export const LinkWithUnderline: React.FC<LinkWithUnderlineProps> = ({
  children,
  href,
  color = 'black',
  size = 'h4',
  ...props
}): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

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
        <Link href={href}>
          <Text color={color} size={size}>
            {children}
          </Text>
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

const Text = styled(Paragraph)`
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
  overflow-wrap: normal;
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
