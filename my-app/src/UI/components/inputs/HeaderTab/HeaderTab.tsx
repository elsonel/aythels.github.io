import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Paragraph } from '../../text/Paragraph';

export interface HeaderTabProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: string;
  onClick?: () => void;
}

export const HeaderTab: React.FC<HeaderTabProps> = ({
  children,
  onClick,
  ...props
}): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper
      $isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      <Background $isHovered={isHovered} />
      <Text isWrapped={false} {...props}>
        {children}
      </Text>
      <Foreground $isHovered={isHovered} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isHovered: boolean }>`
  display: inline-flex;
  position: relative;

  cursor: pointer;
`;

const Background = styled.div<{ $isHovered: boolean }>`
  z-index: 0;

  position: absolute;
  top: 0px;
  left: ${({ $isHovered }) => ($isHovered ? `0%` : `100%`)};
  height: 100%;
  width: ${({ $isHovered }) => ($isHovered ? `100%` : `0%`)};

  transition: ${({ theme }) => theme.speed.normal};
  background-color: ${({ theme }) => theme.color.background};
  pointer-events: none;
`;

const Text = styled(Paragraph)`
  z-index: 1;

  padding: 0px 4px;

  user-select: none;
  pointer-events: none;
  font-weight: ${({ theme }) => theme.font.weight.bold2};
  font-size: ${({ theme }) => theme.font.size.small};
  transition: ${({ theme }) => theme.speed.normal};
  color: ${({ theme }) => theme.color.text};
`;

const Foreground = styled(Background)`
  z-index: 2;

  background-color: ${({ theme }) => theme.color.backgroundHighlight};
  mix-blend-mode: difference;
`;

const TextBlend = styled(Paragraph)`
  //color: #fff;
  //background-color: transparent;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  mix-blend-mode: difference;
`;
