import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { IIcon, IIconProps } from '../IIcon';

export interface IconLoadingProps extends IIconProps {
  size?: number;
}

export const IconLoading: React.FC<IconLoadingProps> = ({
  size = 100,
  ...props
}): React.ReactElement => {
  return (
    <IIcon size={size} {...props}>
      <Spinner $size={size} />
    </IIcon>
  );
};

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div<{ $size: number }>`
  ${({ $size, theme }) => css`
    box-sizing: border-box;

    border: ${$size / 6}px solid ${({ theme }) => theme.color.outline};
    border-left: ${$size / 6}px solid ${({ theme }) => theme.color.text};
    border-radius: 9999px;

    animation: ${Rotate} ${theme.speed.slow}ms infinite linear;
  `}
`;
