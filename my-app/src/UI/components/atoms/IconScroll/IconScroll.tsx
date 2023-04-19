import React from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import { IfTouchScreen } from '../../../utilities/styles/DetectTouchScreenCSS';
import { GreaterThan } from '../../../utilities/styles/ResponsiveCSS';
import { IIcon, IIconProps } from '../IIcon';

export interface IconScrollProps extends IIconProps {
  color?: string;
}

export const IconScroll: React.FC<IconScrollProps> = ({
  color: colorProp,
  ...props
}): React.ReactElement => {
  const { color } = useTheme();
  return (
    <IIcon {...props}>
      <IconWrapper>
        <Icon $color={colorProp ?? color.background} />
      </IconWrapper>
    </IIcon>
  );
};

const Animation = keyframes`
  0% {
    opacity: 1;
    top: calc(25%); 
  }
  100% { 
    opacity: 0; 
    top: calc(75%);
  }
`;

const IconWrapper = styled.div`
  position: relative;
  width: 60%;
  height: 100%;

  ${IfTouchScreen(`transform: scaleY(-1);`)}
`;

const Icon = styled.div<{ $color: string }>`
  width: 100%;
  height: 100%;

  box-shadow: inset 0 0 0 2px ${({ $color }) => $color};
  border-radius: 9999px;

  &:before {
    position: absolute;
    content: '';
    width: 16%;
    aspect-ratio: 1;
    left: 0;
    right: 0;
    margin: auto;

    background: ${({ $color }) => $color};
    border-radius: 9999px;

    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: ${Animation};
    transform: translateY(-50%);
  }
`;
