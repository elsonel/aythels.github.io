import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { TextButton } from '../../text/TextButton';

export enum State {
  NEUTRAL,
  SEMIACTIVE,
  ACTIVE,
}

export interface DiamondLabelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  label?: string;
  state: State;
  onClick?: () => void;
}

export const DiamondLabel: React.FC<DiamondLabelProps> = ({
  size = 8,
  label,
  state = State.NEUTRAL,
  onClick: onClick,
  ...props
}): React.ReactElement => {
  const [isActive, setIsActive] = useState(state === State.ACTIVE);

  return (
    <Wrapper
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={onClick}
      {...props}
    >
      <DiamondWrapper $size={size * Math.sqrt(2)}>
        <Diamond $state={isActive ? State.ACTIVE : state} $size={size} />
      </DiamondWrapper>
      <Text $state={isActive ? State.ACTIVE : state}>{label}</Text>
    </Wrapper>
  );
};

const DiamondStateNeutral = css`
  box-shadow: inset 0 0 0 1.4px ${({ theme }) => theme.color.textNeutral};
  background-color: ${({ theme }) => theme.color.background};
`;

const DiamondStateSemiActive = css`
  box-shadow: inset 0 0 0 1.4px ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
`;

const DiamondStateActive = css`
  box-shadow: inset 0 0 0 1.4px ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.text};
`;

const TextStateNeutral = css`
  color: ${({ theme }) => theme.color.textNeutral};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

const TextStateSemiActive = css`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

const TextStateActive = css`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
`;

const Wrapper = styled.div`
  vertical-align: top;
  display: inline-block;
  position: relative;

  cursor: pointer;
`;

const Text = styled(TextButton)<{ $state: State }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 4px;

  user-select: none;

  font-size: ${({ theme }) => theme.font.size.tiny};
  ${({ $state }) => {
    switch ($state) {
      case State.NEUTRAL:
        return TextStateNeutral;
      case State.SEMIACTIVE:
        return TextStateSemiActive;
      case State.ACTIVE:
        return TextStateActive;
    }
  }};
`;

const DiamondWrapper = styled.div<{ $size: number }>`
  overflow: hidden;

  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Diamond = styled.div<{ $size: number; $state: State }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  transform: rotate(45deg);
  transition: ${({ theme }) => `${theme.speed.normal}`};
  ${({ $state }) => {
    switch ($state) {
      case State.NEUTRAL:
        return DiamondStateNeutral;
      case State.SEMIACTIVE:
        return DiamondStateSemiActive;
      case State.ACTIVE:
        return DiamondStateActive;
    }
  }};
`;
