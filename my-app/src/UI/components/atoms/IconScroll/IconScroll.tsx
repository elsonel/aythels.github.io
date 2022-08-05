import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface IconScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
}

export const IconScroll: React.FC<IconScrollProps> = ({
  color = 'gray',
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <IconWrapper>
        <Icon $color={color} />
      </IconWrapper>
    </Wrapper>
  );
};

const Animation = keyframes`
  0% {
    opacity: 1;
    top: calc(25% - 3px); 
  }
  100% { 
    opacity: 0; 
    top: calc(75% - 3px);
  }
`;

const Wrapper = styled.div`
  width: 24px;
  height: 40px;
`;

const IconWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Icon = styled.div<{ $color: string }>`
  width: 100%;
  height: 100%;

  box-shadow: inset 0 0 0 1px ${({ $color }) => $color};
  border-radius: 9999px;

  &:before {
    position: absolute;
    content: '';
    width: 6px;
    height: 6px;
    left: 0;
    right: 0;
    margin: auto;

    background: ${({ $color }) => $color};
    border-radius: 9999px;

    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: ${Animation};
  }
`;
