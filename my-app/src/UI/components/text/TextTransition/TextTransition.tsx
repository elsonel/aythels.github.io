import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import { ThemeInterface } from '../../../utility/themes/Theme';
import { FontInterface } from '../../../utility/themes/ThemeFont';
import { Paragraph, IParagraphProps } from '../Paragraph/Paragraph';

export interface TextTransitionProps extends IParagraphProps {
  font?: FontInterface;
  children?: React.ReactNode;
  topOffset?: number;
  isVisible?: boolean;
}

export const TextTransition: React.FC<TextTransitionProps> = ({
  topOffset = 20,
  children,
  isVisible = false,
  ...props
}): React.ReactElement => {
  const isFirstRenderRef = useRef(true);
  const defaultFont = (useTheme() as ThemeInterface).font.default;

  useEffect(() => {
    isFirstRenderRef.current = false;
  }, []);

  return (
    <Text
      $isFirstRender={isFirstRenderRef.current}
      $isVisible={isVisible}
      $topOffset={topOffset}
      font={defaultFont}
      {...props}
    >
      {children}
    </Text>
  );
};

const Animation = (
  $isVisible: boolean,
  $topOffset: number,
  font: FontInterface
) =>
  $isVisible
    ? keyframes`
      0% {
        opacity: 0;
        top: ${$topOffset}px;
        line-height: ${font.lineHeight.transition};
      }
      100% { 
        opacity: 1;
        top: 0px;
        line-height: ${font.lineHeight.default};
      }
    `
    : keyframes`
      0% {
        opacity: 1;
      }
      100% { 
        opacity: 0;
      }
    `;

const Text = styled(Paragraph)<{
  $isFirstRender: boolean;
  $isVisible: boolean;
  $isPreviousVisibleState?: boolean;
  $topOffset: number;
  font: FontInterface;
}>`
  position: relative;
  animation-duration: ${({ theme }) => theme.speed.normal}ms;
  animation-fill-mode: forwards;
  animation-name: ${({ $isVisible, $topOffset, font }) =>
    Animation($isVisible, $topOffset, font)};

  ${({ $isFirstRender, $isVisible }) =>
    $isFirstRender &&
    !$isVisible &&
    `
      animation-play-state: paused;
      opacity: 0 !important;
    `}

  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
`;
